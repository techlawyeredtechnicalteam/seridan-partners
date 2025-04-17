"use client";
import { motion } from "framer-motion";
import React from "react";
import ArrowDown from "./icons/ArrowDown";
import AppButton from "./AppButton";
import Link from "next/link";

export default function Hero() {
	return (
		<div className="absolute w-full h-full top-0 p-8 md:px-[50px] lg:px-[100px] flex flex-col justify-center">
			<motion.h1
				initial={{ scale: 0.7, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ type: "spring", ease: "linear", duration: 1 }}
				className="text-[4rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold text-white w-[85%] xl:w-[70%]">
				Welcome to Seridan Partners
			</motion.h1>
			<div className="w-max flex mt-6">
				<motion.div
					initial={{ translateX: -80, opacity: 0 }}
					animate={{ translateX: 0, opacity: 1 }}
					transition={{ type: "spring", ease: "linear", duration: 1.5 }}>
					<Link href={"#explore"}>
						<AppButton classname="bg-secondary w-[200px] gap-3 items-center">
							<span className="text-primary font-medium">Explore</span>
							<ArrowDown />
						</AppButton>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
