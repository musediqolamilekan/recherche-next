import Link from 'next/link'
import React from 'react'
import addToCart from './add-to-cart.png'
import Image from 'next/image';

const EmptyCart = () => {
    return (
        <div className="empty">
            <div className="empty_box">
                <Image alt="add to cart" src={addToCart} width={100} height={100} />
                <h2>Unfortunately, Your Cart is empty</h2>
                <p>Please add something into your cart</p>
                <Link href="/shop/shop">
                    <button>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default EmptyCart