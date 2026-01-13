const Footer = () => {
    return (
      <footer className="fixed bottom-0 z-50 w-full border-t border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center text-center gap-2 py-4 px-4 sm:px-6 md:px-8">
          <span className="text-gray-700">© {new Date().getFullYear()} GetShorty. All rights reserved.</span>
          <span className="italic text-gray-500">Developed by Mohammad Abdul Rehman</span>
        </div>
      </footer>
    );
  };
  
  export default Footer;