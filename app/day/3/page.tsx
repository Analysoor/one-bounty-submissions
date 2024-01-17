import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { title, subtitle } from "@/components/primitives";
import {GithubIcon} from "@/components/icons";
import Submissions from "@/components/submissions";

export default function Day3() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({color: "blue"})}>ONE</h1>
				<br/>
				<h1 className={title()}>Art bounty submissions&nbsp;</h1>
				<h2 className={subtitle({class: "mt-4"})}>
					Submissions Day THREE
				</h2>
			</div>

			<div className="flex gap-3 flex-col sm:flex-row">
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
						Submissions are randomly ordered
					</span>
			</Snippet>
			<h2 className={title({class: "mt-4"})}>
				COMING SOON
			</h2>
			{
				/* TODO: filter submissions selected for day one
				 *	<Submissions/>
				 */
			}
		</section>
	);
}
