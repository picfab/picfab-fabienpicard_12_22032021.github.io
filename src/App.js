import { useEffect, useState } from 'react'
import Activity from './Components/Activity'
import Score from './Components/Score'
import Intensity from './Components/Intensity'
import Timing from './Components/Timing'
import Info from './Components/Info'
import Menu from './Components/Menu'
import MenuVertical from './Components/MenuVertical'
import Header from './Components/Header'
import FactoryUser from './Controller/FactoryUser'
import Spinner from './Components/Spinner'
import { userId } from './Controller/dataApp'

/**
 * the application component
 * @module App
 * @component
 * @example
 * return ( <App/> )
 */
export default function App() {
  const [user, setUser] = useState(null)

  /**
   * set a new user
   */
  useEffect(() => {
    const factUser = new FactoryUser()
    factUser.CreateElement(userId).then(newUser => {
      setUser(newUser)
      newUser.loadActivity()
        .then((user) => setUser({ ...user }))
      newUser.loadIntensity()
        .then((user) => setUser({ ...user }))
      newUser.loadTiming()
        .then((user) => setUser({ ...user }))
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
      <div className="page-area">
        <MenuVertical />
        <main className="content">
          {!user ? <Spinner className="openApp bg" /> :
            <>
              <Header name={user.userInfos.firstName} message="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
              <div className="graphs">
                <Activity data={user.activity} />
                <Timing data={user.timing} />
                <Intensity data={user.intensity} />
                <Score score={user.score} />
              </div>
              <aside className="infos">
                <Info value={`${user.keyData.calorieCount} kCal`} title="calories" />
                <Info value={`${user.keyData.proteinCount} g`} title="proteines" color="#4AB8FF" />
                <Info value={`${user.keyData.carbohydrateCount} g`} title="glucides" color="#FDCC0C" />
                <Info value={`${user.keyData.lipidCount} g`} title="lipides" color="#FD5181" />
              </aside>
            </>
          }
        </main>
      </div>
    </div>

  )
}

