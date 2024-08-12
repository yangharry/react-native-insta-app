import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FriendsProfileData} from '../components/Database';
import ActivityThisWeek from '../components/ActivityThisWeek';
import ActivityPrevious from '../components/ActivityPrevious';
import ActivityRecommend from '../components/ActivityRecommend';

const Activity = () => {
  return (
    <SafeAreaView
      style={{width: '100%', backgroundColor: 'white', height: '100%'}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          borderBottomWidth: 0.5,
          borderBottomColor: '#DEDEDE',
          padding: 10,
        }}>
        활동
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <ActivityThisWeek />
        <Text style={{fontWeight: 'bold'}}>이전 활동</Text>
        {FriendsProfileData.slice(3, 6).map((data, index) => (
          <ActivityPrevious data={data} key={index} />
        ))}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          회원님을 위한 추천
        </Text>
        {FriendsProfileData.slice(6, 12).map((data, index) => (
          <ActivityRecommend data={data} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
