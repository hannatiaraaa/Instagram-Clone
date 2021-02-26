import React from 'react';
import {View} from 'react-native';
import Roboto from '../../Shared/Component/Roboto';
import {Layouting} from '../../Shared/Global/Style/Layout';

export default function Home() {
  return (
    <View style={[Layouting().flex1, Layouting().centered]}>
      <Roboto
        title="Login Success! This is home screen"
        type="BlackItalic"
        size={20}
      />
    </View>
  );
}
