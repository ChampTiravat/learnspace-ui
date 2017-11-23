import JWTDecode from 'jwt-decode'

 /**
 * @desc Check wether the current user is authenticated or not
 * @return Boolean
 */
export const validateToken = async () => {
    // Get the token
    const token = localStorage.getItem('token')
    try {
        await JWTDecode(token)
        return true
    } catch (err) {
        // User isn't authenticated
        return false
    }
}