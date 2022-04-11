import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: ${RFValue(96)}px;
  height: ${RFValue(88)}px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background_primary};

  padding: ${RFValue(14)}px;
  margin-bottom: ${RFValue(8)}px;
`;
export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
`;
