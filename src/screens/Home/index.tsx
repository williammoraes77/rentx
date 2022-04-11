import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from 'styled-components';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton,
} from './styles';

import {api} from '../../services/api';
import {CarDTO} from '../../dtos/CarDTO';

import {Car} from '../../components/Car';
import {Load} from '../../components/Load';

import Teste from '../../assets/car.svg';

export function Home() {
  const navigation = useNavigation();
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', {car});
  }

  function handleOpenMyCars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Teste width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}
      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons
          name="car-sport-sharp"
          size={RFValue(32)}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
}
