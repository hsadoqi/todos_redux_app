import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItemToList } from './store/actions/listActions'

function ItemForm({ id } ) {
    const [item, setItem] = useState("")
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addItemToList(id, item))
        setItem("")
    }

  return (
    <form onSubmit={handleSubmit} >
        <input type="text" name="item" value={item} onChange={handleChange}/>
        <input type="submit" />
    </form>
  );
}

export default ItemForm

