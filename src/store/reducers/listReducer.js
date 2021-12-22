
export const lists = (state=[], action) => {
    switch(action.type){
      case 'ADD_LIST':
        return [...state, action.payload]
      case 'ALL_LISTS':
        return action.payload
      case 'ADD_ITEM':
        const newLists = state.map(list => {
          if(list.id === action.payload.list.id){
            return {
              ...list, 
              items: [...list.items, action.payload]
            }
          } else {
            return list
          }
        })

        return newLists
      default: 
        return state
    }
}