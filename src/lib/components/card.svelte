<script>
	export let title;
	export let subtitle = "";
	export let date = "";
	export let location = "";
	export let description = [];
	export let technologies = [];
	export let url = "";
</script>

<div class="flex justify-start w-full bg-neutral-900 text-white p-6 rounded-xl">
	<div class="flex flex-col space-y-3">
		<div class="flex justify-between">
			<h2 class="text-xl font-semibold">{title}</h2>
			{#if subtitle}
				<h3 class="text-lg text-gray-400">{subtitle}</h3>
			{/if}
		</div>
		{#if date || location}
			<div class="flex justify-between text-sm text-gray-500">
				{#if date}<span>{date}</span>{/if}
				{#if location}<span>{location}</span>{/if}
			</div>
		{/if}
		{#each description as desc}
			<span class="">{desc}</span>
		{/each}
		{#if technologies.length}
			<div class="flex flex-wrap gap-2 text-sm text-gray-300">
				<span class="font-medium">Technologies:</span>
				{#each technologies as tech}
					<span class="bg-gray-700 px-2 py-1 rounded-md">{tech}</span>
				{/each}
			</div>
		{/if}
		{#if url}
			<a href={url} target="_blank" rel="noreferrer" class="text-center mt-4 inline-block bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-neutral-700 transition">
				Go
			</a>
		{/if}
	</div>
</div>
