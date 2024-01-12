/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from 'react-native';
import {CustomTitle} from './src/components/CustomTitle.tsx';
// import styles, { styles2 } from "./src/styles/styles";
// import { styles, styles2 } from "./src/styles/styles";

function App(): React.JSX.Element {
  const [title, setTitle] = useState('IJSE');

  return (
    <SafeAreaView>
      <TextInput
        style={{borderColor: 'blue', borderWidth: 2, margin: 10}}
        value={title}
        onChange={val => {
          setTitle(val.nativeEvent.text);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          setTitle('IJSE');
        }}
        style={{backgroundColor: 'blue', padding: 20}}>
        <Text>Set IJSE to Title</Text>
      </TouchableOpacity>

      <CustomTitle title={title} subTitle={'this is sub 1'} />
      <CustomTitle
        title={'Hello Galle'}
        subTitle={'this is sub 2'}
        marginBottom={55}
      />
      <CustomTitle title={'Hello Panadura'} subTitle={'this is sub 3'} />
      <CustomTitle title={'Hello Jaffna'} subTitle={'this is sub 4'} />
    </SafeAreaView>
  );
}

export default App;
