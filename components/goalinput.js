import {StyleSheet, TextInput, View, Button} from 'react-native';

const GoalInput = ({handlePress, changeHandler, closeModal}) => {
  return (
    <View style={styles.inputCotainer}>
      <View style={styles.subContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Your Goal"
          onChangeText={changeHandler}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={handlePress} title="Add Goal" color={'#b180f0'} />
        <Button title="Cancel" onPress={closeModal} color={'#f31282'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputCotainer: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    padding: 20,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    paddingHorizontal: 6,
    borderRadius: 8,
    color: 'black',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  subContainer: {
    justifyContent: 'center',
  },
});
export default GoalInput;
