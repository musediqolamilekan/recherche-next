import React from 'react'
import Container from '../../views/Container'
import client from '../../blog/client'
import Loading from '../../components/miscellaneous/Loading'
import Link from 'next/link'
import BlockContent from '@sanity/block-content-to-react'
import Right from '../../components/blog/Right'

const BlogScreen = (props) => {
    const {slug} = props;
    const [state,
        setState] = React.useState({post: null, loading: true, error: ''});
    const {post, loading, error} = state;
    React.useEffect(() => {
        const fetchPost = async() => {
            try {
                const post = await client.fetch(`*[slug.current == "${slug}"] {
                  title,
                  body,
                  mainImage {
                    asset -> {
                      _id,
                      url
                    },
                    alt
                  }
                }`)
                setState({
                    ...state,
                    post,
                    loading: false
                });
            } catch (err) {
                setState({
                    ...state,
                    error: err.message,
                    loading: false
                });
            }
        };
        fetchPost()
    }, [slug, state]);
    return (
        <Container pageTitle="Blog Details" title="Blog Details">
            {loading
                ? (<Loading/>)
                : error
                    ? (
                        <p>{error}</p>
                    )
                    : (
                        <div className="blogContainer">
                            <div className="blogContainer__postBox">
                                <div className="blogContainer__box">
                                    {post.map((item) => (
                                        <div className="blogContainer__details" key={item._id}>
                                            <h2>
                                                <Link href="/">
                                                    <a>{item.title}</a>
                                                </Link>
                                            </h2>
                                            <p className="blogContainer__author">By: Ini Wisdom</p>
                                            <div className="blogContainer__info">
                                                <BlockContent
                                                    blocks={item.body}
                                                    projectId="auxjw0lp"
                                                    imageOptions={{
                                                    w: 320,
                                                    h: 240,
                                                    fit: 'max'
                                                }}
                                                    dataset="production"/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="blog__footer">
                                    <div className="blog__wrapper">
                                        <div className="blog__footerBox">
                                            <span>TAGS:
                                            </span>
                                            <Link href="/">
                                                <a>Arts Deco</a>
                                            </Link>
                                        </div>
                                        <div className="blog__footerBox">
                                            <i className="fa fa-google"></i>
                                            <i className="fa fa-facebook"></i>
                                            <i className="fa fa-facebook"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Right/>
                        </div>
                    )}
        </Container>
    )
}

export default BlogScreen

export function getServerSideProps(context) {
    return {
        props: {
            slug: context.params.slug
        }
    };
}