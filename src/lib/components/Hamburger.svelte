<script>
	export let open = false;
</script>

<button
	aria-label="menu-burger-button"
	class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none flex justify-center items-center z-20 bg-transparent"
	class:open
	on:click={() => (open = !open)}
>
	<svg
		width="32"
		height="24"
		class="transition-transform duration-300 ease-in-out"
		class:scale-75={open}
	>
		<line id="top" x1="0" y1="2" x2="32" y2="2" class="stroke-current stroke-[3] transition-transform duration-300 ease-in-out" rotate-45 translate-x-1.5={open} />
		<line id="middle" x1="0" y1="12" x2="32" y2="12" class="stroke-current stroke-[3] transition-opacity duration-300 ease-in-out" opacity-0={open} />
		<line id="bottom" x1="0" y1="22" x2="32" y2="22" class="stroke-current stroke-[3] transition-transform duration-300 ease-in-out" rotate-45 translate-x-3 translate-y-2.5={open} />
	</svg>
</button>