<script lang="ts">
    import Burger from './Hamburger.svelte';
    import routes from '$lib/data/NavRoutes';
    let opened = false;
    export let segment: string;
</script>

<div class={`NavBar ${opened ? '!flex-col !items-center !h-[330px]' : ''} fixed flex flex-col justify-between items-center w-full box-border p-5 h-15 overflow-hidden transition-all duration-200 ease-in-out backdrop-blur-2xl md:py-5 md:px-0 md:flex md:flex-col md:justify-center md:items-center md:max-w-[900px] md:mx-auto`} >
    <div class="innerContainer flex justify-between items-center w-full box-border md:justify-center">
        <div class="burger md:hidden">
            <Burger bind:open={opened} />
        </div>
        <div class="buttons hidden justify-between items-center font-medium md:flex">
            {#each routes as route}
                <a class={`button ${segment === route.href ? 'selected text-white relative after:content-[\'\'] after:bg-amber-700 after:block after:h-[3px] after:w-full after:absolute after:-bottom-1' : 'text-white/40 relative hover:after:content-[\'\'] hover:after:bg-amber-700 hover:after:block hover:after:h-[3px] hover:after:w-full hover:after:absolute hover:after:-bottom-1'}  no-underline cursor-pointer transition-colors duration-200 ease-in-out m-2.5 h-[30px]`} href={route.href}
                    >{route.label}</a
                >
            {/each}
        </div>
    </div>
    <div class="responsiveButtons buttons mt-5 w-full flex !flex-col md:hidden">
        {#each routes as route}
            <a class={`button ${segment === route.href ? 'selected text-white relative after:content-[\'\'] after:bg-amber-700 after:block after:h-[3px] after:w-full after:absolute after:-bottom-1' : 'text-white/40 relative hover:after:content-[\'\'] hover:after:bg-amber-700 hover:after:block hover:after:h-[3px] hover:after:w-full hover:after:absolute hover:after:-bottom-1'} button max-w-[100px] w-full text-center no-underline cursor-pointer transition-colors duration-200 ease-in-out m-2.5 h-[30px]`} href={route.href}
                >{route.label}</a
            >
        {/each}
    </div>
</div>