<script>
	import educationList from '$lib/data/Education';
	import Card from '$lib/components/card.svelte';
</script>

<div class="w-full mx-auto p-4">
	<h1 class="text-3xl font-bold text-left">Education</h1>
	<div class="grid gap-6 mt-6">
		{#each educationList as education}
			<Card 
				title={education.school} 
				subtitle={education.degree} 
				date={education.date} 
				description={education.description} 
			/>
		{/each}
	</div>
</div>
