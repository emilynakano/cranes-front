import {
  View, Image, ScrollView,
} from 'react-native';
import Tf1 from '../../assets/Tf1.png';
import Tf2 from '../../assets/Tf2.png';

function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 460,
        marginLeft: -50,
        marginRight: -20,
      }}
      >
        <Image
          style={{
            position: 'absolute',
            zIndex: 1,
            maxWidth: 300,
            height: 380,
          }}
          source={Tf2}
        />
        <View style={{
          width: '100%',
          alignItems: 'flex-end',
        }}
        >
          <Image
            source={Tf1}
            style={{
              maxWidth: 230,
              height: 290,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home;
