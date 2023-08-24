import { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';

const TodoScreen = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (todoText.trim()) {
      setTodoItems([...todoItems, { id: Date.now().toString(), text: todoText }]);
      setTodoText('');
    }
    
  };

  const deleteTodo = (id) => {
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  return (
   <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a todo"
          value={todoText}
          onChangeText={(text) => setTodoText(text)}
        />
        <Button title="Add" onPress={addTodo} />
      </View>
      <FlatList
        data={todoItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={() => deleteTodo(item.id)} />
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
});

export default TodoScreen;
