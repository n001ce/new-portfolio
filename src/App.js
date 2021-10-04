import './App.css'
import {Route} from 'react-router-dom'
import Home from './components/index'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
  return (
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
