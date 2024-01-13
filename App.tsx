// **
// * Sample React Native App
// * https://github.com/facebook/react-native
// *
// * @format
// */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {CustomTitle} from './src/components/CustomTitle.tsx';
import {SignUpForm} from './src/components/SignUpForm.tsx';
// import styles, { styles2 } from "./src/styles/styles";
// import { styles, styles2 } from "./src/styles/styles";

function App(): React.JSX.Element {
  const [title, setTitle] = useState('IJSE');

  // useEffect(() => {
  //   console.log('Use Effect Called for Every Change');
  // });

  useEffect(() => {
    console.log('Use Effect Called Just Once');
  }, []);

  useEffect(() => {
    console.log('Use Effect Called for Title Change');
  }, [title]);

  return (
    <SafeAreaView>
      <ScrollView>
        <SignUpForm />

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
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
