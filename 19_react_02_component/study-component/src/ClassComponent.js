import React from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends React.Component {
    // 클래스형 컴포넌트 render() 필수
    render() {
        const teacher = 'Sean';
        const { name, students } = this.props;

        return (
            <>
                <h1>Hello, {teacher}</h1>
                <p>여기는 Class Component!</p>
                <p>
                    {name} 수업시간! 학생 수는 {students}명 입니다!
                </p>
            </>
        );
    }
    // static defaultProps = {
    //     name: '얏호 ㅋ',
    // }
    
    // static propTypes = {
    //     name: PropTypes.string,
    //     students: PropTypes.number.isRequired,
    // }
}

ClassComponent.defaultProps = {
    name: '얏호',
};

ClassComponent.propTypes = {
    name: PropTypes.string,
    students: PropTypes.number.isRequired,
};

export default ClassComponent;