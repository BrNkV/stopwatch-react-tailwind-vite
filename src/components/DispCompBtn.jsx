import React from 'react';

const Dispcompbtn = (props) => {
    return (
        <div>
            {(props.status === 0) ?
                <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
                    onClick={props.start}
                >Start</button> : ''
            }

            {(props.status === 1) ?
                <div>
                    <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
                        onClick={props.stop}
                    >Stop</button>
                    <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
                        onClick={props.reset}
                    >Reset</button>
                </div> : ''
            }

            {(props.status === 2) ?
                <div>
                    <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
                        onClick={props.resume}
                    >Resume</button>
                    <button className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600"
                        onClick={props.reset}
                    >Reset</button>
                </div> : ''
            }
        </div>
    );
}

export default Dispcompbtn;

