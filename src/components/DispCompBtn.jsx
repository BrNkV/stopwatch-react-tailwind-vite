import React from 'react';

const Dispcompbtn = (props) => {
    return (
        <div>
            {(props.status === 0) ?
                <button className="bg-sky-500/50 hover:bg-sky-700"
                    onClick={props.start}
                >Start</button> : ''
            }

            {(props.status === 1) ?
                <div>
                    <button className="bg-red-500"
                        onClick={props.stop}
                    >Stop</button>
                    <button className="bg-yellow-500"
                        onClick={props.reset}
                    >Reset</button>
                </div> : ''
            }
        </div>
    );
}

export default Dispcompbtn;

