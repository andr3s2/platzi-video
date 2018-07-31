function date (state, action) {
  switch (action.type) {

    case 'SEARCH_VIDEO':

      //action.payload.query
      let results = []
      const list = state.data.categories[2].playlist

      if (action.payload.query) {
        results = list.filter((item) => {
          return item.author.includes(action.payload.query)
        })
      }


      console.log(results)

      return {
        ...state,
        search: results
      }
      break

    default:
      return state
  }
}

export default date