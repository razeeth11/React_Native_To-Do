import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [text, setText] = useState();
  const [goalList, setGoalList] = useState([]);

  function textInput(inputText) {
    setText(inputText);
  }

  function onHandler() {
    if (text !== "") {
      setGoalList([...goalList, text]);
      setText("");
    }
  }

  function onDelete(index) {
    var newArray = goalList.filter((goalItem) => goalItem !== goalList[index]);
    setGoalList(newArray);
  }

  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          value={text}
          onChangeText={textInput}
          style={styles.textInput}
          placeholder="Type Something"
        />
        <Button onPress={onHandler} title="Add Goals" />
      </View>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Your Goals</Text>
        <ScrollView>
          {goalList.map((item, index) => (
            <Pressable
              style={({pressed}) => pressed ? styles.effect : null}
              onPress={() => onDelete(index)}
              key={index}
            >
              <Text style={styles.goalList}>
                {index + 1} . {item}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  textInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 20,
  },
  textInput: {
    width: "60%",
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 5,
    fontSize: 14,
    marginRight: 10,
  },
  goalContainer: {
    marginTop: 20,
    width: "80%",
  },
  goalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  goalList: {
    margin: 5,
    padding: 5,
    backgroundColor: "#5D6D7E",
    color: "white",
    borderRadius: 3,
    fontSize: 16,
  },
  effect : {
    backgroundColor: "#34495E",
    borderRadius : 5
  }
});
