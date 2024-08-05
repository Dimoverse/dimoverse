export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-left justify-between h-20">
        <br />
          <nav className="md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              
              <li>
                <a href="#hero" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Home
                </a>
              </li>
              <li>
                <a href="#working" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Solution
                </a>
              </li>
              {/* Add your links here
              <li>
                <a href="#testimonials" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#features" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Features
                </a>
              </li>
               
              <li>
                <a href="#videos" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Research
                </a>
              </li>
              */}
              <li>
                <a href="#team" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Team
                </a>
              </li>
              {/* Add your links here
              <li>
                <a href="#partner" className="font-medium text-white-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Partner
                </a>
              </li>
               */}
              <li>
                <a href="#newsletter" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-2 py-1 my-1 rounded-sm text-white bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>          
        </div>
      </div>
    </header>
  );
}
