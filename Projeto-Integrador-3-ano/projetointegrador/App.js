import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  const clickHandler = () => {
    alert("Botão Clicado");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={clickHandler}
          style={styles.touchableOpacityStyle}
        >
          <Image
            source={{
              uri: "https://developerplus.com.br/wp-content/uploads/2021/12/plus_icon.png",
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function PerfilScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Perfil!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pesquisar!</Text>
    </View>
  );
}
function LoanScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Empréstimos!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#000'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Pesquisar" component={SearchScreen} options={{
          tabBarLabel: 'Pesquisar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search" color={'#000'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Empréstimos" component={LoanScreen} options={{
          tabBarLabel: 'Empréstimos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={'#000'} size={size} />
          ),
        }}/>
        <Tab.Screen name="Perfil" component={PerfilScreen} options={{
          tabBarLabel: 'Conta',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={'#000'} size={size} />
          ),
        }}/>
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    left: 130 ,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: "contain",
    width: 80,
    height: 70,
  },
});
