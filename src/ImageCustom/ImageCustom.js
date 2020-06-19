import React, { PureComponent } from 'react';
import {
  Image, View,
} from 'react-native';
import PropTypes from 'prop-types';
import ImageProgress from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { Colors } from '../../../../src/Constants'
import { RFValue } from 'react-native-responsive-fontsize';

export default class ImageCustom extends PureComponent {

  static propTypes = {
    style: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    index: PropTypes.number,
    url: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.carouselItems = {};
  }
  captureCarouselItem = (ref, idx) => {
    this.carouselItems[idx] = ref;
  }

  render() {
    const { url, style, index } = this.props;
    return (
      <View style={[{}, style]}>
        {/* <Image
            ref={ref => this.captureCarouselItem(ref, index)}
            source={{
              uri:url,
            }}
            style={style}
          /> */}
        <ImageProgress
          source={{
            uri: url,
          }}
          resizeMode="contain"
          indicator={Progress.Pie}
          indicatorProps={{
            size: RFValue(80),
            color: Colors().NewApp.Primary,
            unfilledColor: Colors().NewApp.Secondary,
            zIndex: 200,
          }}
          indicatorContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}
          imageStyle={[style]}
          threshold={100}
          ref={ref => this.captureCarouselItem(ref, index)}
        />
      </View>
    );
  }
}