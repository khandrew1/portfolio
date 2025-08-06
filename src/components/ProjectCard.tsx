import Link from "next/link";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import type { LinkType } from "@/data/projects";

interface ProjectCardProps {
	name: string;
	stack: string[];
	description: string[];
	links: LinkType[];
}

const ProjectCard = ({ name, stack, description, links }: ProjectCardProps) => {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>{name}</CardTitle>
				<CardDescription>{stack.join(", ")}</CardDescription>
			</CardHeader>
			<CardContent>
				<ul>
					{description.map((point, idx) => (
						<li key={idx}>{point}</li>
					))}
				</ul>
			</CardContent>
			<CardFooter>
				{links.map(({ url, icon }, idx) => {
					const Icon = icon;

					return (
						<Link href={url} key={idx}>
							<Icon className="w-8 h-8" />
						</Link>
					);
				})}
			</CardFooter>
		</Card>
	);
};

export default ProjectCard;
