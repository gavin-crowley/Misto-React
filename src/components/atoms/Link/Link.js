import React from 'react'

export const Link = ({ children, href, target, ...props }) => {
    return <a href={href} target={target} {...props}>{children}</a>;
};