import React from 'react'
import Blogs from '../../components/blog/Blogs'
import Right from '../../components/blog/Right'
import Pagination from '../../components/blog/Pagination'

const BlogBox = () => {
    return (
        <div>
            <div className="blogContainer">
                <Blogs/>
                <Right/>
            </div>
            <Pagination/>
        </div>
    )
}

export default BlogBox