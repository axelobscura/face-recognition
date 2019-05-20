import React from 'react';

const FaceRecognition = ({imageUrl, box})=>{
  return(
    <div className="center">
      <div className="absolute mt2">
        <img id='inputImage' src={imageUrl} alt="" width='500px' height='auto' />
        <div></div>
      </div>
    </div>
  )
}

export default FaceRecognition;