import React from 'react';
import { Button as AntdButton } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface Props extends ButtonProps {}

const ButtonSize = {
    small: 24,
    middle: 48,
    large: 60,
};

const Button: React.FC<Props> = (props) => {
    return (
        <AntdButton
            {...props}
            style={{
                ...props.style,
                borderRadius: 10,
                height: props.size
                    ? ButtonSize[props.size]
                    : ButtonSize['middle'],
            }}
        >
            {props.children}
        </AntdButton>
    );
};

export default Button;
