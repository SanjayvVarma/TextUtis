import React from 'react'
import './style.css'
const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    };

    return (
        <div className="AlertBox">
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show strong-lert`} role="alert">
                <strong className='strong-lert'>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;