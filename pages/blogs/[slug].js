import PageLayout from "components/PageLayout";
import { getBlogBySlug, getAllBlogs } from "lib/api";

export default function BlogDetail({ blog }) {
    return (
        <PageLayout>
            <h1>
                {blog?.title}
            </h1>
        </PageLayout>
    );
}

export async function getStaticProps({ params }) {
    const blog = await getBlogBySlug(params.slug);

    return {
        props: { blog }
    };
}

export async function getStaticPaths() {
    const allBlogs = await getAllBlogs();

    const paths = allBlogs?.map((blog) => ({
        params: {
            slug: blog.slug
        }
    }));

    return {
        paths,
        fallback: false,
    };
}