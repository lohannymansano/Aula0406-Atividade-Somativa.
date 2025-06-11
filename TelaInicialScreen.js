import React from "react";
import{ StyleSheet, Text, View, FlatList, } from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function TelaInicialScreen() {
      return (
        <View style = { styles.container}>
            <Text style = { styles.header}>Seja bem vindo</Text>
                     <FlatList
                  data={newsData}
                  renderItem={({ item }) => <NewsItem item={item} />}
                  keyExtractor={item => item.id}
                />
                </View>
    );
}

const newsData = [
        { id: '1', title: 'Informações sobre aluno, curso e escola',  },
];

const NewsItem = ({item}) => (
    <View style = {styles.newsItem}>
        <Text style = {styles.title}>{item.title}</Text>
        
    </View>
);