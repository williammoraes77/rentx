import React from 'react';
import {useWindowDimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

import {Container, Content, Title, Message, Footer} from './styles';

import {ConfirmButton} from '../../components/ConfirmButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

export function SchedulingComplete() {
  const {width} = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={RFValue(80)} height={RFValue(80)} />
        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionária da RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="Ok" onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
