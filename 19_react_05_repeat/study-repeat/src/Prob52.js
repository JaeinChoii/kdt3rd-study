import { useState } from 'react';

const Prob52 = () => {
  const [inputWriter, setInputWriter] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  // comment list state
  const [comments, setComments] = useState([
    { writer: '이안', title: '안뇽' },
    { writer: '스칼렛', title: 'ㅋㅋ' },
    { writer: '재인', title: 'ㅎㅇ' },
    // + newComment
  ]);

  const addComment = () => {
    // 1. comments state에 원소 추가
    // 원소의 형식: { writer: xxx title: xxx };
    let newComment = { writer: inputWriter , title: inputTitle }
    console.log(newComment)
    // 2. 원소를 comments state에 추가 = state 변경
    // ...comments: 기존 state 배열의 모든 원소
    // newComment: 새로 추가될 state 배열의 원소
    setComments([...comments, newComment]);

    // 3. input 초기화
    setInputWriter('');
    setInputTitle('');



  };

  return (
    <>
      <form action="">
        <label htmlFor="text" id="writer">작성자: </label>
        <input type="text"
          id="writer" value={inputWriter}
          onChange={(e) => setInputWriter(e.target.value)} />
        <label htmlFor="text" id="title">제목: </label>
        <input type="text"
          id="title"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)} />
        <button type="button" onClick={addComment}>작성</button>
      </form>

      <table border={1} style={{margin: '30px auto', width: '500px'}}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((c, idx) => {
            // c = { writer: xxx title: xxx }
            return (
              <tr key={idx + 1}>
                <td>{idx + 1}</td>
                <td>{c.writer}</td>
                <td>{c.title}</td>
              </tr>
            );
          })}
            
        </tbody>
      </table>
    </>
  )
};

export default Prob52;