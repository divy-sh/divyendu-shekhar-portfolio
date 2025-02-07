<script>
	import experiences from '$lib/Experiences';
</script>

<div class="experienceContainer">
	<div class="experiences">
		<h1>Experience</h1>
		{#each experiences as experience}
			<div class="experience">
				<div class="header">
					<div class="details">
						<h2><span>{experience.title}</span></h2>
						<h2><span>{experience.company}</span></h2>
					</div>
					<div class="details">
						<span>{experience.date}</span>
						<span>{experience.location}</span>
					</div>
				</div>
				{#each experience.description as tech}
					<p>{tech}</p>
				{/each}
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

	.experienceContainer .experiences {
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

	.experiences {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.details {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	@media (min-width: 900px) {
		.experienceContainer {
			padding: 0;
		}
		.experiences > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.experiences {
			grid-template-columns: 1fr;
		}

		.experiences .experience {
			min-height: 200px;
		}
	}

	@media (min-width: 600px) {
		.experiences {
			grid-template-columns: 1fr;
		}
	}
</style>
