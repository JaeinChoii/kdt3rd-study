import PropTypes from 'prop-types';

const FuncComponent = (props) => {
    const teacher = '션';
    console.log(props);
    const { name, time } = props;


    return (
        <div>
            <h1>Hi, {teacher}</h1>
            <p>여기는 Functional Component!</p>
            <p><b>{name}</b> 수업시간</p>
            <p>우리는  <b>{time}시</b>에 끝나요!</p>
        </div>
    )
};

FuncComponent.defaultProps = {
    name: '얏호',
};

FuncComponent.propTypes = {
    name: PropTypes.string,
    time: PropTypes.number.isRequired,

};

export default FuncComponent;