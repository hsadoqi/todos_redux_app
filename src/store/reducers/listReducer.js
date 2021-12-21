const initialState = {
    lists: []
  }

export const reducer = (state=initialState, action) => {
    switch(action.type){
      case 'ADD_LIST':
        return {
          ...state,
          lists: [...state.lists, action.payload]
        }
      case 'ALL_LISTS':
        return {
          ...state, 
          lists: action.payload
        }
      default: 
        return state
    }
}