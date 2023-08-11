import {useColorScheme} from 'nativewind';
import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './app/components/FlatCards';
import ElevatedCards from './app/components/ElevatedCards';
import FancyCards from './app/components/FancyCards';
import ActionCards from './app/components/ActionCards';
import ContactList from './app/components/ContactList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View className="flex h-full space-y-4 items-center">
        <Text
          className={`${
            isDarkMode ? 'text-green-200' : 'text-violet-300'
          } text-3xl`}>
          Hello World!!!!
          {/* <Text className="text-3xl text-green-400">FlatCards</Text> */}
        </Text>
        <ScrollView className="space-y-4">
          <FlatCards />
          <ElevatedCards />
          <FancyCards />
          <ActionCards />
          <ContactList />
        </ScrollView>
        {/* <Text>Hello World!!!</Text> */}
        {/* <Text className="">Hello World!!!</Text> */}
        {/* <Button
          title="Click here for Alert"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        <Button
          title="Click here for Toast"
          onPress={() =>
            ToastAndroid.show('First New Toast', ToastAndroid.SHORT)
          }
        /> */}
      </View>
    </SafeAreaView>
  );
}
export default App;
