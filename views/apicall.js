function sendApiRequest() {
    const endpoint = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=szayoHIsmTmKUjgY30yn6gaHH9QWgfqE&limit=5"
    fetch(endpoint)
    .then(function(data) {
        return data.json()
    })
    .then(function(json) {
      console.log(json)
    })

}
