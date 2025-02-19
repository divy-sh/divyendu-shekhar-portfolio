<script>
	import achievements from '$lib/data/Achievements';
	import Card from '$lib/components/card.svelte';
</script>

<div class="w-full mx-auto p-4">
	<h1 class="text-3xl font-bold text-left">Achievements</h1>
	<div class="grid gap-6 mt-6">
		{#each achievements as achievement}
			<Card 
				title={achievement.title} 
				description={achievement.description} 
			/>
		{/each}
	</div>
</div>
