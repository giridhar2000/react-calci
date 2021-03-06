import React from 'react';
import PropTypes from 'prop-types';
import '../styles/main.css';


const Button = (props) => {
return (
<input
type="button"
className={props.type === 'action' ? 'button action-button' :'button input-button'}
onClick={props.handleClick}
value={props.label}
/>
);
}

Button.propTypes = {
type: React.PropTypes.string.isRequired,
handleClick: React.PropTypes.func.isRequired,
label: React.PropTypes.string.isRequired
}


export default Button;