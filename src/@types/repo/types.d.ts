interface IRepoContext {
  repo?: Repository
  loading: boolean
  repoId: string
  repoName: string
  owner: string
}

type Repository = {
  full_name: string
  description: string
  name: string
  default_branch: string
  stargazers_count: number
  open_issues_count: string
  homepage: string
  language: string
  topic: string[]
  license: {
    key: string
    name: string
    url: string
  }
  archived: boolean
  pushed_at: string

  id: string
  url: string
  releases_url: string
  tags_url: string
  collaborators_url: string
  branches_url: string

  html_url: string

  [k: string]: any
}