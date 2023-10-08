import React from "react";

interface NavItemProps {
	href: string;
	label: string;
}

export default function NavItem({ href, label }: NavItemProps) {
	return (
		<li className="mr-6">
			<a className="text-gray-400 hover:text-gray-200" href={href}>
				{label}
			</a>
		</li>
	);
}
