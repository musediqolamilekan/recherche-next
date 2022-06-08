import axios from 'axios';
import Image from 'next/image';
import NextLink from 'next/link';
import {useSnackbar} from 'notistack';
import React, { useContext } from 'react'
import Loading from '../../components/miscellaneous/Loading';
import client from '../../shop/client'
import {Store} from '../../utils/Store';
import {urlForThumbnail} from "../../shop/image"


const Product = () => {
    const [state,
        setState] = React.useState({products: [], error: "", loading: true});
    const {loading, error, products} = state;
    const {state: {
            cart
        }, dispatch} = useContext(Store);
    const {enqueueSnackbar} = useSnackbar();
    React.useEffect(() => {
        const fetchData = async() => {
            try {
                const products = await client.fetch(`*[_type == "product"]`);
                setState({products, loading: false})
            } catch (err) {
                setState({loading: false, error: err.message})
            }
        };
        fetchData();
    }, [])

    const addToCartHandler = async(product) => {
        const existItem = cart
            .cartItems
            .find((x) => x._id === product._id);
        const quantity = existItem
            ? existItem.quantity + 1
            : 1;
        const {data} = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            enqueueSnackbar('Sorry. Product is out of stock', {variant: 'error'});
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                _key: product._id,
                name: product.name,
                countInStock: product.countInStock,
                slug: product.slug.current,
                price: product.price,
                image: urlForThumbnail(product.image),
                quantity
            }
        });
        enqueueSnackbar(`${product.name} added to the cart`, {variant: 'success'});
    };
    return (
        <section className="pro-list-wrap">
            <div className=" section-content section-content--w1140">
                <div className="container">
                    <div className="pro-sorting clearfix">
                        <div className="sort-left pull-left">
                            show
                            <span id="from">
                                1
                            </span>
                            to
                            <span id="to">
                                10
                            </span>
                            of
                            <span id="all">
                                34
                            </span>
                            result
                        </div>
                        <div className="sort-right pull-right">
                            <select id="order-by">
                                <option selected="selected">
                                    default sorting
                                </option>
                                <option value="popular">Sort by popularity</option>
                                <option value="rating">Sort by average rating</option>
                                <option value="date">Sort by latest</option>
                                <option value="price">Sort by price: low to high</option>
                                <option value="price-desc">Sort by price: high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="pro-list">
                        <div className="row">
                            {loading
                                ? <Loading/>
                                : error
                                    ? <p>{error}</p>
                                    : products.map((product) => (
                                        <div className="col-lg-3 col-md-6" key={product.slug}>
                                            <div className="pro__item">
                                                <div className="pro__img">
                                                    <span className="label label--small pink">sale</span>
                                                    <Image
                                                        src={urlForThumbnail(product.image)}
                                                        alt={product.name}
                                                        width="345px"
                                                        height="243px"/>
                                                    <div className="pro-link">
                                                        <div className="pro-info pro-info--dark pro-info--center">
                                                            <button
                                                                className="au-btn au-btn--pill au-btn--big au-btn--yellow pro__add"
                                                                onClick={() => addToCartHandler(product)}>
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pro__detail">
                                                    <h5>
                                                        <NextLink href={`/product/${product.slug.current}`} passHref>
                                                            <a className="product-title">{product.name}</a>
                                                        </NextLink>
                                                    </h5>

                                                    <div className="pro__price">
                                                        <span className="current">${product.price}.00</span>
                                                    </div>
                                                    <div className="pro__star">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
}
                        </div>
                    </div>
                    <div className="au-pagination clearfix">
                        <ul className="page-number-wrap ul--inline ul--no-style pull-right">
                            <li>
                                <span className="page-number current">1</span>
                            </li>
                            <li>
                                <span className="page-number">2</span>
                            </li>
                            <li>
                                <span className="page-number">3</span>
                            </li>
                            <li>
                                <span className="page-number">4</span>
                            </li>
                            <li>
                                <span className="page-number">...</span>
                            </li>
                            <li>
                                <span className="page-number">20</span>
                            </li>
                            <li>
                                <span className="page-number">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product