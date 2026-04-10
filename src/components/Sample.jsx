import React from 'react'

const Sample = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between mb-4 mt-5'>
                        <h4 className='pb-0 mb-0 h4'>Your title</h4>
                        <Link to="" className='btn btn-primary'>Button</Link>
                    </div>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9'>
                        <div className='card'>
                            <div className='card-body'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Sample