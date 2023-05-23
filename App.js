import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  FlatList,
  Modal,
  Image,
  StatusBar,
} from 'react-native';
import GoalItem from './components/goalItem';
import GoalInput from './components/goalinput';

export default function App() {
  const [goal, setGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const changeHandler = text => {
    setGoal(text);
  };

  const handlePress = () => {
    if (goal === '') return;
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {goal: goal, key: Math.random().toString()},
    ]);
    setModalVisibility(false);
  };

  const closeModal = () => {
    setModalVisibility(false);
  };

  const deleteItem = itemId => {
    setCourseGoals(courseGoals.filter((e, i) => e.key != itemId));
    setGoal('');
  };

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <StatusBar
        backgroundColor="white"
        animated={true}
        backgroundColor="#61dafb"
        barStyle={'dark-content'}
      />
      <View style={styles.appContainer}>
        <Modal
          animationType="slide"
          visible={modalVisibility}
          onRequestClose={() => {
            setModalVisibility(!modalVisibility);
          }}>
          <View style={styles.inputContainer}>
            <Image
              style={styles.image}
              source={require('./components/assets/images/goal.png')}
            />
            <GoalInput
              closeModal={closeModal}
              handlePress={handlePress}
              changeHandler={changeHandler}
            />
          </View>
        </Modal>
        <View style={styles.btn}>
          <Button
            title="Add A Goal"
            onPress={() => setModalVisibility(true)}
            color={'#b18af0'}></Button>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={({item}) => {
              return <GoalItem item={item} deleteItem={deleteItem} />;
            }}
            keyExtractor={item => item.key}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: '#1e085a',
    borderWidth: 2,
    alignItems: 'center',
    flex: 1,
  },
  listContainer: {
    flex: 4,
    width: '100%',
    marginTop: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5e0acc',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  btn: {
    width: '100%',
    marginTop: 20,
  },
});
