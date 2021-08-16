import React from 'react';
import './submit.css';
function Submit() {


    return (

        <div className="body">
            <h1>Ceph --collect</h1>
            <div className="buttons">
                <p>Select from computer:</p>
                <button type="select">
                    Select file
                </button>
                <button type="submit" className="submit">
                    Send file
                </button>
            </div>
        </div>
    )
}

export default Submit;