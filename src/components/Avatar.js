import React from 'react';
import PropTypes from 'prop-types';

const noImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAADZElEQVR4nO3azYscRRjH8c9sxiCSGIWQmBgPCoqCr9GjkIAYQ0S9KiiKHsSjMUQPURD0aEzwrpcY/wC9qyfRhDViRBHEw27WxHeSKFk1ux5qhqluZrLtdlfPDNYXmm16t3/PU11VTz311JLJZDKZTCaTyWQy/0M6Y7K5HTdjU+/Zj/gan2N5DD61wjU4hFNCI4ddp/AmNo/JxyR0sB/njW54+TqHfVoYoakNXI538Gjp+Wl8hIWeD1uwUxglMe/haVxI62YaOkID4p49jl2YGfL3M3gAs6V3jhpPrKrNfsWGHMSaCu91hVgRv/tCIh+TsQlnDRrwxio0DivGhPL0mGjiHjyuWs+X6SpOh4ONeZeYjuJSt6uG1u5IZ96UxIJ7DJxeMDzgVWVGWDH6ettrezfEQNPcFN1/jKUaWks9jWHajZDiA2yN7ucb0JuL7q9tQK9Aig8Q5/JNzNlYo/F9QooPsBDdN9Fj20ZoTyx3GwStH9QPgmcivbtqe9cC5WVwdw2tPZHOnClZBglb2r7js0JS81/p4oR62eTYKKfCh1ah8ZZiKjx1NYJ9ihuaw6qNhK5i45fxfCIfk9IRtrJxQ2aFmDBqO7xHcdgv44iEc7+NgsjbeKz0/IxBQYSwXO40qBH2OYpnTGlBpE9H2M+fU70kdlYY9lMT9auwWdjSzhvd8Dkh2pdHQjLGVRa/UyiL94scp/GNwfzPZDLt0HYMWIs7cD2uwtW957/hd3yPL/BXy34l5Ta8jmNYtPISuIjP8BpuHYO/jXCZcKJzUvW1f9T1JZ6yug3ViqSYAo/jVdww5HfL+BZf4Wdh6BOmwkahx28c4dd3eEXIDieSrfjA8IPOI3gIGyrobMDDeNfw7PF94Sxxorgfvyo6+hNexLoauuvwUk8r1v4F99XQbZQnhajdd+6isPWt0/Ay63uaFyM7i3iiQRur4jmhdh/n8jsS2tvRs9G3t4RnE9q7JA/i78iZk7iuBbtbFM8M/8EjLdgtcLvif3wcUy3ANcWV+DSyf17IN1qhK5z4xoeW2y75Rho2Cktq348TQv6RnAOR0QvCaBgXt+DPyJ8DqQ3O4I/I4MupDVZgr+JUSHHaVaA/9z7R0pBbgTX40CAWJecK3Nv7OSmsFZbI9eN2JJPJZDKZTGZq+Bdm5CUT9UsydAAAAABJRU5ErkJggg==";

function Avatar(props) {
    const src = props.src.length > 0 ? `${process.env.PUBLIC_URL}/${props.src}` : noImage;
    const wid = props.width || "w-32";
    const hgt = props.height || "h-32";
    const rounded = props.rounded === true ? "rounded-full" : "";

    const classContainer = `bg-gray-200 dark:bg-transparent ${wid} ${hgt} overflow-hidden ${rounded}`;
    const classImage = `${wid} ${hgt} object-cover bg-gray-400`;
    
    return (
        <div className={classContainer}>
            <img
            alt={props.alt}
            className={classImage}
            src={src}/>
        </div>
    )
}

Avatar.defaultProps = {
    src: "",
    rounded: true
}

Avatar.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.bool,
}

export default Avatar;