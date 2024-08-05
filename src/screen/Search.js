import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/SearchInput';
import SearchContent from '../components/SearchContent';

const Search = () => {
  return (
    <SafeAreaView
      style={{width: '100%', backgroundColor: 'white', position: 'relative'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
