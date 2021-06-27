import React from 'react';
import "./SidebarChat.css";
// import {Avatar} from 
import {Avatar} from '@material-ui/core';

function SidebarChat() {
	return (
		<div className = "sidebarChat">
			<Avatar/>
			<div className = "sidebarChat_info">
				<h2>
					Room Name
				</h2>
				<p>This is the last message</p>
			</div>
		</div>
	)
}

export default SidebarChat