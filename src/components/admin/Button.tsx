import React from 'react';

interface ButtonProps {
    text: any;
    className?: string;
    buttonHandle?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, className, buttonHandle }) => {
    return (
        <button
            onClick={buttonHandle}
            className={`font-normal rounded-md text-sm p-1 bg-blue-800 text-white capitalize ${className || ''}`}
        >
            {text}
        </button>
    );
};

export default Button;
