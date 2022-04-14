import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;

  background-color: ${({theme}) => theme.colors.background_primary}
`;