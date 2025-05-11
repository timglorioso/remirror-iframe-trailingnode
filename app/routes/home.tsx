import { IframeExtension, TrailingNodeExtension } from "remirror/extensions";
import {
	EditorComponent,
	Remirror,
	useCommands,
	useRemirror
} from "@remirror/react";
import "remirror/styles/all.css";

import type { Route } from "./+types/home";

function Button() {
	const { addIframe } = useCommands();

	return (
		<button
			onClick={() => {
				addIframe({
					src: "https://www.remirror.io/",
					height: 300,
					width: 500,
				})
			}}
		>
			Add iframe
		</button>
	);
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { manager, state, setState } = useRemirror({
		extensions: [
			new IframeExtension({ enableResizing: false }),
			new TrailingNodeExtension(),
		],
  });

	return (
		<div className="remirror-theme">
			<Remirror
				manager={manager}
				state={state}
				onChange={({ state }) => {
					setState(state);
				}}
			>
				<Button />
				<EditorComponent />
			</Remirror>
		</div>
	);
}
