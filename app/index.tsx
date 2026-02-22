import { useRouter } from "expo-router";
import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
import SearchBar from "../components/SearchBar";

const Index = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{paddingTop:50}}>
      <View style={{margin: 10, alignItems: 'center'}}>
        <Text style={{
          textAlign: 'center',
          fontSize: 30,
          fontWeight: 'bold'
        }}>Home Screen</Text>

        <Text style={{marginTop: 20, marginBottom: 1, fontSize: 50, fontFamily: 'roboto', fontWeight: 'bold', padding: 20,  borderWidth: 0.1, borderColor: '#ccc', borderRadius: 10, backgroundColor: '#f6f2f2'}}>CHICKEN TIME</Text>

        <View style={{margin: 20, alignItems: 'center'}}>
          <Image source={{uri: 'https://www.shutterstock.com/image-vector/chicken-sunglasses-cool-mascot-fried-600nw-2661292525.jpg'}}
          style={{width: 400, height: 400, marginVertical: 20}} />

          <View>
            <SearchBar/>
          
            <View style={{alignItems: 'center', marginTop: 10}}>
              <Button
              color= 'black'
              title="Go to Orders" 
              onPress={() => router.push("/orders")} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Index;