import { gql } from "@apollo/client";


export const CREATE_FLAT = gql`
    mutation createFlat($input: FlatInput) {
        createFlat(input: $input) {
            id, flatName, waterCounterInfo, electDay, electNight, gasCounterInfo
        }
    }
`;