<script lang="ts">
	import Container from '$lib/components/theme/Container.svelte';
	import Divider from '$lib/components/theme/Divider.svelte';
	import InnerDivider from '../theme/InnerDivider.svelte';

	type WorkExperience = {
		position: string;
		company: string;
		description: string;
		dateRange: string;
	};

	const experiences: WorkExperience[] = [
		{
			position: 'Replay Operator',
			company: 'Elisa Esports, Elisa Oyj',
			description:
				'Operated instant replays and collected game highlights for Elisa Esports Counter-Strike broadcasts. Coordinated with director and casters in a live environment. ',
			dateRange: 'May 2022 - Oct 2024'
		},
		{
			position: 'Drone & Camera Operator',
			description:
				'Operated camera and drone for multiple live SnowCross broadcasts in challenging outdoor conditions. Traveled across Finnish Lapland, ensuring proper handling, transportation, and maintenance of broadcasting equipment.',
			company: 'Livesports Oy',
			dateRange: 'Jan 2020 - May 2022'
		},
		{
			position: 'Junior VFX Compositor',
			description:
				'Worked on keying, compositing, and internal deliverables for domestic and international TV and film productions. Collaborated with a multinational creative team and gained valuable experience working alongside some of the best VFX talent in Finland.',
			company: 'Troll Productions Oy',
			dateRange: 'Oct 2018 - Jun 2019'
		}
	];
</script>

<Container className="p-0">
	<!-- Header -->
	<div class="relative flex h-72 flex-col items-center justify-center">
		<h1
			class="font-google-inter text-primary-text z-10 w-[320px] px-12 text-center text-4xl font-light tracking-tight lg:w-[515px] lg:text-5xl"
		>
			My work <span class="font-google-instrument text-primary italic">experience</span>.
		</h1>
		<div class="grid-bg"></div>
	</div>

	<!-- Divider -->
	<InnerDivider />

	<div class="bg-secondary grid grid-cols-1 gap-[1px] 2xl:grid-cols-3">
		<div class="bg-background row-span-full flex flex-col gap-4 p-8">
			<h1
				class="font-google-instrument text-primary decoration text-3xl tracking-tight 2xl:text-4xl"
			>
				About
			</h1>
			<InnerDivider />
			<p class="font-google-inter leading-5 font-light tracking-tight">
				Passionate about film, media, and digital arts, I’ve had the opportunity to work in various
				roles within the media production industry. My experience ranges from solo projects to
				collaborating with large international post- and live-production crews, and everything in
				between.
			</p>
			<p class="font-google-inter leading-5 font-light tracking-tight">
				Now I'm looking to expand my horizons into combining my passion for digital media with
				software development!
			</p>
		</div>

		<div class="bg-secondary col-span-2 grid grid-flow-row gap-[1px]">
			{#each experiences as experienceItem}
				<div class="bg-background col-span-1 flex flex-col gap-4 p-8">
					<div class="flex items-start gap-4">
						<h1 class="font-google-instrument text-primary text-3xl tracking-tight 2xl:text-4xl">
							{experienceItem.position}
						</h1>
					</div>

					<InnerDivider />

					<div class="flex flex-col gap-2 2xl:flex-row 2xl:items-center 2xl:gap-4">
						<h2 class="font-google-inter text-primary-text tracking-tight">
							{experienceItem.company}
						</h2>
						<span class="hidden 2xl:inline-block">✦</span>
						<p class="font-google-inter tracking-tight">{experienceItem.dateRange}</p>
						<span class="hidden 2xl:inline-block">✦</span>
						<div class="bg-foreground h-fit w-fit rounded-full px-3 py-1">
							<p class="font-google-inter text-background text-xs font-medium tracking-tight">
								Freelance
							</p>
						</div>
					</div>

					<InnerDivider />

					<p class="text-primary-text font-google-inter leading-5 font-light tracking-tight">
						{experienceItem.description}
					</p>
				</div>
			{/each}
		</div>
	</div>
</Container>
<Divider />
