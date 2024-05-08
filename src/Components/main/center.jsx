import React from 'react'
import './center.css'
import { assets } from '../../assets/assets'
const center = () => {
  return (
    <div className='Container'>
      <div className="heading">
        <h2>Simplify Your Move: </h2>
      </div>
      <div className="prop-p2">Get a Tailored Conveyancing Quote in Minutes!</div>
      <div className="prop-head">
        <p>Property Converyancing</p>
      </div>
      <div className="dropdown-container">
        <select name="" id="" className="select">
          <option value="Buying or Selling">Buying or Selling</option>
          <option value="Buying">Buying</option>
          <option value="Selling">Selling</option>
          <option value="Transferring">Transferring</option>
        </select>
        <select name="" id="" className="select">
          <option value="Property Type">Property Type</option>
          <option value="Land">Land</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Town House">Town House</option>
          <option value="Villa">Villa</option>
          <option value="Of The Plan">Of the Plan</option>
        </select>
        <select name="" id="" className="select">
          <option value="State">State</option>
          <option value="New South Wales">New South Wales</option>
          <option value="QueensLand">QueensLand</option>
          <option value="South Australia">South Australia</option>
          <option value="Victoria">Victoria</option>
          <option value="Tasmania">Tasmania</option>
          <option value="Western Australia">Western Australia</option>
        </select>
      </div>
      <div className="submit">
        <button className="quote-prop">Get Quote</button>
        {/* <img src={assets.right_arrow} className='image-arrow' alt="" srcset="" /> */}



      </div>

    </div>
  )
}

export default center