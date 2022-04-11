import styled, {css} from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

interface DateValueProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_secondary};
`;
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;
  background-color: ${({theme}) => theme.colors.header};

  justify-content: center;
  padding: ${RFValue(25)}px;
  padding-top: ${getStatusBarHeight() + RFValue(30)}px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.semi_bold};
  font-size: ${RFValue(34)}px;

  margin-top: ${RFValue(24)}px;
`;

export const RentalPeriod = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${RFValue(32)}px 0;
`;

export const DateInfo = styled.View`
  width: 30%30%;
`;

export const DateTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
`;

export const DateValueContent = styled.View<DateValueProps>`
  ${({selected, theme}) =>
    !selected &&
    css`
      border-bottom-width: ${RFValue(1)}px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: ${RFValue(5)}px;
    `};
`;

export const DateValue = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;
export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
  showsVerticalSrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`;
