import ListItem from './ListItem'
import { useSelector } from 'react-redux'

function Lists() {
    const lists = useSelector(state => state.lists )
    
    return (
      <div >
          {lists.map(list => <ListItem key={list.id} list={list}/>)}
      </div>
    );
  }


  export default Lists
  