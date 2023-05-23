import {StyleSheet, View, Text, Pressable} from 'react-native';

const GoalItem = ({item, deleteItem}) => {
  return (
    <View style={styles.goalStyles}>
      <Pressable
        android_ripple={{color: 'white'}}
        onPress={() => deleteItem(item.key)}>
        <Text style={styles.goalText}>{item.goal}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalStyles: {
    margin: 4,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#5e0acc',

    borderRadius: 8,
  },
  goalText: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },
});

export default GoalItem;
