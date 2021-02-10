export default {
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',

        },
         {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: 'string'}],
        }

    ]
}