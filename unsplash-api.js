class UnsplashApi {
  constructor() {
    this.baseURL = "https://api.unsplash.com";
    this.clientID = 'Client-ID n-IhT1-PckHxHBpXQCfK-EuUgichrC3Pu1cM5jsDadA'
    this.axiosNesne = axios.create({
      baseURL: this.baseURL,
      headers: {
         Authorization: this.clientID
      },
      params:{
        query : 'animal'
      }
    });
  }

  async randomPic() {
    try {
      const PicResponse = await this.axiosNesne.get("/photos/random");
      console.log(PicResponse.data.urls.regular);
      return PicResponse.data.urls.regular;
    } catch (error) {
      console.log(error);
    }
  }
}
