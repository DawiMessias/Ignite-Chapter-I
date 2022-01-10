import {useState, useEffect} from "react"
import { RepositoryItem } from "./RepositoryItem.jsx"
import "../styles/repository.scss"


export function RepositoryList() {
    const [repositories, setRepositories] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/orgs/rocketseat/repos")
            .then(res => res.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository="unform2"/>
                <RepositoryItem />
            </ul>
        </section>
    )
}