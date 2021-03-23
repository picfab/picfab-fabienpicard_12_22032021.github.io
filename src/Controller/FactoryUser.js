import requestOptions from './Headers'

export default function FactoryUser(){
    this.CreateElement = function (id) {
        const user = {id}
        user.loadData = (slug, modififyResponse, attrName) => new Promise((resole, reject) => {
            fetch(`http://localhost:3000/user/${user.id}/${slug}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    const newAttr = attrName ? attrName : slug.replaceAll('-', '')
                    user[newAttr] = user[modififyResponse](result.data)
                    setTimeout(() => {
                        resole(user)
                    }, 1000);
                })
                .catch(error => {
                    console.log('error', error)
                    reject(error)
                });
        })

        user.loadTiming = () => new Promise((resole, reject) => {
            user.loadData('average-sessions', 'normalChange','timing')
            .then(x=>resole(x))
        })
        user.loadActivity = () => new Promise((resole, reject) => {
            user.loadData('activity', 'normalChange')
            .then(x=>resole(x))
        })
        user.loadIntensity = () => new Promise((resole, reject) => {
            user.loadData('performance',  'intensityChange','intensity')
            .then(x=>resole(x))
        })

        user.normalChange=(data)=>{
            return data.sessions
        }
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
            fetch(`http://localhost:3000/user/${user.id}`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    Object.assign(user, result.data)
                    if(!user.score){
                        user.score = user.todayScore ? user.todayScore:0
                    }
                    resole(user)
                })
                .catch(error => {
                    console.log('error', error)
                    reject(error)
                });
        })
    }
}
