class Github {
  constructor() {
    this.client_id = 'c004b15b541b75922e57';
    this.client_secret = '89d747bc1935e77870f7c29cc632844d2970e338';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}