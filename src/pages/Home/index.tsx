import { SafeAreaView, ScrollView, Text } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>{'Home'.repeat(100)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
