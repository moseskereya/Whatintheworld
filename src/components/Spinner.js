import React from 'react';
import spinner from './images/spinner.gif';

export default  () => {
    return (
        <div className="spinner">
            <img
                src={spinner}
                alt="Loading..."
            />
        </div>
    );
};