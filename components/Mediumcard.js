import Image from "next/dist/client/image";
function Mediumcard({ img, title }) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out">
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-md" />
      </div>
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}

export default Mediumcard;
