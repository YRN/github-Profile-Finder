class UI{
    constructor(){
        this.profile= document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML= `
        <div class="card card-body mb-3 ">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" src="${user.avatar_url}"/>
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4 mt-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos : ${user.public_repos}</span>
                    <span class="badge badge-primary">Public Gists : ${user.public_gists}</span>
                    <span class="badge badge-primary">Followers  : ${user.public_followers}</span>
                    <span class="badge badge-primary">Following : ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company : ${user.company}</li>
                        <li class="list-group-item">${user.blog}</li>
                        <li class="list-group-item">${user.location}</li>
                        <li class="list-group-item">${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repost</h3>
        <div id="repos"></div>
        `;
    }
}