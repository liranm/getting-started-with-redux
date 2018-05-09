import React from 'react';

export const Link = ({
    active,
    onClick,
    children
}) => {
    if(active) {
        return (
            <span>{children}</span>
        );
    }

    return (
        <a href="#" 
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>{children}</a>
    );
};