import React from 'react';
import { ChevronsRight, Heart } from 'lucide-react';

function Index() {
  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto px-4">
      <div className="relative h-[400px] sm:h-[480px] md:h-[580px] w-full overflow-hidden group bg-white dark:bg-black border dark:border-0 rounded-lg text-black dark:text-white">
        {/* Image Container */}
        <div className="w-full h-full">
          <img
            src="harsh.jpg"
            alt="Profile"
            className="h-full w-full grayscale scale-105 group-hover:scale-100 object-cover transition-all duration-300 rounded-md"
          />
        </div>

        {/* Hover Overlay */}
        <article className="p-4 sm:p-6 md:p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#D7277C] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="translate-y-10 group-hover:translate-y-0 transition-all duration-300 space-y-2">
            <h1 className="text-xl sm:text-2xl font-semibold text-white">Who We are</h1>
            <p className="text-sm sm:text-base text-white">
              Hi, I'm Harsh Ninave, a web developer driven by a passion for crafting clean, modern
              designs and creating meaningful user experiences. I specialize in building
              high-quality solutions that combine simplicity, functionality, and attention to
              detail.
            </p>
            <button className="p-2 bg-black flex items-center gap-2 rounded-md text-white text-sm sm:text-base">
              <a href="https://harshninave.netlify.app" target='_blank'>Learn More</a>{' '}
              <ChevronsRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </article>

        {/* Bottom Info */}
        <article className="text-black p-3 sm:p-4 w-full h-[20%] flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-md bg-gradient-to-t from-[#EDB506] opacity-100 group-hover:opacity-0 group-hover:-bottom-4 transition-all duration-300">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Harsh Ninave</h1>
          <p className="text-sm sm:text-base">CEO &amp; Design Engineer</p>
        </article>
      </div>
    </div>
  );
}

export default Index;
