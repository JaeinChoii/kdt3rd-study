import './App.css';

function App() {
  const name = 'Hugsy'
  const animal = 'dog'

  const a = 8
  const b = 3
  const styles = {
    span: {
      textDecorationLine: 'underline',
    }
  }

  const title = '공부하자!'

  return (
    <div>
      <div>이것은 디브입니다.
      <h3>이것은 div 태그 안에 있는 h3 태그 입니다.</h3>
      <h2>제 반려동물의 이름은 <span style={styles.span}>{name}</span>입니다. <br /> <span style={styles.span}>{name}</span>는 <span style={styles.span}>{animal}</span>입니다.</h2>

      <p>{3 + 5===8 ? '정답입니다!' : '오답입니다!'}</p>
      <p>{a > b && 'a가 b보다 큽니다.'}</p>
    </div>
      
      <div className="test">{title}</div>
      <div className="input">
      <label htmlFor="name">아이디 : </label><input type="text" className="input"/><br />
      <label htmlFor="password">비밀번호 : </label><input type="text" className="input" /></div>

      <div className="container">
      <div className="red"></div>
      <div className="orange"></div>
      <div className="yellow"></div>
      <div className="green"></div>
      <div className="blue"></div>
      <div className="navy"></div>
      <div className="purple"></div>
      </div>


      {/* <div className="div1 position-absolute">
        <div className="eye1 position-absolute"></div>
        <div className="eye2 position-absolute"></div>
      </div>
      <div className="div2 position-absolute"></div>
      <div className="div3 position-absolute"></div>
      <div className="div4 position-absolute"></div>
      <div className="div5 position-absolute"></div>


      <img className="pa" alt="grass" src="/img/grass.png" /> */}
      </div>


  );
}

export default App;
