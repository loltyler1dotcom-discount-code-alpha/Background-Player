import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import Header from '../components/header';
import Login from '../credentials/login';

const array = [];
for (let i = 0; i < 20; i++) {
  array.push(
    <View style={{padding: 20}} key={i}>
      <Text>{i}</Text>
    </View>
  );
}

export default function SubscriptionScreen({ navigation }) {
  console.log('Subscription Screen rendering');
  return (
    <SafeAreaView>
      <View style={{width: "100%", height: "100%", alignItems: 'center', justifyContent: 'center', borderColor: 'black', borderWidth: 5}}>
        <Login/>
      </View>
      {/* <Header searchHandle={() => navigation.navigate("Search", {backScreen: "Subscription",})}>
        {array}
      </Header> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});