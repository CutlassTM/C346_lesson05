// Exercise1
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const datasource = [
    {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}, {key: 'f'},
    {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'}, {key: 'k'},
    {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'}, {key: 'p'},
    {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'}, {key: 'u'},
    {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'y'}, {key: 'z'},
];

const renderItem = ({item}) => {
    return (
        <View>
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
        </View>
    );
};

export default function App() {
    return (
        <View>
            <FlatList data={datasource} renderItem={renderItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
});
