import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.scss'

export default class extends React.Component {
    render() {
        return (
            <aside className={styles.component}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </aside>
        )
    }
}