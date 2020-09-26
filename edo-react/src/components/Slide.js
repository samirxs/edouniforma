import React from "react";

function Slide({ slide }) {
	return (
		<div className="relative">
			<div className=" h-40 sm:h-64">
				<img
					className="object-cover object-center h-full w-full"
					src={slide["img"]["path"]}
					alt={slide.title}
				/>
        <div className="text-center inline-block rounded-lg absolute left-0 top-0 bg-black bg-opacity-50  mx-4 my-4 px-3 py-4 sm:max-w-lg lg:max-w-xl " >
          <div className=" text-gray-100 text-lg uppercase font-bold sm:text-4xl ">
            {slide.title}
          </div>
          <div className="text-sm text-gray-100 sm:text-xl lg:text-xl ">
            {slide.description}
          </div>
        </div>
			</div>
		</div>
	);
}

export default Slide;
