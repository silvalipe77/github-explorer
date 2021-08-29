import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useState, useEffect } from "react";

const repository= {
  name: 'uniform',
  description: 'form in react',
  link:'https://github.com'
};
// https://api.github.com/users/silvalipe77/repos

export function RepositoryList(){
  const [repositories,setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/silvalipe77/repos')
    .then(response=>response.json)
    .then(data=>console.log(data))

  },[])


  return(
    <section className="repository-list">
      <h1>lista de repositorios</h1>
      <ul>
        
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
      <RepositoryItem repository={repository}/>
       
      </ul>

    </section>
  )
}