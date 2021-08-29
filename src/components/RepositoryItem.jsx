export function RepositoryItem(props){
  return(
     <li>
          <strong>{props.repository?.name??'default'}</strong>
          <p>{props.repository?.decription??'default'}</p>
          <a href={props.repository?.link??'default'}>
            acessar repositorios
          
          </a>
        </li>
      
    

  );

  
}