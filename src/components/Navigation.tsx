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
		<Card className="flex items-center justify-center w-2/12 h-fit">
			<CardHeader className="w-full text-center">
				<CardTitle>andrew khadder</CardTitle>
			</CardHeader>
			<CardContent>
				<NavigationMenu>
					<NavigationMenuList className="flex flex-col">
						{links.map(({ title, link }, idx) => (
							<NavigationMenuItem key={idx}>
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
