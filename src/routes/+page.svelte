<script lang="ts">
//@ts-nocheck

    import Button from "$lib/components/ui/button/button.svelte";
    import Tabs from "$lib/components/ui/Tabs/Tabs.svelte";
    import { onMount } from "svelte";


    let ressourcen = [
        {
            title: "Purpose Driven Life",
            img_url: '',
            url: 'https://www.purposedriven.com/',
            notes: 'Ich fands cool und denk wir können daraus viel lernen',
            tags: ["Buch"],
        },
        {
            title: "Set Goals God's Way",
            img_url: '',
            url: 'https://www.youtube.com/watch?v=wSzOZ70BP5I&pp=ygULcmljayB3YXJybmU%3D',
            notes: `hab's mir noch nicht angeschaut aba ist safe cool!`,
            tags: ["Predik"],
        },
        {
            title: "Six Keys to Peace in Relationships",
            img_url: '',
            url: 'https://www.youtube.com/watch?v=7j4FsIfRlBg&t=344s',
            notes: "Wherever you find confusion, disharmony, jealousy, there is ego. For the wisdom that comes from Heaven is first of all pure. - Interessant wie das hier mit 'Ego is the enemy' verknüpft werden kann.",
            tags: ["Predik"],
        },
        {
            title: "Purpose Driven Church summary",
            img_url: '',
            url: 'https://lifeandleadership.com/book-summaries/warren-purpose-driven-church/#:~:text=Part%20Two%2C%20Becoming%20a%20Purpose,all%20aspects%20of%20congregational%20life.',
            notes: 'Empfehlenswert, kurz, knap und guddd.',
            tags: ["Buch", "Zusammenfassung"],
        },
        {
            title: "Tu ma faci tare",
            img_url: '',
            url: 'https://www.youtube.com/watch?v=39qmNUJzFns',
            notes: 'Bangeerrr',
            tags: ["Lied"],
        },
        {
            title: "ILD",
            img_url: undefined,
            url: undefined,
            notes: "No Link. Des ist nur dein friendly reminder für ILD zu lernen.",
            tags: ["Reminder"],
        },
        {
            title: "Je und je geliebt",
            img_url: '',
            url: 'https://www.youtube.com/watch?v=iU0zDr3nyhI',
            notes: 'Voooll die Disney vibes',
            tags: ["Lied"],
        },
    ]

    // Alle items bleiben 10 Tage
    let prayers = [
        {
            title: "Einheit für unsere Kirche",
            author: "",
            upvotes: 4,
        },
        {
            title: "Unsere kleine Groupe",
            author: "",
            upvotes: 4,
        },
        {
            title: "Vision und guidance",
            author: "",
            upvotes: 4,
        },
        {
            title: "Leute, die Gott noch nicht kennengelernt haben",
            author: "",
            upvotes: 4,
        },
        {
            title: "Für die Kranke und ihren Familien",
            author: "",
            upvotes: 4,
        },
        

    ]

    const getYoutubeThumbnailUrl = (url: string) => {
        const youtubeUrlPattern = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?.*v=|youtu\.be\/)([^&\/\?]+)/;
        const match = url.match(youtubeUrlPattern);
        if (match && match[1]) {
            return `https://img.youtube.com/vi/${match[1]}/0.jpg`;
        } else {
            return undefined;
        }
    };


   let tabs = [
        {
            title: "Predigten",
            value: "Predigten",
            content: 'Predigten',
        },
        {
            title: "Bücher",
            value: "Bücher",
            content: 'Bücher',
        },
        {
            title: "Lieder",
            value: "Lieder",
            content: 'Lieder',
        },
        {
            title: "Verse",
            value: "Verse",
            content: '<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Content tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
        },
        {
            title: "Sonstiges",
            value: "Sonstiges",
            content: '<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> <p>Random tab</p> <img src="/linear.webp" alt="dummy image" width="1000" height="1000" class="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto" /> </div>'
        }
        ];

   export let data;

   onMount(async () => {
        
    })

</script>

<div class="w-full h-full px-2 md:px-4 py-6 flex md:flex-row flex-col-reverse gap-8 justify-between min-h-[80vh]">
    <div class="md:w-[50vw] lg:w-[70vw] h-full flex flex-col justify-start items-start">
        <div class=" p-4 w-full">
            <h2 class="text-4xl w-full font-semibold mb-6">
                Ressourcen
            </h2>
            <!-- <div class="w-full h-full flex flex-wrap gap-3">
                {#each ressourcen as r}
                    <a href={r.url} class="px-6 py-4 my-1 drop-shadow-lg rounded-xl shadow-lg w-max h-min flex flex-col justify-between items-center bg-[#f8f8f8] dark:bg-[#171718] {r.url ? 'hover:bg-[#DD0E39] hover:text-white dark:hover:bg-[#DD0E39] dark:hover:text-white' : ''} transition-all duration-300 ease-in-out max-w-[500px]">
                        <h4 class="font-semibold w-full py-2 text-xl mb-2">
                            {r.title}
                        </h4>
                        <span class="w-full max-h-[60px] overflow-auto  opacity-60 font-medium py-2">
                            {r.notes}
                        </span>
                        <div class="w-full h-full flex flex-wrap mt-6 mb-2 gap-2">
                            {#each r.tags as t}
                                <div class="border-[#DD0E39] rounded-full h-min font-bold">
                                    #{t}
                                </div>
                            {/each}
                        </div>

                    </a>
                {/each}
            </div> -->


            <div
            class="relative mx-auto flex h-[20rem] w-full flex-col items-start justify-start [perspective:1000px] md:h-[40rem]"
            >
                <form action="?/addRes" method="POST" class="w-full gap-4 flex lg:flex-row flex-col justify-center items-center">
                    <div class="w-full lg:flex-row flex-col flex gap-4">
                        <input type="text" name="name" title="name" id="name" class=" w-full px-4 dark:bg-[#171718] bg-[#f8f8f8] py-2 placeholder:opacity-50 dark:placeholder:text-white rounded-lg placeholder:text-black " placeholder="Name">
                        <input type="url" name="link" title="link" id="link" class=" w-full px-4 dark:bg-[#171718] bg-[#f8f8f8] py-2 placeholder:opacity-50 dark:placeholder:text-white placeholder:text-black rounded-lg " placeholder="Link">
                        <select name="tags" id="tags" class="dark:bg-[#171718] bg-[#f8f8f8] rounded-lg min-w-40 px-2 flex justify-center items-center h-10">
                            <option value="Sonstiges">Typ</option>
                            <option value="Buch">Buch</option>
                            <option value="Lied">Lied</option>
                            <option value="Vers">Vers</option>
                            <option value="Sonstiges">Sonstiges</option>
                          </select>                          
                    </div>

                    <Button type="submit" class="">
                        Hinzufügen
                    </Button>
                </form>

                <div class="flex flex-col gap-2 w-full h-full py-8">
                    <h3 class="text-2xl font-semibold">
                        Predigten
                    </h3>

                    <div class="flex flex-col py-2">
                        {#each data.res.Predigt as r}
                            {#if r.active}
                                <a href={r.link} class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                                    <span class=" text-lg font-medium">
                                        {r.name}
                                    </span>
                                </a>
                            {/if}
                        {/each}
                    </div>

                    <h3 class="text-2xl font-semibold">
                        Lieder
                    </h3>

                    <div class="flex flex-col py-2">
                        {#each data.res.Lied as r}
                            {#if r.active}
                                <a href={r.link} class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                                    <span class=" text-lg font-medium">
                                        {r.name}
                                    </span>
                                </a>
                            {/if}
                        {/each}
                    </div>

                    <h3 class="text-2xl font-semibold">
                        Verse
                    </h3>

                    <div class="flex flex-col py-2">
                        {#each data.res.Vers as r}
                            {#if r.active}
                                <a href={r.link} class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                                    <span class=" text-lg font-medium">
                                        {r.name}
                                    </span>
                                </a>
                            {/if}
                        {/each}
                    </div>

                    <h3 class="text-2xl font-semibold">
                        Bücher
                    </h3>

                    <div class="flex flex-col py-2">
                        {#each data.res.Buch as r}
                            {#if r.active}
                                <a href={r.link} class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                                    <span class=" text-lg font-medium">
                                        {r.name}
                                    </span>
                                </a>
                            {/if}
                        {/each}
                    </div>

                    <h3 class="text-2xl font-semibold">
                        Sonstiges
                    </h3>

                    <div class="flex flex-col py-2">
                        {#each data.res.Sonstiges as r}
                            {#if r.active}
                                <a href={r.link} class="hover:bg-[#DD0E39] opacity-70 hover:opacity-100 px-4 rounded-sm flex justify-start flex-row items-center transition-all duration-300 ease-in-out hover:text-white">
                                    <span class=" text-lg font-medium">
                                        {r.name}
                                    </span>
                                </a>
                           {/if}
                        {/each}
                    </div>

                </div>




                <!-- <Tabs
                    propTabs={tabs}
                    contentClassName="rounded-2xl dark:bg-[#171718] bg-[#f8f8f8] bang p-10 font-bold mt-24"
                /> -->
                <!-- {#each data.res.all as r}
                    Hi
                {/each}
                 -->


            </div>

        </div>

        <!-- Content -->
        <div>

        </div>
    </div>

    <div class="w-auto xl:min-w-[430px] min-w-[400px] px-2 md:px-4 h-auto justify-center items-center flex">
        <div class="w-full h-full rounded-2xl dark:bg-[#171718] bg-[#f8f8f8] flex flex-col drop-shadow-xl px-10 py-8 border-opacity-0 bang justify-start items-center relative">
            <div class="w-full h-auto justify-between items-center flex flex-row">
                <h2 class="text-4xl font-semibold">
                    Prayer Board
                </h2>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-[#DD0E39] hover:stroke-white ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>                       -->
                  
            </div>

            <div class="py-6 mb-12 w-full max-h-[400px] md:max-h-full flex flex-col overflow-auto">
                {#each  data?.prayers as p}
                    {#if p.active} 
                        <form action="?/removeP" method="POST" class="py-1 flex flex-row justify-start items-center">
                            <span class="w-full text-lg font-medium text-[#5b5b5b] dark:text-[#757575]">
                                {p.title}
                            </span>

                            <input type="text" name="title" title="title" id="title" class=" w-full px-4 dark:bg-[#222222] bg-[#eaeaea] py-2 placeholder:opacity-50 dark:placeholder:text-white rounded-lg placeholder:text-black hidden" bind:value={p.title} placeholder="Thema">                            

                            <Button type="submit" class=" bg-transparent dark:bg-transparent dark:hover:text-[#DD0E39] dark:text-white text-black dark:text-opacity-10 text-opacity-20 shadow-none hover:text-white ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                  </svg>                  
                            </Button>
                        </form>
                    {/if}
                    
                {/each}
            </div>

            <form action="?/addP" method="POST" class="w-full px-6 gap-4 flex flex-row justify-center items-center absolute bottom-6">
                <input type="text" name="topic" title="topic" id="topic" class=" w-full px-4 dark:bg-[#222222] bg-[#eaeaea] py-2 placeholder:opacity-50 dark:placeholder:text-white rounded-lg placeholder:text-black" placeholder="Thema">

                <Button type="submit" class="">
                    Hinzufügen
                </Button>
            </form>

        </div>
    </div>
</div>  