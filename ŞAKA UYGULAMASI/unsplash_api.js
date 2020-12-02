class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        //Değişkene atadık.. Dökümantasyon da yazıyor.
        this.clientID = "Client-ID e9CmObiAO7bzwzKwDQqJRRkykDWTf7WB2VYJeJ4Xj4U" //Authorization: Client-ID YOUR_ACCESS_KEY
        this.axiosObj = axios.create({
            baseURL: this.baseURL,
            headers:{
                Authorization: this.clientID
            },
            params:{
                query : "Animal" // Dökümantasyonda bakabiliriz.. // Yılbaşı ile ilgili resim getir dedik burada..
            }
        });
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosObj.get('/photos/random'); ///photos/random?query=Christmas --> Böyle Olur.
            console.log(resimResponse.data.urls.regular);
            return resimResponse.data.urls.regular;
        } catch (hata) {
            console.log(hata.response);
        }
    }


}

export default function resimGetir(){
    const resimGetir = new UnsplashApi().randomResimGetir();
    return resimGetir;
}