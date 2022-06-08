import React from 'react'
import Container from '../views/Container'
import jsCookie from 'js-cookie';
import {useRouter} from 'next/router';
import {useSnackbar} from 'notistack';
import {Store} from '../utils/Store';
import {getError} from '../utils/error'
import axios from 'axios'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';
import Loading from '../components/miscellaneous/Loading'

const PlaceOrderScreen = () => {
    const {enqueueSnackbar} = useSnackbar();
    const [loading,
        setLoading] = React.useState(false);
    const router = useRouter();
    const {state, dispatch} = React.useContext(Store);
    const {
        cart: {
            cartItems,
            shippingAddress,
            paymentMethod
        }
    } = state;
    const round2 = (num) => Math.round(num * 100 + Number.EPSILON) / 100; // 123.456 => 123.46
    const itemsPrice = round2(cartItems.reduce((a, c) => a + c.price * c.quantity, 0));
    const shippingPrice = itemsPrice > 200
        ? 0
        : 15;
    const taxPrice = round2(itemsPrice * 0.15);
    const totalPrice = round2(itemsPrice + shippingPrice + taxPrice);

    React.useEffect(() => {
        if (!paymentMethod) {
            router.push('/payment');
        }
    }, [cartItems, paymentMethod, router]);

    const placeOrderHandler = async() => {
        try {
            setLoading(true);
            const {data} = await axios.post('/api/orders', {
                orderItems: cartItems.map((x) => ({
                    ...x,
                    countInStock: undefined,
                    slug: undefined
                })),
                shippingAddress,
                paymentMethod,
                itemsPrice,
                shippingPrice,
                taxPrice,
                totalPrice
            });
            dispatch({type: 'CART_CLEAR'});
            jsCookie.remove('cartItems');
            setLoading(false);
            router.push(`/order/${data}`);
        } catch (err) {
            console.log(err)
            setLoading(false);
            enqueueSnackbar(getError(err), {variant: 'error'});
        }
    };
    return (
        <Container pageTitle="Place Order" title="Place Order">
            <section className="order">
                <div className="order-wrapper">
                    <div className="order-container-left">
                        <div className="order-box">
                            <h2 className="order-heading">Shipping Address</h2>
                            <ul className="order-ul">
                                <li className="order-li">
                                    <span className="order-bold">First Name:
                                    </span>
                                    <span className="order-text">{shippingAddress.firstName}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">Last Name:
                                    </span>
                                    <span className="order-text">{shippingAddress.lastName}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">Email Address:
                                    </span>
                                    <span className="order-text">{shippingAddress.email}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">Address:
                                    </span>
                                    <span className="order-text">{shippingAddress.address}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">Phone Number:
                                    </span>
                                    <span className="order-text">{shippingAddress.phoneNumber}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">City:
                                    </span>
                                    <span className="order-text">{shippingAddress.city}</span>
                                </li>
                                <li className="order-li">
                                    <span className="order-bold">Postal Code / Zip:
                                    </span>
                                    <span className="order-text">{shippingAddress.code}</span>
                                </li>
                            </ul>
                            <button onClick={() => router.push('/checkout/checkout')} className="order-btn">
                                Edit
                            </button>
                        </div>
                        <div className="order-box order-top">
                            <h2 className="order-heading">Payment Method</h2>
                            <ul className="order-ul">
                                <li className="order-li">
                                    <span className="order-bold">Payment Method:
                                    </span>
                                    <span className="order-text">{paymentMethod}</span>
                                </li>
                            </ul>
                            <button onClick={() => router.push('/payment')} className="order-btn">
                                Edit
                            </button>
                        </div>
                        <div className="order-box order-top">
                            <h2 className="order-heading">Order Items</h2>
                            <div className="cart-table-responsive order-table">
                                <table className="cart-table">
                                    <thead className="cart-head">
                                        <tr>
                                            <th className="order-th">Image</th>
                                            <th className="order-head">Name</th>
                                            <th className="order-head">Quantity</th>
                                            <th className="order-head">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody className='cart-body'>
                                        {cartItems.map((prod) => (
                                            <tr key={prod._id}>
                                                <td>
                                                    <div className="img-cart">
                                                        <Image src={prod.image} alt={prod.name} width="60px" height="60px"/>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href={`/product/${prod.slug}`}>
                                                        <span>{prod.name}</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <span>{prod.quantity}</span>
                                                </td>
                                                <td className="text-left">
                                                    <span>${prod.price * prod.quantity}</span>
                                                </td>
                                            </tr>
                                        ))
}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="order-container-right">
                        <div className='order-box'>
                            <h2 className='order-heading'>Order Summary</h2>
                            <ul className="order-items">
                                <li className='order-list'>
                                    <p className='order-bold'>Items:</p>
                                    <p className='order-text'>${itemsPrice}</p>
                                </li>
                                <li className='order-list'>
                                    <p className='order-bold'>Shipping:</p>
                                    <p className='order-text'>${shippingPrice}</p>
                                </li>
                                <li className='order-list'>
                                    <p className='order-bold'>Total:</p>
                                    <p className='order-bold'>${totalPrice}</p>
                                </li>
                                <button
                                    className='order-placeBtn'
                                    onClick={placeOrderHandler}
                                    disabled={loading}>Place Order
                                </button>
                                <li className="order-list">
                                    {loading && <Loading/>}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default dynamic(() => Promise.resolve(PlaceOrderScreen), {ssr: false});