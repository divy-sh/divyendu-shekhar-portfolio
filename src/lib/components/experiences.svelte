<script>
	import experiences from '$lib/data/Experiences';
	import Card from '$lib/components/Card.svelte';
</script>

<div class="w-full mx-auto p-4">
	<h1 class="text-3xl font-bold text-left">Experience</h1>
	<div class="grid gap-6 mt-6">
		{#each experiences as experience}
			<Card 
				title={experience.title} 
				subtitle={experience.company} 
				date={experience.date} 
				location={experience.location} 
				description={experience.description} 
			/>
		{/each}
	</div>
</div>
