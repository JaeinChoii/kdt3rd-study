import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <ClassComponent name="KDT3rd" students={100} />

      <hr />
      <FuncComponent name="KDT3기" time={4}/>
      {/* isRequired 처리된 prop에 값 안주면
      동작은 되지만, console에 에러메시지가 뜸! */}
      <hr />

      <Button link="https://www.google.com">구글</Button>
      <Button link="https://www.daum.net">다음</Button>
      <Button />
    </div>
  );
}

export default App;
