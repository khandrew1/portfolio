"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
	const links = [
		{ title: "about", link: "/about" },
		{ title: "experience", link: "/experience" },
		{ title: "education", link: "/education" },
		{ title: "projects", link: "/projects" },
		{ title: "resume", link: "/Andrew_Khadder_resume.pdf" },
	];

	return (
		<Card className="flex items-center justify-center w-full md:w-2/12 h-fit">
			<CardHeader className="w-full text-center">
				<CardTitle>andrew khadder</CardTitle>
			</CardHeader>
			<CardContent className="px-0 md:px-6">
				<NavigationMenu>
					<NavigationMenuList className="flex flex-row md:flex-col">
						{links.map(({ title, link }) => (
							<NavigationMenuItem key={title}>
								<NavigationMenuLink asChild>
									<Link href={link}>{title}</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</CardContent>
		</Card>
	);
};

export default Navigation;
