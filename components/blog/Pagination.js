import Link from 'next/link'
import React from 'react'

function Pagination() {
    return (
        <div className="pagination">
            <div className="pagination__container">
                <Link className="pagination__left" href="/">
                    <i className="fa fa-arrow-left"></i>
                </Link>
                <Link className="pagination__right" href="/">
                    <i className="fa fa-arrow-right"></i>
                </Link>
                <ul className="pagination__ul">
                    <li className="pagination__number current__page">1</li>
                    <li className="pagination__number">2</li>
                    <li className="pagination__number">3</li>
                </ul>
            </div>
        </div>
    )
}

export default Pagination