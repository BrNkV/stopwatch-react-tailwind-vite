import React from 'react';

const DisplayComponent = (props) => {
    return (
        <div className="font-sans font-medium h-40">
            <span className='text-8xl mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.h >= 10 ? props.time.h : "0" + props.time.h)}</span> &nbsp; : &nbsp;
            <span className='text-8xl mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.m >= 10 ? props.time.m : "0" + props.time.m)}</span> &nbsp; : &nbsp;
            <span className='text-8xl mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.s >= 10 ? props.time.s : "0" + props.time.s)}</span> &nbsp; : &nbsp;
            <span className='text-8xl mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.ms>= 10 ? props.time.ms : "0" + props.time.ms)}</span>
        </div>
    );
}

export default DisplayComponent;
