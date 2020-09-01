const githubAPI = require('./api/githubAPI');

const github = async (user, callback) =>{
    try{
        const { data:profile } = await githubAPI.get(user)

        if( profile.message === 'Not Found' ){
            throw new Error()
        }

        const { data:repos } = await githubAPI.get(`${user}/repos`, { params: { per_page: 5, sort: 'created: asc' } })

        callback(undefined, {
            profile,
            repos
        })

    } catch(e){
        callback({err: 'User Not Found'})
    }

    
}

module.exports = github


    
    