<script>
    import "../app.pcss";
    import { ModeWatcher } from "mode-watcher";
    import Sun from "svelte-radix/Sun.svelte";
    import Moon from "svelte-radix/Moon.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    
 
    import { toggleMode } from "mode-watcher";

    const next_date = " 19. Mai - 18:00 Uhr"
    
</script>


<ModeWatcher />
<div class="relative flex flex-col w-full h-full min-h-screen">
    <div class="w-full min-h-12 py-10 flex flex-row justify-between items-center px-6">
        <div>
            <h1 class="text-7xl font-bold uppercase">
                <a href="/" class="hover:text-8xl transition-all duration-300 ease-in-out">
                    Small group <a href="/purpose">*</a>
                </a>
            </h1>
        </div>

        <div>
            <Button on:click={toggleMode} variant="outline" size="icon">
                <Sun
                  class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                  class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
                <span class="sr-only">Toggle theme</span>
              </Button>
        </div>
    </div>

    <div class="w-full h-8 bg-[#DD0E39] text-center text-sm font-semibold items-center justify-center">
        <p class="w-full h-full flex justify-center items-center text-white hover:text-lg">
            <!-- <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MTA4OWRlYzRhZTcyNGQ5MWI4ZmRlOGRhM2Y2OTIzNWQgNjM2N2MyM2MxZDZjYzEwMmMyMDY2MDBlODM4OTk3OGNlMTQ0ZDFiNWEyZTQxYzcxZDdiMmIzOTdhZTYwYWMxN0Bn&tmsrc=6367c23c1d6cc102c206600e8389978ce144d1b5a2e41c71d7b2b397ae60ac17%40group.calendar.google.com" class=" transition-all duration-300 ease-in-out font-semibold">
                Nächste Session:   {next_date}.
            </a> -->
            <span class=" transition-all duration-300 ease-in-out font-semibold">
                Nächste Session:   {next_date}.
            </span>
        </p>
    </div>

    <div>
        <slot/>
    </div>

    <div class="w-full h-6 bg-white bg-opacity-5 backdrop-blur-md absolute bottom-2 hidden">

    </div>
</div>

