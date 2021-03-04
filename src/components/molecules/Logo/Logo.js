import React from 'react'

import Link from '../../atoms/Link/Link'
import Image from '../../atoms/Image/Image'

export const Logo = ({ href, src, alt }) => {
    return <Link href={href}>
        <Image src={src} alt={alt} />
    </Link>;
};