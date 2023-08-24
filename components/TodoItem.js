import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = ({ item, onDelete }) => {
  const [isDone, setIsDone] = useState(false);

  const handleToggleDone = () => {
    setIsDone(!isDone);
  };

 
  return (
   <View  style={styles.container}>
   <TouchableOpacity onPress={handleToggleDone}>
    <MaterialIcons
        name={isDone ? 'check-box' : 'check-box-outline-blank'}
        size={24}
        color={isDone ? 'green' : 'black'}
        style={styles.icon}
      />
      </TouchableOpacity>
      <Text style={[styles.text, isDone && styles.strikeThrough]}>{item.text}</Text>
      <MaterialIcons name="delete" size={24} color="black" style={styles.icon} onPress={() => onDelete(item.id)} /> 
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
   strikeThrough: {
    textDecorationLine: 'line-through',
  },
});
export default TodoItem;
