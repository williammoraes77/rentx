import React, { useState } from 'react';
import {KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Form,
  Footer,
} from './styles';

import theme from '../../global/styles/theme';

import {Button} from '../../components/Button';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

export function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Estamos{'\n'}quase lá</Title>
            <SubTitle>Faça seu login para começar{'\n'}uma experiência incrível</SubTitle>
          </Header>

          <Form>
            <Input 
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput 
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
          </Form>
          
          <Footer>
            <Button 
              title="Login"
              onPress={() =>{}}
              enabled={false}
              loading={false}
            />
            <Button 
              title="Criar conta gratuita"
              color={theme.colors.background_secondary}
              light
              onPress={() =>{}}
              enabled={false}
              loading={false}
        
            />
          </Footer>

        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}