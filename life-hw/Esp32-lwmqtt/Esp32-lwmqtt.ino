/******************************************************************************
 * Copyright 2018 Google
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/
#include "esp32-mqtt.h"

//const char* googleApiKey = "";


void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println("Start");
  pinMode(LED_BUILTIN, OUTPUT);
  setupCloudIoT();
      Serial.println("Sending position!");

}

unsigned long lastMillis = 0;
void loop() {
  mqtt->loop();
  delay(10);  // <- fixes some issues with WiFi stability

  if (!mqttClient->connected()) {
    connect();
  }

  // TODO: replace with your code
  // publish a message roughly every second.
  if (millis() - lastMillis > 600000) {
    lastMillis = millis();
  //  location_t loc = location.getGeoFromWiFi();
   // Serial.println("Sending position!");
    publishTelemetry(mqttClient, "/location", String(70)+String(-130
    
    ));
   // publishTelemetry(getDefaultSensor());
  }
}
