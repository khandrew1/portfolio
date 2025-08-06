import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface ExperienceCardProps {
	role: string;
	companyName: string;
	startDate: string;
	endDate: string;
	location: string;
	points: string[];
}

const ExperienceCard = ({
	role,
	companyName,
	startDate,
	endDate,
	location,
	points,
}: ExperienceCardProps) => {
	return (
		<Card>
			<CardHeader className="flex flex-col w-full">
				<CardTitle className="flex flex-row justify-between w-full">
					<p>{role}</p>
					<p className="font-normal text-sm">{`${startDate} - ${endDate}`}</p>
				</CardTitle>
				<CardDescription className="flex flex-row justify-between w-full">
					<p>{companyName}</p>
					<p>{location}</p>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul>
					{points.map((point) => (
						<li className="py-1" key={point}>
							{point}
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default ExperienceCard;
