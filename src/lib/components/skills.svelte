<script>
	import skills from '$lib/data/Skills';
</script>

<div class="w-full mx-auto p-6">
    <div class="flex flex-wrap justify-center gap-3 text-sm text-gray-200 mt-4">
        {#each skills as skill}
            <span class="flex items-center gap-2 bg-neutral-800 px-3 py-2 rounded-lg shadow-md transition hover:bg-neutral-700">
                {skill}
            </span>
        {/each}
    </div>
</div>
