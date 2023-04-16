import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState, useRef } from "react";
  
//https://api.github.com/users/sarmuns/repos

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);
    const inputRef = useRef(null)
    const inputValue = inputRef.current?.value ?? 'sarmuns';


    async function fetchRepositories(inputValue) {
        try {
          if (!inputValue)  {
            inputValue = "sarmuns";
            alert('Sua pesquisa retornou um erro')
          }
          const response = await fetch(`https://api.github.com/users/${inputValue}/repos`);
          const data = await response.json();
          setRepositories(data);
        } catch (error) {
            setRepositories({name: 'Pokedex', description: 'Repositório sem descrição', html_url: ''});
            alert('Sua pesquisa retornou um erro')
          console.error(error);
        }
      }
      
      useEffect(() => {
        fetchRepositories(inputValue);
      }, []);


    return (
        <section className="repository-list">
            <header>Lista de repositórios</header>
            <input type="text" ref={inputRef} />
            <button type="button" onClick={() => fetchRepositories(inputRef.current.value)}>Pesquisar</button>
            <ul>
                {repositories?.map(repository => <RepositoryItem key = {repository.name} repo = {repository}/>)}
            </ul>

        </section>
    )

}