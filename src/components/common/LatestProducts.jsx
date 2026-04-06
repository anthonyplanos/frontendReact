import React from 'react'
import ProductImg from '../../assets/images/persian.jpg'

const LatestProducts = () => {
    return (
        <>
            {/* Product grid structure is intentionally reusable so additional cards can be duplicated with the same markup. */}
            <section className='section-2 py-5'>
                <div className='container'>
                    <h2 className='text-center mb-5'>CAT BREEDS</h2>
                    <div className='row g-4 mt-4'>
                        <div className='col-md-3'>
                            <div className='product card'>
                                <div className='card-img'>
                                    <img src={ProductImg} className='card-img-top' alt='Persian Cat' />
                                    <div className='card-body'>
                                        <a href='#'>
                                            <h3 className='card-title'>Persian Cat</h3>
                                        </a>
                                        <div className='price'>
                                            $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                        </div>
                                        <p className='card-text'>Description of Product 1.</p>
                                        <a href='#' className='btn btn-primary'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='product card'>
                                <div className='card-img'>
                                    <img src={ProductImg} className='card-img-top' alt='Persian Cat' />
                                    <div className='card-body'>
                                        <a href='#'>
                                            <h3 className='card-title'>Persian Cat</h3>
                                        </a>
                                        <div className='price'>
                                            $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                        </div>
                                        <p className='card-text'>Description of Product 1.</p>
                                        <a href='#' className='btn btn-primary'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='product card'>
                                <div className='card-img'>
                                    <img src={ProductImg} className='card-img-top' alt='Persian Cat' />
                                    <div className='card-body'>
                                        <a href='#'>
                                            <h3 className='card-title'>Persian Cat</h3>
                                        </a>
                                        <div className='price'>
                                            $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                        </div>
                                        <p className='card-text'>Description of Product 1.</p>
                                        <a href='#' className='btn btn-primary'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='product card'>
                                <div className='card-img'>
                                    <img src={ProductImg} className='card-img-top' alt='Persian Cat' />
                                    <div className='card-body'>
                                        <a href='#'>
                                            <h3 className='card-title'>Persian Cat</h3>
                                        </a>
                                        <div className='price'>
                                            $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                        </div>
                                        <p className='card-text'>Description of Product 1.</p>
                                        <a href='#' className='btn btn-primary'>Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LatestProducts