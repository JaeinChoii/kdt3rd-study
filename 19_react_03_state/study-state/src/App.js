import './App.css';
import Counter from './Counter'
import SayFunction from './SayFunction'
import CounterFunction from './CounterFunction'

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value="1 더하기"/>
    </div>
  );
}

export default App;
