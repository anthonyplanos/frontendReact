import React from 'react'
import Layout from './common/Layout';

const Shop = () => {
  return (
    <>
      <Layout>
        <nav aria-label="breadcrumb" className='py-4'>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>
      </Layout>
    </>
  )
}

export default Shop