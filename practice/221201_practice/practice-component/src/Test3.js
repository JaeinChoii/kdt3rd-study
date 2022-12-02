import React from "react";

const FuncComponent = (props) => {

  return (
    <div><span style={{color: 'red'}}>{props.food}</span> 맛있습니다.
    </div>
  )
};

FuncComponent.defaultProps = {
  food: '김밥',
};

export default FuncComponent;