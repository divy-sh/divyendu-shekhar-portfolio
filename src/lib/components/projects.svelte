<script>
	import projects from '$lib/data/Projects';
	import Card from '$lib/components/card.svelte';
</script>

<div class="w-full mx-auto p-4">
	<h1 class="text-3xl font-bold text-left">Projects</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
		{#each projects as project}
			<Card 
				title={project.title} 
				description={project.description} 
				technologies={project.technologies} 
				url={project.url} 
			/>
		{/each}
	</div>
</div>
