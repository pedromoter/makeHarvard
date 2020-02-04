import { Injectable, InternalServerErrorException } from '@nestjs/common';
const { google } = require('googleapis');
const iot = require('@google-cloud/iot');
@Injectable()
export class AppService {



private API_VERSION = 'v1';
private DISCOVERY_API = 'https://cloudiot.googleapis.com/$discovery/rest';
private  client = new iot.v1.DeviceManagerClient();


  private pastLocations = [];
  private lockedState  = true;
  getHello(): string {
    return 'Hello World!';
  }

  public addLocation(loc){
    if(loc.lat < 1  || loc.long  >= 0 || loc.lat === "device1-connected"){
      return
    }
    loc['time'] = new Date().getTime();

    this.pastLocations.push(loc);
    if(this.pastLocations.length > 12){
      this.pastLocations.splice(0,1);
    }
  }


  public async lock(){
    const formattedName = this.client.devicePath(
      "life-266918",
      "us-central1",
      "atest-registry",
      "device1"
    );
    const binaryData = Buffer.from("lock");
    const request = {
      name: formattedName,
      binaryData: binaryData,
    };
    
    try {
      const responses = await this.client.sendCommandToDevice(request);
    
      console.log('Sent command: ', responses[0]);
    } catch (err) {
      console.log(err)
    }
    this.lockedState  = true;
    return;
  }

  public async unlock(){
    const formattedName = this.client.devicePath(
      "life-266918",
      "us-central1",
      "atest-registry",
      "device1"
    );
    const binaryData = Buffer.from("unlock");
    const request = {
      name: formattedName,
      binaryData: binaryData,
    };
    
    try {
      const responses = await this.client.sendCommandToDevice(request);
    
      console.log('Sent command: ', responses[0]);
    } catch (err) {
      console.log(err)
    }
    this.lockedState  = true;
    return;
  }


  public async gps(){
    const formattedName = this.client.devicePath(
      "life-266918",
      "us-central1",
      "atest-registry",
      "device1"
    );
    const binaryData = Buffer.from("gps");
    const request = {
      name: formattedName,
      binaryData: binaryData,
    };
    
    try {
      const responses = await this.client.sendCommandToDevice(request);
    
      console.log('Sent command: ', responses[0]);
    } catch (err) {
      console.log(err)
    }
    this.lockedState  = true;
    return;
  }
  public getLockState(){
    return this.lockedState;
  }

  public getLast(){
    console.log(this.pastLocations);
    return this.pastLocations[this.pastLocations.length -1];
  }

}

