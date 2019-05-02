
import React, { useState } from 'react'

export function ImageSlide({ image1, image2 }) {
    const [image, setImage] = useState(image1)
    function clickImage(img) {
        setImage(img)
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <img width={200} alt="" src={'https://backendapi.turing.com/images/products/' + image} />
            <div style={{ borderBottom: '#ccc dotted thin', marginTop: 5, marginBottom: 5 }}></div>
            <img onClick={() => clickImage(image1)} style={{ paddingRight: 10, cursor: 'pointer' }} width={50} alt="" src={'https://backendapi.turing.com/images/products/' + image1} />
            <img onClick={() => clickImage(image2)} style={{ cursor: 'pointer' }} width={38} alt="" src={'https://backendapi.turing.com/images/products/' + image2} />
        </div>
    )
}