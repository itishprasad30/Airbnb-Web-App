import Image from "next/image";

const Smallcard = ({ img, distance, location }) => {
  return (
    <div className="flex items-center m-2 mt-5 hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out space-x-3 rounded-lg ">
      {/* left */}
      <div className="relative h-16 w-16 rounded-lg">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>
      {/* Right */}
      <div className="">
        <h2>{location}</h2>
        <h2 className="text-gray-500">{distance}</h2>
      </div>
    </div>
  );
};

export default Smallcard;
