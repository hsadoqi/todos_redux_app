import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import ItemForm from './ItemForm'

function ListProfile( ) {
  const { id } = useParams()
  const navigate = useNavigate()
  const list = useSelector(state => state.lists[parseInt(id) - 1])

  if(list){
    return (
      <div >
        {list.name}
        {list.items.map(item => <li>{item.name} </li>)}
        <ItemForm id={id}/>
      </div>
    );
    } else {
      return (
        <div>List not found</div>
      )
    }
  }
  
  export default ListProfile;
  