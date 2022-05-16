import React from 'react'

function DropdownItem(props) {
	return (
		<a href={props.link} className="menu-item">
			<span className="icon-button">{props.leftIcon}</span>
			{props.children}
			{/* <span className="icon-button">{props.rightIcon}</span> */}
		</a>
	);
}

export default DropdownItem