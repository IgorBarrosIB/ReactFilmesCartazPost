import { useState } from 'react';
import {SafeAreaView, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import {styles} from './styles/style';

export default function App() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSead = async () => {
    if(title != ''&& body != ''){

      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title, 
          body: body,
          userId: 345
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      });

      const json = await req.json();

      alert("Adicionando! ID: "+ json.id + "-" + json.title)

    }else{
      alert(`Preencha as informações`);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.containersInput}>
        <Text style={styles.text}>Título:</Text>
        <TextInput style={styles.input} value={title} onChangeText={t=>setTitle(t)}></TextInput>
      
        <Text style={styles.text}>Corpo:</Text>
        <TextInput style={styles.input} onChangeText={t=>setBody(t)}></TextInput>
      </SafeAreaView>
      
      <SafeAreaView style={styles.containersButton}>
        <TouchableOpacity style={styles.button} onPress={handleSead}>
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}


