import { url, requestOptions} from './dataApp'
/**
 * Factory for create a new User a save all user data
 * You can do this for create a factory :
 * const factUser = new FactoryUser();
 * factUser.CreateElement(userID);
 * @see {@link CreateElement} for construct an user
 * @function FactoryUser
 * @method CreateElement
 * @returns {object} A factory for construct an user
 */
export default function FactoryUser(){
    /**
     * Function for create a new instance
     * @method CreateElement
     * @see {@link FactoryUser} for create instance of this factory
     * @param {number} id id of the user
     * @returns user
     */

    this.CreateElement = function (id) {
        const user = {id}
        /**
         * @param {string} slug endpoint of the API
         * @param {func} modififyResponse function for return a good data schema
         * @param {string} attrName the name of where data will save in user object
         * @Promise user
         */
        user.loadData = (slug, modififyResponse, attrName) => new Promise((resole, reject) => {
            fetch(`${url}/user/${user.id}/${slug}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const newAttr = attrName ? attrName : slug.replaceAll('-', '')
                    user[newAttr] = user[modififyResponse](result.data)
                    setTimeout(() => {
                        resole(user)
                    }, 2000);
                })
                .catch(error => {
                    console.log('error', error)
                    reject(error)
                });
        })

        /**
         * Promise who return the data for graph Timing
         * @Promise user
         */
        user.loadTiming = () => new Promise((resole, reject) => {
            user.loadData('average-sessions', 'normalChange','timing')
            .then(user=>resole(user))
        })

        /**
         * Promise who return the data for graph Activity
         * @Promise user
         */
        user.loadActivity = () => new Promise((resole, reject) => {
            user.loadData('activity', 'normalChange')
            .then(user=>resole(user))
        })

        /**
         * Promise who return the data for graph Intensity
         * @Promise user
         */
        user.loadIntensity = () => new Promise((resole, reject) => {
            user.loadData('performance',  'intensityChange','intensity')
            .then(user=>resole(user))
        })

        /**
         * return normal data
         * @return data
         */
        user.normalChange=(data)=>{
            return data.sessions
        }

        /**
         * return intensity data
         * @return data
         */
        user.intensityChange = (data) => {
            const order = ['intensity', 'speed', 'strength', 'endurance', 'energy','cardio']
            const translate = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Force','Cardio']
            const tempData = data.data.map(x => {
                x.label = data.kind[x.kind]
                return x
            })
            const newData=[]
            let i = 0
            order.forEach(x=>{
                const attr = tempData.find(elt => elt.label===x)
                attr.labelfr = translate[i]
                newData.push(attr)
                i = i + 1
            })
            return newData
        }

        /**
         * return timing data
         * @return data
         */
        user.timingChange=(data)=>{
            const newData = data.sessions.map(x=>{
                switch (x.day) {
                    case 1:
                        x.label = 'L'
                        break;
                    case 2:
                        x.label='M'
                        break;
                    case 3:
                        x.label='M'
                        break;
                    case 4:
                        x.label='J'
                        break;
                    case 5:
                        x.label='V'
                        break;
                    case 6:
                        x.label='S'
                        break;
                    case 7:
                        x.label='D'
                        break;

                    default:
                        x.label=''
                        break;
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
                    if(!user.score){
                        user.score = user.todayScore ? user.todayScore:0
                    }
                    setTimeout(() => {
                        resole(user)
                    }, 2000);
                })
                .catch(error => {
                    console.log('error', error)
                    reject(error)
                });
        })
    }
}
