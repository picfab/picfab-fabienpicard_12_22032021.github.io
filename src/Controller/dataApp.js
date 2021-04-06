/**
 * url of this APP
 * @category 1 - Constant
 * @type {string} url API
 */
const url = 'http://localhost:3000'

/**
 * userID
 * @category 1 - Constant
 * @type {number} the user id for load him
 */
const userId = 18

/**
 * requestOptions for fetching
 * @category 1 - Constant
 * @type {object} options for the request fetch
 */
const requestOptions = {
    method: 'GET',
    redirect: 'follow'
}

export { url, requestOptions, userId }
