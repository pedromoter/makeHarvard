import React, { useState, useEffect} from 'react';
import MapGL from 'react-map-gl';
import './App.css';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import lifelogo from './pictures/life.png'
import './mainpagestyle.css'
import Mapcomponent from './components/mapcomponent.js'
import {useForm} from './useForm.js'
const axios = require('axios');


const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2V2aW56OTE3IiwiYSI6ImNrNjN4ajd1ajBncjgzZW81dTF1eWNoYXcifQ.BsPTPcsISihd7dOzVrNueA'

firebase.initializeApp({
  apiKey: "AIzaSyCWSdnSNwphQZC5hknU5V1BvV1ajTOAef8",
  authDomain: "life-50aeb.firebaseapp.com",
  databaseURL: "https://life-50aeb.firebaseio.com",
  projectId: "life-50aeb",
  storageBucket: "life-50aeb.appspot.com",
  messagingSenderId: "511864952316",
  appId: "1:511864952316:web:647f8233e2d4f13110ce79",
  measurementId: "G-Z2H00344NV"
});


//short name
var db = firebase.firestore();

var link = db.collection('sample').doc('sampleuser')

var userdoc;
var locationx;
var locationy;



function App() {

  getLocation()

  const [viewport, setViewport] = useState({
    
    latitude: 71.1167,
    longitude: 42.3770,
    zoom: 1
  });


  const [values, setValues]  = useForm({
    Age: 18,
    PatientID: 'B7D9WIDKW2',
    PrescriptionID: 'A8S9D9F8W',
    X: '',
    Y: '',
    name: 'Kevinz'

  })

  link.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        console.log(values)
        values.Age = doc.data().Age
        values.PatientID = doc.data().PatientID
        console.log(values)
    } else {
        // doc.data() will be undefined in this case
        
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



  useEffect(() => {
    console.log('render');
  },values)


  function lock(){
    axios.get("http://ec2-35-162-56-104.us-west-2.compute.amazonaws.com:3000/lock");
  }


  function unlock(){
    axios.get("http://ec2-35-162-56-104.us-west-2.compute.amazonaws.com:3000/unlock");
  }


  function getLocation(){
    axios.get("http://ec2-35-162-56-104.us-west-2.compute.amazonaws.com:3000/getLocation")
    .then(data => {
      
    })
    .catch((err) => {
      console.log(err)
    })

    setInterval( () => {
      axios.get("http://ec2-35-162-56-104.us-west-2.compute.amazonaws.com:3000/getLocation")
      .then(data => {
        
      })
      .catch((err) => {
        console.log(err)
      })

    },15000)

  }

  function GetInfo(){


    link.get().then(function(doc) {
      if (doc.exists) {
          console.log("Document data:", doc.data());
          console.log(values)
          values.Age = doc.data().Age
          values.PatientID = doc.data().PatientID
          console.log(values)
      } else {
          // doc.data() will be undefined in this case
          
      }
  }).catch(function(error) {
      console.log("Error getting document:", error);
  });
  }


 
  return (
    <div>
    <div class="container-login100">
    <div class="fixed">

    <div class="wrap-login100">
    <img src={lifelogo} width="100"/>
    </div>
    <br/>
    <div class="wrap-login100">
    
      <div class="patient-data-header">
      Patient Data:
      </div>
      <br/>
      
      <div><b>Name:</b> {values.name} </div>
      <div><b>Age:</b> {values.age} </div>
      <div><b>Prescription Number:</b> {values.PrescriptionID} </div>
      
    </div>

    <br/>

    <div class="wrap-login100">
    <div>
      <h> Rider Info</h>
      <br/>
      </div>

      <div class="patient-data-header">
      Rider Data: 
      </div>
      <br/>

      
      <div><b>Name:</b> Kevin Z. </div>
      <div><b>Age:</b> 18 </div>
      <div><b>Authentification:</b> B7D9WIDKW2 </div>
      <div><b>Prescription Number:</b> A8S9D9F8W </div>
    </div>

    </div>

    <div class="grow">


    <div class="wrap-login100">
    <div>
      <h> Tracker</h>
      <br/>
      </div>

      <div class="patient-data-header">
     Receive Package
      </div>
      <br/>

      <button  class="button red" onClick={lock}> Lock</button>
      <button class="button" onClick={unlock}> Unlock</button>

      

    </div>




    <br/>

    <div class="map-info">

    <MapGL

      {...viewport}
      width="400px"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}

      />

      
    </div>

    </div>
    </div>
    </div>

    
    
    
    
  );
}

export default App;
