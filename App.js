import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Button, ScrollView } from 'react-native';

const pokemonData = [
  {
    title: 'Fire Pokémon 🔥',
    bgcolor: '#FF6666',
    nameColor: '#990000',
    data: [
      { key: 'Charmander', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4.png' },
      { key: 'Charizard', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_6.png' },
    ],
  },
  {
    title: 'Water Pokémon 💧',
    bgcolor: '#66CCFF',
    nameColor: '#0066CC',
    data: [
      { key: 'Squirtle', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7.png' },
      { key: 'Blastoise', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_9.png' },
    ],
  },
  {
    title: 'Electric Pokémon ⚡',
    bgcolor: '#FFEB3B',
    nameColor: '#CC9900',
    data: [
      { key: 'Jolteon', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135.png' },
      { key: 'Zaptos', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_145.png' },
    ],
  },
  {
    title: 'Physics Pokémon ⚛️',
    bgcolor: '#8E44AD',
    nameColor: '#9B59B6',
    data: [
      { key: 'Mew', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151.png' },
      { key: 'Mewtwo', img: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_150.png' },
    ],
  },
];

const renderPokemonItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem}>
      <Text style={styles.pokemonName}>{item.key}</Text>
      <Image source={{ uri: item.img }} style={styles.pokemonImage} />
    </TouchableOpacity>
);

const renderSectionHeader = ({ section }) => (
    <View style={[styles.sectionHeader, { backgroundColor: section.bgcolor }]}>
      <Text style={[styles.sectionTitle, { color: section.nameColor }]}>{section.title}</Text>
    </View>
);

export default function App() {
  return (
      <ScrollView style={styles.container}>  {/* Wrap the whole content in ScrollView */}
        <StatusBar style="auto" />
        <Button title="Add Pokemon" onPress={() => alert('Add Pokemon')} />
        <SectionList
            sections={pokemonData}
            renderItem={renderPokemonItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item) => item.key}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    backgroundColor: 'lightblue',
  },
  pokemonName: {
    flex: 1,
    fontSize: 16,
  },
  pokemonImage: {
    width: 200,
    height: 300,
    borderRadius: 5,
  },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
