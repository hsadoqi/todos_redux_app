import NewList from './NewList'
import ListProfile from './ListProfile'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import { fetchLists } from './store/actions/listActions'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchLists())
  })


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            index
            element={<NewList/>}
            />
          <Route 
            path="/lists/:id" 
            index
            element={<ListProfile/>}
            />
        </Routes>
      </div>
    </Router>
  );
}



export default App;
