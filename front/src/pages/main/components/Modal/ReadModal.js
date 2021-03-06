import React, { useState } from "react";
import "./ReadModal.scss";
import profileImg from "../../../../profileImg/1.jpg";
import SelectModal from "./SelectModal";

const ReadModal = (props) => {
  const { cancelModalHandler, data, RerenderFunc, userRes } = props;
  const [selectModal, setSelectModal] = useState(false);
  const [readRerender, setReadRerender] = useState(false);
  
  const readRerenderFunc = () => {
    if(readRerender===false){
      setReadRerender(true);
    }else{
      setReadRerender(false);
    }
  }


  const selectModalHandler = () => {
    if (userRes !== undefined) {
      if (data.m_seq === userRes.m_seq) {
        if (selectModal === false) {
          setSelectModal(true);
        } else {
          setSelectModal(false);
        }
      } else {
        alert("사용자의 게시물이 아닙니다");
      }
    }else{
      alert("사용자의 게시물이 아닙니다");
    }
  };

  return (
    <div className="modal3">
      <div className="modalOverlay3"></div>
      <div className="closeBtn" onClick={cancelModalHandler}>
        <svg
          aria-label="닫기"
          className="_8-yf5 "
          color="#ffffff"
          fill="#ffffff"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <polyline
            fill="none"
            points="20.643 3.357 12 12 3.353 20.647"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          ></polyline>
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            x1="20.649"
            x2="3.354"
            y1="20.649"
            y2="3.354"
          ></line>
        </svg>
      </div>

      <div className="modalContent3">
        <div className="readImg">
          <img
            className="readImgBox"
            src={`/upload/${data.b_fileName}`}
            alt=""
          />
        </div>
        <div className="readContentWrap">
          <div className="readProfile">
            <div className="readAccount">
              <img src={profileImg} alt="" />
              <span>{data.m_name}</span>
            </div>
            {selectModal && (
              <SelectModal
                selectModalHandler={selectModalHandler}
                readModalHandler={cancelModalHandler}
                data={data}
                RerenderFunc={RerenderFunc}
                readRerenderFunc={readRerenderFunc}
              />
            )}
            <div className="selectBtn" onClick={selectModalHandler}>
              <svg
                aria-label="옵션 더 보기"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </div>
          </div>
          <div className="readTitleWrap">
            <div className="readTitle">
              <h3>제목 : {data.b_title}</h3>
            </div>
          </div>
          <div className="readContent">{data.b_content}</div>
          <div className="readFunc">
            <div className="leftIcon">
              <svg
                aria-label="좋아요"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
              <svg
                aria-label="댓글 달기"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
              <svg
                aria-label="게시물 공유"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </div>
            <div className="rightIcon">
              <svg
                aria-label="저장"
                className="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></polygon>
              </svg>
            </div>
          </div>
          <div className="readComment"></div>
        </div>
      </div>
    </div>
  );
};

export default ReadModal;
