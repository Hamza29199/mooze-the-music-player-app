import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';

import Header from './Header';
import Album from './Album';
import Track from './Track';
import Seeker from './Seeker';
import Controller from './Controller';
import {Video} from 'expo-av';

export default class Player extends Component{


constructor(props){

super(props);

this.state = {

paused: true,
totalLength: 1,
currentPosition: 0,
selectedTrack: 0,
repeatOn: false,
shuffleOn: false,
};

}

setDuration(data){

this.setState({totalLength: Math.floor(data.duration)});
console.log(this.state.totalLength);
}

setTime(data){

this.setState({currentPosition: Math.floor(data.currentTime)});

}

seek(time){
time = Math.round(time);
this.refs.audioElement && this.refs.audioElement.seek(time);
this.setState({
currentPosition: time,
paused: false,

});

}

onBack(){

if(this.state.currentPosition < 10 && this.state.selectedTrack > 0){

this.refs.audioElement && this.refs.audioElement.seek(0);

this.setState({ isChanging : true });
setTimeout(() => this.setState({

currentPosition: 0,
paused: false,
totalLength: 1,
isChanging: false,
selectedTrack: this.state.selectedTrack - 1,
}), 0);

}
else{
this.refs.audioElement.seek(0);
this.setState({

currentPosition: 0,
});


}

}

onForward(){

if (this.state.selectedTrack < this.props.tracks.length - 1) {
      this.refs.audioElement && this.refs.audioElement.seek(0);
      this.setState({ isChanging: true });
      setTimeout(() => this.setState({
        currentPosition: 0,
        totalLength: 1,
        paused: false,
        isChanging: false,
        selectedTrack: this.state.selectedTrack + 1,
      }), 0);
    }

}


render(){

const track = this.props.tracks[this.state.selectedTrack];

const video = this.state.isChanging ? null : (

<Video source={{uri : track.audioUrl}}

throughEarpiece={true}
volume = {1.0}
id="audioElement"
paused={this.state.paused}
//isPlaying={!this.state.paused}
shouldPlay={!this.state.paused}
resizeMode="cover"
repeat={true}
onLoadStart={this.loadStart}
onLoad={this.setDuration.bind(this)}
onProgress={this.setTime.bind(this)}
onEnd={this.onEnd}
onError={this.videoError}
style={styles.audioElement} />

	);

return (
<View style={styles.container}>
<StatusBar hidden={true} />
<Header message="m o o z e" />
<Album url={track.albumArtUrl} />
<Track title={track.title} artist={track.artist} />
<Seeker
onSeek={this.seek.bind(this)}
trackLength={this.state.totalLength}
onSlidingStart={() => this.setState({paused: false})}
currentPosition={this.state.currentPosition} />

<Controller 
onPressRepeat={() => this.setState({repeatOn : !this.state.repeatOn})}
repeatOn={this.state.repeatOn}
shuffleOn={this.state.shuffleOn}
forwardDisabled={this.state.selectedTrack === this.props.tracks.length - 1}
onPressShuffle={() => this.setState({shuffleOn: !this.state.shuffleOn})}
onPressPause={()=>this.setState({paused: true})}
onPressPlay={()=>this.setState({paused: false})}
onBack={this.onBack.bind(this)}
onForward={this.onForward.bind(this)}
paused={this.state.paused} />
{video} 
</View>

	);

}

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
