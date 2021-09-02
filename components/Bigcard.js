import Image from "next/dist/client/image";

const Bigcard = ({ img, title, description }) => {
  return (
    <div className="cursor-pointer mb-16 space-x-1 hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-96 w-96">
        <Image src={img} layout="fill" className="rounded-md" />
        <p
          className="absolute mt-2 ml-2 bg-white rounded-md p-1
         text-xs font-semibold "
        >
          FEATURED
        </p>
      </div>
      <h2 className="text-xl">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Bigcard;
