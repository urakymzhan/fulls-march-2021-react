import axios from "axios";
// action type
export const GET_PETS_FROM_SERVER = "GET_PETS_FROM_SERVER";

// action creator
// export const getPets = async () => {
//   // fetch pets here
//   const { data } = await axios.get("/pets");
//   console.log(data);
//   return {
//     type: GET_PETS_FROM_SERVER,
//     payload: data,
//   };
// };
const gotPets = (pets) => {
  return {
    type: GET_PETS_FROM_SERVER,
    payload: pets,
  }
}
export const getPets = () => {
  // fetch pets here
  return async (dispatch, getState) => {
    const { data } = await axios.get("/pets");
    dispatch(gotPets(data))
  }
};