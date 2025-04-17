"use client";
import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function AddressMap() {
	return (
		<div className="h-[500px]">
			<iframe
				width="100%"
				height="100%"
				style={{ border: 0 }}
				loading="lazy"
				allowFullScreen
				referrerPolicy="no-referrer-when-downgrade"
				src="https://maps.google.com/maps?q=Suite 26 Princess Plaza, Ado Langbasa Road,  Ajah, Lagos&z=15&output=embed"></iframe>
		</div>
	);
}
