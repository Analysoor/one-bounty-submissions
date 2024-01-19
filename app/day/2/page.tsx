import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import {GithubIcon,DiscordIcon} from "@/components/icons";
import SubmissionsDays from "@/components/submissions-days";

export default function Day1() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({color: "blue"})}>ONE</h1>
				<br/>
				<h1 className={title()}>Art bounty submissions&nbsp;</h1>
				<h2 className={subtitle({class: "mt-4"})}>
					Submissions for day 2 voting
				</h2>
			</div>

			<div className="flex gap-3 flex-col sm:flex-row">
			<Link
					isExternal
					className={buttonStyles({variant: "bordered", radius: "full"})}
					href={'https://discord.com/invite/analysoor'}
				>
					<DiscordIcon size={20}/>
					Vote on Discord
				</Link>
				<Link
					isExternal
					href={'https://docs.google.com/spreadsheets/d/1O4lLBqlND_lVZnckIMG2pR0HVhMrPSRADMg2IvlX12I/'}
					className={buttonStyles({radius: "full", variant: "bordered"})}
				>
					Submissions Sheet
				</Link>
				<Link
					isExternal
					className={buttonStyles({variant: "bordered", radius: "full"})}
					href={'https://github.com/Analysoor/bounties/issues/1'}
				>
					<GithubIcon size={20}/>
					GitHub Bounty Issue
				</Link>
			</div>

			<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Vote on discord
					</span>
			</Snippet>
			<SubmissionsDays day={2}/>
		
		</section>
	);
}
