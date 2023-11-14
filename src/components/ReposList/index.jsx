import { useState } from "react"

import styles from './ReposList.module.css'

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([])

    useState(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson)
            })
    }, [nomeUsuario])

    return (
        <div className='container'>
            <ul className={styles.list}>
                {repos.map(repositorio => (
                    <li className={styles.listItem} key={repositorio.id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> {repositorio.name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {repositorio.language} <br />
                        </div>
                        <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList