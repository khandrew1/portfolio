import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

interface EducationCardProps {
	name: string;
	graduateDate: string;
	location: string;
	gpa: string;
	courseWork: string[];
	clubs: string[];
}

const EducationCard = ({
	name,
	graduateDate,
	location,
	gpa,
	courseWork,
	clubs,
}: EducationCardProps) => {
	return (
		<Card>
			<CardHeader className="flex flex-col w-full">
				<CardTitle className="flex flex-row justify-between w-full">
					<p>{name}</p>
					<p className="font-normal text-sm">Graduated: {graduateDate}</p>
				</CardTitle>
				<CardDescription className="flex flex-row justify-between w-full">
					<p>GPA: {gpa}</p>
					<p>{location}</p>
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-row justify-evenly w-full">
				<ul className="text-center">
					<p className="font-bold text-xl">Relevant Course Work</p>
					{courseWork.map((point) => (
						<li className="py-1" key={point}>
							{point}
						</li>
					))}
				</ul>
				<ul className="text-center">
					<p className="font-bold text-xl">Associated Clubs</p>
					{clubs.map((point) => (
						<li className="py-1" key={point}>
							{point}
						</li>
					))}
				</ul>
			</CardContent>
		</Card>
	);
};

export default EducationCard;
