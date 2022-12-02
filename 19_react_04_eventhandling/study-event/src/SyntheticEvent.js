import { useState } from 'react';

// const SyntheticEvent = () => {
//     return (
//         <div>
//             <button onClick={(e) => console.log(e)}>SyntheticEvent 확인</button>
//         </div>
//     );
// };

// export default SyntheticEvent;

const SyntheticEvent = () => {
  const [text, setText] = useState('초기값');

  const printSyntheticEvent = (e) => console.log(e);

  const printInputValue = (e) => setText(e.target.value);

  const showAlert = () => {
    alert(`input 입력 값은 ${text} !!!!`)
    setText('');
  };
  const onKeyPress = (e) => {
    if (e.key === 'Enter') { }
    showAlert();
  };

    return (
      <div>
        <button onClick={printSyntheticEvent}>SyntheticEvent 확인</button>
        <hr />
        <input type="text"
          placeholder="입력하세요"
          onChange={printInputValue}
          onKeyPress={onKeyPress}
          value={text} />

            <button onClick={showAlert}>버튼</button>
        </div>
    );
};

export default SyntheticEvent;