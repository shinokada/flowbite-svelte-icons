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
		ariaLabel = 'droplet bottle alt solid',
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
		d="M12 11c-.2299 0-.4004.0774-.4693.1116-.0839.0417-.1491.0873-.1903.1184-.083.0626-.1535.1309-.2048.1837-.1071.1103-.2209.2476-.3317.3923-.2255.2944-.4919.6891-.7477 1.1281-.2554.4383-.51194.9409-.70723 1.4498-.19007.4953-.34899 1.0647-.34899 1.6161 0 1.6569 1.34312 3 3.00002 3 1.6568 0 3-1.3431 3-3 0-.5514-.1589-1.1208-.349-1.6161-.1953-.5089-.4518-1.0115-.7073-1.4498-.2557-.439-.5222-.8337-.7476-1.1281-.1109-.1447-.2246-.282-.3317-.3923-.0513-.0528-.1218-.1211-.2049-.1837-.0411-.0311-.1063-.0767-.1903-.1184C12.4003 11.0774 12.2299 11 12 11Z"
	/>
	<path
		fill-rule="evenodd"
		d="M8.99998 2c-.55228 0-1 .44772-1 1v3c0 .55228.44772 1 1 1v1.09419c-.05797.03621-.12962.07946-.21086.12849-.24044.14511-.56485.34091-.86716.55505C7.10458 9.35671 5.99998 10.3674 5.99998 12v7l-.00021.0705c-.00185.4157-.00535 1.2054.44872 1.8544C6.99323 21.7034 7.94156 22 9.14284 22h5.71426c1.2013 0 2.1496-.2966 2.6944-1.0751.454-.649.4505-1.4387.4487-1.8544L18 19v-7c0-1.6326-1.1046-2.64329-1.922-3.22227-.3023-.21414-.6267-.40994-.8672-.55505-.0811-.04899-.1529-.0923-.2108-.12849V7c.5523 0 1-.44772 1-1V3c0-.55228-.4477-1-1-1H8.99998ZM11 8.5V7h2v1.5c0 .53707.3707.86588.4654.94981.1501.13316.3302.25013.4733.33959.1031.06443.2035.12498.3032.18511.2226.13429.4419.26659.6801.43529C15.6046 10.8933 16 11.3826 16 12v7c0 .2478-.0018.4169-.0232.5648-.02.1381-.0499.1934-.0644.214-.007.0101-.0384.0552-.171.1055-.1513.0574-.423.1157-.8843.1157H9.14284c-.46132 0-.73297-.0583-.8843-.1157-.13261-.0503-.16434-.0959-.17136-.106-.01448-.0207-.04404-.0754-.06402-.2135-.0214-.1479-.02318-.317-.02318-.5648v-7c0-.6174.3954-1.1067 1.07802-1.5902.23818-.1687.45741-.301.68008-.43529.09969-.06013.20008-.12068.30312-.18511.1432-.08946.3237-.20679.4738-.33996.0947-.08392.465-.41237.465-.94944Z"
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
@prop ariaLabel = 'droplet bottle alt solid'
@prop ...restProps
-->
