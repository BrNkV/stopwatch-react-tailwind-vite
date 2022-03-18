import React from 'react';

const Dispcompbtn = (props) => {
    return (
        <div>
            {(props.status === 0) ?
                <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    onClick={props.start}
                >Start</button> : ''
            }

            {(props.status === 1) ?
                <div>
                    <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.stop}
                    >Stop</button>
                    <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.reset}
                    >Reset</button>
                </div> : ''
            }

            {(props.status === 2) ?
                <div>
                    <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.resume}
                    >Resume</button>
                    <button className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                        onClick={props.reset}
                    >Reset</button>
                </div> : ''
            }
        </div>
    );
}

export default Dispcompbtn;

