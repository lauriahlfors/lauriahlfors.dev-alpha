<script lang="ts">
	import { extractCharacters, normalizeString } from '$lib/utils';
	import Container from '$lib/components/theme/Container.svelte';
	import Divider from '$lib/components/theme/Divider.svelte';

	let effectWord = extractCharacters('experiences');

	type StackItem = {
		title: string;
		subtitle: string;
		link: string;
	};

	const stackListTech: StackItem[] = [
		{
			title: 'Next.js',
			subtitle: 'Dynamic React Framework',
			link: 'https://nextjs.org/'
		},
		{
			title: 'Svelte',
			subtitle: 'JavaScript Framework',
			link: 'https://svelte.dev/'
		},
		{
			title: 'Tailwind CSS',
			subtitle: 'CSS Styling',
			link: 'https://tailwindcss.com/'
		},
		{
			title: 'Three.js',
			subtitle: '3D in JavaScript',
			link: 'https://threejs.org/'
		},
		{
			title: 'Supabase',
			subtitle: 'PostgreSQL Database & Authentication',
			link: 'https://supabase.com/'
		},
		{
			title: 'Cloudflare',
			subtitle: 'Domains & DNS Protection',
			link: 'https://www.cloudflare.com/'
		}
	];
	const stackListCreative: StackItem[] = [
		{
			title: 'Figma',
			subtitle: 'UI & UX Design',
			link: 'https://www.figma.com/'
		},
		{
			title: 'Blender',
			subtitle: '3D Modeling & Texturing',
			link: 'https://www.blender.org/'
		},
		{
			title: 'Lumix',
			subtitle: 'Lumix S5 II Camera  ',
			link: 'https://www.panasonic.com/uk/consumer/cameras-camcorders/lumix-mirrorless-cameras/lumix-s-full-frame-cameras/dc-s5m2.html'
		},
		{
			title: 'DaVinci Resolve',
			subtitle: 'Video Editing & Compositing',
			link: 'https://affinity.serif.com/'
		},
		{
			title: 'Adobe CC',
			subtitle: 'Photo & Texture Manipulation',
			link: 'https://creativecloud.adobe.com/'
		},
		{
			title: 'Affinity Suite',
			subtitle: 'Photo & Texture Manipulation',
			link: 'https://affinity.serif.com/en-gb/'
		}
	];
</script>

<Container className="p-0">
	<div class="relative flex h-72 flex-col items-center justify-center px-4">
		<h1
			class="font-google-inter text-primary-text z-10 w-[320px] px-12 text-center text-4xl font-light tracking-tight lg:w-[515px] lg:text-5xl"
		>
			<span class="font-google-instrument text-primary italic">Tools</span> &
			<span class="font-google-instrument text-primary italic">Technologies</span> <br /> I use to
			create digital
			{#each effectWord as letter, i (i)}
				<span class="color-cycle" style="--i: {i};">{letter}</span>
			{/each}.
		</h1>
		<div class="grid-bg"></div>
	</div>

	<div class="bg-secondary h-[1px]"></div>

	<!-- WebDev Software -->
	<div>
		<div class="bg-secondary grid gap-[1px] lg:grid-cols-3 lg:grid-rows-3">
			<!-- Header -->
			<div class="bg-background row-span-full p-6">
				<h1
					class="font-google-instrument text-primary decoration text-3xl tracking-tight lg:text-4xl"
				>
					Web Development
				</h1>
			</div>

			<!-- List tech items. -->
			{#each stackListTech as stackItem}
				<a href={`${stackItem.link}`} target="_blank" rel="noopener noreferer">
					<div class="bg-background col-span-1 flex min-h-28 items-center justify-start gap-4 px-6">
						<img
							class="size-12 2xl:size-14"
							width="128px"
							height="128px"
							src={`/logos/${normalizeString(stackItem.title)}.png`}
							alt={`${stackItem.title}`}
						/>
						<div>
							<h1
								class="font-google-inter text-primary-text text-xl font-medium tracking-tight 2xl:text-2xl"
							>
								{stackItem.title}
							</h1>
							<p class="font-google-inter text-xs font-light text-neutral-500 2xl:text-sm">
								{stackItem.subtitle}
							</p>
						</div>
					</div></a
				>
			{/each}
		</div>
	</div>

	<div class="bg-secondary h-[1px]"></div>

	<!-- Creative Software -->
	<div>
		<div class="bg-secondary grid gap-[1px] lg:grid-cols-3 lg:grid-rows-3">
			<!-- Header -->
			<div class="bg-background row-span-full p-6">
				<h1
					class="font-google-instrument text-primary decoration text-3xl tracking-tight lg:text-4xl"
				>
					Creative Work
				</h1>
			</div>

			<!-- List tech items. -->
			{#each stackListCreative as stackItem}
				<StackCard link={stackItem.link} title={stackItem.title} subtitle={stackItem.subtitle} />
			{/each}
		</div>
	</div>
</Container>
<Divider />
