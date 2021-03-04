import React from 'react';

export const Label = ({ label, ...props }) => {
    return <span {...props}>{label}</span>;
};
