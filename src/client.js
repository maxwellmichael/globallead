import sanityClient from '@sanity/client';


const client = sanityClient({
    projectId: 'limvy8x7',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31',
})

export default client;