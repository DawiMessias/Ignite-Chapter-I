export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props?.repository ?? "Default"}</strong>
            <p>Forms in Reactjs</p>
            <a href="">Acessar repositório</a>
        </li>
    )
}