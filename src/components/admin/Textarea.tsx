import React from 'react';

interface TextareaProps {
    handleChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder?: string;
    value?: string;
    name?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Textarea: React.FC<TextareaProps> = ({
    handleChange,
    placeholder,
    value,
    name,
    id,
    className,
    style,
}) => {
    return (
        <textarea
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
            name={name}
            id={id}
            className={`border p-1 font-normal  ${className || ''}`}
            style={style}

        />
    );
}

export default Textarea;
