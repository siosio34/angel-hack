import React from 'react';
import { Card as AntdCard } from 'antd';

import { CardProps } from 'antd/lib/card';

const Card: React.FC<CardProps> = (props) => {
    return (
        <AntdCard
            {...props}
            style={{ ...props.style, borderRadius: 15, cursor: 'pointer' }}
        >
            {props.children}
        </AntdCard>
    );
};

export default Card;
