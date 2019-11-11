class Github{
    constructor(){
        this.clientID = '5205d00f234b01f8d20f'
        this.client_secret = 
        '614943e148c30fd8847d17190dcdb7ddfb4181b8'
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repoRepost = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientID}&client_secret=${this.client_secret}`);

        return {
            profile
        }
    }
}