import React from "react";
import{ StyleSheet, Text, View, FlatList} from 'react-native';
import styles from '../src/styles/HomeScreenStyles';

export default function CursoScreen() {
    return (
        <View style = { styles.container}>
            <Text style = { styles.header}>Sobre alguns cursos</Text>
             <FlatList
          data={newsData}
          renderItem={({ item }) => <NewsItem item={item} />}
          keyExtractor={item => item.id}
        />
        </View>
    );
}

const newsData = [
    { id: '1', title: 'Desenvolvimento de Sistemas', description: 'Desenvolvimento de sistema é uma area de TI que contem varias coisas'},
    { id: '2', title: 'Alimentos', description: 'realizar análises e coordenar a produção de alimentos, conforme procedimentos, normas e legislações vigentes de qualidade e segurança dos alimentos, de saúde e segurança do trabalho e de sustentabilidade.'},
    { id: '3', title: 'Instrumentação', description: ' prática a organizar, controlar e fornecer os instrumentais e materiais cirúrgicos de acordo com as exigências de cada tipo de cirurgia.'},
];

const NewsItem = ({item}) => (
    <View style = {styles.newsItem}>
        <Text style = {styles.title}>{item.title}</Text>
        <Text style = {styles.description}>{item.description}</Text>
    </View>
);