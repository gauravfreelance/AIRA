import Image from "mui-image";
import React from "react";

const ESImage = (props) => {
  const { src, sx, ...restProps } = props;
  return <Image src={src} sx={{ p: 0, ...sx }} {...restProps} />;
};

export default ESImage;
