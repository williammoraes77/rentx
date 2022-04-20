import React from 'react';
import {useWindowDimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation, useRoute} from '@react-navigation/native';

import {Container, Content, Title, Message, Footer} from './styles';

import {ConfirmButton} from '../../components/ConfirmButton';


import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();
  const route = useRoute();

  const {title, message, nextScreenRoute} = route.params as Params;

  console.log(title);

  function handleConfirm() {
    navigation.navigate(nextScreenRoute);
  }

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <Title>{title}</Title>

        <Message>
          {message}
          {/* Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel. */}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
