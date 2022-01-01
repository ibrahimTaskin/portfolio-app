import React from "react";

const ProjectCard = ({ project: { title, description, tags, url, image } }) => {
  return (
      <a
        href={url}
        target={"_blank"}
        rel="noopener noreferrer"
        className="rounded-xl w-full  p-1 hover:cursor-pointer shadow-lg"
      >
        <div className="w-full h-full p-4 bg-white rounded-lg dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={image.url}
              alt={title}
              className="object-cover w-full rounded-lg max-h-64 "
            />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <p className="text-md">{description}</p>

            <div className="flex items-center space-x-4">
              {tags.map((tag) => (
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 bg-blue-400 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
  );
};

export default ProjectCard;
