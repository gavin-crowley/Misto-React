import React from 'react'
import { Icon } from '../../atoms/Icon/Icon'
import { Label } from '../../atoms/Label/Label'

const IconLabel = ({ src, label }) => {
    return (
        <>
            <Icon src={src} />
            {label && <Label label={label} />}
        </>
    );
}

export default IconLabel;