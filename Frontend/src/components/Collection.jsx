import React from "react";
import list from "../assets/list.json";
import Cards from "../components/Cards";

const Collection = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-bold md:text-5xl">
            We're Delighted to have you here
            {/* <span className="inline-block hover:scale-110 hover:rotate-12 cursor-pointer transition-transform duration-300 ease-in-out">
              🤗
            </span> */}
            <span className="inline-block cursor-pointer transition-all duration-300 hover:scale-110 group">
              <span className="group-hover:hidden">🙂</span>
              <span className="hidden group-hover:inline">🤗</span>
            </span>
          </h1>
          <p className="mt-12">
            Fashion is more than just clothing - it's your personal expression,
            your confidence booster, and your story told without words. At our
            store, we believe everyone deserves to look and feel amazing,
            regardless of their style preference or budget. From timeless
            classics that never go out of style to the hottest trends straight
            from the runway, we bring you an extensive collection that caters to
            every mood, occasion, and personality.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {list.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
