"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import TwitterXIcon from "./icons/TwitterXIcon";
import { usePathname } from "next/navigation";

export default function Footer() {
	const pathname = usePathname();

	const isHome = pathname === "/";
	const isPhilosophy = pathname === "/philosophy";
	const isPracticeAreas = pathname === "/practice-areas";
	const isAttorneys = pathname === "/attorneys";
	const isJournal = pathname.startsWith("/journal");
	const isConsultation = pathname === "/consultation";
	const isCareers = pathname === "/careers";

	return (
		<footer className="px-5 md:px-[15px] lg:px-[25px] xl:px-[100px] py-12 bg-primary">
			<div className="flex flex-col lg:flex-row lg:items-center justify-between w-full pb-[40px] gap-y-12">
				<Image src={"/logo.png"} width={100} height={80} alt="Navigo Rides" />
				<nav className="flex flex-wrap items-center gap-6 md:gap-10">
					<Link href={"/"} className="text-[1.7rem]  text-white">
						{isHome ? (
							<mark className="markerb bg-transparent text-secondary">
								Home
							</mark>
						) : (
							"Home"
						)}
					</Link>
					<Link href={"/philosophy"} className="text-[1.7rem]  text-white">
						{isPhilosophy ? (
							<mark className="markerb bg-transparent text-secondary">
								Our Philosophy
							</mark>
						) : (
							"Our Philosophy"
						)}
					</Link>
					<Link href={"/attorneys"} className="text-[1.7rem]  text-white">
						{isAttorneys ? (
							<mark className="markerb bg-transparent text-secondary">
								Attorneys
							</mark>
						) : (
							"Attorneys"
						)}
					</Link>
					<Link href={"/practice-areas"} className="text-[1.7rem]  text-white">
						{isPracticeAreas ? (
							<mark className="markerb bg-transparent text-secondary">
								Practice Areas
							</mark>
						) : (
							"Practice Areas"
						)}
					</Link>
					<Link href={"/journal"} className="text-[1.7rem]  text-white">
						{isJournal ? (
							<mark className="markerb bg-transparent text-secondary">
								Journal
							</mark>
						) : (
							"Journal"
						)}
					</Link>
					<Link href={"/consultation"} className="text-[1.7rem]  text-white">
						{isConsultation ? (
							<mark className="markerb bg-transparent text-secondary">
								Consultation
							</mark>
						) : (
							"Consultation"
						)}
					</Link>
					<Link href={"/careers"} className="text-[1.7rem]  text-white">
						{isCareers ? (
							<mark className="markerb bg-transparent text-secondary">
								Careers
							</mark>
						) : (
							"Careers"
						)}
					</Link>
				</nav>
			</div>
			<div className="pt-[20px] flex flex-col md:flex-row md:items-center justify-between border-t border-t-[#d5c3d7] gap-[20px]">
				<span className="text-2xl text-white">
					&copy; 2025{" "}
					{`${
						new Date(Date.now()).getFullYear() > 2025
							? ` - ${new Date(Date.now()).getFullYear()}`
							: ""
					}`}{" "}
					Seridan Partners. All rights reserved
				</span>
				<div className="flex items-center gap-[33px]">
					<Link href={"#"}>
						<InstagramIcon />
					</Link>
					<Link href={"#"}>
						<FacebookIcon />
					</Link>
					<Link href={"#"}>
						<TwitterXIcon />
					</Link>
				</div>
			</div>
		</footer>
	);
}
