import React from "react";
import { Typography } from "antd";

import { TitleProps } from "antd/lib/typography/Title";

interface Props extends TitleProps {}

const Title: React.FC<Props> = (props) => {
  return (
    <Typography.Title {...props} style={{ padding: 8 }}>
      {props.children}
    </Typography.Title>
  );
};

export default Title;
