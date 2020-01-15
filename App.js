
import React, { Component } from 'react';
import Player from './app/Player';


export const TRACKS = [
  {
    title: 'Chlorine',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: 'https://player.vimeo.com/external/380436641.sd.mp4?s=b1eb38b7716b2ee6389891c95e5025307464dc5d&profile_id=165',
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'https://player.vimeo.com/external/380465612.sd.mp4?s=c9643d81ef01ba2d79a023ac4173600a001eead1&profile_id=164',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'https://player.vimeo.com/external/380465751.sd.mp4?s=aa011ea23833edb8f1485f3051a94e23ed6d45de&profile_id=165',
  },
  {
  title: 'Everything I Wanted',
    artist: 'Billie Eilish',
    albumArtUrl: 'https://www.udiscovermusic.com/wp-content/uploads/2019/11/Billie-Eilish-Everything-I-Wanted.jpg',
    audioUrl: 'https://player.vimeo.com/external/380470598.sd.mp4?s=ab94811d94d019ab7a12c9c68c5a0b2f732ad01b&profile_id=165',
  },
 {
  title: 'Hamesha',
    artist: 'EP',
    albumArtUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6xke7S0PjBppELuAQr4Nj8FgUCucm8l4HfFNy4bZ1jXIwhbYe',
    audioUrl: 'https://player.vimeo.com/external/380472063.sd.mp4?s=0f5026693965eb2c5b009357d348444e427eda80&profile_id=164',
  },

 {
  title: 'To The Beginning',
    artist: 'Kalafina',
    albumArtUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjNKRNrqZai5chi0sz6mnnC8RmVWMfoMLU8S41l_huXbbHtYoe',
    audioUrl: 'https://player.vimeo.com/external/380475708.sd.mp4?s=b6b08dc99129f8beee4cd22b8f83ab97946886f9&profile_id=165',
  },
];

export default class App extends Component {
  render() {

    return (

      <Player tracks={TRACKS} /> )

  }
}

