import JournalCard from "@/components/shared/JournalCard";
import Pagination from "@/components/shared/Pagination";
import React from "react";

export default function page() {
	async function doSomethng() {
		"use server";
	}

	return (
		<main>
			<section className="bg-primary h-[300px] flex items-center justify-center">
				<h1 className="text-[3rem] md:text-[4rem] font-bold text-white">
					OUR JOURNAL
				</h1>
			</section>
			<section className="py-[30px] px-[15px] md:px-[40px]">
				<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px]">
					<JournalCard />
					<JournalCard />
					<JournalCard />
					<JournalCard />
				</div>
				<div className="mt-[40px] flex items-center justify-center">
					<Pagination
						totalPages={10}
						currentPage={1}
						setCurrentPage={doSomethng}
					/>
				</div>
			</section>
		</main>
	);
}
