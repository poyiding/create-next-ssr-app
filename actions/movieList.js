
export const queryMovie = data => dispatch => {
  return dispatch({ type: 'QUERY_MOVIE', list: data && data.subjects })
  // return dispatch({ type: 'QUERY_MOVIE', list: [] })
}
export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
}
