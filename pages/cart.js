import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Store} from '../utils/Store'
import Container from '../views/Container'
import axios from 'axios'
import {useSnackbar} from 'notistack';
import EmptyCart from '../components/miscellaneous/EmptyCart'
import {useRouter} from 'next/router'

const CartScreen = () => {
    const router = useRouter();
    const {
        state: {
            cart: {
                cartItems
            }
        },
        dispatch
    } = React.useContext(Store)
    const {enqueueSnackbar} = useSnackbar();
    const updateCartHandler = async(prod, quantity) => {
        const {data} = await axios.get(`/api/products/${prod._id}`);
        if (data.countInStock < quantity) {
            enqueueSnackbar('Sorry, Product is out of stock', {variant: 'error'});
            return;
        }
        dispatch({
            type: 'CART_ADD_ITEM',
            payload: {
                _key: prod._key,
                name: prod.name,
                counterInStock: prod.counterInStock,
                slug: prod.slug,
                price: prod.price,
                image: prod.image,
                quantity
            }
        });
        enqueueSnackbar(`${prod.name} updated in the cart`, {variant: 'success'});
    }
    const removeProdHandler = (prod) => {
        dispatch({type: 'CART_REMOVE_ITEM', payload: prod});
    }
    return (
        <Container pageTitle="Shopping Cart">
            {cartItems.length === 0
                ? <EmptyCart/>
                : (
                    <div className="cart-wrap">
                        <div className="cart-section">
                            <div className="cart-container">
                                <div className="cart-table-responsive">
                                    <table className="cart-table">
                                        <thead className="cart-head">
                                            <tr>
                                                <th></th>
                                                <th className="cart-head">Product</th>
                                                <th className="cart-head">Price</th>
                                                <th className="cart-head">Quantity</th>
                                                <th className="cart-head">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className='cart-body'>
                                            {cartItems.map((prod) => (
                                                <tr key={prod._id}>
                                                    <td>
                                                        <button className="cart-remove" onClick={() => removeProdHandler(prod)}>
                                                            <i className="zmdi zmdi-close"></i>
                                                        </button>
                                                    </td>
                                                    <td className="text-left pro-cart">
                                                        <div className="img-cart">
                                                            <Image src={prod.image} alt={prod.name} width="60px" height="60px"/>
                                                        </div>
                                                        <Link href={`/product/${prod.slug}`}>
                                                            <h3 className="cart-type">{prod.name}</h3>
                                                        </Link>
                                                    </td>
                                                    <td className="text-left">
                                                        <span>${prod.price}</span>
                                                    </td>
                                                    <td className="text-left">
                                                        <form>
                                                            <div className="cart-quantity">
                                                                <select
                                                                    value={prod.quantity}
                                                                    onChange={(e) => updateCartHandler(prod, e.target.value)}>
                                                                    {[...Array(prod.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </form>
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
                                <div className='card-couponBox .clearfix'>
                                    <div className="card-couponFlex">
                                        <form className="cart-form">
                                            <input type="text" name="code" id="code" placeholder="Coupon Code"/>
                                        </form>
                                    </div>
                                    <div className="card-couponFlex">
                                        <button type="submit" className="cart-couponBtn">Apply Coupon</button>
                                        <button className="cart-couponBtn">Update Cart</button>
                                    </div>
                                </div>
                                <div className="cart-total">
                                    <h4>CARD TOTAL</h4>
                                    <div className="cart-table-responsive">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>ITEMS</td>
                                                    <td>
                                                        ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                                                        items)
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>SUBTOTAL</td>
                                                    <td className="cart-bold">${' '} {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <button
                                        onClick={() => {
                                        router.push('/checkout/checkout')
                                    }}
                                        className="cart-total-btn">Proceed to checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
}
        </Container>
    )
}

export default dynamic(() => Promise.resolve(CartScreen), {ssr: false});