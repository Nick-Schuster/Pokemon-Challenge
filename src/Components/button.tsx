import React from "react";

interface ButtonProps {
    buttonText: string;
    type: "submit" | "reset" | "button";
    className?: string;
    style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({buttonText, className, style, type}) => {
    return (
        <button
            className = {"btn p-3 " + className}
            style = {style}
            type={type}
        >{buttonText}</button>
    )
}
export default Button;