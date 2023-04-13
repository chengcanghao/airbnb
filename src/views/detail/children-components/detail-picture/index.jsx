import React, { memo } from "react";
import { DetailPictureWrapper } from "./style";
import { useSelector } from "react-redux";

const DetailPicture = memo((props) => {
  const{onShowStateChange} =  props
    const {detailInfo} = useSelector(state=>{
        return{
            detailInfo:state.detail.detailInfo
        }
    })
  return (
    <DetailPictureWrapper>
      <div className="top">
        <div className="left" >
          <div className="item" onClick={onShowStateChange}>
            <img src={detailInfo.picture_url} alt="" />
            <div className="cover"></div>
          </div>
        </div>
      
        
        <div className="right">
          {
            detailInfo.picture_urls.slice(1,5).map((item,index)=>{
              return <div className="item" key={index} onClick={onShowStateChange}>
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            })
          }
        </div>
      </div>
      
    </DetailPictureWrapper>
  );
});

export default DetailPicture;
