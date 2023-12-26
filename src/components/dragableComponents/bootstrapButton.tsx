import React, { ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import Button from 'react-bootstrap/Button';


type DynamicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    bsPrefix?: string;
    variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-dark' | 'outline-light';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    size?: 'sm' | 'lg';
    active?: boolean;
    disabled?: boolean;
    href?: string;
    type?: 'button' | 'reset' | 'submit' | null;
    as?: ElementType;
    label?: string,
    children?: ReactNode;
};

const DynamicButton: React.FC<DynamicButtonProps> = ({
    bsPrefix = 'btn',
    variant = 'primary',
    onClick,
    size,
    active = false,
    disabled = false,
    label,
    type = 'button',
    as,
    ...rest
}) => {
    const buttonProps: DynamicButtonProps = {
        bsPrefix,
        variant,
        onClick,
        size,
        active,
        disabled,
        type,
        label,
        as,
        ...rest,
    };


    return (
        <button {...buttonProps}>
            {label}
        </button>
    );
};


export default DynamicButton