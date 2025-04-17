"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function JournalCard() {
	return (
		<Link href="/journal/123">
			<div className="w-full rounded-2xl hover:bg-[#f5f5f5] p-6 transition-all duration-200">
				<Image
					src={
						"https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					}
					width={394}
					height={282}
					alt="LGFT"
					className="w-full h-[282px] object-cover object-top"
				/>
				<div className="w-full flex flex-col gap-y-[8px] mt-6">
					<h6 className="text-[2.2rem] font-bold text-text-black line-clamp-2">
						Staying Sharp: How Legal Professionals Can Thrive Through Stressful
						Seasons
					</h6>
					<p className="line-clamp-3 text-2xl text-[#5f5f5f]">
						Practicing law often comes with long hours, high stakes, and little
						room for burnout. As the legal landscape continues to evolve,
						staying mentally and physically resilient is crucial. Here’s how
						legal professionals can maintain peak performance — even during
						their busiest periods.
					</p>
					<span className="text-text-black text-2xl flex items-center gap-2">
						January 30, 2025{" "}
						<span className="w-[5px] h-[5px] rounded-full bg-secondary flex"></span>{" "}
						5 min read
					</span>
					<div className="flex items-center gap-[10px]">
						<Image
							src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="Seridan CEO"
							width={500}
							height={500}
							className="w-[45px] h-[45px] rounded-full object-cover object-top"
						/>
						<span className="text-[1.7rem] font-medium text-text-black">
							Simbiat Lola
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
}
