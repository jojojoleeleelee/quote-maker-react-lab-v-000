export default (state = [], action) => {
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
    case "REMOVE_QUOTE":
      return state.filter(quote => quote.id !== action.quoteId)
    case "UPVOTE_QUOTE":
      let newState = state.map( quote => {
        if (quote.id === action.quote.id) {
          return { ...quote, votes: ++quote.votes}
        } else {
          return quote
        }
      })
      return newState;
    default:
    return state;
  }
}
