import {Text, View} from 'react-native';
import React, {useReducer} from 'react';
import {CustomInput} from './CustomInput.tsx';

type FormState = {
  firstName: string;
  firstNameError: string | null;

  lastName: string;
  lastNameError: string | null;

  address: string;
  addressError: string | null;
};

type FormFieldSetAction = {
  formFieldName: string;
  formFieldValue: string;
};

const formFieldSetReducer = (
  state: FormState,
  action: FormFieldSetAction,
): FormState => {
  switch (action.formFieldName) {
    case 'firstName': {
      return {
        ...state,
        firstName: action.formFieldValue,
        firstNameError: !action.formFieldValue
          ? 'Please enter your first name'
          : null,
      };
    }
    case 'lastName': {
      return {
        ...state,
        lastName: action.formFieldValue,
        lastNameError: null,
      };
    }
    case 'address': {
      return {
        ...state,
        address: action.formFieldValue,
        addressError: null,
      };
    }
    default: {
      return state;
    }
  }
};

export const SignUpForm = () => {
  // const [name, setName] = useState('');
  // const [nameError, setNameError] = useState('');

  const [state, dispatch] = useReducer<
    (state: FormState, action: FormFieldSetAction) => FormState
  >(formFieldSetReducer, {
    firstName: '',
    firstNameError: null,

    lastName: '',
    lastNameError: null,
    address: '',
    addressError: null,
  });

  return (
    <View style={{backgroundColor: 'skyblue', marginVertical: 25}}>
      <Text style={{fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>
        Sign Up
      </Text>

      <CustomInput
        label={'First Name'}
        value={state.firstName}
        onValueChange={val =>
          dispatch({formFieldName: 'firstName', formFieldValue: val})
        }
        error={state.firstNameError}
      />

      <CustomInput
        label={'Last Name'}
        value={state.lastName}
        onValueChange={val =>
          dispatch({formFieldName: 'lastName', formFieldValue: val})
        }
        error={state.lastNameError}
      />

      <CustomInput
        label={'Address'}
        value={state.address}
        onValueChange={val =>
          dispatch({formFieldName: 'address', formFieldValue: val})
        }
        error={state.addressError}
      />
    </View>
  );
};
