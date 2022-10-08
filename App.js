/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useColorScheme} from 'nativewind'

const activities = [
    {
        name: 'dashboard',
        category: 'Trends',
        icon: 'icon',
        color: 'pink',
    },
    {
        name: 'reports',
        category: 'Works',
        icon: 'icon',
        color: 'red',
    },
    {
        name: 'store',
        category: 'Products',
        icon: 'icon',
        color: 'blue',
    },
];

const ThemeSwitch = () => {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (
        <Pressable
            onPress={toggleColorScheme}
            className=' h-8 w-8 flex justify-center items-center  bg-slate-400 rounded-full'
        >
            <Text className='text-sm text-slate-700 '>{`${
                colorScheme === 'dark' ? '🌙' : '🌞'
            }`}</Text>
        </Pressable>
    );
};

const App = () => {
  const {colorScheme} = useColorScheme();

  return (
      <SafeAreaView className='flex h-full  bg-white dark:bg-slate-900'>
          <StatusBar
              barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
              backgroundColor={colorScheme === 'dark' ? '#0F0F2A' : '#fff'}
          />
          <ScrollView className='px-5'>
              <View className='flex flex-row justify-between  items-center px-4 pt-12 pb-8 border-0 border-slate-300'>
                  <ThemeSwitch />
                  <View className='flex flex-row justify-end items-center gap-0'>
                      <View className='flex justify-end px-2'>
                          <Text className='text-4xl tracking-wider font-bold text-slate-500'>
                              John Doe
                          </Text>
                          <Text className='text-md font-mono  text-slate-400'>
                              john.doe@inc.com
                          </Text>
                      </View>
                      <View
                          className='relative w-20 h-20 bg-sky-300 border-2 border-sky-500 rounded-full'
                          id='avatar'
                      >
                          <View
                              className='absolute bottom-0 right-0 w-5 h-5 border-[3px] border-white bg-green-500 rounded-full'
                              id='dot'
                          />
                      </View>
                  </View>
              </View>
              <Text className='text-3xl font-mono tracking-wider text-slate-400 py-4 ml-[15%] mb-8 capitalize'>
                  choose activity
              </Text>

              {/* Activities list */}
              <View className='flex flex-row justify-start flex-wrap gap-4 mx-auto pb-10'>
                  {activities.map(act => (
                      <View
                          className='w-40 h-32 bg-purple-100 rounded-lg'
                          key={act.name}
                      >
                          <View className='flex flex-col gap-y-1 my-auto p-5'>
                              {act.category && (
                                  <Text className='text-md text-slate-400'>{act.category}</Text>
                              )}
                              <Text className='text-lg text-slate-500 font-bold capitalize'>
                                  {act.name}
                              </Text>
                          </View>
                      </View>
                  ))}
              </View>
          </ScrollView>
      </SafeAreaView>
  );
};

export default App;
