import Image from "next/image";
import React from "react";

export default function page() {
	return (
		<main>
			<section className="bg-primary h-[300px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					Our Attorneys
				</h1>
			</section>
			<section className="py-16 px-8 lg:px-[30px] xl:px-[100px]">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					<div className="flex flex-col w-full">
						<Image
							src={
								"https://images.unsplash.com/photo-1644424234835-37c1aed58a60?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							width={300}
							height={450}
							alt="Seridan Partners"
							className="w-full object-cover h-[350px] xl:h-[450px]"
						/>
						<div className="flex flex-col gap-y-3 mt-5">
							<h5 className="text-3xl">Tobi Balogun, Esq.</h5>
							<span className="text-3xl underline font-medium">
								Senior Counsel
							</span>
							<p className="text-2xl">
								Criminal and Commercial Litigation, Insolvency, Family Law,
								Property and Real Estate Practice, Project Finance, Business
								Advisory and Regulatory Compliance.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<Image
							src={
								"https://images.unsplash.com/photo-1644424234835-37c1aed58a60?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							width={300}
							height={450}
							alt="Seridan Partners"
							className="w-full object-cover h-[350px] xl:h-[450px]"
						/>
						<div className="flex flex-col gap-y-3 mt-5">
							<h5 className="text-3xl">Tobi Balogun, Esq.</h5>
							<span className="text-3xl underline font-medium">
								Senior Counsel
							</span>
							<p className="text-2xl">
								Criminal and Commercial Litigation, Insolvency, Family Law,
								Property and Real Estate Practice, Project Finance, Business
								Advisory and Regulatory Compliance.
							</p>
						</div>
					</div>
					<div className="flex flex-col w-full">
						<Image
							src={
								"https://images.unsplash.com/photo-1644424234835-37c1aed58a60?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							}
							width={300}
							height={450}
							alt="Seridan Partners"
							className="w-full object-cover h-[350px] xl:h-[450px]"
						/>
						<div className="flex flex-col gap-y-3 mt-5">
							<h5 className="text-3xl">Tobi Balogun, Esq.</h5>
							<span className="text-3xl underline font-medium">
								Senior Counsel
							</span>
							<p className="text-2xl">
								Criminal and Commercial Litigation, Insolvency, Family Law,
								Property and Real Estate Practice, Project Finance, Business
								Advisory and Regulatory Compliance.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
