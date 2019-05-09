
import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import { message } from 'antd'

const createOptions = (fontSize: any, padding?: any) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
                padding,
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};

function payment(props: any) {

    function handleSubmit(ev: any) {
        ev && ev.preventDefault();
        if (props.stripe) {
            props.stripe
                .createToken()
                .then((payload: any) => {
                    if (!payload.error) message.loading('loading...')
                    if (payload.error) {
                        message.error(payload.error.message);
                    } else {
                        props.config.pamentTokenCallback(payload)
                    }
                });
        } else {
            console.log("Stripe.js hasn't loaded yet.");
        }
    };
    props.config.submit = handleSubmit;
    return (

        <form onSubmit={handleSubmit}>
            <label>
                Card details
            <CardElement
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onReady={handleReady}
                    {...createOptions(props.fontSize)}
                />
            </label>
            {/* <button>Pay</button> */}
        </form>

    );

}

const handleBlur = () => {
    console.log('[blur]');
};
const handleChange = (change: any) => {
    console.log('[change]', change);
};

const handleFocus = () => {
    console.log('[focus]');
};
const handleReady = () => {
    console.log('[ready]');
};

export const Payment = injectStripe(payment)