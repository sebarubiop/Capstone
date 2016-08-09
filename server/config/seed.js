/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      _id:'57a5a6cf628d5b2413500d42',
      encnum: '001-100',
      encdate: '07/08/2016',
      starttime: '2:01 PM',
      finishtime: '2:35 PM',
      medicare:['23','10993'],
      nonmedicare: 3,
      patient:{
         sex: 'M',
         post: 2042,
         dob: '18/02/1987',
         seenbygp: true,
         condition:{
           newpatient: true,
           healthcare: true,
           veteran: false,
           nesb: true,
           aboriginal: false,
           torres: false
         },
         height: 183,
         weight: 90,
         smoking: 3,
         drinking: 3,
         drinks: 3,
         moredrink: 1
      },
      reason:[{
         rnum: 1,
         name: 'Script for hypertension tablet',
         diagnosis:[{
    	      name: 'Hypertension',
            status: [2,3],
    	      drug:[{
    	        name:'coversyl tablets',
    	        strength: '10 mg',
    	        dose: '1 tab',
    	        freq: '1 daily',
    	        norep: 2,
              status:'Old',
    	        otc: false,
              gpsupply:false
    	       }],
    	      procedure:[{
    	         name: 'Low fat diet advised',
     	         nurse: false,
            }]
         }]
      },
      {
        _id:'57a5d53205af161453ef5b17',
         rnum: 2,
         name: 'Sore ribs',
         diagnosis:[{
            name: 'Injury ribs',
            status: [1,3],
            drug:[{
              name:'panadol tablets',
              strength: '500 mg',
              dose: '2 tabs',
              freq: '',
              norep: 0,
              status:'New',
              otc: true,
              gpsupply:false
             }],
            procedure:[{
               name: '',
               nurse: false,
            }]
         }]
      }],
      referral:[{
         name: 'Cardiologist',
         reasonnum: [1]
      }],
      imaging:[{
         name: 'X-ray',
         bodysite: 'Ribs',
         reasonnum: [2]
      }],
      pathology:[{
         name: 'Lipid screen',
         reasonnum: [1]
      }],
      owner:'57a5a451007fc7c0426cd0da'
    },
    {
    "encnum": "001-101",
    "encdate": "08/08/2016",
    "starttime": "21:01 PM",
    "finishtime": "21:35 PM",
    "nonmedicare": 1,
    "owner": "57a5a451007fc7c0426cd0da",
    "reason": [
      {
        "rnum": 1,
        "name": "Flu shot",
        "diagnosis": [
          {
            "name": "Inmunisation",
            "procedure": [
              {
                "name": "Injection given",
                "nurse": true
              }
            ],
            "drug": [
              {
                "name": "FluVax injection",
                "strength": "0.5 ml",
                "dose": "1 inj",
                "freq": "stat",
                "norep": 0,
                "status": "Old",
                "otc": false,
                "gpsupply": true
              }
            ],
            "status": [
              2
            ]
          }
        ]
      }
    ],
    "patient": {
      "sex": "F",
      "post": 2011,
      "dob": "09/03/1987",
      "seenbygp": true,
      "height": 155,
      "weight": 55,
      "smoking": 4,
      "drinking": 2,
      "drinks": 2,
      "moredrink": 2,
      "condition": {
        "newpatient": false,
        "healthcare": true,
        "veteran": false,
        "nesb": true,
        "aboriginal": false,
        "torres": false
      }
    },
    "medicare": [
      "23",
      "10993"
    ]
  });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
