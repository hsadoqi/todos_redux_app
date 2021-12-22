export const fetchLists = () => {
    return dispatch => {
        fetch(`http://localhost:3000/lists`)
        .then(res => res.json())
        .then(lists => dispatch(addAllLists(lists)))
    }
    
}

export const addListToBackend = (name) => {
    return dispatch => {
        fetch(`http://localhost:3000/lists`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name
            })
        }).then(res => res.json())
        .then(list => dispatch(addList(list)))
    }
}

export const addItemToList = (id, name) => {
    return dispatch => {
        fetch(`http://localhost:3000/lists/${id}/items`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                'Accept': 'application/json'
            }, 
            body: JSON.stringify({
                name
            })
        }).then(res => res.json())
        .then(item => dispatch(addItem(item)))
    }
}

const addItem = (item) => ({type: 'ADD_ITEM', payload: item})

const addAllLists = (lists) => ({type: 'ALL_LISTS', payload: lists})
const addList = (list) => ({ type: 'ADD_LIST', payload: list })