import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const FlatCards = () => {
  const cardStyles =
    'box-border w-[120px] h-[150px] border shadow-[12px_17px_51px_rgba(0,0,0,0.22)] backdrop-blur-[6px] text-center cursor-pointer transition-all duration-[0.5s] flex items-center justify-center select-none font-[bolder] text-[black] rounded-[17px] border-solid border-[white] hover:border hover:border-solid hover:border-[black] hover:scale-105 bg-[#7079ff94]';
  return (
    <View className="space-x-4">
      <Text className="text-3xl text-green-400 bold">Flat Cards</Text>
      <ScrollView horizontal={true} className="space-x-4">
        <View className={cardStyles}>
          {/* <View className="bg-red-400"> */}
          <Text className="text-3xl text-green-400 bold">Card 1</Text>
          {/* </View> */}
        </View>
        <View className={cardStyles}>
          <Text className="text-3xl text-green-400 bold">Card 2</Text>
        </View>
        <View className={cardStyles}>
          <View className="bg-red-400 w-full h-full flex justify-center items-center rounded-full">
            <Text className="text-3xl text-green-400 bold">Card 3</Text>
          </View>
        </View>
        <View className={cardStyles}>
          <View className="bg-amber-200 w-full h-full flex justify-center items-center rounded-full">
            <Text className="text-3xl text-green-400 bold">Card 4</Text>
          </View>
        </View>
        <View className={cardStyles}>
          <View className="bg-green-400 w-full h-full flex justify-center items-center rounded-full">
            <Text className="text-3xl text-green-400 bold">Card 5</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FlatCards;
