import React from "react";
import s from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {




	activeEditMode() {
		this.setState({
			editStatus: true,
		});
	}
	deaActiveEditMode() {
		this.setState({
			editStatus: false,
		});
	}
   

	render() {
		return (
			<div>
				{!this.state.editStatus && (
					<span onDoubleClick={this.activeEditMode.bind(this)}>
						{this.props.status}
					</span>
				)}
				{this.state.editStatus && (
					<input
						autoFocus={true}
						onBlur={this.deaActiveEditMode.bind(this)}
						value={this.props.status}
					/>
				)}
			</div>
		);
	}
}

export default ProfileStatus;
