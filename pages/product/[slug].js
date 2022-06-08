import Image from 'next/image';
import {useRouter} from 'next/router';
import React from 'react'
import client from '../../shop/client';
import {Store} from '../../utils/Store';
import Container from '../../views/Container'
import {urlFor, urlForThumbnail} from '../../shop/image';
import {useSnackbar} from 'notistack';
import axios from 'axios';
import Loading from '../../components/miscellaneous/Loading';

const ProductScreen = (props) => {
    const router = useRouter();
    const {slug} = props;
    const {state: {
            cart
        }, dispatch} = React.useContext(Store)
    const [state,
        setState] = React.useState({product: null, loading: true, error: ''});
    const {enqueueSnackbar} = useSnackbar();
    const [saveTab,
        setSaveTab] = React.useState(false);
    const {product, loading, error} = state;
    React.useEffect(() => {
        const fetchData = async() => {
            try {
                const product = await client.fetch(`
                *[_type == "product" && slug.current == $slug][0]`, {slug});
                setState({
                    ...state,
                    product,
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
        fetchData();
    }, [slug, state]);
    const addToCartHandler = async() => {
        const existItem = cart
            .cartItems
            .find(x => x._id === product._id);
        const quantity = existItem
            ? existItem.quantity + 1
            : 1;
        const {data} = await axios.get(`/api/products/${product._id}`);
        if (data.countInStock < quantity) {
            enqueueSnackbar('Sorry, Product is out of stock', {variant: 'error'});
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                _key: product._id,
                name: product.name,
                counterInStock: product.counterInStock,
                slug: product.slug.current,
                price: product.price,
                image: urlForThumbnail(product.image),
                quantity
            }
        });
        enqueueSnackbar(`${product.name} added to the cart`, { variant: 'success'});
        router.push('/cart')
    }
    return (
        <Container pageTitle="Product Details" title="Product Details">
            {loading
                ? (
                    <Loading />
                )
                : error
                    ? (
                        <p>{error}</p>
                    )
                    : (
                        <div className='product'>
                            <div className='product__wrapper'>
                                {product.image && <Image
                                    src={urlFor(product.image)}
                                    alt={product.name}
                                    width="1200px"
                                    height="1343px"/>
}
                            </div>
                            <div className='product__wrapper'>
                                <div className='product__box'>
                                    <h3 className="product__name">{product.name}</h3>
                                    <p className='product__amount'>${product.price}.00</p>
                                    <div className="pro__star">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                    </div>
                                    <div className='product__infoBox'>
                                        <p className='product__desc'>{product.description}</p>
                                        <div className="product__row">
                                            <div className="product__quantity">
                                                <input type="number" min="1" max="999" tep="1" value="1"/>
                                                <div className="product__nav">
                                                    <div className='product__button-1'>
                                                        <i className="zmdi zmdi-chevron-up"></i>
                                                    </div>
                                                    <div className='product__button-2'>
                                                        <i className="zmdi zmdi-chevron-down"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className='product__cart' onClick={addToCartHandler}>Add To Cart</button>
                                        </div>
                                        <div className="product__tab">
                                            <ul className="product__navTab" id="pro-tab" role="tablist">
                                                <li className="product__nav-item">
                                                    <button
                                                        className={saveTab
                                                        ? 'product__nav-link'
                                                        : 'product__active'}
                                                        onClick={() => setSaveTab(false)}>Description</button>
                                                </li>
                                                <li className="nav-item">
                                                    <button
                                                        className={saveTab
                                                        ? 'product__active'
                                                        : 'product__nav-link'}
                                                        onClick={() => setSaveTab(true)}>
                                                        Review
                                                        <span>{product.numReviews}</span>
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="product__content">
                                                {saveTab
                                                    ? <div className="product__pane-1">
                                                            <div className='product__review'>
                                                                <p className="product__auth">Thomas Miller</p>
                                                                <div className="pro__star">
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star" aria-hidden="true"></i>
                                                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                                                </div>
                                                            </div>
                                                            <p>
                                                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                            </p>
                                                        </div>
                                                    : <div className="product__pane-2">
                                                        <p>
                                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                                        </p>
                                                    </div>
}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
}
        </Container>
    )
}

export default ProductScreen

export function getServerSideProps(context) {
    return {
        props: {
            slug: context.params.slug
        }
    };
}