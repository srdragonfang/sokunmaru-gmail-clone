import React from 'react';

function SidebarOption({ icon, title, number, selected }) {
	return (
		<div className={`SidebarOption ${selected && 'SidebarOption--active'}`}>
			{icon}
			<h3>{title}</h3>
			<p>{number}</p>
		</div>
	);
}

export default SidebarOption;
