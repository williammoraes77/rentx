import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.header};

  padding-top: ${RFValue(96)}px;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-bottom: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: ${RFValue(30)}px;

  margin-top: ${RFValue(40)}px;
`;

export const Message = styled.Text`
  color: ${({theme}) => theme.colors.text_detail};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px
  text-align: center;
  margin-top: ${RFValue(16)}px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  margin: ${RFValue(80)}px 0;
`;
