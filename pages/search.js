import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";

function search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfguest } = router.query;

  const formartedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formartedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formartedStartDate} - ${formartedEndDate}`;

  console.log(router.query);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfguest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300 + Stays -
            <b className="text-lg font-semibold">
              {range} for {noOfguest}
            </b>
            number of guests
          </p>
          <h1 className="font-semibold  text-2xl mt-2 mb-5">
            Stays In {location}
          </h1>
          <div className="hidden lg:inline-flex whitespace-nowrap space-x-3 mb-3">
            <p className="button">Cancelation Fleixbility</p>
            <p className="button">Types of Places</p>
            <p className="button">Price</p>
            <p className="button">Rooms & Bed</p>
            <p className="button">More filter</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map((items) => (
              <InfoCard
                key={items.key}
                img={items.img}
                location={items.location}
                title={items.title}
                description={items.description}
                price={items.price}
                total={items.total}
                star={items.star}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
