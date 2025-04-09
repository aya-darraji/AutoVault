import { list } from '@keystone-6/core';
import { text, relationship, image } from '@keystone-6/core/fields';
import { allowAll } from '@keystone-6/core/access';

export const Settings = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['siteTitle', 'homepageCars'],
        },
        label: 'Site Settings',
        description: 'Global settings for the site like homepage content and branding.',
    },
    isSingleton: true, // optional: restrict to one settings record
    fields: {
        siteTitle: text({
            validation: { isRequired: true },
            ui: {
                description: 'Title of the website shown in the browser and homepage.',
            },
        }),

        homepageSubtitle: text({
            ui: {
                description: 'Subtitle or tagline for homepage banner section.',
            },
        }),

        homepageBannerImage: image({
            storage: 'localStorage',
            ui: {
                description: 'Homepage banner image.',
            },
        }),

        homepageCars: relationship({
            ref: 'Car',
            many: true,
            ui: {
                displayMode: 'cards',
                cardFields: ['name', 'model', 'price', 'images'],
                inlineEdit: { fields: ['price', 'status'] },
                linkToItem: true,
                inlineConnect: true,
            },
        }),

        footerText: text({
            ui: {
                displayMode: 'textarea',
                description: 'Text shown in the footer.',
            },
        }),
    },
});
