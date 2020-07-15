import React from 'react';

interface EmptyProps {
    text: string;
}

const Empty: React.FC<EmptyProps> = (props) => {
    return <div>{props.text}</div>;
};

export default Empty;
