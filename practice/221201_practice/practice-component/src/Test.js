import React from 'react';

class ClassComponent extends React.Component {
  render() {
    const name = '최재인';
    const my_styles = {
        backgroundColor: 'blue',
        color: 'orange',
        fontSize: '40px',
        padding: '12',
    }
    return (
      <div style={my_styles}>
        {name}
      </div>
      
    );
  }

}

export default ClassComponent;
