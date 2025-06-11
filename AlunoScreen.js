import React from "react";
import{ StyleSheet, Text, View, FlatList} from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function AlunoScreen() {
    return (
        <View style = { styles.container}>
            <Text style = { styles.header}>Sobre o aluno</Text>
             <FlatList
          data={newsData}
          renderItem={({ item }) => <NewsItem item={item} />}
          keyExtractor={item => item.id}
        />
        </View>
    );
}

const newsData = [
    { id: '1', title: 'Aluna cursando o ultimo ano do ensino medio', description: 'Esta no terceiro ano do ensino medio, fazendo cursos para Enem e vestibular'},
    { id: '2', title: 'Aluna fazendo desenvolvimento de sistema', description: 'Esta cursando desde o ano passado no Senai'},
    { id: '3', title: '', description: ''},
];

const NewsItem = ({item}) => (
    <View style = {styles.newsItem}>
        <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.description}>{item.description}</Text>
    </View>
);