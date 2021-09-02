import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import Dropdown from "./Dropdown";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestUser, setGuestUser] = useState(1);

  const resetInput = () => {
    setSearchInput("");
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.EndDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10">
      {/* <h2>I am Header</h2> */}

      {/* Left */}

      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex  items-center py-2 md:border-2 rounded-full  shadow-inner active:shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your search"
          className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 "
        />
        <SearchIcon className="hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full cursor-pointer md:mx-2  " />
      </div>
      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-600">
        <p className="hidden md:inline cursor-pointer hover:text-gray-800 hover:bg-gray-100  rounded-full p-3 items-center">
          Become a Host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer hover:bg-gray-100 text-gray-700 rounded-full     " />
        <div className="flex border-2 rounded-full  cursor-pointer items-center p-2 space-x-2 text-gray-600 hover:shadow-lg transform transition duration-200 ">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
          <Dropdown />
        </div>
      </div>

      {searchInput && (
        <div className="flex  flex-col col-span-3 mx-auto mt-5 ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center m-4 mb-2 border-b ">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guest
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={guestUser}
              onChange={(e) => setGuestUser(e.target.value)}
              min={1}
              className="w-12 pl-2 outline-none text-red-400 text-lg"
            />
          </div>
          <div className="flex  items-center justify-center space-x-5 h-10 ">
            <button
              className="flex-grow text-lg font-thin  hover:bg-gray-200 rounded-full p-2 items-center hover:shadow-md "
              onClick={resetInput}
            >
              Cancel
            </button>
            <button className=" flex-grow bg-red-300 p-2 rounded-full hover:bg-red-400 items-center hover:shadow-md">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
