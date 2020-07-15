import React from 'react';
import { Input as AntdInput } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

interface Props extends TextAreaProps {
    label?: string;
}

const TextArea: React.FC<Props> = (props) => {
    return (
        <>
            {props.label && (
                <div
                    style={{ fontSize: 16, paddingTop: 30, paddingBottom: 16 }}
                >
                    {props.label}
                </div>
            )}
            <AntdInput.TextArea
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
            </AntdInput.TextArea>
        </>
    );
};

export default TextArea;
