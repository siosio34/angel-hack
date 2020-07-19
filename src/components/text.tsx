import React from "react";
import { Typography } from "antd";

import { TextProps } from "antd/lib/typography/Text";

interface Props extends TextProps {}

const Text: React.FC<Props> = (props) => {
  return <Typography.Text>{props.children}</Typography.Text>;
};

export default Text;
