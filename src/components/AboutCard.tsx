import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const AboutCard = () => {
	return (
		<Card className="w-3/5">
			<CardHeader>
				<CardTitle className="flex flex-row w-full justify-between h-[125px] gap-x-3">
					<Image
						src="/headshot.jpg"
						alt="Headshot"
						height={125}
						width={125}
						className="rounded-full"
					/>
					<div className="flex flex-col justify-between h-full w-full py-4">
						<p>Hello my name is...</p>
						<p className="text-3xl text-center">Andrew Khadder</p>
						<p className="text-right">AI Full Stack Engineer</p>
					</div>
				</CardTitle>
			</CardHeader>
			<CardContent>
				<CardDescription className="text-bold text-md">
					I'm a full-stack engineer looking for a full time job! I'm a recent
					computer science graduate from UC Riverside Most of my projects focus
					on dashboards and AI integration.
					<br />
					Check out some of my projects on the left!
				</CardDescription>
			</CardContent>
		</Card>
	);
};

export default AboutCard;
