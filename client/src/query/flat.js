import { gql } from "@apollo/client";


export const GET_ALL_FLATS = gql`
    query {
        getAllFlats {
            id, flatName, waterCounterInfo, electDay, electNight, gasCounterInfo
        }
    }
`;