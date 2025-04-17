import React from "react";

export default function Diamond() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 64 64"
			fill="#241426"
			id="diamond">
			<polygon points="29.41 58.49 16.32 28 3.5 28 29.41 58.49"></polygon>
			<polygon points="45.1 26 35.77 12 28.23 12 18.9 26 45.1 26"></polygon>
			<polygon points="45.5 28 18.5 28 32 59.46 45.5 28"></polygon>
			<polygon points="47.68 28 34.59 58.49 60.5 28 47.68 28"></polygon>
			<path d="M16.5 26l9.33-14H14.69a1 1 0 0 0-.79.39L3.54 26zM47.5 26h13L50.1 12.39a1 1 0 0 0-.79-.39H38.17z"></path>
		</svg>
	);
}
