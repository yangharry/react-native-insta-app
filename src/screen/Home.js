import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../components/Stories';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Post from '../components/Post';
import notifee, {AndroidImportance} from '@notifee/react-native';

const Home = () => {
  useEffect(() => {
    createChannel();
  }, []);

  const createChannel = async () => {
    await notifee.createChannel({
      id: 'insta-channel',
      name: 'insta-channel',
      importance: AndroidImportance.HIGH,
    });
  };
  const statusBarHeight = getStatusBarHeight();
  return (
    <SafeAreaView
      style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View
        style={{
          marginTop: Platform.OS === 'ios' ? statusBarHeight : 0,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <View>
          <Text style={{fontSize: 25, fontWeight: '500', paddingBottom: 5}}>
            Instagram
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, paddingHorizontal: 15}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
