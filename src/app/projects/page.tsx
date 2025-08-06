import ProjectCard from "@/components/ProjectCard";
import type { ProjectType } from "@/data/projects";
import { PROJECTS } from "@/data/projects";

const Page = () => {
	return (
		<div className="flex flex-col gap-y-3">
			{PROJECTS.map(({ name, stack, description, links }: ProjectType, idx) => (
				<ProjectCard
					key={idx}
					name={name}
					stack={stack}
					description={description}
					links={links}
				/>
			))}
		</div>
	);
};

export default Page;
