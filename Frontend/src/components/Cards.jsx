import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="w-full max-w-sm mx-auto mt-5 hover:scale-110 duration-300">
      <div className="card w-full shadow-sm group mt-4 sm:mt-6 md:mt-8 relative overflow-hidden rounded-lg">
        <figure className="overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </figure>

        {/* Dark overlay - sirf hover pe */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

        {/* Text - sirf hover pe */}
        <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pr-2">
          <h2 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2">
            {item.name}
          </h2>
          <p className="text-xs sm:text-sm text-white line-clamp-2 sm:line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Bottom section - Rating & Button */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 right-2 sm:right-3 md:right-4 z-10 hover:scale-110 duration-300">
          
          {/* Mobile: Stack vertically */}
          <div className="flex flex-col sm:hidden gap-2">
            {/* Rating */}
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-sm ${
                    index < Math.floor(item.rating) 
                      ? 'text-green-500' 
                      : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-white text-xs ml-1">({item.rating})</span>
            </div>
            {/* Button */}
            <button className="btn btn-primary btn-sm w-full text-xs">
              Buy Now
            </button>
          </div>

          {/* Tablet & Desktop: Side by side */}
          <div className="hidden sm:flex justify-between items-center hover:scale-110 duration-300">
            {/* Rating */}
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-base md:text-lg ${
                    index < Math.floor(item.rating) 
                      ? 'text-green-500' 
                      : 'text-gray-400'
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-white text-xs sm:text-sm ml-1 md:ml-2">
                ({item.rating})
              </span>
            </div>
            
            {/* Button */}
            <button className="btn btn-primary btn-sm sm:btn-md text-xs sm:text-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;