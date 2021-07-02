import React from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';

function Person({ round = false, data: { name, work, image }}) {

    const size = round ? {width: "w-20", height: "h-20"} : {width: "w-28", height: "h-28", rounded: false}

    return (
        <div className="rounded-xl overflow-hidden shadow-md flex bg-white dark:bg-gray-700">
            <div className="flex justify-center overflow-hidden w-full">
                <div className="w-28 h-28 flex-none flex justify-center items-center">
                    <Avatar {...size} src={image}/>
                </div>
                <div className="flex-grow truncate">
                    <div className="pt-5 pl-2">
                        <div className="truncate text-lg text-green-500 font-bold">{ name }</div>
                        <div className="text-gray-500 leading-tight truncate dark:text-gray-300">{ work }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Person.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        work: PropTypes.string,
        image: PropTypes.string,
    }),
    round: PropTypes.bool,
}

export default Person;