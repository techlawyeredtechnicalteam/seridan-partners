import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import FacebookIcon from "@/components/shared/icons/FacebookIcon";
import TwitterXIcon from "@/components/shared/icons/TwitterXIcon";

export default function page() {
	return (
		<>
			<section className="flex items-center justify-center py-[30px]">
				<div className="w-[95%] md:w-[80%] lg:w-[60%] pb-[20px] border-b border-b-[#d2d2d2] flex flex-col md:flex-row md:items-center justify-between gap-y-10">
					<div className="flex items-center gap-[10px]">
						<Image
							src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt="Setidan CEO"
							width={500}
							height={500}
							className="w-[45px] h-[45px] rounded-full object-cover object-top"
						/>
						<div className="flex flex-col gap-y-2">
							<span className="text-[1.7rem] font-medium text-text-black">
								Simbiat Lola
							</span>
							<span className="text-text-black text-2xl flex items-center gap-2">
								January 30, 2025{" "}
								<span className="w-[5px] h-[5px] rounded-full bg-primary flex"></span>{" "}
								5 min read
							</span>
						</div>
					</div>
					<div className="flex items-center gap-[33px]">
						<Link href={"#"}>
							<InstagramIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<FacebookIcon className="fill-primary" />
						</Link>
						<Link href={"#"}>
							<TwitterXIcon className="fill-primary" />
						</Link>
					</div>
				</div>
			</section>
			<section className="flex items-center justify-center">
				<div className="w-[95%] md:w-[80%] lg:w-[60%]">
					<Image
						className="w-full md:h-[400px] lg:h-[600px] object-cover object-top"
						width={900}
						height={600}
						alt="Seridan"
						src={
							"https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						}
						priority={true}
					/>
				</div>
			</section>
			<section className="flex items-center justify-center py-[30px]">
				<div className="w-[95%] md:w-[80%] lg:w-[60%]">
					<h1 className="text-text-black font-bold text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[4.5rem]">
						Staying Sharp: How Legal Professionals Can Thrive Through Stressful
						Seasons
					</h1>
					<article className="text-[1.7rem]">
						{`Lorem ipsum dolor sit amet consectetur. Leo amet fermentum orci est
						tempus etiam pretium porttitor. Est egestas habitasse pharetra sed
						diam rhoncus. Eu nunc ornare ultrices amet egestas tortor erat. At
						scelerisque aliquam orci a nunc arcu pellentesque nibh. Amet orci
						cursus turpis arcu euismod turpis blandit. Posuere mi mauris
						sagittis etiam eu tincidunt pulvinar commodo netus. Sem nam facilisi
						erat facilisis scelerisque cursus nisl bibendum. Purus condimentum
						etiam ipsum orci semper ac penatibus. In id maecenas commodo in
						bibendum. Ipsum tellus sit non arcu in quisque mauris ipsum. In est
						ligula nam sed feugiat. Nisi in massa neque a rutrum. Sit hac ac
						nunc semper. Sed et eget eu sagittis tortor vitae adipiscing. Mauris
						cursus mi imperdiet pulvinar at congue faucibus. Donec habitant
						aliquam bibendum suscipit ac neque donec. Cursus aliquam leo aliquet
						ante mauris curabitur diam adipiscing. Non montes tellus vitae
						cursus est accumsan. Diam turpis fermentum ipsum risus cursus
						suspendisse. Bibendum quis arcu commodo ut nullam. Faucibus morbi
						iaculis in imperdiet lacus. Pretium dui nisl malesuada senectus
						consequat gravida aliquam pellentesque. Lobortis purus nunc lobortis
						lectus odio diam nunc eget molestie. Sapien diam natoque vulputate
						faucibus egestas quam orci nec vitae. Ac dolor imperdiet morbi
						commodo facilisis dignissim augue fames. Sagittis nec lorem nibh
						enim commodo eget. Lectus dictum aenean vel ipsum facilisis aenean
						nisi pellentesque lectus. Aliquet elit felis adipiscing pellentesque
						at. Condimentum et molestie bibendum turpis egestas cum vitae
						ultrices.`}
					</article>
				</div>
			</section>
		</>
	);
}
