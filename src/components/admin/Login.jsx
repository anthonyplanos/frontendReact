import React from 'react'
import Layout from '../common/Layout'
import { useForm } from 'react-hook-form'
import { apiUrl } from '../common/http'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth'

const Login = () => {
  const navigate = useNavigate()
  const { login } = useContext(AdminAuthContext)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await fetch(`${apiUrl}/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log(result)

      if (response.ok) {
        const adminInfo = {
          token: result.token,
          name: result.name,
          email: result.email,
          id: result.id,
        }
        toast.success('Login successful!')
        login(adminInfo)
        navigate('/admin/dashboard')
      } else {
        toast.error(result.message || 'Login failed')
      }
    } catch (err) {
      console.error(err)
      toast.error('Unable to login. Check API/server.')
    }
  }
  return (
    <Layout>
      <div className='container py-5 d-flex justify-content-center align-items-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='w-100'>
          <div className='card shadow border-0 login'>
            <div className='card-body'>
              <h2 className='card-title mb-4'>Admin Login</h2>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email address</label>
                <input
                  {...register('email', { 
                    required: 'Email is required' ,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type='email'
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id='email'
                  placeholder='Enter email'
                />
                {errors.email && <p className='text-danger mt-1'>{errors.email.message}</p>}
              </div>
              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input
                  {...register('password', { 
                    required: 'Password is required' 
                  })}
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                />
                {errors.password && <p className='text-danger mt-1'>{errors.password.message}</p>}
              </div>
              <button type='submit' className='btn btn-primary'>Login</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login