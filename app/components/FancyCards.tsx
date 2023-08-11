/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

const FancyCards = () => {
  return (
    <View classname="flex justify-center items-center">
      <Text className="text-2xl text-pink-400">Fancy Cards</Text>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <View className="p-4 w-[300px]">
          <View className="bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              source={{
                uri: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
              }}
              alt="blog"
              style={{width: '100%', height: 150}}
            />
            <View className="p-6">
              <Text className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Anime
              </Text>
              <Text className="title-font text-lg font-semibold text-black mb-3">
                JJK
              </Text>
              <Text className="tracking-widest text-xs title-font font-medium  text-gray-400">
                "Jujutsu Kaisen" is a popular Japanese manga series written and
                illustrated by Gege Akutami. It falls under the genres of dark
                fantasy, supernatural, and action.
              </Text>
            </View>
          </View>
        </View>
        <View className="p-4 w-[300px]">
          <View className="bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              source={{
                uri: 'https://images.unsplash.com/photo-1560746420-1b4dc6d92d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T25lJTIwcGllY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
              }}
              alt="blog"
              style={{width: '100%', height: 150}}
            />
            <View className="p-6">
              <Text className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Monkey D. Luffy
              </Text>
              <Text className="title-font text-lg font-semibold text-black mb-3">
                One Piece
              </Text>
              <Text className="tracking-widest text-xs title-font font-medium truncate text-gray-400">
                "Jujutsu Kaisen" is a popular Japanese manga series written and
                illustrated by Gege Akutami. It falls under the genres of dark
                fantasy, supernatural, and action.
              </Text>
            </View>
          </View>
        </View>
        <View className="p-4 w-[300px]">
          <View className="border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              alt="blog"
              style={{width: '100%', height: 150}}
            />
            <View className="p-6">
              <Text className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                Gojo
              </Text>
              <Text className="title-font text-lg font-semibold text-black mb-3">
                JJK
              </Text>
              <Text className="tracking-widest text-xs title-font font-medium truncate text-gray-400">
                "Jujutsu Kaisen" is a popular Japanese manga series written and
                illustrated by Gege Akutami. It falls under the genres of dark
                fantasy, supernatural, and action.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FancyCards;
