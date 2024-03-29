/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createRef, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, TextInput} from 'react-native';
import {CustomTitle} from './src/components/CustomTitle.tsx';
import {SignUpForm} from './src/components/SignUpForm.tsx';
import {CustomButton} from './src/components/CustomButton.tsx';
import {
  AsyncStorageKeys,
  getDataFromAsyncStorage,
  setDataToAsyncStorage,
} from './src/util/AsyncStorageUtil.ts';
// import styles, { styles2 } from "./src/styles/styles";
// import { styles, styles2 } from "./src/styles/styles";

function App(): React.JSX.Element {
  const [title, setTitle] = useState('IJSE');

  const signUpFormRef = createRef<any>();

  // useEffect(() => {
  //   console.log('Use Effect Called for Every Change');
  // });

  useEffect(() => {
    console.log('Use Effect Called Just Once');
  }, []);

  useEffect(() => {
    console.log('Use Effect Called for Title Change');
  }, [title]);

  const onSignUpFormAction = async (text: string) => {
    const title = await getDataFromAsyncStorage(AsyncStorageKeys.TITLE_KEY);
    setTitle(title);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <SignUpForm
          ref={signUpFormRef}
          onSignUpFormAction={onSignUpFormAction}
        />

        <CustomButton
          label={'Set First Name as IJSE'}
          onPress={() => {
            // your code here 1
            signUpFormRef.current.setFirstName('IJSE');
            signUpFormRef.current.setLastName('Sri Lanka');
          }}
        />

        <CustomButton
          label={'Set Something to Async Storage'}
          onPress={async () => {
            await setDataToAsyncStorage(
              AsyncStorageKeys.TITLE_KEY,
              'Test Title',
            );
          }}
        />

        <TextInput
          style={{borderColor: 'blue', borderWidth: 2, margin: 10}}
          value={title}
          onChange={val => {
            setTitle(val.nativeEvent.text);
          }}
        />

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
