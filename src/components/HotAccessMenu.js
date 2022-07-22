import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotAccessMenu.css'

const HotAccessMenu = () => {
  return (
    <div className='HotAccessMenu'>
        <Link className="HotAccessLink" to="/music">Music Store</Link>
        <Link className="HotAccessLink" to="/smartDevice">Smart Device</Link>
        <Link className="HotAccessLink" to="/home">Home</Link>
        <Link className="HotAccessLink" to="/lifestyle">Lifestyle</Link>
        <Link className="HotAccessLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessMenu