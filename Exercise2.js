// Exercise2
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList } from 'react-native';

const datasource = [
    {
        data: [
            { key: 'a' },
            { key: 'e' },
            { key: 'i' },
            { key: 'o' },
            { key: 'u' },
        ],
        title: 'Vowels', bgcolor:"skyblue"
    },
    {
        data: [
            { key: 'b' },
            { key: 'c' },
            { key: 'd' },
            { key: 'f' },
            { key: 'g' },
            { key: 'h' },
            { key: 'j' },
            { key: 'k' },
            { key: 'l' },
            { key: 'm' },
            { key: 'n' },
            { key: 'p' },
            { key: 'q' },
            { key: 'r' },
            { key: 's' },
        ],
        title: 'Consonants', bgcolor:"khaki"
    },
];

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

const renderSection = ({ section }) => {
    return (
        <Text style={[styles.headerText, { backgroundColor: section.bgcolor }]}>
            {section.title}
        </Text>
    );
};

export default function App() {
    return (
        <View>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={renderSection}
            />
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
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

