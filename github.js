class GitHub {
  constructor() {
    this.client_ID = "XXXXXXXX",
    this.client_Secret = "XXXXXXX",
    this.repos_count = 50,
    this.repos_sort = 'created asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_ID}&client_secret=${this.client_Secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_ID}&client_secret=${this.client_Secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    
    return {
      profile, repos
    }
  } 
}