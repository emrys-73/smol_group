<script lang="ts">
//@ts-nocheck

    import { cn } from "$lib/utils";
    import { Motion } from "svelte-motion";
    export let className = void 0;
    export let tabs;
    export let hovering;
    const isActive = (tab) => {
      return tab.value === tabs[0].value;
    };
    </script>
    
    <div class="relative h-full w-full">
        {#each tabs as tab, idx (tab.value)}
            <Motion
                let:motion
                layoutId={tab.value}
                animate={{
                    y: isActive(tab) ? [0, 40, 0] : 0
                }}
            >
                <div
                    use:motion
                    style={`scale: ${1 - idx * 0.1}; top: ${hovering ? `${idx * -60}px` : 0}; z-index: ${-idx}; opacity: ${idx < 3 ? 1 - idx * 0.1 : 0};`}
                    class={cn('absolute left-0 top-0 h-full w-full overflow-hidden', className)}
                >
                    <!-- {@html tab.content} -->
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <div class=""> 

                        <h4 class="text-4xl">
                            Predigten
                        </h4>
                        <div class="flex flex-col py-4">
                            <a href="/" class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                               <span class=" text-lg font-medium">
                                    Title
                               </span>
                            </a>
                        </div>
                    </div>
                </div>
            </Motion>
        {/each}
    </div>