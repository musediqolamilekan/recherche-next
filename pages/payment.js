import jsCookie from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useSnackbar} from 'notistack';
import React from 'react'
import {Store} from '../utils/Store';
import Container from '../views/Container'

const PaymentScreen = () => {
    const router = useRouter();
    const {enqueueSnackbar} = useSnackbar();
    const paymentState = {
        cash: 'cash',
        payStack: 'paystack'
    }
    const [paymentMethod,
        setPaymentMethod] = React.useState(paymentState);
    const {cash, payStack} = paymentMethod
    const {
        state: {
            cart: {
                shippingAddress
            }
        },
        dispatch
    } = React.useContext(Store)
    React.useEffect(() => {
        if (!shippingAddress.address) {
            router.push('/shipping');
        } else {
            setPaymentMethod(jsCookie.get('paymentMethod') || '');
        }
    }, [router, shippingAddress]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            enqueueSnackbar('Payment method is required', {variant: 'error'});
        } else {
            dispatch({type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod});
            jsCookie.set('paymentMethod', paymentMethod);
            router.push('/placeorder');
        }
    };
    return (
        <Container pageTitle="Payment Method" title="Payment Method">
            <section className='checkout'>
                <div className="checkout-container">
                    <div className="checkout-wrapper">
                        <div className="checkout-row">
                            <div className="checkout-col">
                                <div className="pay-method">
                                    <h1 className='pay-method-heading'>Choose a payment method</h1>
                                    <form>
                                        <div className="checkout-au-input">
                                            <input
                                                type="radio"
                                                id="cash"
                                                name="payment"
                                                value={cash}
                                                onChange={(e) => setPaymentMethod(e.target.value)}/>
                                            <label className="pay-method-mark" htmlFor='cash'>Cash</label>
                                        </div>
                                        <p className="pay-method-rule"></p>
                                        <div className="checkout-au-input">
                                            <input
                                                type="radio"
                                                id="payStack"
                                                name="payment"
                                                value={payStack}
                                                onChange={(e) => setPaymentMethod(e.target.value)}/>
                                            <label htmlFor='payStack' className="pay-method-mark">PayStack</label>
                                        </div>
                                        <p className="pay-method-rule">
                                            <Image
                                                src="https://freebw.com/templates/arch-v1/img/paypal.png"
                                                alt="paystack"
                                                width="50px"
                                                height="20px"/>
                                            <Link href="/">
                                                <a>What is paypal?</a>
                                            </Link>
                                        </p>
                                    </form>
                                </div>
                                <div className="pay-method-sub">
                                    <button type="submit" onClick={submitHandler}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default PaymentScreen