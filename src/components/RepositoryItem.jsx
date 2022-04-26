export function RepositoryItem(props){
    return(
        <li>
        <strong>{props.repo.name}</strong>
        <p>{props.repo.description ?? 'Repositório sem descrição'}</p>

        <a type="button" target= "_blank" href={props.repo.html_url}>
            Acessar Repo
        </a>
    </li>
    )
}