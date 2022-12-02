import React from 'react';
import PropTypes from 'prop-types';

class Test5 extends React.Component {
  render() {
    const { text, valid } = this.props;
    return(
      <div>
        <h2>{text}</h2><br />
        <button onClick={valid}>콘솔 메세지</button>
      </div >
    )
  }

}

Test5.defaultProps = {
  text: '이건 기본 text props 입니다.'
};

Test5.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Test5