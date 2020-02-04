"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const { google } = require('googleapis');
const iot = require('@google-cloud/iot');
let AppService = class AppService {
    constructor() {
        this.API_VERSION = 'v1';
        this.DISCOVERY_API = 'https://cloudiot.googleapis.com/$discovery/rest';
        this.client = new iot.v1.DeviceManagerClient();
        this.pastLocations = [];
        this.lockedState = true;
    }
    getHello() {
        return 'Hello World!';
    }
    addLocation(loc) {
        if (loc.lat < 1 || loc.long >= 0) {
            return;
        }
        loc['time'] = new Date().getTime();
        this.pastLocations.push(loc);
        if (this.pastLocations.length > 12) {
            this.pastLocations.splice(0, 1);
        }
    }
    async lock() {
        const formattedName = this.client.devicePath("life-266918", "us-central1", "atest-registry", "device1");
        const binaryData = Buffer.from("lock");
        const request = {
            name: formattedName,
            binaryData: binaryData,
        };
        try {
            const responses = await this.client.sendCommandToDevice(request);
            console.log('Sent command: ', responses[0]);
        }
        catch (err) {
            console.log(err);
        }
        this.lockedState = true;
        return;
    }
    async unlock() {
        const formattedName = this.client.devicePath("life-266918", "us-central1", "atest-registry", "device1");
        const binaryData = Buffer.from("unlock");
        const request = {
            name: formattedName,
            binaryData: binaryData,
        };
        try {
            const responses = await this.client.sendCommandToDevice(request);
            console.log('Sent command: ', responses[0]);
        }
        catch (err) {
            console.log(err);
        }
        this.lockedState = true;
        return;
    }
    async gps() {
        const formattedName = this.client.devicePath("life-266918", "us-central1", "atest-registry", "device1");
        const binaryData = Buffer.from("gps");
        const request = {
            name: formattedName,
            binaryData: binaryData,
        };
        try {
            const responses = await this.client.sendCommandToDevice(request);
            console.log('Sent command: ', responses[0]);
        }
        catch (err) {
            console.log(err);
        }
        this.lockedState = true;
        return;
    }
    getLockState() {
        return this.lockedState;
    }
    getLast() {
        console.log(this.pastLocations);
        return this.pastLocations[this.pastLocations.length - 1];
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map