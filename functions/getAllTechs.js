import { gql } from 'graphql-request'
import { graphcms } from '../client';

export const GetAllTechs = async () => {
   const getAllTeches = gql`
    {
        usingTeches {
            id
            image {
              url
            }
            title
          }
    }
   `;

   const { usingTeches} = await graphcms.request(getAllTeches);
   return usingTeches;
}
