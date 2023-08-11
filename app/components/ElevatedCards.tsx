import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  const cards =
    'w-[120px] h-[150px] transition-[border-radius] duration-[0.5s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]';
  return (
    <View>
      <Text className="text-2xl text-yellow-300">Elevated Cards</Text>
      <ScrollView horizontal={true} className="flex flex-row space-x-4">
        <View
          className={cards + 'flex items-center justify-center bg-gray-400'}>
          <Text>Card 1</Text>
        </View>
        <View
          className={cards + 'flex items-center justify-center bg-gray-400'}>
          <Text>Card 2</Text>
        </View>
        <View
          className={cards + 'flex items-center justify-center bg-gray-400'}>
          <Text>Card 3</Text>
        </View>
        <View
          className={cards + 'flex items-center justify-center bg-gray-400'}>
          <Text>Card 4</Text>
        </View>
        <View
          className={cards + 'flex items-center justify-center bg-gray-400'}>
          <Text>Card 5</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ElevatedCards;
