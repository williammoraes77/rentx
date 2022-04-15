import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 ${RFValue(24)}px;

  background-color: ${({theme}) => theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(115)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(40)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;

`;

export const Form = styled.View`
  width: 100%;
  margin: ${RFValue(64)}px 0;
`;

export const Footer = styled.View`
  
`;