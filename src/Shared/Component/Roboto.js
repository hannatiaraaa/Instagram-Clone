import React from 'react';
import {Text} from 'react-native';

export default function Roboto({
  title,
  color = 'black',
  size,
  type = 'Regular',
}) {
  return (
    <Text
      style={{
        color,
        fontSize: size,
        fontFamily: `Roboto-${type}`,
      }}>
      {title}
    </Text>
  );
}
