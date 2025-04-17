import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<main>
			<section className="bg-primary h-[300px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					CAREERS
				</h1>
			</section>
			<section className="py-12 flex flex-col items-center justify-center">
				<div className="w-[95%] md:w-[90%] lg:w-[75%] xl:w-[60%] flex flex-col gap-y-5">
					<p className="text-[1.7rem] text-[#787878] text-center">
						To join us, send an email to{" "}
						<Link
							className="font-semibold text-primary underline"
							href={"emailto:support@seridanpartners.com"}>
							seridanpartners@gmail.com
						</Link>
					</p>
					<p className="text-[1.7rem] text-[#787878] text-center">
						We deliver our services in the most available cost-effective way, at
						record time, within the ambit of the law. We know the law as it is
						but we are ready to make our own contributions to what the law ought
						to be, especially where that approach serves the interests of our
						clients and that of the public at large.
					</p>
				</div>
			</section>
		</main>
	);
}
