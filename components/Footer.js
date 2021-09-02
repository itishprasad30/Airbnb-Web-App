const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100  gap-y-10 px-32 py-14">
      <div className="text-sm text-gray-800 space-y-4 cursor-pointer">
        <p className=" font-bold capitalize">About</p>
        <p className="hover:underline">How airbnb works?</p>
        <p className="hover:underline">Newsroom</p>
        <p className="hover:underline">Airbnb2021</p>
        <p className="hover:underline">Investors</p>
        <p className="hover:underline">Airbnb Plus</p>
        <p className="hover:underline">Airbnb Luxe</p>
      </div>
      <div className="text-sm text-gray-800 space-y-4 cursor-pointer">
        <p className=" font-bold capitalize">Community</p>
        <p className="hover:underline">Diversity & Belonging</p>
        <p className="hover:underline">Accessibility</p>
        <p className="hover:underline">Airbnb Associates </p>
        <p className="hover:underline">Frontline Stays </p>
        <p className="hover:underline">Airbnb.org </p>
      </div>
      <div className="text-sm text-gray-800 space-y-4 cursor-pointer">
        <p className=" font-bold capitalize">Host</p>
        <p className="hover:underline">Host your home</p>
        <p className="hover:underline"> Host an Online Experience</p>
        <p className="hover:underline">Host an Experience </p>
        <p className="hover:underline">Responsible hosting</p>
        <p className="hover:underline"> Resource Centre </p>
        <p className="hover:underline">Community Centre</p>
      </div>
      <div className="text-sm text-gray-800 space-y-4 cursor-pointer">
        <p className=" font-bold capitalize">SUPPORT</p>
        <p className="hover:underline">Our COVID-19 Response</p>
        <p className="hover:underline"> Help Centre</p>
        <p className="hover:underline"> Cancellation options </p>
        <p className="hover:underline">Neighbourhood Support</p>
        <p className="hover:underline"> Trust & Safety</p>
      </div>
    </div>
  );
};

export default Footer;
