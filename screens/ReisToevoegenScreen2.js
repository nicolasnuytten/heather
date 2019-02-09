import React from 'react';
import { View, ImageBackground, ScrollView, Image, StyleSheet, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { SearchBar } from 'react-native-elements';
import data from "../assets/data/data.json";
import { bold } from 'ansi-colors';
import { Icon } from "react-native-elements";

const selectedList = [{
    "id": "01",
    "name": "Gefocust ademhalen",
    "tags": "gezondheid",
    "intro": "",
    "time": "5min.",
    "rate": "1",
    "category": "Focus"
},
{
    "id": "02",
    "name": "Gefocust ademhalen",
    "tags": "gezondheid",
    "intro": "",
    "time": "5min.",
    "rate": "1",
    "category": "Focus"
},
{
    "id": "03",
    "name": "Gefocust ademhalen",
    "tags": "gezondheid",
    "intro": "",
    "time": "5min.",
    "rate": "1",
    "category": "Focus"
}];

export default class ReisToevoegenScreen2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    static navigationOptions = {
        header: null,
    };

    handleData = () => {
        const { navigate } = this.props.navigation;
    };

    handleDelete = item => {
        index = selectedList.indexOf(item);
        selectedList.splice(index, 1);
        this.setState({
            selected: selectedList
        })
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Nieuwe reis</Text>
                <View style={styles.navHeader}>
                    <Icon style={styles.arrow} name="arrow-back" onPress={() => navigate("ReisToevoegen")} />
                    <Button title="Opslaan" onPress={this.handleData} />
                </View>
                <Text style={styles.subTitle}>Geef je reis een titel</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Mijn reis"}
                />

                <ImageBackground source={require("./../assets/images/background_cloud.png")} style={{ width: '100%', height: '100%', paddingTop: 60 }} >
                    <Text style={styles.subTitle}>Gekozen oefeningen</Text>
                    <ScrollView>
                        <View style={styles.cards}>
                            {selectedList.map(item => (
                                <View key={item.id} style={styles.cardContainer}>
                                    <Text style={styles.cardNumber}>1</Text>
                                    <View style={styles.card}>
                                        <Text style={styles.cardName}>{item.name}</Text>
                                        <View style={styles.cardInfo}>
                                            <Text style={styles.cardTags}>{item.tags}</Text>
                                            <Text style={[styles.cardTags, styles.cardTime]}>{item.time}</Text>
                                        </View>
                                    </View>
                                    <TouchableHighlight style={styles.delete} onPress={() => this.handleDelete(item)}>
                                        <Image source={require("./../assets/images/delete_icon.png")} />
                                    </TouchableHighlight>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDE2F6",
        paddingTop: 30
    },
    selected: {
        fontWeight: "bold"
    },
    navHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        marginTop: -30,
        paddingLeft: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 22,
        color: "#104664",
        fontWeight: "bold",
        alignSelf: "center"
    },
    subTitle: {
        fontSize: 20,
        color: "#104664",
        paddingLeft: 20
    },
    textInput: {
        backgroundColor: "#86BCDA",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 20,
        padding: 10,
        color: "#BDE2F6",
        fontSize: 16
    },
    cardContainer: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        marginTop: 10,
        alignContent: "center",
        justifyContent: "space-between"
    },
    card: {
        backgroundColor: "#FFF3C1",
        flex: 1,
        borderRadius: 10,
        padding: 8
    },
    cardNumber: {
        color: "#104664",
        fontSize: 18,
        paddingRight: 15,
        alignSelf: "center"
    },
    cardName: {
        color: "#104664",
        fontSize: 20,
        fontWeight: "bold"
    },
    cardInfo: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    cardTags: {
        fontSize: 16,
        color: "#F2994A"
    },
    cardTime: {
        fontWeight: "bold"
    },
    delete: {
        alignSelf: "center",
        paddingLeft: 10
    }
});