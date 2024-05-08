import React from 'react'
import './help.css'
import { assets } from '../../assets/assets'

const help = () => {
    return (

        <div className='main-container'>
            <div className="main-heading">
                <h2>We're here to help.</h2>
                <p>Buying and selling property can be complex and stressful. We're here to make it easier.</p>
            </div>
            <div className="grid-container">
                <div className="grid">
                    <h5 className="grid-head">We've got your back</h5>
                    <p className="grid-para">We’ll give you expert support and guidance and enable you to transact quickly and easily. Every step of your transaction is recorded online, so you can see your matter’s progress anywhere, anytime.</p>
                </div>
                <div className="grid">
                    <h5 className="grid-head">We’ll fast-track your matter</h5>
                    <p className="grid-para">When buying or selling a property, you need the right team behind you. It’s emotional, and things often move quickly. We play a vital role in the transaction, coordinating the sale or purchase, money and settlement.</p>
                </div>
                <div className="grid">
                    <h5 className="grid-head">We’ll earn your trust</h5>
                    <p className="grid-para">Customers are our lifeblood. So we put our good-natured, honest and authentic selves first and do what we say we’re going to do every time. </p>
                </div>
            </div>
            <div className="main-heading-help">
                <h2>How can we help?</h2>
                <p>Let us help you with a free conveyancing quote.
                    <br /> We just need a few details to begin.</p>
            </div>

            <div className="grid-container-house">
                <div className="grid-1">
                    <img src={assets.buying} alt="" className="grid-asset" />
                    <p className='grid-para2'>Buying a property</p>
                </div>
                <div className="grid-1">
                    <img src={assets.selling} alt="" className="grid-asset" />
                    <p className='grid-para2'>Selling a property</p>
                </div>
                <div className="grid-1">
                    <img src={assets.transfer} alt="" className="grid-asset" />
                    <p className='grid-para2'>Transfer a property</p>
                </div>
            </div>

            

        </div>
    )
}

export default help