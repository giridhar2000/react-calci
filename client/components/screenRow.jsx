import React from 'react';
import '../styles/main.css';


const ScreenRow = (props) => {
return (
<div className="screen-row">
<input type="text" readOnly value={props.value}/>
</div>
)
}

ScreenRow.propTypes = {
value: React.PropTypes.string.isRequired
}

export default ScreenRow;