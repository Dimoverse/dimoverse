export default function Working() {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">How it works?</h2>
            <p className="text-xl text-gray-400">Shoppers can..</p>
            </div>
  
            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>
  
              {/* 1st item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                  <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                </svg>
                <h4 className="h4 mb-2">Room Scan</h4>
                <p className="text-lg text-gray-400 text-center">Effortlessly scan their room using their smartphone, transforming real-world environments into interactive digital experiences.</p>
              </div>
  
              {/* 2nd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <circle className="fill-current text-purple-600" cx="32" cy="32" r="32" />
                  <path className="stroke-current text-purple-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                  <path className="stroke-current text-purple-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
                </svg>
                <h4 className="h4 mb-2">Visualization</h4>
                <p className="text-lg text-gray-400 text-center">Visualize a digital twin of their room, created through advanced technology, providing an immersive and detailed representation.</p>
              </div>
  
              {/* 3rd item */}
              <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
                <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <g transform="translate(21 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                    <ellipse className="stroke-current text-purple-300" cx="11" cy="11" rx="5.5" ry="11" />
                    <path className="stroke-current text-purple-100" d="M11 0v22M0 11h22" />
                    <circle className="stroke-current text-purple-100" cx="11" cy="11" r="11" />
                  </g>
                </svg>
                <h4 className="h4 mb-2">Room Editing</h4>
                <p className="text-lg text-gray-400 text-center">Easily edit their room by removing existing furniture pieces or adding new ones from a comprehensive catalogue, all within a seamless and intuitive interface.</p>
              </div>

            </div>
  
          </div>
        </div>
      </section>
    )
  }
  