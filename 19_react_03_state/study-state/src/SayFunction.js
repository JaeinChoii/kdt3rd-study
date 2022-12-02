import { useState } from 'react';

const SayFunction = () => {
  const [message, setMessage] = useState('Welcome!');
  // 'Welcome!': 상태(state)의 초기 값
  // message: 메세지 상태
  // setMessage: message라는 state 값을 바꾸는 setter 함수

  const onClickEnter = () => setMessage('안녕하세요~');
  const onClickLeave = () => setMessage('안녕히가세요~')
  return (
    <>
      <h1>{message}</h1>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/*<button onClick={() => setMessage('안녕하세요~')}>입장</button>
      <button onClick={() => setMessage('안녕히가세요~')}>퇴장</button> */}
    </>
  );
};

export default SayFunction;