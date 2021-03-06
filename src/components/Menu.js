import React from 'react'
import { Link, IndexLink } from 'react-website'
import classNames from 'classnames'

import './Menu.scss'

export default function Menu({ children })
{
	return (
		<ul className="menu">
			{ children }
		</ul>
	)
}

export function MenuLink({ to, children })
{
	const LinkComponent = to === '/' ? IndexLink : Link

	return (
		<li className="menu-list-item">
			<LinkComponent
				to={ to }
				activeClassName="menu-item--selected"
				className="menu-item">
				{ children }
			</LinkComponent>
		</li>
	)
}