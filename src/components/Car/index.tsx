import React from 'react';
import {RectButtonProps} from 'react-native-gesture-handler';
import {CarDTO} from '../../dtos/CarDTO';

import {
  Container,
  Datails,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import {getAccessoryIcon} from '../../utils/getAccessoryIcon';

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({data, ...rest}: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Datails>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.period}</Period>
            <Price>{`R$ ${data.price}`}</Price>
          </Rent>

          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Datails>

      <CarImage source={{uri: data.thumbnail}} resizeMode="contain" />
    </Container>
  );
}
