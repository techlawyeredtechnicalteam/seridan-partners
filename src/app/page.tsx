import AddressMap from "@/components/AddressMap";
import AppButton from "@/components/shared/AppButton";
import ArrowDown from "@/components/shared/icons/ArrowDown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import Diamond from "@/components/shared/icons/Diamond";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import Handshake from "@/components/shared/icons/Handshake";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import Mission from "@/components/shared/icons/Mission";
import TwitterXIcon from "@/components/shared/icons/TwitterXIcon";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/shared/Hero";

export default function Home() {
	return (
		<main>
			<section className="bg-[url(/hero.png)] bg-no-repeat bg-fixed bg-center h-[50vh] md:h-[60vh] lg:h-[100vh] relative">
				<Hero />
			</section>
			<section id="explore" className="py-24 bg-primary flex justify-center ">
				<div className="md:w-[90%] lg:w-[80%] xl:w-[60%] p-5 ">
					<Image
						src={"/logo.png"}
						width={80}
						height={80}
						alt="Seridan Partners"
					/>
					<div className="mt-3">
						<h2 className="text-[4rem] text-white font-semibold">Our Firm</h2>
					</div>
					<p className="text-[2rem] font-medium text-white mt-3">
						We are a fast-growing full-service law firm of young, vibrant and
						skilled legal practitioners. We pride ourselves in our track records
						of excellence which surpasses the expectations of our clients
						positively, on legal transactions and in their times of need.
					</p>
					<div className="w-max flex mt-6">
						<Link href={"/practice-areas"}>
							<AppButton classname="bg-secondary w-[200px] gap-3 items-center">
								<span className="text-primary font-medium">Practive Areas</span>
								<Diamond />
							</AppButton>
						</Link>
					</div>
				</div>
			</section>
			<section className="grid lg:grid-cols-2 md:mt-10">
				<div className="p-[10px] py-12 md:p-[20px] lg:pl-[50px] xl:pl-[100px] pr-[50px] lg:py-28 bg-[#f5f5f5]">
					<div className="flex items-center gap-3">
						<h3 className="text-[4rem] font-bold">Our Mission</h3>
						<Mission />
					</div>
					<p className="text-[2rem] font-medium">
						Our mission is to provide composite and qualitative legal service on
						schedule by adopting an innovative and practical approach in
						achieving and meeting our client’s needs and interest.
					</p>
					<div className="w-max flex mt-6">
						<Link href={"/consultation"}>
							<AppButton classname="bg-primary w-[200px] gap-3 items-center">
								<span className="text-secondary font-medium">Talk to us</span>
								<Handshake />
							</AppButton>
						</Link>
					</div>
				</div>
				<div className="p-[10px] py-12 md:p-[20px] lg:pl-[50px] xl:pl-[100px] pr-[50px] lg:py-28 bg-secondary">
					<div className="flex items-center gap-3">
						<h3 className="text-[4rem] font-bold">Our Culture</h3>
						<Mission />
					</div>
					<p className="text-[2rem] font-medium">
						The culture of the Firm is a unique mix, meshing a profound respect
						for the law and high legal standards within a collegial spirit, a
						recognized ability to finding creative solutions to problems.
					</p>
					<div className="w-max flex mt-6">
						<Link href={"/philosophy"}>
							<AppButton classname="bg-primary w-[200px] gap-3 items-center">
								<span className="text-secondary font-medium">Read More</span>
								<span className="rotate-[-90deg] flex relative">
									<ChevronIcon fill="#ffde59" />
								</span>
							</AppButton>
						</Link>
					</div>
				</div>
			</section>
			<section className="grid lg:grid-cols-2 md:mt-12">
				<div className="p-5 md:p-10 bg-[#f5f5f5]">
					<AddressMap />
				</div>
				<div className="p-5 md:p-10 lg:pl-[50px] xl:pl-[100px] pr-[50px] py-12 bg-white flex flex-col justify-center">
					<div className="flex items-center gap-3">
						<h3 className="text-[4rem] font-bold">Contact Us</h3>
					</div>
					<div className="flex flex-col gap-y-5 mt-5">
						<span className="text-[2rem] text-[#787878]">
							Suite 26 Princess Plaza, Ado Langbasa Road, Ajah, Lagos.
						</span>
						<span className="text-[2rem] text-[#787878]">
							+234 704 307 2166
						</span>
						<span className="text-[2rem] text-[#787878]">
							seridanpartners@gmail.com
						</span>
					</div>
					<div className="flex items-center gap-6 mt-10">
						<Link href={"#"}>
							<FacebookIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<InstagramIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<TwitterXIcon className="fill-primary" />
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
