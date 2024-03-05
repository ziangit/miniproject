// query

import gql from 'graphql-tag';

export const GET_STATES_QUERY = gql`
    query States($name: String!) {
        states(name: $name) {
            name
            lat
            lng
        }
    }  
`;
