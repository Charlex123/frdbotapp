import React from "react";
import loadingstyles from '../styles/loading.module.css';
const Loading = () => {
  return (
    <>
      <div className={loadingstyles.spinner}><img src='./loadingimage.png' alt="loader" style={{width: '40px', height: '40px'}}/></div>
    </>
  );
}

export default Loading;
