/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { serializeNonPOJOs } from '$lib/utils.ts';

const categorizeResourcesByTags = (resources) => {
    // Initialize categories with a general 'all' category
    const categories = {
        all: [],
        Buch: [],
        Lied: [],
        Verse: [],
        Sonstiges: [],
        Predigt: [],
    };

    // Populate categories based on resource tags
    resources.forEach(resource => {
        // Add to 'all' category
        categories.all.push(resource);
        
        // Add to specific category based on the tag, if it exists
        if (categories[resource.tags]) {
            categories[resource.tags].push(resource);
        } else {
            // If a new category is found, create it dynamically. This makes the function adaptable to new tags.
            categories[resource.tags] = [resource];
        }
    });

    return categories;
};

export const load = async ({ locals }) => {
    const getRes = async () => {
        try {
            // Fetch and serialize resources
            const resources = serializeNonPOJOs(await locals.pb.collection('smallgroup_ressources').getFullList({
                sort: '-created',
            }));

            // Categorize resources by tags
            const categorizedResources = categorizeResourcesByTags(resources);

            // console.log(categorizedResources);

            return categorizedResources;
        } catch (err) {
            console.log("Couldn't retrieve resources");
            return {};
        }
    };

    const getAllRes = async () => {
        try {
            // Fetch and serialize resources
            const resources = serializeNonPOJOs(await locals.pb.collection('smallgroup_ressources').getFullList({
                sort: '-created',
            }));

            return resources;
        } catch (err) {
            console.log("Couldn't retrieve resources");
            return {};
        }
    }

    const getPrayers = async () => {
        try {
            // Fetch and serialize resources
            const prayers = serializeNonPOJOs(await locals.pb.collection('smallgroup_prayers').getFullList({
                sort: '-created',
            }));

            return prayers;
        } catch (err) {
            console.log("Couldn't retrieve resources");
            return {};
        }
    }

    return {
        res: await getRes(),
        allRes: await getAllRes(),
        prayers: await getPrayers(),
    };
};


export const actions = {
    addRes: async ({ request, locals }) => {

        const data = await Object.fromEntries(await request.formData())

        const r = {
            "name": data.name,
            "link": data.link,
            "active": true,
            "tags": data.tags
        };
        
        const record = await locals.pb.collection('smallgroup_ressources').create(r);
    },

    addP: async ({ request, locals }) => {

        const data = await Object.fromEntries(await request.formData())

        const p = {
            "title": data.topic,
            "active": true
        };

        const record = await locals.pb.collection('smallgroup_prayers').create(p);
    },


    removeP: async ({ request, locals }) => {

        const data = await Object.fromEntries(await request.formData())

        const record = serializeNonPOJOs(await locals.pb.collection('smallgroup_prayers').getFirstListItem(`title="${data.title}"`))

        const newP = {
            "active": false
        };

        const updatedRecord = await locals.pb.collection('smallgroup_prayers').update(record.id, newP);
    },

}
