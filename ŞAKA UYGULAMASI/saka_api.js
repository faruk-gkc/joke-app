class JokeApi {
    constructor() {
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosObj = axios.create({
            baseURL: this.baseURL,
        });
    }

    async randomSakaGetir() {
        try {
            const sakaResponse = await this.axiosObj.get('/jokes/random');
            console.log(sakaResponse.data.value);
            return sakaResponse.data.value;
        } catch (hata) {
            console.log(hata.response);
        }
    }
}

export default function sakaGetir(){
    const sakaGetir = new JokeApi().randomSakaGetir();
    return sakaGetir;
}