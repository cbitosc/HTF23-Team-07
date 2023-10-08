"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
	const [search, setSearch] = React.useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(search);
	};
	return (
		<form className="flex gap-3 items-center" onSubmit={handleSubmit}>
			<button
				className="bg-[#444] w-10 h-10 rounded-md flex items-center justify-center"
				aria-label="search button"
				type="submit"
			>
				<FaSearch />
			</button>
			<input
				className="pl-4 bg-gray-100 dark:bg-[#222] focus:outline-dashed outline-2 outline-gray-600 rounded-md p-2 text-base h-10 text-gray-900 dark:text-gray-100"
				type="text"
				value={search}
				placeholder="Search for movies"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
}
