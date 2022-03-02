import {Row, Col} from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorInfo from "components/AuthorInfo";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import {getAllBlogs} from "lib/api";

export default function Home({blogs}) {
    return (
        <PageLayout className="blog-detail-page">
            <Row>
                <Col md="8">
                    <AuthorInfo />
                </Col>
            </Row>
            <hr/>
            <Row className="mb-5">
                {/*<Col md="10">*/}
                {/*    <CardListItem />*/}
                {/*</Col>*/}
                {
                    blogs.map((blogPost) => {
                        return (
                            <Col md="4" key={blogPost._id}>
                                <CardItem
                                    author={blogPost.author}
                                    title={blogPost.title}
                                    subtitle={blogPost.subtitle}
                                    link={`/blogs/${blogPost.slug}`}
                                    date={blogPost.date}
                                    image={blogPost.coverImage}
                                />
                            </Col>
                        )
                    })
                }
            </Row>
        </PageLayout>
    )
}

// called at build-time
// always called on server-side, it's not part of the client-side JS bundle
// creates a static page
export async function getStaticProps() {
    const blogs = await getAllBlogs();
    return {
        props: {
            blogs
        }
    }
}
