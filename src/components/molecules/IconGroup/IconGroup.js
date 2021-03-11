import React from 'react'

import { Icon } from '../../atoms/Icon/Icon'
import { Link } from '../../atoms/Link/Link'

const IconGroup = ({ icons, classLi }) => {
    let url = "#";
    return (
        <ul className='top-bar-social'>
            {icons.map(function (icon, index) {
                return (
                    <li className={classLi}>
                        <Link href={url}>
                            <Icon
                                key={index}
                                src={icon.src}
                            />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default IconGroup;
