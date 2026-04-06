import React from 'react'
import ProductImg from '../../assets/images/persian.jpg'
import ProductImg2 from '../../assets/images/cat2.jpg'
import ProductImg3 from '../../assets/images/cat3.jpg'
import ProductImg4 from '../../assets/images/cat4.jpg'

const FeaturedProducts = () => {
  return (
    <>
                {/* Product grid structure is intentionally reusable so additional cards can be duplicated with the same markup. */}
                <section className='section-2 py-5'>
                    <div className='container'>
                        <h2 className='text-center mb-5'>Featured Cats</h2>
                        <div className='row g-4 mt-4'>
                            <div className='col-md-3'>
                                <div className='product card'>
                                    <div className='card-img'>
                                        <img src={ProductImg} className='card-img-top' alt='Persian Cat' />
                                        <div className='card-body'>
                                            <a href='#'>
                                                <h3 className='card-title'>Cat 1</h3>
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
                                        <img src={ProductImg2} className='card-img-top' alt='Persian Cat' />
                                        <div className='card-body'>
                                            <a href='#'>
                                                <h3 className='card-title'>Cat 2</h3>
                                            </a>
                                            <div className='price'>
                                                $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                            </div>
                                            <p className='card-text'>Description of Product 2.</p>
                                            <a href='#' className='btn btn-primary'>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className='col-md-3'>
                                <div className='product card'>
                                    <div className='card-img'>
                                        <img src={ProductImg3} className='card-img-top' alt='Persian Cat' />
                                        <div className='card-body'>
                                            <a href='#'>
                                                <h3 className='card-title'>Cat 3</h3>
                                            </a>
                                            <div className='price'>
                                                $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                            </div>
                                            <p className='card-text'>Description of Product 3.</p>
                                            <a href='#' className='btn btn-primary'>Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className='col-md-3'>
                                <div className='product card'>
                                    <div className='card-img'>
                                        <img src={ProductImg4} className='card-img-top' alt='Persian Cat' />
                                        <div className='card-body'>
                                            <a href='#'>
                                                <h3 className='card-title'>Cat 4</h3>
                                            </a>
                                            <div className='price'>
                                                $499.99 <span className='text-muted text-decoration-line-through'>$599.99</span>
                                            </div>
                                            <p className='card-text'>Description of Product 4.</p>
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

export default FeaturedProducts