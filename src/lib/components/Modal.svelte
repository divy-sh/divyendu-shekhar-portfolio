<script>
    import { modalOpened } from '$lib/data/store';
    let isOpen = false;
    let closing = false;

    modalOpened.subscribe((value) => {
        closing = false;
        isOpen = value;
    });

    const close = () => {
        closing = true;
        setTimeout(() => {
            modalOpened.set(false);
        }, 0); // Changed timeout to 0 for instant close
    };
</script>

{#if isOpen}
    <div class="fixed inset-0 z-[2000] flex justify-center items-center">
        <div
            class="absolute inset-0 backdrop-blur-sm bg-black/50 cursor-pointer"
            on:click={close}
            role="button"
            tabindex="0"
            on:keypress={close}
        />
        <div
            class="z-10 max-w-screen-md rounded-2xl overflow-hidden p-8 md:p-12 md:min-w-[400px] bg-gradient-155deg from-[rgba(255,255,255,.15)] to-transparent backdrop-blur-xl shadow-lg ring-2 ring-inset ring-white/10"
        >
            <div class="max-h-[50vh] overflow-hidden">
                <slot name="content" />
            </div>
        </div>
    </div>
{/if}