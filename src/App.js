import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Activity from './Components/Activity'
import Score from './Components/Score'
import Intensity from './Components/Intensity'
import Timing from './Components/Timing'
import Info from './Components/Info'
import Menu from './Components/Menu'
import MenuVertical from './Components/MenuVertical'
import Header from './Components/Header'
import './sass/main.scss'
import FactoryUser from './Controller/FactoryUser'
import Spinner from './Components/Spinner'

function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    const factUser = new FactoryUser()
    factUser.CreateElement(18).then(newUser => {
      setUser(newUser)
    })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <div className="page-area">
        <MenuVertical/>
        <main className="content">
          {!user ? <Spinner/>:
            <>
              <Header name={user.userInfos.firstName} message="Félicitation ! Vous avez explosé vos objectifs hier 👏"/>
              <div className="graphs">
                <Activity user={user}/>
                <Timing user={user} />
                <Intensity user={user}/>
                <Score user={user}/>
              </div>
              <aside className="infos">
                <Info value={`${user.keyData.calorieCount} kCal`} title="calories" />
                <Info value={`${user.keyData.proteinCount} g`} title="proteines" color="#4AB8FF"/>
                <Info value={`${user.keyData.carbohydrateCount} g`} title="glucides" color="#FDCC0C"/>
                <Info value={`${user.keyData.lipidCount} g`} title="lipides" color="#FD5181" />
              </aside>
            </>
          }
          </main>
      </div>
    </div>

  );
}

App.propTypes = {
  name: PropTypes.string.isRequired
};
App.defaultProps = {
  name: 'bel inconnu'
};

export default App;
