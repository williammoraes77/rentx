import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
  color: string;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: ${RFValue(19)}px;
  align-items: center;
  justify-content: center;

  background-color: ${({color}) => color};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(13)}px;
`;
