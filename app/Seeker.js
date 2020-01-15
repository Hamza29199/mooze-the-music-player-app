import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Slider,
} from 'react-native';

function pad(x, width, z=0){

 x = x + '';
return x.length >= width ? x : new Array(width - x.length + 1).join(z) + x;

}

const minutesSeconds = (position) => ([

pad((Math.floor(position/60)), 2),

pad((position % 60), 2),

	]);

const Seeker = ({

trackLength,
currentPosition,
onSeek,
onSlidingStart,

}) => {

const elapsed = minutesSeconds(currentPosition);

const remaining = minutesSeconds(trackLength - currentPosition);

return (
<View style = {styles.container}>
<View style= {{flexDirection: 'row'}}>
<Text style = {styles.text}>
{elapsed[0] + ":" + elapsed[1]}
</Text>

<View style={{flex: 1}} />
        <Text style={[styles.text, {width: 40}]}>
          {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
        </Text>

</View>

<Slider

        maximumValue={200}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSeek}
        value= {currentPosition}
        style={styles.slider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbTintColor={styles.thumb.backgroundColor}
        //trackStyle={styles.track}
/>
</View>

	);
};

export default Seeker;

const styles = StyleSheet.create({

slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  }



});