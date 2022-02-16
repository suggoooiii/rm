import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

const BoxScreen = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textOneStyle}>Child #1</Text>
			<Text style={styles.textTwoStyle}>Child #2</Text>
			<Text style={styles.textThreeStyle}>Child #3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 3,
		borderColor: "black",
		height: 200,
		justifyContent: "space-evenly",
		flexDirection: "row",
		// alignItems: "center",
	},
	textOneStyle: {
		borderWidth: 3,
		borderColor: "red",
		flex: 1,
	},
	textTwoStyle: {
		borderWidth: 3,
		borderColor: "red",
		flex: 1,
	},
	textThreeStyle: {
		borderWidth: 3,
		borderColor: "red",
		flex: 1,
	},
});

export default BoxScreen;
