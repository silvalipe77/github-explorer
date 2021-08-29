import { RepositoryItem } from "./RepositoryItem";

const repository= {
  name: 'uniform',
  description: 'form in react',
  link:'https://github.com'
};

export function RepositoryList(){
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