import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'
import Home from './scenes/Home'
import About from './scenes/About'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Sidebar from './components/Sidebar'
import Foot from './components/Foot'

import styles from './styles.scss'

export default class extends React.Component {
    render() {
        return (
            <div className={styles.site}>
                <Helmet
					htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
					titleTemplate="%s | Rick Veloz"
					titleAttributes={{itemprop: "name", lang: "en"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
				/>
                <div className={styles.navigate}>
                    <div className={styles.subnav}>
                        <Navbar/>
                        <Sidebar/>
                    </div>
                </div>
                <div className={styles.content}>
                    <Content>
                        <Switch>
                            <Route exact path="/" render={props => <Home {...props}/>}/>
                            <Route path="/about" render={props => <About {...props}/>}/>
                        </Switch>
                    </Content>
                </div>
            </div>
        )
    }
}