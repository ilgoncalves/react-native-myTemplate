import React from 'react';
import { View } from 'react-native';
import Theme from '../theme/Theme';
import { WelcomeText } from '../atoms';
import { Welcome } from '~/constants/svgs';

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Welcome />
            <View style={styles.divider} />
            <WelcomeText text={`Seja bem vindo ao seu app, comece agora mesmo criando seus compenentes!`} />
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: Theme.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        paddingVertical: 20
    }
}

export { Home };