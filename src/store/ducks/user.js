import Immutable from 'seamless-immutable';
/**
 * Types
 */
export const Types = {
  SET_USER: 'set_user',
};

/**
 * Reducer
 */
const INITIAL_STATE = Immutable({
  user: null,
});

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

/**
 * Actions
 */
export const Creators = {
  setUser: (user) => {
    console.log(`CREATOR ${Types.SET_USER}`, user);
    return ({
      type: Types.SET_USER,
      payload: user
    })
  },
};