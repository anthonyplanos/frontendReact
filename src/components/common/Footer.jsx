import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-tertiary text-white p-4 mt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <span>&copy; 2024 My E-commerce Store. All rights reserved.</span>
                        </div>
                        <div className='col-md-3'>
                            <h2>Quick Links</h2>
                            <ul>
                                <li><a href='#'>Cats</a></li>
                                <li><a href='#'>Dogs</a></li>
                                <li><a href='#'>Birds</a></li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h2>Customer Service</h2>
                            <ul>
                                <li><a href='#'>Contact Us</a></li>
                                <li><a href='#'>Shipping Policy</a></li>
                                <li><a href='#'>Returns & Exchanges</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer