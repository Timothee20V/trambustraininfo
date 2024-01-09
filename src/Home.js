import React, {useState} from "react";
import {Banner, Button, Text} from "react-native-paper";
import axios from 'axios';
import {View} from "react-native";


export default function Home() {
  const [data, setData] = useState(null);

  const getApi = async () => {
    try {
      // Remplace l'URL par l'adresse de l'API que tu veux interroger
      const response = await axios.get('https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_info-trafic-tan-temps-reel/records?limit=10');
      setData(response.data.results);
      console.log('Données récupérées :', response.data.results)
    } catch (error) {
      console.error('Erreur lors de la requête Axios :', error);
    }
  };

  return (
    <View>
      <Banner visible={true}>
        Bienvenue dans l'application de démo !</Banner>
      <Button mode="contained" onPress={() => getApi()}>
        Get data
      </Button>
      <Button mode="elevated" buttonColor={'red'} onPress={() => setData(null)}>
        Clear data
      </Button>
      {data ? data.map((line, index) => (
        <Text key={index}>{line.intitule}</Text>
      )) : (
        <Text>Aucune données chargées</Text>
      )}
    </View>
  );
}
