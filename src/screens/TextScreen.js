// react-native snippets --rnce to make a class component --rnss to maeke a const styles
//

import { Text, View, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

const TextScreen = () => {
	const [text, setText] = useState("");
	// console.log(name);

	return (
		<View>
			<Text>Enter Password:</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoComplete={false}
				value={text}
				onChangeText={(newValue) => setText(newValue)}
			/>
			{text.length < 5 ? (
				<Text>Password must be longer than 5 characters</Text>
			) : (
				<Text>{text}</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;
