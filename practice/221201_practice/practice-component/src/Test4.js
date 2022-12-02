import React from "react";
import book from "./book.png"
const FuncComp = ({ title, author, price, type }) => {
  return (
    <div>
      <div className="all">
        <div className="best">이번주 베스트셀러</div>
        <img src={book} alt="책" />
        <div className="title">{title}</div>
        <div className="content">작가: {author}</div>
        <div className="content">가격: {price}</div>
        <div className="content">구분: {type}</div>
      </div>
    </div>
  )
};

FuncComp.defaultProps = {

};

export default FuncComp;