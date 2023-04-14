import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailPicture from "./children-components/detail-picture";
import PictureBrowser from "@/base-ui/picture-browser";
import { DetailWrapper } from "./style";
import { changeHeaderConfigAction } from "@/store/modules/main";

const Detail = memo(() => {
  const [showState, setShowState] = useState(false);
  const dispatch = useDispatch()
  const { detailInfo } = useSelector((state) => {
    return { detailInfo: state.detail.detailInfo };
  });
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed:false}))
  },[dispatch])


  return (
    <div>
      <DetailPicture onShowStateChange={(e) => setShowState(true)} />

      {showState && (
        <PictureBrowser
          detailInfo={detailInfo}
          onShowStateChange={(e) => setShowState(false)}
        />
      )}
    </div>
  );
});

export default Detail;
