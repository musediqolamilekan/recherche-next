import axios from 'axios'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {useSnackbar} from 'notistack'
import React, {useReducer} from 'react'
import Loading from '../../components/miscellaneous/Loading'
import {getError} from '../../utils/error'
import Container from '../../views/Container'
import {PaystackButton} from 'react-paystack'
import {Store} from '../../utils/Store'

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true,
                error: ''
            };
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                order: action.payload,
                error: ''
            };
        case 'FETCH_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case 'PAY_REQUEST':
            return {
                ...state,
                loadingPay: true
            };
        case 'PAY_SUCCESS':
            return {
                ...state,
                loadingPay: false,
                successPay: true
            };
        case 'PAY_FAIL':
            return {
                ...state,
                loadingPay: false,
                errorPay: action.payload
            };
        case 'PAY_RESET':
            return {
                ...state,
                loadingPay: false,
                successPay: false,
                errorPay: ''
            };
    }
}

const OrderScreen = ({params}) => {
    const {enqueueSnackbar} = useSnackbar();
    const {id: orderId} = params;
    const [
        {
            loading,
            error,
            order,
            successPay
        },
        dispatch] = useReducer(reducer, {
        loading: true,
        order: {},
        error: ''
    });

    const {
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        isPaid,
        paidAt,
        isDelivered,
        deliveredAt
    } = order;

    const router = useRouter();

    const {state} = React.useContext(Store);
    const {
        cart: {
            shippingAddress,
            paymentMethod
        }
    } = state;

    const email = shippingAddress.email;
    const name = shippingAddress.firstName;
    const phone = shippingAddress.phoneNumber;
    const publicKey = "pk_test_75ce3e6427e31075fb3f94ba4e0d20689fda6f80";
    const amount = totalPrice * 100

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone
        },
        publicKey,
        text: "Pay Now"
    }

    React.useEffect(() => {
        const fetchOrder = async() => {
            try {
                dispatch({type: 'FETCH_REQUEST'});
                const {data} = await axios.get(`/api/orders/${orderId}`);

                dispatch({type: 'FETCH_SUCCESS', payload: data});
            } catch (err) {
                dispatch({type: 'FETCH_FAIL', payload: getError(err)});
            }
        };
        if (!order._id || successPay || (order._id && order._id !== orderId)) {
            fetchOrder();
            if (successPay) {
                dispatch({type: 'PAY_RESET'});
            }
        }
    }, [order, orderId, successPay, router]);

    const onApprove = async(details) => {
        try {
            dispatch({type: 'PAY_REQUEST'});
            const {data} = await axios.put(`/api/orders/${order._id}/pay`, details);
            dispatch({type: 'PAY_SUCCESS', payload: data});
            enqueueSnackbar('Order is paid', {variant: 'success'});
        } catch (err) {
            dispatch({type: 'PAY_FAIL', payload: getError(err)});
            enqueueSnackbar(`Wait! You need this product, don't go!!!!`, {variant: 'error'});
        }
    }
    function onError() {
        enqueueSnackbar(`Wait! You need this product, don't go!!!!`, {variant: 'error'});
    }
    return (
        <Container pageTitle="Place Order" title="Place Order">
            <section className="order">
                {loading
                    ? (<Loading/>)
                    : error
                        ? (
                            <p>{error}</p>
                        )
                        : (
                            <div className="order-wrapper">
                                <div className="order-container-left">
                                    <div className="order-box">
                                        <h3 className='order_id'>Order: {orderId}</h3>
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
                                            <li className="order-li">
                                                <span className="order-bold">Status:{' '}</span>
                                                <span className="order-text">
                                                    {isDelivered
                                                        ? `delivered at ${deliveredAt}`
                                                        : 'not delivered'}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="order-box order-top">
                                        <h2 className="order-heading">Payment Method</h2>
                                        <ul className="order-ul">
                                            <li className="order-li">
                                                <span className="order-bold">Payment Method:
                                                </span>
                                                <span className="order-text">{paymentMethod}</span>
                                            </li>
                                            <li className="order-li">
                                                <span className="order-bold">Status:</span>
                                                <span className='order-text'>
                                                    {isPaid
                                                        ? `paid at ${paidAt}`
                                                        : 'not paid'}
                                                </span>
                                            </li>
                                        </ul>
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
                                                    {orderItems.map((prod) => (
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
                                                <p className='order-bold'>Tax:</p>
                                                <p className='order-text'>${taxPrice}</p>
                                            </li>
                                            <li className='order-list'>
                                                <p className='order-bold'>Shipping:</p>
                                                <p className='order-text'>${shippingPrice}</p>
                                            </li>
                                            <li className='order-list'>
                                                <p className='order-bold'>Total:</p>
                                                <p className='order-bold'>${totalPrice}</p>
                                            </li>
                                            {!isPaid && (<PaystackButton
                                                onSuccess={onApprove}
                                                onClose={onError}
                                                className="order-placeBtn"
                                                {...componentProps}/>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
            </section>
        </Container>
    )
}

export function getServerSideProps({params}) {
    return {props: {
            params
        }};
}

export default dynamic(() => Promise.resolve(OrderScreen), {ssr: false});