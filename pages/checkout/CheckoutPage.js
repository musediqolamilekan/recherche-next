import jsCookie from 'js-cookie';
import {useRouter} from 'next/router';
import React from 'react'
import {Controller, useForm} from 'react-hook-form';
import {Store} from '../../utils/Store';

const CheckoutPage = () => {
    const router = useRouter();
    const {
        state: {
            cart: {
                cartItems,
                shippingAddress
            }
        },
        dispatch
    } = React.useContext(Store)
    const {handleSubmit, control, formState: {
            errors
        }, setValue} = useForm();
    React.useEffect(() => {
        setValue('firstName', shippingAddress.firstName);
        setValue('lastName', shippingAddress.lastName);
        setValue('address', shippingAddress.address);
        setValue('email', shippingAddress.email);
        setValue('phoneNumber', shippingAddress.phoneNumber);
        setValue('code', shippingAddress.code);
        setValue('city', shippingAddress.city);
    }, [setValue, shippingAddress])

    const submitHandler = ({
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
        code,
        city
    }) => {
        dispatch({
            type: 'SAVE_SHIPPING_ADDRESS',
            payload: {
                firstName,
                lastName,
                address,
                email,
                phoneNumber,
                code,
                city
            }
        });
        jsCookie.set('shippingAddress', JSON.stringify({
            firstName,
            lastName,
            address,
            email,
            phoneNumber,
            code,
            city
        }));
        router.push('/payment')
    }
    return (
        <section className="checkout">
            <div className="checkout-container">
                <div className="checkout-wrapper">
                    <div className="checkout-row">
                        <div className="checkout-col">
                            <div className="checkout-suggest">
                                <div className="checkout-suggest-inner">
                                    <i className="zmdi zmdi-window-maximize"></i>
                                    <span>
                                        Returning customer?
                                        <a href="#">
                                            Click here to login</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="checkout-col">
                            <div className="checkout-suggest checkout-mt">
                                <div className="checkout-suggest-inner">
                                    <i className="zmdi zmdi-window-maximize"></i>
                                    <span>
                                        Have a coupon?
                                        <a href="#">
                                            Click here to enter your code</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="checkout-col-6">
                            <h4>Billing details</h4>
                            <form>
                                <div className="checkout-row">
                                    <div className="checkout-col-6">
                                        <div className="checkout-inputBox">
                                            <label htmlFor="firstName">First Name
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="firstName"
                                                defaultValue=""
                                                control={control}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        id="firstName"
                                                        className='checkout-input'
                                                        placeholder="First Name"
                                                        {...field}/>
                                                    <small>
                                                        {errors.firstName
                                                            ? errors.firstName.type === 'minLength'
                                                                ? 'Name length is more than 1'
                                                                : 'Name is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                    <div className="checkout-col-6">
                                        <div className="checkout-inputBox">
                                            <label htmlFor="lastName">
                                                Last Name
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="lastName"
                                                defaultValue=""
                                                control={control}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        id="lastName"
                                                        className='checkout-input'
                                                        placeholder="Last Name"
                                                        {...field}/>
                                                    <small>
                                                        {errors.lastName
                                                            ? errors.lastName.type === 'minLength'
                                                                ? 'Name length is more than 1'
                                                                : 'Name is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-form-group">
                                    <label htmlFor="company">Company Name</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className='checkout-input'
                                        placeholder="Company Name"/>
                                </div>
                                <div className="checkout-row">
                                    <div className="checkout-col-6">
                                        <div className="checkout-inputBox">
                                            <label htmlFor="email">
                                                Email Address
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="email"
                                                defaultValue=""
                                                control={control}
                                                rules={{
                                                required: true,
                                                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                                            }}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className='checkout-input'
                                                        placeholder="Email Address"
                                                        {...field}/>
                                                    <small>
                                                        {errors.email
                                                            ? errors.email.type === 'pattern'
                                                                ? 'Email is not valid'
                                                                : 'Email is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                    <div className="checkout-col-6">
                                        <div className="checkout-inputBox">
                                            <label htmlFor="phoneNumber">
                                                Phone Number
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="phoneNumber"
                                                defaultValue=""
                                                control={control}
                                                rules={{
                                                required: true,
                                                pattern: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/
                                            }}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="tel"
                                                        name="phoneNumber"
                                                        id="phoneNumber"
                                                        className='checkout-input'
                                                        placeholder="Phone Number"
                                                        {...field}/>
                                                    <small>
                                                        {errors.phoneNumber
                                                            ? errors.phoneNumber.type === 'pattern'
                                                                ? 'Phone Number is not valid'
                                                                : 'Phone Number is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-form-group">
                                    <label>Country Name</label>
                                    <select name="country" id="country">
                                        <option value="nigeria">Nigeria</option>
                                    </select>
                                </div>
                                <div className="checkout-form-group">
                                    <label htmlFor="address">
                                        Street Address
                                        <span>*</span>
                                    </label>
                                    <Controller
                                        name="address"
                                        defaultValue=""
                                        control={control}
                                        render={({field}) => (
                                        <div>
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                className='checkout-input'
                                                placeholder="Street Address"
                                                {...field}/>
                                            <small>
                                                {errors.address
                                                    ? errors.address.type === 'minLength'
                                                        ? 'Address length is more than 1'
                                                        : 'Address is required'
                                                    : ''}
                                            </small>
                                        </div>
                                    )}></Controller>
                                </div>
                                <div className="checkout-row">
                                    <div className="checkout-col-6">
                                        <div className="checkout-inputBox">
                                            <label htmlFor="code">
                                                Postal Code / Zip
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="code"
                                                defaultValue=""
                                                control={control}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="code"
                                                        id="code"
                                                        className='checkout-input'
                                                        placeholder="Postal Code / Zip"
                                                        {...field}/>
                                                    <small>
                                                        {errors.code
                                                            ? errors.code.type === 'minLength'
                                                                ? 'Postal Code / Zip length is more than 1'
                                                                : 'Postal Code / Zip is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                    <div className="checkout-col-6">
                                        <div className="checkout-form-group">
                                            <label htmlFor="city">
                                                City
                                                <span>*</span>
                                            </label>
                                            <Controller
                                                name="city"
                                                defaultValue=""
                                                control={control}
                                                render={({field}) => (
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        id="city"
                                                        className='checkout-input'
                                                        placeholder="City"
                                                        {...field}/>
                                                    <small>
                                                        {errors.city
                                                            ? errors.city.type === 'minLength'
                                                                ? 'City length is more than 1'
                                                                : 'City is required'
                                                            : ''}
                                                    </small>
                                                </div>
                                            )}></Controller>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-form-group">
                                    <input type="checkbox" checked="checked"/>
                                    <span className="checkout-mark">Create An Account?</span>
                                </div>
                                <div className="checkout-form-group">
                                    <label>
                                        Account Password
                                        <span>*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className='checkout-input'
                                        placeholder="password"/>
                                </div>
                            </form>
                        </div>
                        <div className="checkout-col-6">
                            <h4>SHIP TO DIFFERENT ADDRESS?</h4>
                            <form>
                                <div className="checkout-form-group">
                                    <label>Order Note</label>
                                    <input
                                        type="text"
                                        name="company"
                                        id="company"
                                        className='checkout-input'
                                        placeholder="Note about your Order e.g special notes for delivery"/>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* ORDER */}
                    <div className="checkout-row checkout-top">
                        <div className="checkout-col">
                            <h4>Your Order</h4>
                            <div className="checkout-responsive">
                                <table className="cart-table">
                                    <thead className="checkout-head">
                                        <tr>
                                            <th className="checkout-name">Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="checkout-body">
                                        {cartItems.map((prod) => (
                                            <tr key={prod._id}>
                                                <td className="checkout-product">{prod.name}</td>
                                                <td>${prod.price}</td>
                                            </tr>
                                        ))
}
                                        <tr>
                                            <td className="checkout-product checkout-bold">Total</td>
                                            <td className="bold">${' '} {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-row">
                        <div className="checkout-col">
                            <div className="pay-method-sub">
                                <button type="submit" onClick={handleSubmit(submitHandler)}>Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutPage