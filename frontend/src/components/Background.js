import React from "react";
import { useRef, useEffect } from "react";
import { addDivs } from "../functions";


const Background = () => {
	const wrapper = useRef();

	useEffect(() => {
		setTimeout(() => {
			addDivs(wrapper.current, {
				width: wrapper.current.clientWidth,
				height: wrapper.current.clientHeight,
			});
		}, 0);
	}, []);

	return (
		<div className="w-full h-full absolute top-0 z-0">
			<div
				className="text-5xl text-white w-full h-full absolute top-0 left-0 background-wrapper"
				ref={wrapper}
			></div>
			<div className="text-5xl text-white w-full h-full absolute top-0 left-0 backdrop-blur-xxl">
			</div>
		</div>
	);
};

export default Background;
