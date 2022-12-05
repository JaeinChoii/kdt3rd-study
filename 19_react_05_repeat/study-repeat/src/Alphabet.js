import { useState } from 'react';

const Alphabet = () => {
  // 배열(state)에 고유 id를 갖도록 설정
  const [alphabets, setAlphabets] = useState([
    {id: 1, alpha: 'k'},
    {id: 2, alpha: 'd'},
    {id: 3, alpha: 't'},
    {id: 4, alpha: '3'},
    {id: 5, alpha: 'r'},
    {id: 6, alpha: 'd'},
  ]);
// 배열의 원소는 쉼표로 구별된다!!
  const [inputAlpha, setInputAlpha] = useState('');
  const [nextId, setNextId] = useState(7); // 새로운 항목 추가를 위한 id 값

  const addAlpha = () => {
    // 기존의 alphabets state에 새로 입력된 input 값 추가
    const newAlpha = alphabets.concat({
      id: nextId,
      alpha: inputAlpha,
    });
    setNextId(nextId + 1); // 다음 항목 id를 위해 1 증가
    setAlphabets(newAlpha); // alphabets state에 newAlpha 추가
    setInputAlpha(''); // input 초기화
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') { }
    addAlpha();
  };

  const deleteAlpha = (id) => {
    // console.log('>>>', id);
    const result = alphabets.filter((a) => a.id !== id);
    setAlphabets(result);
  }

  return <div>
    <input type="text"
      value={inputAlpha}
      onChange={(e) => setInputAlpha(e.target.value)}
      onKeyPress={onKeyPress}
    />
    <button onClick={addAlpha}>추가</button>
    <ul>
      {alphabets.map((a) => {
        // a => {id: n, alpha: 'xxx'}
        return <li key={a.id}
          onDoubleClick={() => {
          deleteAlpha(a.id);
        }}>{a.alpha}</li>;
      })}
    </ul>
  </div>
}

export default Alphabet;