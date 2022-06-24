import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Alert, Keyboard, KeyboardAvoidingView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from './styles';

import {BackButton} from '../../../components/BackButton';
import {Bullet} from '../../../components/Bullet';
import {Button} from '../../../components/Button';
import {PasswordInput} from '../../../components/PasswordInput';
import {api} from '../../../services/api';

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  };
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passworConfirm, setPasswordConfirm] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  const {user} = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  async function handleRegister() {
    if (!password || !passworConfirm) {
      return Alert.alert('Informe a senha e confirme');
    }
    if (password != passworConfirm) {
      return Alert.alert('As senhas nao sao iguais');
    }

    await api
      .post('users', {
        name: user.name,
        email: user.email,
        driver_license: user.driverLicense,
        password,
      })
      .then(() => {
        navigation.navigate('Confirmation', {
          nextScreenRoute: 'SignIn',
          title: 'Conta criada',
          message: `Agora é só fazer login\ne aproveitar`,
        });
      })
      .catch(() => {
        Alert.alert('Opa', 'Nao foi possivel cadastrar');
      });
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'}forma rápida e fácil</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              onChangeText={setPassword}
              value={password}
            />
            <PasswordInput
              iconName="lock"
              placeholder="Repetir senha"
              onChangeText={setPasswordConfirm}
              value={passworConfirm}
            />
          </Form>

          <Button
            title="Cadastrar"
            color={theme.colors.success}
            onPress={handleRegister}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
