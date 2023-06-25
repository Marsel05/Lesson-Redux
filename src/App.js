
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const {cash} = useSelector(state => state)
  const dispatch = useDispatch()
  const addMoney = (sun) => {
    dispatch({type: "ADD_MONEY", payload: sun})
  }
  const takeMoney = (sun) => {
    dispatch({type: "TAKE_MONEY", payload: sun})
  }
  const del = () => {
    dispatch({type: "DELETE", payload: cash})
  }
  return (
    <div className="App">
      <button onClick={()=> takeMoney(+prompt())}>-</button>
      <h3>{cash}</h3>
      <button onClick={()=> addMoney(+prompt())}>+</button>
        <button onClick={()=> del() }>reset</button>
    </div>
  );
}

export default App;
