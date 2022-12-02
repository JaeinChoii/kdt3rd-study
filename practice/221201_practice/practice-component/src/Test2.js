import React from 'react';
import image from './1.jpg';
import './img.css'

class ClassComponentt extends React.Component {
  render() {
    const style = {
        color: 'orange',
        fontSize: '40px',
        marginTop: '20',
    }
    return (
      <div style={style}>
            <h2>안녕하세요.</h2>
            <img src={image} alt="스칼렛" />
      </div>
      
    );
  }

}

export default ClassComponentt;
