
import Proyectos from './components/Proyectos'
import Home from './components/Home'
import Waves from './components/Waves'


import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ProyectoState from './context/proyectos/ProyectoState'
import WavesState from './context/waves/WavesState'

function App() {
  return (
    <>

    
    <ProyectoState>
    <WavesState>

      <p>Hola mundo</p>

      <Router>
        <Switch>
          <Route exact path='/proyectos' component={Proyectos} />
          <Route exact path='/waves' component={Waves} />
          <Route exact path='/' component={Home} />

        </Switch>

      </Router>
      </WavesState>
      </ProyectoState>
    </>
  );
}

export default App;
