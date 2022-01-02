import React from "react";

const UsingTech = ({ tech: { title, image } }) => {
  return (
    <div className="rounded-xl w-full p-1 shadow-lg">
      <div className="w-full h-full p-12 bg-white rounded-lg dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={image.url}
            alt={title}
            className="object-center w-full rounded-lg max-h-24 "
          />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UsingTech;
