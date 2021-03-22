import PropTypes from 'prop-types';
import Picto from './Components/Picto'
import Activity from './Components/Activity'
import Score from './Components/Score'
import Intensity from './Components/Intensity'
import Timing from './Components/Timing'
import Info from './Components/Info'
import Menu from './Components/Menu'
import MenuVertical from './Components/MenuVertical'
import Header from './Components/Header'
import './sass/main.scss'
const sessions = [
  {
    "day": 1,
    "d": "L",
    "sessionLength": 30
  },
  {
    "day": 2,
    "d": "M",
    "sessionLength": 23
  },
  {
    "day": 3,
    "d": "M",
    "sessionLength": 45
  },
  {
    "day": 4,
    "d": "J",
    "sessionLength": 50
  },
  {
    "day": 5,
    "d": "V",
    "sessionLength": 0
  },
  {
    "day": 6,
    "d": "S",
    "sessionLength": 0
  },
  {
    "day": 7,
    "d": "D",
    "sessionLength": 60
  }
]
function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
      </header>
      <div className="page-area">
        <MenuVertical/>

        <main className="content">
          <Header name="Thomas" message="Félicitation ! Vous avez explosé vos objectifs hier 👏"/>
          <div className="graphs">

            <Activity />
          {/* </div>
            <div className="graphs"> */}
            <Timing sessions={sessions} />
            <Intensity />
            <Score />
          </div>
          <aside className="infos">
            <Info value="1,930 kCal" title="calories" />
            <Info value="155 g" title="proteines" color="#4AB8FF"/>
            <Info value="290 g" title="glucides" color="#FDCC0C"/>
            <Info value="50 g" title="lipides" color="#FD5181" />
          </aside>
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
