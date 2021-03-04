import React from 'react'

import { Icon } from '../../atoms/Icon/Icon'
import { Link } from '../../atoms/Link/Link'

const IconGroup = ({ icons, classLi }) => {
    let url = "#";
    return icons.map((icon, index) => {
        return <li className={classLi}>
            <Link href={url}> <Icon
                key={index}
                src={icon.src}
            />
            </Link>
        </li>

    });
};

export default IconGroup;