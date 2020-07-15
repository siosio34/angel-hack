import React from 'react';
import { Input as AntdInput } from 'antd';
import { InputProps } from 'antd/lib/input';
import TextArea from 'antd/lib/input/TextArea';

interface Props extends InputProps {
    label?: string;
}

const Input: React.FC<Props> = (props) => {
    return (
        <>
            {props.label && (
                <div
                    style={{ fontSize: 16, paddingTop: 30, paddingBottom: 16 }}
                >
                    {props.label}
                </div>
            )}
            <AntdInput
                {...props}
                style={{
                    ...props.style,
                    borderRadius: 30,
                    background: '#f8f8f8',
                    height: 60,
                    padding: 20,
                }}
            >
                {props.children}
            </AntdInput>
        </>
    );
};



export default Input;
