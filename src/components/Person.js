import React from 'react';
//import PropTypes from 'prop-types';
import Avatar from './Avatar';

function Person(props) {
    return (
        <div className="rounded-xl overflow-hidden shadow-md flex bg-white">
            <div className="w-full h-full flex">
                <div className="flex-initial w-28 h-28 flex justify-center items-center">
                    <Avatar width="w-20" height="h-20" src={`${process.env.PUBLIC_URL}/photo_2.jpg`}/>
                </div>
                <div className="flex-auto flex items-center">
                    <div className="p-2 flex-auto overflow-hidden">
                        <div className="text-green-500 font-bold truncate">Do dsd sdsd ckak</div>
                        <div className="text-gray-500 truncate">Marketing shshgaga17273</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Person;