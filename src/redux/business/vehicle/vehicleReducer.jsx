import { 
  REGISTER_VEHICLE_SUCCESS, 
  REGISTER_VEHICLE_FAIL,
  UPDATE_VEHICLE,
  DELETE_VEHICLE,
  SET_MESSAGE } from "./vehicleTypes";

const user = JSON.parse(localStorage.getItem("user"));

console.log(user)

const initialState = { isLoggedIn: false, user: null };

export default function parcel(state = initialState,action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_VEHICLE_SUCCESS:
          return {
            ...state,
            isLoggedIn: true,
            user: payload.user,
          };
        case REGISTER_VEHICLE_FAIL:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
          case UPDATE_VEHICLE:
          return fleets.map((fleet) => {
            if (fleet.id === payload.id) {
              return {
                ...fleet,
                ...payload,
              };
            } else {
              return fleet;
            }
          });

        case DELETE_VEHICLE:
          return fleets.filter(({ id }) => id !== payload.id);

        default:
        return state;
    }
}