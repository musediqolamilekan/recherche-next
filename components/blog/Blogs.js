import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react'
import client from '../../blog/client'
import Loading from '../miscellaneous/Loading';

const Blogs = () => {
    const [state,
        setState] = React.useState({posts: [], error: "", loading: true});
    const {loading, error, posts} = state;
    React.useEffect(() => {
        const fetchPosts = async() => {
            try {
                const posts = await client.fetch(`*[_type == "post"] {
                  title,
                  slug,
                  body,
                  mainImage {
                    asset -> {
                      _id,
                      url
                    },
                    alt
                  }
                }`);
                setState({posts, loading: false})
            } catch (err) {
                setState({loading: false, error: err.message})
            }
        }
        fetchPosts()
    }, [])
    return (
        <div className="blogContainer__postBox">
            {loading
                ? <Loading/>
                : error
                    ? <p>{error}</p>
                    : posts.map((post) => (
                        <div className="blogContainer__box" key={post._id}>
                            <div className="img__box">
                                <Image alt={post.title} src={post.mainImage.asset.url} width="1200px" height="800px"/>
                                <div className="blogContainer__date">
                                    <div className="blogContainer__inner">
                                        <span>04</span>
                                        <span>March</span>
                                    </div>
                                </div>
                            </div>
                            <div className="blogContainer__details">
                                <h2>
                                    <NextLink href={`/blog/${post.slug.current}`} passHref>
                                        <a>{post.title}</a>
                                    </NextLink>
                                </h2>
                                <p className="blogContainer__author">By: Ini Wisdom</p>
                                <p className="blogContainer__snippet">
                                    Everyone loves it when they move into a new home, and it is usually an exciting
                                    moment for the family. However, it can also be stressful, especially when it
                                    comes to decorating the house. How can you make your home look its best while
                                    yet reflecting your style?
                                </p>

                                <NextLink href={`/blog/${post.slug.current}`} passHref>
                                    <button className="blogContainer__btn">See More</button>
                                </NextLink>
                            </div>
                        </div>
                    ))
}
        </div>
    )
}

export default Blogs