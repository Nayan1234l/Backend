
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "Nayan1234l",
    "id": 94155479,
    "node_id": "U_kgDOBZyy1w",
    "avatar_url": "https://avatars.githubusercontent.com/u/94155479?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Nayan1234l",
    "html_url": "https://github.com/Nayan1234l",
    "followers_url": "https://api.github.com/users/Nayan1234l/followers",
    "following_url": "https://api.github.com/users/Nayan1234l/following{/other_user}",
    "gists_url": "https://api.github.com/users/Nayan1234l/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Nayan1234l/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Nayan1234l/subscriptions",
    "organizations_url": "https://api.github.com/users/Nayan1234l/orgs",
    "repos_url": "https://api.github.com/users/Nayan1234l/repos",
    "events_url": "https://api.github.com/users/Nayan1234l/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Nayan1234l/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Ali Hossain Nayan",
    "company": null,
    "blog": "",
    "location": "Bangladesh",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 31,
    "public_gists": 0,
    "followers": 2,
    "following": 3,
    "created_at": "2021-11-12T03:35:48Z",
    "updated_at": "2024-04-06T17:18:51Z"
}


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/home', (req, res) => {
    res.send(' World!')
})

app.get('/facebook', (req, res) => {
    res.send('<h2>welcome back to Facebook</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})