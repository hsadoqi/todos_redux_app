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



const addAllLists = (lists) => ({type: 'ALL_LISTS', payload: lists})
const addList = (list) => ({ type: 'ADD_LIST', payload: list })