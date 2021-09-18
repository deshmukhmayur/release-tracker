export function repository(repoId: string) {
  return fetch(`https://api.github.com/repos/${repoId}`)
    .then(async res => {
      if (!res.ok) {
        throw await res.json()
      }
      return res.json()
    })
}

export function readme(repoId: string) {
  return fetch(`https://api.github.com/repos/${repoId}/readme`, {
    headers: {
      'Content-Type': 'application/vnd.github.VERSION.html'
    }
  })
    .then(async res => {
      if (!res.ok) {
        throw await res.json()
      }
      return res.json()
    })
}
