import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <div>
      <Counter onIncrement="5" onDecrement="3"/>
      <Counter/>
      <Counter onIncrement="10" onDecrement="5"/>
      </div>
    </div>
  );
}

export default App;
