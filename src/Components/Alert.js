import React from 'react'

export default function Alert(props) {
    const capitalizeFirstLetter = (word) => {
        let wordToLower = word.toLowerCase();
        return wordToLower[0].toUpperCase() + word.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.typeOfMsg} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstLetter(props.alert.typeOfMsg)}:</strong> {props.alert.msg}
            </div>}
        </div>
    )
}
