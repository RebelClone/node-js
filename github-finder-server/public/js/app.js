const searchUser = document.querySelector('.searchContainer'),
ui = new UI;

searchUser.addEventListener('keyup', findUser)

function findUser(e){
    e.preventDefault()

    const user = e.target.value;

    if( user !== '' ){
        fetch(`http://localhost:3000/finduser?username=${user}`)
        .then(data => data.json())
        .then(data => {
            if(data.err){
                ui.showAlert('User Not Found', 'alert alert-danger')
                console.clear()
            } else {
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
        })
    } else {
        ui.clearProfile()
    }

}