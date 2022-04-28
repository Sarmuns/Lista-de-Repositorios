import { useState } from "react"

export function RepositoryItem(props){



    //props.repo.name=='Pokedex'?'Pokedex :)':props.repo.name

    return(
        <li>
        <strong>{props.repo.name} &#128142;</strong>
        <p>{props.repo.description ?? 'Repositório sem descrição'}</p>

        <a type="button" target= "_blank" href={props.repo.html_url}>
            Acessar Repo
        </a>
    </li>
    )
}