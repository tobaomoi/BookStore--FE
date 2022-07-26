/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/style-prop-object */
import React from 'react'

export default function EmptyCart(props) {
    const {emptyCart} = props
    return (
        <div className="col-main">
            <div className="container">
                <h1 className="title">GIỎ HÀNG <span className="title__num">({emptyCart.length} sản phẩm)</span> </h1>
                <div className="emptyCart">

                    <div className="emptyCart__body">
                        <div>
                            <div className="emtyCart__body-icon">
                                <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/checkout_cart/ico_emptycart.svg" />
                            </div>
                            <p >Chưa có sản phẩm trong giỏ hàng của bạn.</p>
                        </div>
                        <a href="http://localhost:3000/">
                            <button className="btn-shopping mx-auto">Tiếp tục mua sắm</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
