import React from 'react';
import { SomeDiv, BlobHousing, RedBlob, BlueBlob, YellowBlob } from './style';

const ColouredBlobs=()=>{
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}
      >
      <BlobHousing>
        <RedBlob/>
        <BlueBlob/>
        <YellowBlob/>

      </BlobHousing>

    </div>
  );
};

export default ColouredBlobs;
