import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/dist/client/image";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="grid sm:grid-cols-[300px,1fr]   cursor-pointer sm:border-t grid-cols-1 gap-x-4 hover:opacity-80 hover:shadow-lg px-2 py-7  rounded-md transition transform duration-200 ease-out ">
      {/* left - image */}
      <div className="relative w-full mb-2 md:mb-0 sm:h-44 h-52">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full rounded-xl"
          placeholder="blur"
          blurDataURL={img}
          quality={40}
        />
      </div>
      {/* right - detail */}
      <div className="flex flex-col px-1 sm:px-0">
        {/* detail top */}
        <div className="flex-grow">
          <div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">{location}</span>
              <HeartIcon className="h-5" />
            </div>
          </div>
          <h3 className="text-lg">{title}</h3>
          <hr className="hidden w-10 mt-3 mb-1 border-b border-gray-200 border-opacity-60 sm:block" />
          <span className="text-sm text-gray-600">{description}</span>
        </div>

        {/* detail bottom */}
        <div className="flex justify-between order-first sm:order-none">
          <div className="flex items-center">
            <StarIcon className="h-5 text-primary" />
            <span className="mx-1 font-semibold">{star}</span>
            <span className="text-sm text-gray-500">(30 reviews)</span>
          </div>
          <div>
            <span className="mr-1 text-lg font-semibold">
              {price.split("/")[0]}
            </span>
            <span className="font-light md:text-lg text-md">/ night</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
