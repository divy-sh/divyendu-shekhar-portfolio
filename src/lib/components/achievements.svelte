<script>
	import achievements from '$lib/Achievements';
</script>

<div class="experienceContainer">
	<div class="achievements">
		<h1>Achievements</h1>
		{#each achievements as achievement}
			<div class="experience">
				<div class="header">
					<h2>{achievement.title}</h2>
				</div>
				<p>{achievement.description}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.experienceContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.experienceContainer .achievements {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.experience {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.experience p {
		font-weight: 100;
		color: #708090;
	}

	.achievements {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	@media (min-width: 900px) {
		.experienceContainer {
			padding: 0;
		}
		.achievements > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.achievements {
			grid-template-columns: 1fr;
		}

		.achievements .experience {
			min-height: 200px;
		}
	}

	@media (min-width: 600px) {
		.achievements {
			grid-template-columns: 1fr;
		}
	}
</style>
