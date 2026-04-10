import React, { useEffect, useState } from 'react'
import Layout from '../../common/Layout'
import Sidebar from '../../common/Sidebar'
import { Link } from 'react-router-dom'
import { apiUrl, token } from '../../common/http'
import { set } from 'react-hook-form'
import Loader from '../../common/Loader'
import Nostate from '../../common/Nostate'

const Show = () => {

    const [loader, setLoader] = useState(false)

    const [categories, setCategories] = useState([])

    const fetchCategories = async () => {
        try {
            setLoader(true)
            const response = await fetch(`${apiUrl}/categories`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
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

    useEffect(() => {
        fetchCategories()
    }, [])
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='d-flex justify-content-between mb-4 mt-5'>
                        <h4 className='pb-0 mb-0 h4'>Categories</h4>
                        <Link to="/admin/categories/create" className='btn btn-primary'>Create</Link>
                    </div>
                    <div className='col-md-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-9'>
                        <div className='card shadow'>
                            <div className='card-body'>
                                {
                                    loader == true && <Loader />
                                }

                                {
                                    loader == false && categories.length == 0 &&
                                    <Nostate text = "No categories found" />
                                }

                                {
                                    categories && categories.length > 0 &&
                                    <table className='table table-bordered table-hover'>
                                        <thead>
                                            <tr>
                                                <th width="10%">ID</th>
                                                <th>Name</th>
                                                <th width="15%">Status</th>
                                                <th width="20%">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                categories && categories.map(category => {
                                                    return (
                                                        <tr key={category.id}>
                                                            <td>{category.id}</td>
                                                            <td>{category.name}</td>
                                                            <td>
                                                                {category.status == 1 ? (
                                                                    <span className='badge bg-success'>Active</span>
                                                                ) : (
                                                                    <span className='badge bg-danger'>Inactive</span>
                                                                )}
                                                            </td>
                                                            <td>
                                                                <Link to={`/admin/categories/${category.id}`} className='btn btn-sm btn-info'>Edit</Link>
                                                                <button className='btn btn-sm btn-danger'>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Show