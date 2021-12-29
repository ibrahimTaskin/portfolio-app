import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
  const getAllProject = gql`
    {
      projects {
        id
        description
        title
        tags
        url
        image {
          url
        }
      }
    }
  `;

  const { projects } = await graphcms.request(getAllProject);

  return projects;
};
