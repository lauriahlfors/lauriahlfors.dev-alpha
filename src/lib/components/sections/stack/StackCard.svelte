<script lang="ts">
	import { normalizeString } from '$lib/utils';

	type StackItem = { title: string; subtitle: string; link: string };
	let { link = '', title = '', subtitle = '' }: StackItem = $props();
</script>

<a href={`${link}`} target="_blank" rel="noopener noreferer">
	<div class="bg-background col-span-1 flex min-h-28 items-center justify-start gap-4 px-6">
		<img
			class="size-12 2xl:size-14"
			width="128px"
			height="128px"
			src={`/logos/${normalizeString(title)}.png`}
			alt={`${title}`}
		/>
		<div>
			<h1
				class="font-google-inter text-primary-text text-xl font-medium tracking-tight 2xl:text-2xl"
			>
				{title}
			</h1>
			<p class="font-google-inter text-xs font-light text-neutral-500 2xl:text-sm">
				{subtitle}
			</p>
		</div>
	</div></a
>
