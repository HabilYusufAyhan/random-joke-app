export class UnsplashApi {
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
      return PicResponse.data.urls.regular;
    } catch (error) {
      console.log(error.message);
      const errorpic = '/squirrel-animal-cute-rodents-47547.jpeg'
      return errorpic;
      
    }
  }
}
