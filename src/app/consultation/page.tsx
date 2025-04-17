import AppButton from "@/components/shared/AppButton";
import FormInput from "@/components/shared/FormInput";
import React from "react";

export default function page() {
	return (
		<main>
			<section className="bg-primary h-[300px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					CONSULTATION
				</h1>
			</section>
			<section className="py-12 flex flex-col items-center justify-center">
				<div className="w-[95%] md:w-[90%] lg:w-[75%] xl:w-[60%] flex flex-col gap-y-12">
					<p className="text-[1.7rem] text-[#787878] text-center">
						The purpose of an initial consultation is for the attorney to advise
						you, the prospective client what, if anything, may be done for you,
						and what the minimum fee, therefore, will be necessary. The purpose
						is not to render a definitive legal opinion as it may be impossible
						to fully assess a matter within the time frame allotted for a
						consultation or with the information, or documents, that you may be
						able to provide at the initial consultation
					</p>
					<div className="w-full flex flex-col gap-y-10">
						<div className="flex flex-col gap-y-10 md:flex-row items-center gap-x-10">
							<FormInput placeholder={"Name"} />
							<FormInput placeholder={"Phone Number"} />
						</div>
						<div className="flex flex-col gap-y-10 md:flex-row items-center gap-x-10">
							<FormInput placeholder={"Email"} />
							<FormInput placeholder={"Subject"} />
						</div>
						<FormInput.TextArea
							placeholder={
								"Briefly explain what you may need advice about or assistance with"
							}
						/>
						<FormInput.TextArea
							placeholder={
								"Ideally, if things turn out precisely the way you want, what would be the outcome?"
							}
						/>
						<FormInput
							placeholder={
								"Are we the first attorneys you have consulted regarding this matter?"
							}
						/>
						<FormInput placeholder={"How did you learn of our office?"} />
						<div>
							<AppButton classname="!bg-primary !w-[100px] !text-secondary">
								Submit
							</AppButton>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
