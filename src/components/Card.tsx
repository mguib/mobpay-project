import React from "react";

import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View, 
    TouchableOpacityProps
} from 'react-native';

interface InfoCardProps extends TouchableOpacityProps{
  nameUser: string;
  id: string;
  userEstado: string;
}

export function Card({nameUser, id, userEstado, ...rest} : InfoCardProps){
    return(
        <TouchableOpacity 
          style={styles.userCard}
          {...rest}
        >
          <Text style={styles.textIdUser}>{id}</Text>
          <View style={styles.user}>
              <Text style={styles.textNameUser}>{nameUser}</Text>
              <Text style={styles.textEstadoUser}>{userEstado}</Text>
          </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    userCard: {
      alignContent: 'center',
      flexDirection: 'row',
      backgroundColor: '#90c2af',
      padding: 20,
      marginVertical: 5,
      marginHorizontal: 10,
      flex: 1,
      borderRadius: 7,
    },
    textIdUser: {
      paddingHorizontal: 20,
      color: "#fff",
      fontWeight: 'bold',
      fontSize: 20
    },
    user: {
      flexDirection:'row',
      justifyContent:'space-between',
      flex: 1,
    },
    textNameUser: {
      paddingHorizontal: 20,
      fontSize: 18,
      fontWeight:'bold',
    },
    textEstadoUser: {
      marginLeft: 30,
      fontSize: 18
    }
  });