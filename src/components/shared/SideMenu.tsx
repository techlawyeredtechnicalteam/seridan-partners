"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HamburgerIcon from "./icons/HamburgerIcon";
import Image from "next/image";
import CloseIcon from "./icons/CloseIcon";
import Accordion from "./Accordion";

export default function SideMenu() {
	const pathname = usePathname();

	const isHome = pathname === "/";
	const isPhilosophy = pathname === "/philosophy";
	const isPracticeAreas = pathname === "/practice-areas";
	const isAttorneys = pathname === "/attorneys";
	const isJournal = pathname.startsWith("/journal");
	const isConsultation = pathname === "/consultation";
	const isCareers = pathname === "/careers";

	const [open, setOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className="flex items-center justify-center w-[35px] h-[35px] lg:hidden">
				<HamburgerIcon />
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed top-0 left-0 h-screen z-[3] bg-primary w-full pb-10">
						<div className="flex items-center justify-between px-5 h-[100px]">
							<Link onClick={() => setOpen(false)} href={"/"}>
								<Image
									src={"/logo.png"}
									width={50}
									height={80}
									alt="The TechLawyered"
									priority={true}
								/>
							</Link>
							<button
								onClick={() => setOpen(false)}
								className={`flex items-center justify-center w-[45px] h-[45px] [#ffffff60] rounded-full`}>
								<CloseIcon />
							</button>
						</div>
						<div className="flex flex-col gap-y-10 px-5 mt-20">
							<Link
								onClick={() => setOpen(false)}
								href={"/"}
								className="text-[2.5rem]  text-white">
								{isHome ? (
									<mark className="markerb bg-transparent text-secondary">
										Home
									</mark>
								) : (
									"Home"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/philosophy"}
								className="text-[2.5rem]  text-white">
								{isPhilosophy ? (
									<mark className="markerb bg-transparent text-secondary">
										Philosophy
									</mark>
								) : (
									"Philosophy"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/attorneys"}
								className="text-[2.5rem]  text-white">
								{isAttorneys ? (
									<mark className="markerb bg-transparent text-secondary">
										Attorneys
									</mark>
								) : (
									"Attorneys"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/practice-areas"}
								className="text-[2.5rem]  text-white">
								{isPracticeAreas ? (
									<mark className="markerb bg-transparent text-secondary">
										Practice Areas
									</mark>
								) : (
									"Practice Areas"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/journal"}
								className="text-[2.5rem]  text-white">
								{isJournal ? (
									<mark className="markerb bg-transparent text-secondary">
										Journal
									</mark>
								) : (
									"Journal"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/consultation"}
								className="text-[2.5rem]  text-white">
								{isConsultation ? (
									<mark className="markerb bg-transparent text-secondary">
										Consultation
									</mark>
								) : (
									"Consultation"
								)}
							</Link>
							<Link
								onClick={() => setOpen(false)}
								href={"/careers"}
								className="text-[2.5rem]  text-white">
								{isCareers ? (
									<mark className="markerb bg-transparent text-secondary">
										Careers
									</mark>
								) : (
									"Careers"
								)}
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
