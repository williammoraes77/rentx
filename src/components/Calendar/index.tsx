import React from 'react';
import {Feather} from '@expo/vector-icons';
import {useTheme} from 'styled-components';

import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateCallbackHandler,
} from 'react-native-calendars';

import {generateInterval} from './generateInterval';
import {ptBr} from './localeConfig';

import {Directions} from 'react-native-gesture-handler';

import {Container} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

LocaleConfig.locales['pt-br'] = ptBr;

LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDatesProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

interface CalendarProps {
  markedDates: MarkedDatesProps;
  onDayPress: DateCallbackHandler;
}

interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

function Calendar({markedDates, onDayPress}: CalendarProps) {
  const theme = useTheme();
  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          size={RFValue(24)}
          color={theme.colors.text}
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.regular,
        textDayHeaderFontFamily: theme.fonts.medium,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.semi_bold,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.text,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      // minDate={new Date()}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {Calendar, MarkedDatesProps, DayProps, generateInterval};
