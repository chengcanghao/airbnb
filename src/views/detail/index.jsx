import React, { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import DetailPicture from "./children-components/detail-picture";
import PictureBrowser from "@/base-ui/picture-browser";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const [showState, setShowState] = useState(false);
  const { detailInfo } = useSelector((state) => {
    return { detailInfo: state.detail.detailInfo };
  });

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
