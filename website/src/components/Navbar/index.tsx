import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/assets/images/logo.png";
import NavItem from "./NavItem";
import SearchBox from "./SearchBox";
import UserProfile from "./UserProfile";
import LoginBtn from "../LoginBtn";
import SignupBtn from "../SignupBtn";

const Navbar = () => {
	const loggedIn = false;
	return (
		<nav className="flex p-8 sticky top-0">
			<Link href="/" className="flex items-center gap-2 flex-1">
				<Image src={logo} alt="GetURMovie Logo" width={32} />
				<span className="text-xl font-bold">GetURMovie</span>
			</Link>
			<ul className="flex flex1">
				<NavItem href="/top-charts" label="Top Charts" />
				<NavItem href="/latest" label="Latest" />
				<NavItem href="/all-movies" label="All Movies" />
				<SearchBox />
			</ul>

			{loggedIn ? (
				<UserProfile />
			) : (
				<div className="flex flex-1 justify-end gap-4">
					<LoginBtn />
					<SignupBtn />
				</div>
			)}
		</nav>
	);
};

export default Navbar;
