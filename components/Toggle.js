import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultStyle = {
	border: 'solid 2px #000',
	borderRadius: 4,
	cursor: 'pointer',
	background: '#fff',
	padding: 5,
};

class Toggle extends Component {
	static propTypes = {
		onChange: PropTypes.func,
		children: PropTypes.func,
		defaultOn: PropTypes.bool,
		actionLogger: PropTypes.func,
	};

	state = {
		on: this.props.defaultOn || false,
	};

	handleToggleState = e => {
		const { actionLogger } = this.props;
		this.setState(({ on }) => ({ on: !on }));
		actionLogger && actionLogger(e);
	};

	render() {
		const { on } = this.state;
		const { children, onChange } = this.props;
		if (children) return children(on, this.handleToggleState, defaultStyle);
		return (
			<button
				className="toggle"
				style={defaultStyle}
				onClick={this.handleToggleState}
			>
				{children ? children(on) : on ? 'ON' : 'OFF'}
			</button>
		);
	}
}

export default Toggle;
