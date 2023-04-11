import React, { memo } from "react";
import { DetailBrowserWrapper } from "./style";
import { useSelector } from "react-redux";

const DetailBrowser = memo(() => {
    const {detailInfo} = useSelector(state=>{
        return{
            detailInfo:state.detail.detailInfo
        }
    })
  return (
    <DetailBrowserWrapper>
      <div className="detail">
        <div className="left">
            <img src={detailInfo.picture_url} alt="" />
        </div>
         <div className="right">
          <div className="top">
            <div><img src={detailInfo.picture_urls[0]} alt="" /></div>
            <div><img src={detailInfo.picture_urls[0]} alt="" /></div>
          </div>

          <div className="bottom">
            <div><img src={detailInfo.picture_urls[0]} alt="" /></div>
            <div><img src={detailInfo.picture_urls[0]} alt="" /></div>
          </div>
        </div>
       
       
      </div>
    </DetailBrowserWrapper>
  );
});

export default DetailBrowser;
