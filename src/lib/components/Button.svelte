<script>
	import { Email } from '$lib/data/Constants';
</script>

<div
	class="cursor-pointer h-10 max-w-[200px] rounded-lg bg-amber-700 flex justify-center items-center font-medium hover:bg-amber-800 transition"
	role="button"
	tabindex="0"
	on:keypress={() => { window.location.href = `mailto:${Email}`; }}
	on:click={() => window.location.href = `mailto:${Email}`}
>
	<slot />
</div>