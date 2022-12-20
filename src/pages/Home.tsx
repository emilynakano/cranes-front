import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={ { backgroundColor: 'red', flex: 1 } }>
      <Text>{'home'.repeat(100)}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
})