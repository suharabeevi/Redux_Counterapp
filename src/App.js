
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import {add,sub} from './redux/Actions'

function App() {
  const  dispatch =useDispatch();
  return (
    <div className="App">
      global value: {useSelector(state=>state)}
      <br/>
      <button onClick={()=>dispatch(add())}>+</button>
      <br/>

      <button  onClick={()=>dispatch(sub())}>-</button>


    </div>
  );
}

export default App;
