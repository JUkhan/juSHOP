import React, { useEffect, useState } from 'react'
import { Api } from '../services/Api';
import { take } from 'rxjs/operators';
import { Button } from 'antd'
import { AddToCart } from '../store/actions';
import { getStore } from 'ajwah-store'

export function ProductDetails(props) {
    const [attributes, setAttributesState] = useState([])
    useEffect(() => {
        Api.getAttributes(props.product.product_id).pipe(take(1)).subscribe(res => setAttributesState(res))
    }, [])

    const colors = attributes.filter(item => item.attribute_name === 'Color')
    const sizes = attributes.filter(item => item.attribute_name === 'Size')
    const { name, description, price, discounted_price, thumbnail } = props.product;

    function addToCart() {
        getStore().dispatch({ type: AddToCart, payload: props.product })
        props.hide();
    }
    function setColor(color) {
        props.product.color = color
    }
    function setSize(size) {
        props.product.size = size
    }
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <img width={240} alt="" src={'https://backendapi.turing.com/images/products/' + thumbnail} />
                <h1>{name}</h1>
            </div>
            <div style={{ paddingBottom: 20 }}>
                <span style={{ textDecoration: 'line-through' }}>{discounted_price === '0.00' ? null : '$' + price}</span>
                <b style={{ fontSize: 20, marginLeft: 20, color: 'red' }}>{discounted_price === '0.00' ? '$' + price : '$' + discounted_price}</b>

            </div>

            <p>{description}</p>

            <div className="color-size">
                <h3>Color</h3>
                <ul >
                    {colors.map(item => <li key={item.attribute_value_id} ><Button onClick={() => setColor(item.attribute_value)} shape="circle" style={{ backgroundColor: item.attribute_value }} /></li>)}
                </ul>
            </div>
            <div className="color-size">
                <h3>Size</h3>
                <ul>
                    {sizes.map(item => <li key={item.attribute_value_id} ><Button onClick={() => setSize(item.attribute_value)} shape="round">{item.attribute_value}</Button></li>)}
                </ul>
            </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
                <Button onClick={addToCart} type="danger" shape="round">Add to Cart</Button>
            </div>
        </React.Fragment>
    )
}