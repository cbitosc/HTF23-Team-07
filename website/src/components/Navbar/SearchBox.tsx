"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
	const [search, setSearch] = React.useState("");
	return (
		<div>
			<FaSearch />
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}
