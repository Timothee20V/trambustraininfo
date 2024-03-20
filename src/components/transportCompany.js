import {Button, Text} from "react-native-paper";
import {StatusBar, View} from "react-native";
import {useState} from "react";
import {getApi} from "../api/api";

export default function TransportCompany() {
  const [data, setData] = useState(null);

  const getData = async () => {
    setData(getApi());
  };

  return(
    <View>
      <Button mode="contained" onPress={() => getData()}>
        Get data
      </Button>
      <Button mode="elevated" buttonColor={'red'} onPress={() => setData(null)}>
        Clear data
      </Button>
      {/*{data ? data.map((line, index) => (*/}
      {/*  <Text key={index}>{line.intitule}</Text>*/}
      {/*)) : (*/}
      {/*  <Text>Aucune données chargées</Text>*/}
      {/*)}*/}
      <Text>{StatusBar.currentHeight}</Text>
    </View>
  )
}