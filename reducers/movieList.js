export const movieReducer = (state = { movieList: [] }, action) => {
  switch (action.type) {
    case 'QUERY_MOVIE':
      return { ...state, movieList: action.list }
    case 'TICK':
      return { ...state, lastUpdate: action.ts, light: !!action.light, }
    default:
      return state
  }
};