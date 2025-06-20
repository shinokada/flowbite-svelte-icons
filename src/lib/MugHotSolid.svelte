<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import clsx from 'clsx';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};
	const sizes = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8'
	};

	let {
		size = ctx.size || 'md',
		color = ctx.color || 'currentColor',
		title,
		desc,
		class: className,
		ariaLabel = 'mug hot solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	{...restProps}
	class={twMerge(clsx('shrink-0', sizes[size], className))}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 24 24"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M11 3c0-.55228-.4477-1-1-1-.55228 0-1 .44772-1 1 0 .35778-.09872.50986-.19828.61606-.14832.15821-.36754.28572-.7723.50159l-.04537.02415c-.34513.18363-.84839.45139-1.24483.87426C6.27628 5.50986 6 6.15778 6 7c0 .55228.44772 1 1 1 .55229 0 1-.44772 1-1 0-.35778.09873-.50986.19829-.61606.14832-.15821.36754-.28572.7723-.50159l.04536-.02415c.34514-.18363.8484-.45139 1.24485-.87426C10.7237 4.49014 11 3.84222 11 3Zm5 0c0-.55228-.4477-1-1-1s-1 .44772-1 1c0 .35778-.0987.50986-.1983.61606-.1483.15821-.3675.28572-.7723.50159l-.0453.02415c-.3452.18363-.8484.45139-1.2449.87426C11.2763 5.50986 11 6.15778 11 7c0 .55228.4477 1 1 1s1-.44772 1-1c0-.35778.0987-.50986.1983-.61606.1483-.15821.3675-.28572.7723-.50159l.0454-.02415c.3451-.18363.8484-.45139 1.2448-.87426C15.7237 4.49014 16 3.84222 16 3Z"
	/>
	<path
		fill-rule="evenodd"
		d="M5 10c-.28252 0-.55187.1195-.74145.329-.18958.2095-.2817.4894-.25358.7705l.6398 6.398C4.90037 20.0535 7.0512 22 9.61995 22h.76015c2.3975 0 4.431-1.6957 4.8992-4H17c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3h-1.095l.09-.9005c.0282-.2811-.064-.561-.2535-.7705-.1896-.2095-.459-.329-.7415-.329H5Zm12 6h-1.495l.2-2H17c.5523 0 1 .4477 1 1s-.4477 1-1 1Z"
		clip-rule="evenodd"
	/>
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.codewithshin.com/)
## Props
@prop size = ctx.size || 'md'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop class: className
@prop ariaLabel = 'mug hot solid'
@prop ...restProps
-->
