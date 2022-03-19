import React from 'react';

const DisplayComponent = (props) => {
    return (
        <div className="font-sans font-medium h-40 min-w-full flex">
            <span className='basis-1/4 leading-none text-[500%] mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.h >= 10 ? props.time.h : "0" + props.time.h)}</span> 
            <span className='basis-1/4 leading-none text-[500%] mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.m >= 10 ? props.time.m : "0" + props.time.m)}</span> 
            <span className='basis-1/4 leading-none text-[500%] mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.s >= 10 ? props.time.s : "0" + props.time.s)}</span> 
            <span className='basis-1/4 leading-none text-[500%] mx-1 p-10 bg-black text-white rounded-lg'>{(props.time.ms>= 10 ? props.time.ms : "0" + props.time.ms)}</span>
        </div>
    );
}

export default DisplayComponent;
