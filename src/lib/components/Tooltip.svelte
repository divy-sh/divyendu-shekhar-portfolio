<script lang="ts">
    export let tooltip: string;
</script>

<div class="group relative w-[14px] h-[20px] z-[200]">
    <slot />
    {#if tooltip && tooltip !== 'false'}
        <div class="invisible group-hover:visible opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 ease-out transform translate-x-[-50%] bottom-full absolute left-1/2 z-10">
            <div class="bg-transparent text-white pr-6 rounded-md text-sm text-center leading-tight w-full">
                {tooltip}
            </div>
            <div class="border-t-[5px] border-r-[5px] border-l-[5px] border-t-gray-800/90 border-r-transparent border-l-transparent absolute left-1/2 -top-[5px] transform translate-x-[-50%]"></div>
        </div>
    {/if}
</div>