import React from "react";
import{ StyleSheet, Text, View, FlatList} from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function EscolaScreen() {
    return (
        <View style = { styles.container}>
            <Text style = { styles.header}>Sobre o senai</Text>
             <FlatList
          data={newsData}
          renderItem={({ item }) => <NewsItem item={item} />}
          keyExtractor={item => item.id}
        />
        </View>
    );
}

const newsData = [
      { id: '1', title: 'Oferencem cursos', description: 'Pagos e Gratuitos'},
        { id: '2', title: 'Parceria com escolas', description: 'Esta com parceria com algimas escolas em algumas areas'},
        { id: '3', title: '', description: ''},
];

const NewsItem = ({item}) => (
    <View style = {styles.newsItem}>
        <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.description}>{item.description}</Text>
    </View>
);