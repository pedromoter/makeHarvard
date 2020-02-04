##Make Harvard2020 Google Cloud Winners
https://devpost.com/software/life-4ds6a1


## Inspiration
One of our teammates brought up that in his home country, transportation of medicine and fraud was a rampant issue, so we decided to tackle that. After researching, we found several potential pain points related to the transportation of medication such as maintaining the correct temperature and knowing the exact chain of handling the medicine. Several questions came up like "what if someone tampered with the medicine?" and "How do we detect that?"

## What it does
On the hardware side, we built a cooling box that keeps the medication refrigerated. The inner grid was created by putting slits in the wood sheets and interlocking them together. This was done to prevent over constraining the box and to limit the amount of angles and other such materials used. Dry ice packets can be slid into the pockets inside the box, and the separated compartments for medicine keep it, as well as the recipient who retrieves the medicine, safe. We also lined the inside with foam to retain the cold and reduce shock from the bike ride. Since drug safety and security is one of the biggest concerns, we implemented a GPS with an ultrasonic to track the box at all times and to detect possible tampering with the medicine. This would ensure successful transport of the medicine from producer, to hospital, and then to clients. This box can be strapped to a bike or on the back like a backpack! Very eco friendly :)

Pharmacies will need to keep track of where their riders are and the status of their orders, so we programmed a dashboard that contains all the vital information like the prescription authentification and the Biker's location. We see our service becoming the Ubereats for medicine delivery.

Since security is such a huge concern in the medical industry, we partially implemented a blockchain system to create immutable digital records of the prescriptions - like a paper trail :) We also designed a servo lock which is attached to the main lid as a first level of security, and an ultrasonic sensor to detect if the lid was opened.

## How we built it
We spent around 6 hours creating the CAD in Solidworks, prototyping dimensions and designing the layout before physically building it out. The locking mechanism was also designed in CAD, and then 3D printed. Everything was glued together at the end. 

Our digital dashboard was programmed in Javascript and communicates with our Arduino via google cloud IOT services, allowing us to remotely control the lock from the dashboard. The blockchain program was programmed separately. 

## Challenges we ran into
The materials were limited, so we had to substitute limit switches with ultrasonics and use wood rather than metal sheets. Since none of us knew how to use a laser cutter, we needed to rely on hand cutting. Overall, the time just put us on a lot of pressure, and we couldn't fully implement some of the cool features we had in mind. 

## Accomplishments that we're proud of
We were proud to be able to finish the CAD and the design of the box in such a short period of time. Our tracking system also implemented Google Cloud IOT Services. Overall, our idea was thought through way beyond what we knew we could accomplish in a day - we just had so much fun!! We truly believe that this project has a huge potential to address this urgent problem in the medical industry. 

## What we learned

Time and resource management! Sometimes not all the resources are there to serve you, so you need to be scrappy about it and do what you can in those scenarios. We saw the importance of working together and catering to each of our strengths. We were each in charge of a different area, so being able to come together at the end and synthesize our work into a finished product was vital. 

## What's next for Tracking LIFE
The system we designed today is just a small scale sample of what could be done. Ideally, the LIFE would hold many more slots for medicine and could potentially stack the grids of boxes to optimize space. Though we designed the one we have today for a specific standard medicine bottle dimension, our LIFE has the potential to be modified for any type of bottle.
Additionally, an electronic refrigeration system could substitute the dry-ice system in the future for more reliability over longer distances. Since most developing countries are very hot, solar panels can be attached as a source of electricity; or maybe we could have an electricity generator based on wheel movement? We also discussed adding individual small locks for each of the medicine compartments on the inside for an additional layer of security. All in all, we have so many more ideas for this project and believe that it has the potential to really change the world :)



