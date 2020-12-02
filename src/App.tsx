import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import GlobalStyle from './styles/globalStyles'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <GlobalStyle/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                </Switch>
            </>
        </Router>
    )
}

export default App
