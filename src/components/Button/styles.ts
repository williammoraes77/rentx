import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';

interface ButtonProps {
  color?: string;
}

interface ButtonTextProps {
  light: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;

  padding: ${RFValue(19)}px;
  align-items: center;
  justify-content: center;

  background-color: ${({color}) => color};
  margin-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text<ButtonTextProps>`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme, light}) => light ? theme.colors.header : theme.colors.shape};
  font-size: ${RFValue(13)}px;
`;
