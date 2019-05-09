import React, { useEffect, useState } from 'react'
import { Api } from '../../services/Api';
import { take } from 'rxjs/operators';
import { Button, Row, Col } from 'antd'
import { AddToCart } from '../../store/actions';
import { dispatch } from 'ajwah-store'
import { updateObject } from '../../utils'
import { ImageSlide } from './imageSlider'
import { Review } from './review';

export function ProductDetails(props: any) {
    const [sa, setSAState] = useState<any>({})
    const [attributes, setAttributesState] = useState([])

    useEffect(() => {
        Api.getProductDetails(props.product.product_id).pipe(take(1)).subscribe(res => {
            props.product.description = res[0].description;
            props.product.image = res[0].image;
            props.product.image2 = res[0].image_2;
            setSAState({})

        });
        Api.getAttributes(props.product.product_id).pipe(take(1)).subscribe(res => setAttributesState(res))
    }, [])

    const colors = attributes.filter((item: any) => item.attribute_name === 'Color')
    const sizes = attributes.filter((item: any) => item.attribute_name === 'Size')
    const { name, description, price, discounted_price, thumbnail, image2, product_id } = props.product;

    function addToCart() {
        dispatch(AddToCart, props.product)
        props.hide();
    }
    function setColor(color: any) {
        setSAState(updateObject(sa, { color }))
        props.product.color = color
    }
    function setSize(size: any) {
        setSAState(updateObject(sa, { size }))
        props.product.size = size
    }

    return (
        <React.Fragment>
            <Row gutter={15}>
                <Col span={8}>
                    <ImageSlide image1={thumbnail} image2={image2} />
                </Col>
                <Col span={16}>
                    <h1>{name}</h1>
                    <div style={{ paddingBottom: 20 }}>
                        <span style={{ textDecoration: 'line-through' }}>{discounted_price === '0.00' ? null : '$' + price}</span>
                        <b style={{ fontSize: 20, marginLeft: 20, color: 'red' }}>{discounted_price === '0.00' ? '$' + price : '$' + discounted_price}</b>

                    </div>

                    <p>{description}</p>
                    <b>Color</b>
                    <div className="color-size">
                        <ul >
                            {colors.map((item: any) => <li key={name + item.attribute_value} ><Button className={sa.color === item.attribute_value ? 'circle-border' : ''} onClick={() => setColor(item.attribute_value)} shape="circle" style={{ backgroundColor: item.attribute_value }} /></li>)}
                        </ul>
                    </div>
                    <div />
                    <b>Size</b>
                    <div className="color-size">
                        <ul>
                            {sizes.map((item: any) => <li key={name + item.attribute_value} ><Button className={sa.size === item.attribute_value ? 'circle-border' : ''} onClick={() => setSize(item.attribute_value)} shape="round">{item.attribute_value}</Button></li>)}
                        </ul>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 20 }}>
                        <Button disabled={!(sa.size && sa.color)} onClick={addToCart} type="danger" shape="round">Add to Cart</Button>
                    </div>
                </Col>

            </Row>
            <Review productId={product_id} />

        </React.Fragment>
    )
}

