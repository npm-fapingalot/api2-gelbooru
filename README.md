# Gelbooru API
A API wrapper that reads the HTML of the site and extracts info

This library supports fetching:
- Posts, 
- List of Posts, 
- tags/characters/parodies/catagories/groups/artists

# Install
``` npm install --save api2-gelbooru ```

# API
```
const GelbooruAPI = require('api2-gelbooru') 
const api = new GelbooruAPI();
api.post.id(297045).then((post)=> console.log(JSON.stringify(post, null, 2)));
```
