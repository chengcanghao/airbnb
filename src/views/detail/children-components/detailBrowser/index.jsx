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
      <div className="top">
        <div className="left">
          <div className="item">
            <img src={detailInfo.picture_url} alt="" />
            <div className="cover"></div>
          </div>
        </div>
      
        
        <div className="right">
          {
            detailInfo.picture_urls.slice(1,5).map((item,index)=>{
              return <div className="item" key={index}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            })
          }
        </div>
      </div>
    
    </DetailBrowserWrapper>
  );
});

export default DetailBrowser;
