import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

function ListProfile( ) {
  const { id } = useParams()
  const navigate = useNavigate()
  const list = useSelector(state => state.lists.find(list => list.id === parseInt(id)))

  if(list){
    return (
      <div >
        {list.name}
      </div>
    );
    } else {
      return (
        <div>List not found</div>
      )
    }
  }
  
  export default ListProfile;
  