import Head from "next/head";
import Banner from "../components/Banner";
import Bigcard from "../components/Bigcard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Largecard from "../components/Largecard";
import Mediumcard from "../components/Mediumcard";
import Smallcard from "../components/Smallcard";
import Image from "next/dist/client/image";

export default function Home({ data, cardsData, bigcardData }) {
  return (
    <div className="">
      <Head>
        <title>Itish Prasad - Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Hello world</h1> */}
      {/* Header section */}
      <Header />

      {/* Banner section */}
      <Banner />
      {/* rest of ui */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore NearBy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
            {data?.map((item) => (
              <Smallcard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className=" text-4xl py-5 font-semibold">Live Anywhere</h2>

          <div
            className="flex space-x-4
           overflow-scroll scrollbar-hide p-3 -m-3 "
          >
            {cardsData?.map(({ img, title }) => (
              <Mediumcard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <Largecard
          img="https://links.papareact.com/4cj"
          title="The Great Outdoor"
          description="Wishlists created By Airbnb"
          buttonText="Get Inspired"
        />
        <section>
          <h2 className=" text-4xl py-5 font-semibold">
            Discover things to do
          </h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide">
            {bigcardData?.map(({ img, title, description }) => (
              <Bigcard
                key={img}
                img={img}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exporeData = await fetch("https://links.papareact.com/pyp");

  const results = await exporeData.json();

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  const bigcardData = await fetch("https://jsonkeeper.com/b/I70C").then((res) =>
    res.json()
  );

  return {
    props: {
      data: results,
      cardsData,
      bigcardData,
    },
  };
}
