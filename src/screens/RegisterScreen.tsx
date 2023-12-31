import React from 'react'
import { View, Text, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'


interface Props extends StackScreenProps<any, any> {};

export const RegisterScreen = ({navigation}:Props) => {
  const {email, password, name,onChange} = useForm({
    name:'',
    email:'',
    password: '',
  });
  const onRegister = () => {
    console.log(email,password,name);
    Keyboard.dismiss();
  }
  return (
    <>
      <KeyboardAvoidingView
      style={{flex:1,backgroundColor:'#5856D6'}}
      behavior={(Platform.OS==='ios')?'padding':'height'}
      >
        <View style={loginStyles.formContainer}>

          {/* Keyboard avoid view */}
          <WhiteLogo />
          <Text style={loginStyles.title}>Registro</Text>
          <Text style={loginStyles.label}>Nombre:</Text>
          <TextInput
            placeholder='Ingrese su nombre:'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor="white"
            onChangeText={(value)=>onChange(value,'name')}
            value={name}
            onSubmitEditing={onRegister}
            autoCapitalize='words'
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            placeholder='Ingrese su email:'
            placeholderTextColor="rgba(255,255,255,0.4)"
            keyboardType='email-address'
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor="white"
            onChangeText={(value)=>onChange(value,'email')}
            value={email}
            onSubmitEditing={onRegister}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Contraseña:</Text>
          <TextInput
            placeholder='******'
            placeholderTextColor="rgba(255,255,255,0.4)"
            underlineColorAndroid="white"
            secureTextEntry
            style={[
              loginStyles.inputField,
              (Platform.OS === 'ios') && loginStyles.inputFieldIOS
            ]}
            selectionColor="white"
            onChangeText={(value)=>onChange(value,'password')}
            value={password}
            onSubmitEditing={onRegister}
            autoCapitalize='none'
            autoCorrect={false}
          />
          {/* boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}
            >
              <Text style={loginStyles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
          {/* Crear una nueva cuenta */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={()=>{navigation.replace('LoginScreen')}}
              style={loginStyles.buttonReturn}
            >
              <Text style={loginStyles.buttonText}>Login</Text>
            </TouchableOpacity>
          <View style={loginStyles.newUserContainer}>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  )
}
