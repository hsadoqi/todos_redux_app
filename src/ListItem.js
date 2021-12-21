import {Link} from 'react-router-dom'

function ListItem( { list }) {
    return (
      <div >
        <Link to={`/lists/${list.id}`}>{list.name}</Link>
      </div>
    );
  }
  
  export default ListItem;
  