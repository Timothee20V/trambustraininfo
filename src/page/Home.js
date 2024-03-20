import React from "react";
import {View} from "react-native";
import TransportCompany from "../components/transportCompany";
import {Divider} from "react-native-paper";

export default function Home() {
  return (
    <View className="mt-9">
      <Divider className="mb-40"/>
      <TransportCompany/>
    </View>
  );
}
