import React from 'react'
import '../../../css/base.css'
import './TopBar.css'

import IconLabelGroup from '../../molecules/IconLabelGroup/IconLabelGroup'
import IconGroup from '../../molecules/IconGroup/IconGroup'

import { socialIcons, topBarIconsLabels } from '../../../data/misto-data'


const TopBar = () => {

    return (
        <div class="top-bar">
            <div class="container container-flex">
                <IconLabelGroup
                    data={topBarIconsLabels}
                    classLi={'top-bar-contact-item'}
                />
                <IconGroup
                    icons={socialIcons}
                    classLi={'top-bar-social-item'}
                />
            </div>
        </div>
    );
}

export default TopBar;