import React from "react";

export default function CloseIcon({ fill = "#ffde59" }) {
	return (
		<svg
			width={34}
			height={34}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			id="x">
			<rect width="256" height="256" fill="none"></rect>
			<line
				x1="200"
				x2="56"
				y1="56"
				y2="200"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"></line>
			<line
				x1="200"
				x2="56"
				y1="200"
				y2="56"
				stroke={fill}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"></line>
		</svg>
	);
}
