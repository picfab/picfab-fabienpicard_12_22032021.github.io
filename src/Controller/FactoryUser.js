import { url, requestOptions } from './dataApp'
/**
 * @module FactoryUser
 * @category 2 - Factory
 */
/**
 * Factory for create a new User
 * You can do this for create a new instance :<br>
 * const factUser = new FactoryUser();<br>
 * factUser.CreateElement(userID);<br>
 * Becarefull !<br>
 * For simulate fetching they have 2 setTimeout on line 51 and 245
 * @class FactoryUser
 * @category 2 - Factory
 * @see {@link CreateElement} for construct an user
 * @returns {object} A factory for construct an user
 */
export default function FactoryUser() {
    /**
     * Function for create a new user
     * @category 2 - Factory
     * @inner
     * @method CreateElement
     * @see [FactoryUser](module-FactoryUser-FactoryUser.html) For instantiate the Factory
     * @param {number} id id of the user
     * @return {Promise} user
     */

    this.CreateElement = function (id) {
        /**
         * The user object of the module.
         */
        const user = { id }
        /**
         * Use this method for get user data
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html) For instantiate the Factory
         * @method loadData
         * @param {string} slug endpoint of the API
         * @param {func} modififyResponse function for return a good data schema
         * @param {string} attrName the name of where data will save in user object
         * @return {Promise} user
         */
        user.loadData = (slug, modififyResponse, attrName) => new Promise((resole, reject) => {
            fetch(`${url}/user/${user.id}/${slug}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const newAttr = attrName ? attrName : slug.replaceAll('-', '')
                    user[newAttr] = user[modififyResponse](result.data)
                    // setTimeout for simulate the wait of answer
                    setTimeout(() => {
                        resole(user)
                    }, 2000)
                })
                .catch(error => {
                    reject(error)
                })
        })


        /**
         * Promise who return the data for graph Timing
         * @method loadData
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html) For instantiate the Factory
         * @param {string} slug endpoint of the API
         * @param {func} modififyResponse function for return a good data schema
         * @param {string} attrName the name of where data will save in user object
         * @return {Promise} user
         */
        user.loadTiming = () => new Promise((resole, reject) => {
            user.loadData('average-sessions', 'sessionChange', 'timing')
                .then(user => resole(user))
        })

        /**
         * Promise who return the data for graph Activity
         * @method loadActivity
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html) For instantiate the Factory
         * @return {Promise} user
         */
        user.loadActivity = () => new Promise((resole, reject) => {
            user.loadData('activity', 'sessionChange')
                .then(user => resole(user))
        })

        /**
         * Promise who return the data for graph Intensity
         * @method loadIntensity
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {Promise} user
         */
        user.loadIntensity = () => new Promise((resole, reject) => {
            user.loadData('performance', 'intensityChange', 'intensity')
                .then(user => resole(user))
        })

        /**
         * Promise who return the data for graph Intensity
         * @method loadActivities
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {Promise} user
         */
         user.loadActivities = () => new Promise((resole, reject) => {
            user.loadData('activities', 'intensityChange', 'intensity')
                .then(user => resole(user))
        })

        /**
         * Promise who return the data for right cards
         * @method loadKeyData
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {Promise} user
         */
         user.loadKeyData = () => new Promise((resole, reject) => {
            user.loadData('key-data', 'normalChange', 'keyData')
                .then(user => resole(user))
        })

        /**
         * Promise who return the data for graph Score graph
         * @method loadKeyData
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {Promise} user
         */
         user.loadTodayScore = () => new Promise((resole, reject) => {
            user.loadData('today-score', 'normalChange', 'todayScore')
                .then(user => resole(user))
        })

        /**
         * Transform the data in correct schema (the data attribute is "sessions")
         * @method sessionChange
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {object} data in correct schema
         */
        user.sessionChange = (data) => {
            return data.sessions
        }

        /**
         * Transform the data in correct schema (the data attribute is "data")
         * @method normalChange
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {object} data in correct schema
         */
        user.normalChange = (data) => {
            return data.data
        }

        /**
         * Transform the data in correct schema intensity
         * @method intensityChange
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {object} data in correct schema
         */
        user.intensityChange = (data) => {
            const order = ['intensity', 'speed', 'strength', 'endurance', 'energy', 'cardio']
            const translate = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Force', 'Cardio']
            const tempData = data.data.map(x => {
                x.label = data.kind[x.kind]
                return x
            })
            const newData = []
            let i = 0
            order.forEach(x => {
                const attr = tempData.find(elt => elt.label === x)
                attr.labelfr = translate[i]
                newData.push(attr)
                i = i + 1
            })
            return newData
        }

        /**
         * Transform the data in correct schema timing
         * @method timingChange
         * @see [loadData](#~loadData) For load an user
         * @see [CreateElement](#~CreateElement) For create an user
         * @see [FactoryUser](module-FactoryUser-FactoryUser.html)  For instantiate the Factory
         * @return {object} data in correct schema
         */
        user.timingChange = (data) => {
            const newData = data.sessions.map(x => {
                switch (x.day) {
                    case 1:
                        x.label = 'L'
                        break
                    case 2:
                        x.label = 'M'
                        break
                    case 3:
                        x.label = 'M'
                        break
                    case 4:
                        x.label = 'J'
                        break
                    case 5:
                        x.label = 'V'
                        break
                    case 6:
                        x.label = 'S'
                        break
                    case 7:
                        x.label = 'D'
                        break

                    default:
                        x.label = ''
                        break
                }

                return x

            })
            return newData
        }

        return new Promise((resole, reject) => {
            fetch(`${url}/user/${user.id}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    Object.assign(user, result.data)
                    if (!user.score) {
                        user.score = user.todayScore ? user.todayScore : 0
                    }
                    // setTimeout for simulate the wait of answer
                    setTimeout(() => {
                        resole(user)
                    }, 2000)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}
