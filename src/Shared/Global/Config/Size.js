import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const Size = {
  radius: moderateScale(6),

  ms12: moderateScale(12),

  wp4: widthPercentageToDP(4),
  wp92: widthPercentageToDP(92),
};
