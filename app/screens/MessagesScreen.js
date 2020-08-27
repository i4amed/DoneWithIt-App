import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/hamed.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/hamed.jpg')
    }
]

const MessagesScreen = () => {
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={messages => messages.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                    />
                }
            />
        </Screen>

    );
}



const styles = StyleSheet.create({

})

export default MessagesScreen;