import { SafeAreaView, ScrollView, Text } from 'react-native';
import React from 'react';
import { Header } from '../../components';

export default function Home() {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <Text>{'Home'.repeat(100)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
