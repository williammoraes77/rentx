declare module '*.svg' {
  import React from 'rreact';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
