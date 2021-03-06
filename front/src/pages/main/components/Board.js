import React from "react";

import "./Board.scss";
import BoardList from "./BoardList";
// import img1 from "../../../profileImg/1.jpg";

const Board = (props) => {
  
  const { data, RerenderFunc, userRes } = props;
  // console.log(data);
  let dataList1 = [];
  let dataList2 = [];
  // 데이터 길이에 따라 행을 만들고 0 1 2 / 3 4 5

  for (let i = 0; i < data.length; i++) {
    dataList2.push(data[i]);
    if (i % 3 === 2) {
      dataList1.push(dataList2);
      dataList2 = [];
    }
    if (i === data.length - 1) {
      dataList1.push(dataList2);
      dataList2 = [];
    }
  }
  // console.log(dataList1);
  
  return (
    <section className="board">
      {/* 탭 부분
      <ul className="boardOrder">
        <li className="tab active">
          <svg
            aria-label=""
            className="_8-yf5"
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <span>게시물</span>
        </li>
        <li className="tab">
          <svg
            aria-label=""
            className="_8-yf5"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5zm5-11.8l-6.8-3.9c-.5-.3-1-.3-1.5 0-.4.3-.7.7-.7 1.3v7.8c0 .5.3 1 .8 1.3.2.1.5.2.8.2s.5-.1.8-.2l6.8-3.9c.5-.3.8-.8.8-1.3s-.5-1-1-1.3zm-7.5 5.2V8.1l6.8 3.9-6.8 3.9z"></path>
          </svg>
          <span>동영상</span>
        </li>
        <li className="tab">
          <svg
            aria-label=""
            className="_8-yf5"
            color="#8e8e8e"
            fill="#8e8e8e"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <path
              d="M10.201 3.797L12 1.997l1.799 1.8a1.59 1.59 0 001.124.465h5.259A1.818 1.818 0 0122 6.08v14.104a1.818 1.818 0 01-1.818 1.818H3.818A1.818 1.818 0 012 20.184V6.08a1.818 1.818 0 011.818-1.818h5.26a1.59 1.59 0 001.123-.465z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M18.598 22.002V21.4a3.949 3.949 0 00-3.948-3.949H9.495A3.949 3.949 0 005.546 21.4v.603"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <circle
              cx="12.072"
              cy="11.075"
              fill="none"
              r="3.556"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></circle>
          </svg>
          <span>태그됨</span>
        </li>
      </ul>
       */}

      <div className="listItemContainer tab1">
        {dataList1.map((dataList2, index) => (
          <div key={index} className="listItem">
            {dataList2.map((data) => (
              <BoardList
                key={data.b_seq}
                data={data}
                RerenderFunc={RerenderFunc}
                userRes={userRes}
              />
            ))}
          </div>
        ))}

        {/* 
        <div className="listItem">
          <div className="listImg">
            <div className="innerBox">
              <img src={img1} alt="" />
              <div className="imgInfo">
                <div className="playCount">
                  <div className="playIcon"></div>
                  3.6백만
                </div>
                <div className="commentCount">
                  <div className="commentIcon"></div>
                  9,876
                </div>
              </div>
            </div>
          </div>
          <div className="listImg">
            <div className="innerBox">
              <img src={img1} alt="" />
              <div className="imgInfo">
                <div className="playCount">
                  <div className="playIcon"></div>
                  3.6백만
                </div>
                <div className="commentCount">
                  <div className="commentIcon"></div>
                  9,876
                </div>
              </div>
            </div>
          </div>
          <div className="listImg">
            <div className="innerBox">
              <img src={img1} alt="" />
              <div className="imgInfo">
                <div className="playCount">
                  <div className="playIcon"></div>
                  3.6백만
                </div>
                <div className="commentCount">
                  <div className="commentIcon"></div>
                  9,876
                </div>
              </div>
            </div>
          </div>
        </div>
 */}
      </div>
    </section>
  );
};

export default Board;
