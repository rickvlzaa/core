import React from 'react'
import Helmet from 'react-helmet'
import styles from './styles.scss'


export default class extends React.Component {
    render() {
        return (
            <div className={styles.component}>
                <Helmet
					title="Web Development"
				/>
                <section>
                    <article>
                        <div className={styles.intro}>
                            <header>
                                <h1>
                                    Web Development
                                </h1>
                            </header>
                            <p>
                                Hello, my name's Rick. I'm a web developer from Chicago. I design, build, and operate web applications.
                            </p>
                        </div>
                        <div className={styles.contact}>
                            <p>
                                <span className={styles.media}>email </span><span className={styles.slinks}>rickvelozaa@gmail.com</span><br/>
                                <span className={styles.media}>social media  </span><span className={styles.slinks}><a href="https://twitter.com/rickvlzaa">twitter</a></span><br/>
                                <span className={styles.media}>git </span><span className={styles.slinks}><a href="">github</a> <a href="">gitlab</a></span>
                            </p>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}