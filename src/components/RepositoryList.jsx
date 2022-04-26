import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";
  
//https://api.github.com/users/sarmuns/repos

export function RepositoryList(props){
    const [repositories, setRepositories] = useState([]);

    const name = 'sarmuns';

    useEffect(() => {
        fetch(`https://api.github.com/users/${name}/repos`)
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])




    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {repositories.map(repository => <RepositoryItem key = {repository.name} repo = {repository}/>)}
            </ul>

        </section>
    )

}