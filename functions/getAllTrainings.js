import { gql } from "graphql-request"
import { graphcms } from "../client";


export const getAllTrainings = async () => {
    const getAllTrainings= gql`
    {
        trainings {
            id
            isActive
            title
            trainer
            description {
              html,
              text
            }
          }
    }`;

    const { trainings } = await graphcms.request(getAllTrainings);
    return trainings; 
}
