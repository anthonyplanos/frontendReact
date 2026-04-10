import React from 'react'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'
import Layout from '../../common/Layout'
import { useForm } from 'react-hook-form'

const Create = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const saveCategory = async (data) => {
        try {
            console.log(data)

            const response = await fetch(`${apiUrl}/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            if (response.ok) {
                setLoader(false)
                const items = Array.isArray(result?.data)
                    ? result.data
                    : Array.isArray(result?.categories)
                        ? result.categories
                        : []
                setCategories(items)
            } else {
                console.log(result?.message || 'Failed to fetch categories')
            }
        } catch (error) {
            console.error('Error fetching categories:', error)
        }
    }

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between mb-4 mt-5'>
                        <h4 className='pb-0 mb-0 h4'>Categories / Create</h4>
                        <Link to="/admin/categories" className='btn btn-primary'>Back</Link>
                    </div>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9'>
                        <form onSubmit={handleSubmit(saveCategory)}>
                            <div className='card shadow'>
                                <div className='card-body p-4'>
                                    <div className='mb-3'>
                                        <label className='form-label'>Name</label>
                                        <input
                                            {...register('name', {
                                                required: 'Name is required'
                                            })}
                                            type="text" className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            id='name'
                                            placeholder='Enter category name' />
                                        {errors.name && <p className='text-danger mt-1'>{errors.name?.message}</p>}
                                    </div>
                                    <div className='mb-3'>
                                        <label className='form-label'>Status</label>
                                        <select
                                            {...register('status', {
                                                required: 'Please select a status'
                                            })}
                                            className={`form-select ${errors.status ? 'is-invalid' : ''}`}>
                                            <option value="">Select status</option>
                                            <option value="1">Active</option>
                                            <option value="0">Inactive</option>
                                        </select>
                                        {
                                            errors.status && <p className='invalid-feedback text-danger mt-1'>{errors.status?.message}</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary mt-3'>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Create