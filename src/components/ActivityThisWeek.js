import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FriendsProfileData} from './Database';

const ActivityThisWeek = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={{fontWeight: 'bold'}}>이번 주</Text>
      <View style={{flexDirection: 'row', paddingVertical: 10}}>
        {FriendsProfileData.slice(0, 3).map((data, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.push('FriendProfile', {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: data.follow,
                  post: data.posts,
                  followers: data.followers,
                  following: data.following,
                })
              }
              key={index}>
              <Text>
                {data.name}
                {index === 2 ? '' : ', '}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text>님이 팔로우 하기 시작했습니다.</Text>
      </View>
    </>
  );
};

export default ActivityThisWeek;
