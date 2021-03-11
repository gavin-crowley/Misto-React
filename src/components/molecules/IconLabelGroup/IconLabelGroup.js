import React from 'react'
import IconLabel from "../IconLabel/IconLabel"

const IconLabelGroup = ({ data, classLi }) => {
    return (
        <ul className='top-bar-contact'>
            {data.map(function (data, index) {
                return (
                    <li className={classLi}>
                        <IconLabel
                            key={index}
                            src={data.src}
                            label={data.label}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default IconLabelGroup;