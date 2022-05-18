import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

export function Header(){
    return(
        <View style={styles.container}>
          <Text style={styles.textTitle}>mobpayUser</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingHorizontal: 16,
      paddingBottom: 40,
      backgroundColor: '#598f59',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 20,
    },
    textTitle: {
      color: '#fff',
      marginTop: 10,
      fontSize: 24,
      fontWeight: 'bold',
    }
  });