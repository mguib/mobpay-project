import React from "react";
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet
} from 'react-native';

export function Details(props) {
    const { user } = props.route.params;


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardUser}>
                <View style={styles.nomeUserCard}>
                    <Text style={styles.nameUser}>
                        {user.nome}
                    </Text>
                </View>

                <View style={styles.infoUser}>
                    <Text style={styles.idUser}>
                        id: {user.id}
                    </Text>

                    <Text style={styles.ageUser}>
                        Age: {user.idade}
                    </Text>
                </View>
                <View>
                    <Text style={styles.emailUser}>
                        email: {user.email}
                    </Text>
                </View>
                <View style={styles.ruaUser}>
                    <Text style={styles.emailUser}>
                        Street: {user.endereco}
                    </Text>

                </View>
                <View style={styles.locationUser}>
                    <Text style={styles.emailUser}>
                        City: {user.cidade}
                    </Text>
                    <Text style={styles.emailUser}>
                        State: {user.estado}
                    </Text>
                </View>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    cardUser: {
        backgroundColor: '#90c2af',
        padding: 40,
        paddingVertical: 10,
        borderRadius: 7,
        alignContent: 'center',
        marginHorizontal: 10,
        marginVertical: 30,

    },
    infoUser: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    idUser: {
        fontSize: 20,
        color: "#080218",
    },
    nomeUserCard: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameUser: {
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ageUser: {
        fontSize: 18
    },
    emailUser: {
        fontSize: 18,
        // color: '#fff',
        marginTop: 3,
    },
    ruaUser: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        // justifyContent: 'center'
    },
    locationUser: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    }

})