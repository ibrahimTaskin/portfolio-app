import React from "react";
import ReactHtmlParser from 'react-html-parser';

const TrainingComponent = ({
  training: { title, trainer, isActive, description },
}) => {
 
  return (
    isActive && (
      <div className="rounded-xl w-full p-1 shadow-lg">
        <div className="w-full h-full p-12 bg-white rounded-lg dark:bg-gray-900">
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-400 rounded">
              Eğitmen : {trainer}
            </span>
            {ReactHtmlParser(description.html)}
          </div>
        </div>
      </div>
    )
  );
};

export default TrainingComponent;
