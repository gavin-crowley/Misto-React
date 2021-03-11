import React from 'react'

const Nav = () => {
    <nav className='c-primary-nav { this.props.styleModifier }'>
        <ul className='c-primary-nav__list'>
            {this.props.navitems.map(function (navitem, index) {
                return (
                    <li
                        className='c-primary-nav__item'
                        key={`c-primary-nav__item-${index}`}
                    >
                        <a href={navitem.href} onClick={navitem.onClick}>
                            {navitem.text}
                        </a>
                    </li>
                );
            })}
        </ul>
    </nav>
}

export default Nav;