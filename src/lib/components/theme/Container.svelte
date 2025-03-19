<script lang="ts">
	import { type Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	import { type ClassValue } from 'clsx';

	interface Props {
		children?: Snippet;
		className?: ClassValue;
	}

	let { children, className = '' }: Props = $props();
</script>

<div class={cn('border-secondary mx-6 border-x-[1px] p-4 lg:mx-48 2xl:mx-80 ' + className)}>
	{#if children}
		{@render children()}
	{/if}
</div>
