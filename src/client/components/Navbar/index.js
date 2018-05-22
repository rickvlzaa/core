import React from 'react'
import styles from './styles.scss'
export default class extends React.Component {
    render() {
        return (
            <header className={styles.component}>
                <span>Rick Veloz</span><br/>
                <span>Web Development</span>
            </header>
        )
    }
}