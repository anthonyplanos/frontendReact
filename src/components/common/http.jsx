export const apiUrl = 'http://127.0.0.1:8000/api'

export const token = () => {
    const data = JSON.parse(localStorage.getItem('adminInfo'))
    return data ? data.token : null
}