// {
//     type: 'ADD_MOVIES'
// }
// {
//     type: 'DECREASE_COUNT'
// }    


// action types 
export const ADD_MOVIES = 'ADD_MOVIES';

// action creaters
export function ADD_MOVIES(movies){
    return {
        type : ADD_MOVIES,
        movies 
    }
}