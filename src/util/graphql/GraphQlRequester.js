
function makeRequest(query){
  const promise = new Promise((resolve, reject) => {
    fetch('/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query:  query}),
    }).then((response) => {
      return response.json()
    }).then((json) => {
      resolve(json.data)
    }).catch((err) => {
      reject(err)
    })
  })
  return promise
}

export default makeRequest
