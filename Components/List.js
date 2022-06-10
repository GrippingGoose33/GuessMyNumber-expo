import React from 'react';
import { FlatList, Text } from 'react-native';

function List(props) {
    return (
        <FlatList
            data = {data}
            renderItem= {({item}) => <Text>{item.value}</Text>}
        />
    );
}

export default List;