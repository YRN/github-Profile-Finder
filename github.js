class Github{
    constructor(){
        this.clientID = '5205d00f234b01f8d20f'
        this.client_secret = 
        '614943e148c30fd8847d17190dcdb7ddfb4181b8'
        this.repost_count =5;
        this.repost_sort = 'created:asc'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.client_secret}`);      

        const repoRepost = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repost_count}&sort=${this.repost_sort}client_id=${this.clientID}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repost = await repoRepost.json();


        return {
            profile,
            repost
        }
    }
}