<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import { modalOpened } from '$lib/data/store';
</script>

<svelte:head>
	<title>Divyendu Shekhar - Main page</title>
</svelte:head>

<main class="flex flex-col h-[calc(100vh-168px)] justify-center items-center text-center">
	<h1 class="font-bold text-5xl mt-12 mx-2">
		Hi!✋ <br /> I'm Divyendu Shekhar, a Software Engineer 💻 based in Boston, USA
	</h1>
	<div class="flex justify-center items-center gap-5 mt-12 text-3xl">
		<div 
			role="button" 
			tabindex="0" 
			on:keypress={() => modalOpened.set(true)} 
			on:click={() => modalOpened.set(true)}
			class="cursor-pointer transition-colors duration-200 hover:text-red-600"
		>
		<div class="w-10"><FaEnvelope /></div>
		</div>

		<a 
			href="https://github.com/divy-sh" 
			aria-label="GitHub" 
			target="_blank" 
			rel="noopener noreferrer"
			class="transition-colors duration-200 hover:text-red-600"
		>
			<div class="w-10"><FaGithub /></div>
		</a>

		<a 
			href="https://www.linkedin.com/in/divysh/" 
			aria-label="Linkedin" 
			target="_blank" 
			rel="noopener noreferrer"
			class="transition-colors duration-200 hover:text-red-600"
		>
		<div class="w-10"><FaLinkedin /></div>
		</a>
	</div>
</main>
