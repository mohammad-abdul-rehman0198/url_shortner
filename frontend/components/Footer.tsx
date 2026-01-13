const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4 px-4 sm:px-6 md:px-8 fixed bottom-0 w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center text-center gap-2">
          <span>© {new Date().getFullYear()} GetShorty. All rights reserved.</span>
          <span className="italic text-gray-400">Developed by Mohammad Abdul Rehman</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;