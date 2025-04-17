"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideMenu from "./SideMenu";

export default function Header() {
	const pathname = usePathname();

	const isHome = pathname === "/";
	const isPhilosophy = pathname === "/philosophy";
	const isPracticeAreas = pathname === "/practice-areas";
	const isAttorneys = pathname === "/attorneys";
	const isJournal = pathname.startsWith("/journal");
	const isConsultation = pathname === "/consultation";
	const isCareers = pathname === "/careers";

	return (
		<header className="h-[100px] bg-primary px-5 md:px-[15px] lg:px-[25px] xl:px-[100px] flex items-center justify-between sticky top-0 z-[10] border-b border-b-secondary">
			<Link href={"/"}>
				<Image
					src={"/logo.png"}
					width={50}
					height={80}
					alt="Seridan Partners"
				/>
			</Link>
			<nav className="hidden lg:flex items-center gap-10">
				<Link href={"/"} className="text-[1.7rem]  text-white">
					{isHome ? (
						<mark className="markerb bg-transparent text-secondary">Home</mark>
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
			<SideMenu />
		</header>
	);
}
