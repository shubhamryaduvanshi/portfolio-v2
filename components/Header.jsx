const Header = () => {
  return (
    <div className="shadow-lg w-full sticky z-10 top-0 bg-white">
      <div className="flex justify-between items-center py-6 px-8  max-w-7xl mx-auto">
        <p className="text-2xl font-semibold font-greatVibes italic">
          Shubham
        </p>
        <div className="hidden md:flex uppercase">
          <p className="mx-3">Home</p>
          <p className="mx-3">About</p>
          <p className="mx-3">Work</p>
          <p className="mx-3">Skills</p>
          <p className="mx-3">Projects</p>
          <p className="mx-3">Contact</p>
        </div>
      </div>
      {/* desktop view */}
    </div>
  );
};

export default Header;
