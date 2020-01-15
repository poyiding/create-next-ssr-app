export const userReducer = (state = { name: 'sam' }, action) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.name }
    default:
      return state
  }
};