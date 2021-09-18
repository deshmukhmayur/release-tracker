interface IMatchedGroup {
  /**
   * The ID of the repository
   * 
   * e.g. `/:owner/:repo`
   */

  repoID?: string
  /**
   * The version control used
   * 
   * eg. `github.com` or `gitlab.com`
   */
  scm?: string
}
export default function parseRepoUrl (url: string): IMatchedGroup | undefined {
  if (url.trimEnd().endsWith('.git')) {
    url = url.split('.git')[0]
  }
  const regexp = /^((https?|git):\/\/)?(?<scm>[\w.]+)(?<repoID>\/[\w-]+\/[\w-]+)/i
  const match = url.match(regexp)
  return match?.groups
}
