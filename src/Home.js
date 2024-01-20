import React from "react";
import {View} from "react-native";
import TransportCompany from "./components/transportCompany";
import {Divider, Text} from "react-native-paper";

export default function Home() {
  return (
    <View className="mt-9">
      <View className="flex items-center justify-center mt-10 mb-10">
        <Text variant="displayMedium">Tram Bus Train - Info</Text>
      </View>
      <Divider className="mb-40"/>
      <TransportCompany/>
    </View>
  );
}
