// npm install react-image-gallery
import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery'; 

export default class Slide extends React.Component{ 

  render(){
  const images = [
    {
      original:'../img/brinquedos.jpg',
      thumbnail: '../img/brinquedos.jpg',
    },
    {
      original: '../img/sabesp.jpg',
      thumbnail: '../img/sabesp.jpg',
    },    
    {
      original: '../img/doacao.jpg',
      thumbnail: '../img/doacao.jpg',
    },
    {
      original: '../img/formandas.jpg',
      thumbnail: '../img/formandas.jpg',
    }
    ,
    {
      original: '../img/oculos.jpg',
      thumbnail: '../img/oculos.jpg',
    }
    ,
    {
      original: '../img/odonto.jpg',
      thumbnail: '../img/odonto.jpg',
    },
    {
      original: '../img/cestas.jpg',
      thumbnail:'../img/doacao.jpg',
    },
  ]

      return( 
        <ImageGallery items={images} />
      );
      }
  }