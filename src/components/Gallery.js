import React from 'react'

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

var g0 = require('../assets/gallery/1.jpeg').default
var t0 = require('../assets/gallery/thumbnail/1.jpeg').default
var g1 = require('../assets/gallery/2.jpeg').default
var t1 = require('../assets/gallery/thumbnail/2.jpeg').default
var g2 = require('../assets/gallery/3.jpeg').default
var t2 = require('../assets/gallery/thumbnail/3.jpeg').default
var g3 = require('../assets/gallery/4.jpeg').default
var t3 = require('../assets/gallery/thumbnail/4.jpeg').default
var g4 = require('../assets/gallery/5.jpeg').default
var t4 = require('../assets/gallery/thumbnail/5.jpeg').default
var g5 = require('../assets/gallery/6.jpeg').default
var t5 = require('../assets/gallery/thumbnail/6.jpeg').default
var g6 = require('../assets/gallery/7.jpeg').default
var t6 = require('../assets/gallery/thumbnail/7.jpeg').default

var g7 = require('../assets/gallery/8.jpeg').default
var t7 = require('../assets/gallery/thumbnail/8.jpeg').default
var g8 = require('../assets/gallery/9.jpeg').default
var t8 = require('../assets/gallery/thumbnail/9.jpeg').default

var g9 = require('../assets/gallery/10.jpeg').default
var t9 = require('../assets/gallery/thumbnail/10.jpeg').default
var g10 = require('../assets/gallery/11.jpeg').default
var t10 = require('../assets/gallery/thumbnail/11.jpeg').default

const Gallery = () => {
  const pageTitle = "Gallery"
  var images = [];
  for (let index = 0; index <= 10; index++) {
    images.push({
      original: eval('g'+index),
      thumbnail: eval('t'+index)
    });
  }

  return (
    <div className="testClass bg-jumbotron" style={{ borderRadius: "5px", padding: "2rem" }}>
      <div className="align-center">
        <div><h3><b>{ pageTitle }</b></h3></div>
      </div>
      <ImageGallery 
        items={ images } 
        showFullscreenButton={ false } 
        showPlayButton={ false } 
      />

      <br/>
      
      <div style={{ textAlign: "justify" }}>
        <p>Please click the link for more information and article about St Isidore Centre:</p>
          
        <ul style={{ marginLeft: "-20px" }}>
          <li><a href="https://www.asiaone.com/print/News/Latest%2BNews/Singapore/Story/A1Story20121224-391323.html" target="_blank">From illegal bookie to orphans' hero</a></li>
          <li><a href="https://www.mewatch.sg/watch/A-Singaporean-Abroad-S2-E2-Thomas-Wee-35651" target="_blank">A Singaporean Abroad S2 E2 Thomas Wee</a></li>
          <li><a href="https://live.mewatch.sg/watch/Life-Extraordinaire-E9-51487" target="_blank">Life Extraordinaire E9</a></li>
          <li><a href="http://freecycle-community.blogspot.com/2020/08/sgfreecycle-thrift-shop-st-isidore.html?m=1" target="_blank">SgFreeCycle thrift shop St Isidore</a></li>
          <li><a href="https://www.facebook.com/TheRoyalSingapore/photos/this-local-thrift-shop-was-overwhelmed-with-donations-after-local-celebrity-quan/3435366413175168/" target="_blank">TheRoyalSingapore Facebook</a></li>
          <li><a href="https://images.app.goo.gl/9cC79YMBSy62qbnX8" target="_blank">Carouselling to help an orphanage</a></li>
          <li><a href="https://carousell.app.link/x9IbulKmBdb" target="_blank">Carousell - Meal for Charity - Heritage Food from Singapore’s Past</a></li>
          <li><a href="https://www.youtube.com/watch?v=gisJwfvKRhk" target="_blank">Asrama Putri Santa Maria Goretti @ Tanjung Pinang</a></li>
          <li><a href="https://www.youtube.com/watch?v=bfSdVPQNjuY" target="_blank">Children Stage Performance At The Restaurantヾ(๑╹◡╹)ﾉ" Jingle Bells 3</a></li>
        </ul> 
      </div>
    </div>
  )
}

export default Gallery
