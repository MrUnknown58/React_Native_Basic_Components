/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  //   Linking,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
type card = {name: string; title: string; description: string; url: string};
const ContactList = () => {
  const cardsList: card = [
    {
      name: 'JJK',
      title: 'Anime',
      description:
        "'Jujutsu Kaisen' is a popular Japanese manga series written and illustrated by Gege Akutami. It falls under the genres of dark fantasy, supernatural, and action.",
      url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      redirectURL: 'https://aniwatch.to',
    },
    {
      name: 'Monkey D. Luffy',
      title: 'One Piece',
      description:
        "'Jujutsu Kaisen' is a popular Japanese manga series written and illustrated by Gege Akutami. It falls under the genres of dark fantasy, supernatural, and action.",
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScrjqVH3OkA1UL5nCxS3bmoDVszMBZ65laDg&usqp=CAU',
      redirectURL: 'https://sanji.to',
    },
    {
      name: 'Goku',
      title: 'Dragon Ball Super',
      description:
        "'Jujutsu Kaisen' is a popular Japanese manga series written and illustrated by Gege Akutami. It falls under the genres of dark fantasy, supernatural, and action.",
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQusy_40KZeBjkqLg1JBs9JuLgFwdL72QiF0A&usqp=CAU',
      redirectURL: 'https://ai-prompt-blush.vercel.app',
    },
  ];
  return (
    <View classname="flex justify-center items-center">
      <Text className="text-2xl text-pink-400">Contact Cards</Text>
      <ScrollView
        contentContainerStyle={{
          display: 'flex',
          alignItems: 'center',
        }}>
        {cardsList.map((cardDetail, key) => {
          return (
            <View className="p-4 w-[300px]">
              <View className="bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  source={{
                    uri: cardDetail.url,
                  }}
                  alt="blog"
                  style={{width: '100%', height: 150}}
                />
                <View className="p-6">
                  <Text className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    {cardDetail.title}
                  </Text>
                  <Text className="title-font text-lg font-semibold text-black mb-3">
                    {cardDetail.name}
                  </Text>
                  <Text className="tracking-widest text-xs title-font font-medium  text-gray-400">
                    {cardDetail.description}
                  </Text>
                  <View className="flex flex-row space-x-4 pt-4">
                    <TouchableHighlight
                      onPress={() => {
                        // onPress('https://aniwatch.to');
                      }}
                      underlayColor={'white'}
                      activeOpacity={0.4}>
                      <View className="bg-black px-4 py-2 rounded-full">
                        <Text className="text-white">Know More</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => {}}>
                      <View className="bg-black px-4 py-2 rounded-full">
                        <Text className="text-white">Contact Us</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;
