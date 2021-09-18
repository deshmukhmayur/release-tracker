import { Link, useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import '../styles/Home.css'
import parseRepoUrl from "../utils/parseRepoName";

export default function Home() {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const searchRepo = ({ searchText }: any) => {
    const groups = parseRepoUrl(searchText)
    if (!groups?.repoID) {
      console.error('Invalid url')
      return
    }

    history.push(groups.repoID)
  }

  return (
    <>
      <main id="home">
        <h1>Home</h1>

        <form onSubmit={handleSubmit(searchRepo) as any}>
          <label for="repo">Search for any github repository</label>
          <input
            id="repo"
            type="url"
            {...register('searchText')}
            placeholder="https://github.com/:owner/:repo" />
        </form>

        <section id="popular-repos">
          <h4>Explore popular repositories</h4>
          <ul class="repos-list">
            <li><Link to="/deshmukhmayur/web-components-router" className="repos-list-item">
              <span class="icon">gh</span>
              deshmukhmayur/web-components-router
              <span class="stars">
                ⭐ 0
              </span>
              </Link></li>
          </ul>
        </section>
      </main>
    </>
  )
}
