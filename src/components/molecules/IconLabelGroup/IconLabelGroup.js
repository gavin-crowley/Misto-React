import React from 'react'
import IconLabel from "../IconLabel/IconLabel"

const IconLabelGroup = ({ data, classLi }) => {
    return data.map((data, index) => {
        return <li className={classLi}>
            <IconLabel
                key={index}
                src={data.src}
                label={data.label}
            />
        </li>
    });
};

export default IconLabelGroup;