import './App.css';

function App() {
  const name = 'Jane';
  const flag = true;
  let txt = '';

  if (flag) {
    txt = 'True 입니다!'
  } else {
    txt = 'False 입니다!'
  };

  const styles = {
    h2: {
      backgroundColor: 'blue',
      fontSize: '40px',
      color: 'yellow',
    },
    p: {
      backgroundColor: 'red',
      fontSize: '20px',
      color: 'white',
    },
  };

  return (
  // JSX 문법
  // 1. 컴포넌트에 여러 요소가 있으면 반드시 부모 요소 하나로 감싸야함!
  // react에서는 빈 태그도 만들 수 있다 <></>
    <div className="App">안뇽~ 
      {/* 2. {}로 감싸면 자바스크립트 표현식(값이 나와야 하는 문!) 사용 가능, return 안에서는 if문 사용 불가! */}
      {/* 3. styles 속성
      -   dom 요소에 스타일 적용 시 문자열 x -> "객체" 사용
      -   스타일 이름 중 하이픈(-) 포함 시 camelCase로 작성 */}
      <h2 style={styles.h2}>안녕 {name} </h2>
      <h2 style={styles.p}>{name === 'Sean' ? '반가워~' : '누구..?'} </h2>
      <p>{txt}</p>
      <p>{flag ? <h3>true입니다</h3> : <h3>false입니다</h3>}</p>
      <p>{flag && <h3>ture 일때만 보이는 메시지</h3>}</p>
      {/* 4. className 사용
      - class 속성이 아닌 className 속성을 사용
       */}
      <h3 className="hello" onClick={() => alert('안녕안녕')}>
        hello~~~~
      </h3>
      {/* 5. 종료 태그가 없는 태그의 사용
      - 기존 html 태그에서 종료태그가 없더라도 종료태그 작성해야함
      - or self-closing 사용
      - 잘못된 예) <input>, <br>
      - 올바른 예) <input />, <br />
       */}
      {/* 6. 주석
      - //: JSX 외부 주석
      - JSX 내부 주석(현재 주석) */}
    </div>
  );
}

export default App;
