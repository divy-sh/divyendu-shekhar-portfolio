<script>
	import educationList from '$lib/data/Education';
</script>

<div class="educationContainer">
	<div class="educationList">
		<h1>Education</h1>
		{#each educationList as education}
			<div class="education">
				<div class="header">
					<h2>
						{education.school}
					</h2>
					<div class="mini-points">
						{education.degree}
					</div>
					<div class="mini-points">
						{education.date}
					</div>
				</div>
				<p>
					{education.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.educationContainer {
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

	.educationContainer .educationList {
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

	.education {
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

	.education p {
		font-weight: 100;
		color: #708090;
	}

	.educationList {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}

	.mini-points {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	@media (min-width: 900px) {
		.educationContainer {
			padding: 0;
		}
		.educationList > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.educationList {
			grid-template-columns: 1fr;
		}

		.educationList .education {
			min-height: 200px;
		}
	}

	@media (min-width: 600px) {
		.educationList {
			grid-template-columns: 1fr;
		}
	}
</style>
