
import React, { useRef, useState, useEffect } from 'react'
import { Rate, Button, message, List } from 'antd'
import { Api } from '../../services/Api';
import { useSubscriptions } from 'react-ajwah';
import { take } from 'rxjs/operators';
import { ICustomerState } from '../../store/model';

export function Review({ productId }: any) {

    let txtEl = useRef<any>(null)
    let [rate, setRate] = useState(0)
    let [reviews, setReview] = useState<any>([])
    const { customer } = useSubscriptions<{ customer: ICustomerState }>(['customer'])

    useEffect(() => {
        Api.getProductReviews(productId).pipe(take(1)).subscribe(res => setReview(res))
    }, [])

    function sendReview() {
        setReview([{ rating: rate, review: txtEl.current.value }, ...reviews])
        Api.AddProductReview(productId, txtEl.current.value, rate, customer.accessToken).subscribe((res: any) => { }, (err: any) => message.error('You are not authorized to leave a review.'))
        txtEl.current.value = ''
        setRate(0)
    }
    function rateChange(val: any) {
        setRate(val)
    }
    return (
        <div style={{ textAlign: 'center', marginTop: 22 }}>
            <h3>Leave a review</h3>
            <div className="review">
                <div> <textarea ref={txtEl} rows={5}></textarea></div>
                <div className="rate"> <Rate value={rate} onChange={rateChange} /></div>
                <div><Button onClick={sendReview} type="danger" shape="round">Leave review</Button></div>

            </div>
            <div className="reviews">
                <List
                    itemLayout="horizontal"
                    dataSource={reviews}
                    renderItem={(item: any) => (
                        <List.Item>
                            <List.Item.Meta
                                title={<Rate disabled value={item.rating} />}
                                description={item.review}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}