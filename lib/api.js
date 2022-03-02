import sanityClient from '/lib/sanity';

const blogFields = `
    _id,
    title,
    subtitle,
    'slug': slug.current,
    date,
    'coverImage': coverImage.asset->url,
    'author': author->{name, 'avatar': avatar.asset->url},
`;

export async function getAllBlogs() {
    return await sanityClient
                    .fetch(`*[_type == "blog"]{ ${blogFields} }`);
}

export async function getBlogBySlug(slug) {
    return await sanityClient
                    .fetch(
                        `*[_type == "blog" && slug.current == $slug]{ ${blogFields} }`,
                        { slug }
                    ).then(res => res?.[0]);
}
