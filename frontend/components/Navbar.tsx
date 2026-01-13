import Logo from "@/assests/icons/Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="flex justify-center items-center px-4 py-6 w-full">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-[#2563EB] to-[#1E40AF] shadow-md">
            <Logo />
          </div>
          <h1 className="text-4xl font-bold bg-linear-to-r from-[#2563EB] via-[#1E40AF] to-[#2563EB] bg-clip-text text-transparent tracking-tight">
            GetShorty
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;