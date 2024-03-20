import axios from "axios";

export const getApi = async () => {
    try {
        const response = await axios.get('https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_info-trafic-tan-temps-reel/records?limit=10');
        console.log('Données récupérées :', response.data.results)
        return response.data.results;
    } catch (error) {
        console.error('Erreur lors de la requête Axios :', error);
    }
};