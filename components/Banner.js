import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className=" absolute top-1/2 w-full text-center ">
        <p className="text-sm sm:text-lg">Not sure where to go</p>
        <button className="text-purple-500 px-10 py-4 bg-white border-2 rounded-full font-bold my-2 shadow-md hover:shadow-2xl active:scale-90 duration-300">
          I am flexable
        </button>
      </div>
    </div>
  );
}

export default Banner;
