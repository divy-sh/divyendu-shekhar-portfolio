<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import FaCopy from 'svelte-icons/fa/FaCopy.svelte';
	import Tooltip from '$lib/components/Tooltip.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { customBackground } from '$lib/data/store';
	import { Email } from '$lib/data/Constants';
    import Projects from '$lib/components/projects.svelte';
    import Education from '$lib/components/education.svelte';
    import Experiences from '$lib/components/experiences.svelte';
    import Achievements from '$lib/components/achievements.svelte';
    import { onMount } from 'svelte';

	let copied = false;

	interface CssVariables {
		[name: string]: string;
	}

	const cssVariables = (
		node: HTMLElement,
		variables: CssVariables
	): { update: (variables: CssVariables) => void } => {
		setCssVariables(node, variables);

		return {
			update(variables: CssVariables) {
				setCssVariables(node, variables);
			}
		};
	};

	const setCssVariables = (node: HTMLElement, variables: CssVariables): void => {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	};

	const copy = () => {
		navigator.clipboard.writeText(Email);
	};

	let section = "#home";
	let segments: any;
	onMount(() => {
		segments = document.querySelectorAll('section');
		updateNavSelection();
	});

	const handleScroll = (_event: any) => {
		updateNavSelection();
	};

	const updateNavSelection = () => {
		const viewportCenter = window.innerHeight / 2;
		for (const segment of segments) {
			if (!(segment instanceof HTMLElement)) continue;
			const rect = segment.getBoundingClientRect();
			const segmentTop = rect.top;
			const segmentBottom = rect.bottom;
			if (segmentTop <= viewportCenter && segmentBottom >= viewportCenter) {
				section = '#' + segment.id;
				break;
			}
		}
	}
</script>

<svelte:body use:cssVariables={{ background: $customBackground }} on:scroll={handleScroll} />

<Modal>
	<div slot="content" class="modalContainer">
		<h1>Email:</h1>
		<div>
			<p>{Email}</p>
			&nbsp;
			<div class="tooltip">
				<Tooltip tooltip={copied ? 'Copied' : 'Copy'}>
					<div
						id="clipboard"
						role="button"
						tabindex="0"
						on:keypress={() => {
							copied = true;
							copy();
							setTimeout(() => {
								copied = false;
							}, 500);
						}}
						on:click={() => {
							copied = true;
							copy();
							setTimeout(() => {
								copied = false;
							}, 500);
						}}
					>
						<div>
							<FaCopy />
						</div>
					</div>
				</Tooltip>
			</div>
		</div>
		<Button>Send Email</Button>
	</div>
</Modal>
<Navbar segment={section} />

<section id="home">
	<slot />
</section>
<section id="experience">
	<Experiences />
</section>
<section id="education">
	<Education />
</section>
<section id="projects">
	<Projects />
</section>
<section id="achievements">
	<Achievements />
</section>
<style>
	* {
		box-sizing: border-box;
	}

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0a0908;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: white;
		margin: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: white;
		background: #ca3c25;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 100px;
		}
	}

	:global(a) {
		text-decoration: none;
	}

	:global(a) {
		text-decoration: none;
	}

	.modalContainer div {
		display: flex;
		margin-bottom: 20px;
	}

	.modalContainer p {
		margin: 0;
	}

	:global(.tooltip) {
		visibility: hidden;
	}

	@media (min-width: 900px) {
		:global(.tooltip) {
			visibility: visible;
		}
	}
</style>
