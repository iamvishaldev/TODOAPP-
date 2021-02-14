import React,{useState} from 'react';
import { StyleSheet, Text,TextInput,View ,Platform,KeyboardAvoidingView,Keyboard, TouchableOpacity} from 'react-native';
import Task from "./components/Task"

export default function App() {

  const [task,setTask] = useState('')
  const [taskItems,setTaskItems] = useState([])
 
  const handleAddTask=()=>{
    Keyboard.dismiss()
  setTaskItems([...taskItems,task])
  setTask("")
  }

  const deleteTask = (index) =>{
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        {/* Here the Tasks will go! */}
        <View style={styles.items}>
        {
          taskItems.map((item,index)=>{
            return(
              <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
                <Task  text={item}/>
              </TouchableOpacity>
            )
          })
        }

        {/* <Task text={'Task 1'}/>
        <Task text={'Task 2'}/> */}
        </View>
      </View>

      {/* Write a Task */}
      <KeyboardAvoidingView 
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
      >
      <TextInput style={styles.input} value={task} onChangeText={text=>setTask(text)} placeholder="Write a task"/>

      <TouchableOpacity onPress={()=>handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:20
  },
  items:{},
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center"
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:"#fff",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
    width:250
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#fff",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  addText:{}
});
