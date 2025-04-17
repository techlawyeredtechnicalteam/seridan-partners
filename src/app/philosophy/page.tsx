import BookIcon from "@/components/shared/icons/BookIcon";
import React from "react";

export default function page() {
	return (
		<main>
			<section className="bg-primary h-[300px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					OUR PHILOSOPHY
				</h1>
			</section>
			<section className="py-12 flex items-center justify-center">
				<div className="w-[95%] md:w-[90%] lg:w-[75%] xl:w-[60%] flex flex-col gap-y-12">
					<div>
						<div className="flex items-center gap-5">
							<BookIcon />
							<h2 className="text-[3rem] font-semibold">Mission Statement</h2>
						</div>
						<p className="text-[2rem] text-[#787878] mt-3">
							Our mission is to provide composite and qualitative legal service
							on schedule by adopting an innovative and practical approach in
							achieving and meeting our clients needs and interest comparable to
							international best practices and standards
						</p>
					</div>
					<div>
						<div className="flex items-center gap-5">
							<BookIcon />
							<h2 className="text-[3rem] font-semibold">Vision Statement</h2>
						</div>
						<p className="text-[2rem] text-[#787878] mt-3">
							To be in a position to catch up with the ever changing and dynamic
							legal and judicial system and grow an international firm with best
							legal practice and professionalism and reflect them on local
							economies and practices.
						</p>
					</div>
					<div>
						<div className="flex items-center gap-5">
							<BookIcon />
							<h2 className="text-[3rem] font-semibold">{`Firm's Practice`}</h2>
						</div>
						<p className="text-[2rem] text-[#787878] mt-3">
							Our firm’s practice is hinged on the competence and dedication of
							our highly skilled and well-motivated team members, who continue
							to work in synergy to accomplish the goals and vision of the firm.
							Our practice employs a blend of competent professionals and
							para-legal team and up-to-date technology to deliver value to our
							clients. We strive to sustain our reputation and position, in the
							provision of exemplary service to our clients.
						</p>
					</div>
					<div>
						<div className="flex items-center gap-5">
							<BookIcon />
							<h2 className="text-[3rem] font-semibold">{`Firm's Culture`}</h2>
						</div>
						<p className="text-[2rem] text-[#787878] mt-3">
							The culture of the Firm is a unique mix, meshing a profound
							respect for the law and high legal standards within a collegial
							spirit, a recognized ability to finding creative solutions to
							problems and a commitment to providing our clients with high level
							legal counsel on a timely and cost-effective basis. Holding true
							to this vision, the firm is growing and is thriving with energy
							and enthusiasm because of our commitment to our clients, our
							profession and our people
						</p>
					</div>
					<div>
						<div className="flex items-center gap-5">
							<BookIcon />
							<h2 className="text-[3rem] font-semibold">{`Core Values`}</h2>
						</div>
						<p className="text-[2rem] text-[#787878] mt-3">
							Excellence <br /> Versatility <br /> Efficiency <br /> Integrity
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
