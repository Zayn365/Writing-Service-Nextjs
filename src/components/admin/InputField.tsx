import React from 'react';

interface InputFieldProps {
    type: 'text' | 'password' | 'email' | 'number' | 'date' | 'file' | 'checkbox' | 'radio';
    handleChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string | number;
    name?: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}

const InputField: React.FC<InputFieldProps> = ({
    type,
    handleChange,
    placeholder,
    value,
    name,
    id,
    className,
    style,
}) => {
    return (
        <input
            type={type}
            onChange={handleChange}
            placeholder={placeholder}

            value={value}
            name={name}
            id={id}
            className={`border p-1 font-normal w-[250px] ${className || ''}`}
            style={style}
        />
    );
}

export default InputField;
