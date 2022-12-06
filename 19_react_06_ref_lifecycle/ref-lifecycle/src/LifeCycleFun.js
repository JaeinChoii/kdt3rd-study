import { useState, useEffect } from 'react';

// 자식 컴포넌트
const MyComponent = (props) => {
  const { number } = props;

  useEffect(() => {
    // Mount 시점에 실행
    console.log('⭕ mount!');

    return () => {
      console.log('❌ unmount!');
    };
  }, []);

  return (
    <>
      <p>MyComponent {number}</p>
    </>
  );
};

// 부모 컴포넌트
const LifeCycleFunc = () => {
  const [number, setNumber] = useState(3);

  const changeNumberState = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <MyComponent number={number} />
    </>
  );
};

export default LifeCycleFunc;