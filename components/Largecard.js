import Image from "next/dist/client/image";

function Largecard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-32 ml-9 left-24">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-2xl">{description}</p>
        <button
          className="text-lg border bg-gray-100 hover:bg-gray-50 rounded-lg p-2 hover:scale-105 transform transition duration-200 mt-4
        "
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default Largecard;
