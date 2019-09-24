import C from '../../constants'

const initialState = {
 userSelection: {
  gemStones: 'Good',
  caratWeight: '1.1',
  metalType: 'Rose Gold',
  ringSize: 20,
  image: '1.png',
  price: '1000'
 },
 addedItems: [],
 total: 0,
 productDetails: [
  {
    "ID": 1,
    "GemStone": "Good",
    "CaretWeight": 1.1,
    "MetalType": "Rose Gold",
    "Price": 1000
  },
  {
    "ID": 2,
    "GemStone": "Good",
    "CaretWeight": 1.1,
    "MetalType": "Yellow Gold",
    "Price": 1050
  },
  {
    "ID": 3,
    "GemStone": "Good",
    "CaretWeight": 1.1,
    "MetalType": "White Gold",
    "Price": 1100
  },
  {
    "ID": 4,
    "GemStone": "Good",
    "CaretWeight": 1.1,
    "MetalType": "Platinum",
    "Price": 1150
  },
  {
    "ID": 5,
    "GemStone": "Good",
    "CaretWeight": 1.9,
    "MetalType": "Rose Gold",
    "Price": 1200
  },
  {
    "ID": 6,
    "GemStone": "Good",
    "CaretWeight": 1.9,
    "MetalType": "Yellow Gold",
    "Price": 1250
  },
  {
    "ID": 7,
    "GemStone": "Good",
    "CaretWeight": 1.9,
    "MetalType": "White Gold",
    "Price": 1300
  },
  {
    "ID": 8,
    "GemStone": "Good",
    "CaretWeight": 1.9,
    "MetalType": "Platinum",
    "Price": 1350
  },
  {
    "ID": 9,
    "GemStone": "Good",
    "CaretWeight": 2.49,
    "MetalType": "Rose Gold",
    "Price": 1400
  },
  {
    "ID": 10,
    "GemStone": "Good",
    "CaretWeight": 2.49,
    "MetalType": "Yellow Gold",
    "Price": 1450
  },
  {
    "ID": 11,
    "GemStone": "Good",
    "CaretWeight": 2.49,
    "MetalType": "White Gold",
    "Price": 1500
  },
  {
    "ID": 12,
    "GemStone": "Good",
    "CaretWeight": 2.49,
    "MetalType": "Platinum",
    "Price": 1550
  },
  {
    "ID": 13,
    "GemStone": "Good",
    "CaretWeight": 4.03,
    "MetalType": "Rose Gold",
    "Price": 1600
  },
  {
    "ID": 14,
    "GemStone": "Good",
    "CaretWeight": 4.03,
    "MetalType": "Yellow Gold",
    "Price": 1650
  },
  {
    "ID": 15,
    "GemStone": "Good",
    "CaretWeight": 4.03,
    "MetalType": "White Gold",
    "Price": 1700
  },
  {
    "ID": 16,
    "GemStone": "Good",
    "CaretWeight": 4.03,
    "MetalType": "Platinum",
    "Price": 1750
  },
  {
    "ID": 17,
    "GemStone": "Better",
    "CaretWeight": 1.1,
    "MetalType": "Rose Gold",
    "Price": 1800
  },
  {
    "ID": 18,
    "GemStone": "Better",
    "CaretWeight": 1.1,
    "MetalType": "Yellow Gold",
    "Price": 1850
  },
  {
    "ID": 19,
    "GemStone": "Better",
    "CaretWeight": 1.1,
    "MetalType": "White Gold",
    "Price": 1900
  },
  {
    "ID": 20,
    "GemStone": "Better",
    "CaretWeight": 1.1,
    "MetalType": "Platinum",
    "Price": 1950
  },
  {
    "ID": 21,
    "GemStone": "Better",
    "CaretWeight": 1.9,
    "MetalType": "Rose Gold",
    "Price": 2000
  },
  {
    "ID": 22,
    "GemStone": "Better",
    "CaretWeight": 1.9,
    "MetalType": "Yellow Gold",
    "Price": 2050
  },
  {
    "ID": 23,
    "GemStone": "Better",
    "CaretWeight": 1.9,
    "MetalType": "White Gold",
    "Price": 2100
  },
  {
    "ID": 24,
    "GemStone": "Better",
    "CaretWeight": 1.9,
    "MetalType": "Platinum",
    "Price": 2150
  },
  {
    "ID": 25,
    "GemStone": "Better",
    "CaretWeight": 2.49,
    "MetalType": "Rose Gold",
    "Price": 2200
  },
  {
    "ID": 26,
    "GemStone": "Better",
    "CaretWeight": 2.49,
    "MetalType": "Yellow Gold",
    "Price": 2250
  },
  {
    "ID": 27,
    "GemStone": "Better",
    "CaretWeight": 2.49,
    "MetalType": "White Gold",
    "Price": 2300
  },
  {
    "ID": 28,
    "GemStone": "Better",
    "CaretWeight": 2.49,
    "MetalType": "Platinum",
    "Price": 2350
  },
  {
    "ID": 29,
    "GemStone": "Better",
    "CaretWeight": 4.03,
    "MetalType": "Rose Gold",
    "Price": 2400
  },
  {
    "ID": 30,
    "GemStone": "Better",
    "CaretWeight": 4.03,
    "MetalType": "Yellow Gold",
    "Price": 2450
  },
  {
    "ID": 31,
    "GemStone": "Better",
    "CaretWeight": 4.03,
    "MetalType": "White Gold",
    "Price": 2500
  },
  {
    "ID": 32,
    "GemStone": "Better",
    "CaretWeight": 4.03,
    "MetalType": "Platinum",
    "Price": 2550
  },
  {
    "ID": 33,
    "GemStone": "Best",
    "CaretWeight": 1.1,
    "MetalType": "Rose Gold",
    "Price": 2600
  },
  {
    "ID": 34,
    "GemStone": "Best",
    "CaretWeight": 1.1,
    "MetalType": "Yellow Gold",
    "Price": 2650
  },
  {
    "ID": 35,
    "GemStone": "Best",
    "CaretWeight": 1.1,
    "MetalType": "White Gold",
    "Price": 2700
  },
  {
    "ID": 36,
    "GemStone": "Best",
    "CaretWeight": 1.1,
    "MetalType": "Platinum",
    "Price": 2750
  },
  {
    "ID": 37,
    "GemStone": "Best",
    "CaretWeight": 1.9,
    "MetalType": "Rose Gold",
    "Price": 2800
  },
  {
    "ID": 38,
    "GemStone": "Best",
    "CaretWeight": 1.9,
    "MetalType": "Yellow Gold",
    "Price": 2850
  },
  {
    "ID": 39,
    "GemStone": "Best",
    "CaretWeight": 1.9,
    "MetalType": "White Gold",
    "Price": 2900
  },
  {
    "ID": 40,
    "GemStone": "Best",
    "CaretWeight": 1.9,
    "MetalType": "Platinum",
    "Price": 2950
  },
  {
    "ID": 41,
    "GemStone": "Best",
    "CaretWeight": 2.49,
    "MetalType": "Rose Gold",
    "Price": 3000
  },
  {
    "ID": 42,
    "GemStone": "Best",
    "CaretWeight": 2.49,
    "MetalType": "Yellow Gold",
    "Price": 3050
  },
  {
    "ID": 43,
    "GemStone": "Best",
    "CaretWeight": 2.49,
    "MetalType": "White Gold",
    "Price": 3100
  },
  {
    "ID": 44,
    "GemStone": "Best",
    "CaretWeight": 2.49,
    "MetalType": "Platinum",
    "Price": 3150
  },
  {
    "ID": 45,
    "GemStone": "Best",
    "CaretWeight": 4.03,
    "MetalType": "Rose Gold",
    "Price": 3200
  },
  {
    "ID": 46,
    "GemStone": "Best",
    "CaretWeight": 4.03,
    "MetalType": "Yellow Gold",
    "Price": 3250
  },
  {
    "ID": 47,
    "GemStone": "Best",
    "CaretWeight": 4.03,
    "MetalType": "White Gold",
    "Price": 3300
  },
  {
    "ID": 48,
    "GemStone": "Best",
    "CaretWeight": 4.03,
    "MetalType": "Platinum",
    "Price": 3350
  },
  {
    "ID": 49,
    "GemStone": "Heirloom",
    "CaretWeight": 1.1,
    "MetalType": "Rose Gold",
    "Price": 3400
  },
  {
    "ID": 50,
    "GemStone": "Heirloom",
    "CaretWeight": 1.1,
    "MetalType": "Yellow Gold",
    "Price": 3450
  },
  {
    "ID": 51,
    "GemStone": "Heirloom",
    "CaretWeight": 1.1,
    "MetalType": "White Gold",
    "Price": 3500
  },
  {
    "ID": 52,
    "GemStone": "Heirloom",
    "CaretWeight": 1.1,
    "MetalType": "Platinum",
    "Price": 3550
  },
  {
    "ID": 53,
    "GemStone": "Heirloom",
    "CaretWeight": 1.9,
    "MetalType": "Rose Gold",
    "Price": 3600
  },
  {
    "ID": 54,
    "GemStone": "Heirloom",
    "CaretWeight": 1.9,
    "MetalType": "Yellow Gold",
    "Price": 3650
  },
  {
    "ID": 55,
    "GemStone": "Heirloom",
    "CaretWeight": 1.9,
    "MetalType": "White Gold",
    "Price": 3700
  },
  {
    "ID": 56,
    "GemStone": "Heirloom",
    "CaretWeight": 1.9,
    "MetalType": "Platinum",
    "Price": 3750
  },
  {
    "ID": 57,
    "GemStone": "Heirloom",
    "CaretWeight": 2.49,
    "MetalType": "Rose Gold",
    "Price": 3800
  },
  {
    "ID": 58,
    "GemStone": "Heirloom",
    "CaretWeight": 2.49,
    "MetalType": "Yellow Gold",
    "Price": 3850
  },
  {
    "ID": 59,
    "GemStone": "Heirloom",
    "CaretWeight": 2.49,
    "MetalType": "White Gold",
    "Price": 3900
  },
  {
    "ID": 60,
    "GemStone": "Heirloom",
    "CaretWeight": 2.49,
    "MetalType": "Platinum",
    "Price": 3950
  },
  {
    "ID": 61,
    "GemStone": "Heirloom",
    "CaretWeight": 4.03,
    "MetalType": "Rose Gold",
    "Price": 4000
  },
  {
    "ID": 62,
    "GemStone": "Heirloom",
    "CaretWeight": 4.03,
    "MetalType": "Yellow Gold",
    "Price": 4050
  },
  {
    "ID": 63,
    "GemStone": "Heirloom",
    "CaretWeight": 4.03,
    "MetalType": "White Gold",
    "Price": 4100
  },
  {
    "ID": 64,
    "GemStone": "Heirloom",
    "CaretWeight": 4.03,
    "MetalType": "Platinum",
    "Price": 4150
  }
],
 sizes: [
  {
    "optionid": 1,
    "size": 4
  },
  {
    "optionid": 2,
    "size": 4.5
  },
  {
    "optionid": 3,
    "size": 5
  },
  {
    "optionid": 4,
    "size": 5.5
  },
  {
    "optionid": 5,
    "size": 6
  },
  {
    "optionid": 6,
    "size": 6.5
  },
  {
    "optionid": 7,
    "size": 7
  },
  {
    "optionid": 8,
    "size": 7.5
  },
  {
    "optionid": 9,
    "size": 8
  },
  {
    "optionid": 10,
    "size": 8.5
  },
  {
    "optionid": 11,
    "size": 9
  },
  {
    "optionid": 12,
    "size": 9.5
  },
  {
    "optionid": 13,
    "size": 10
  },
  {
    "optionid": 14,
    "size": 10.5
  },
  {
    "optionid": 15,
    "size": 11
  },
  {
    "optionid": 16,
    "size": 11.5
  },
  {
    "optionid": 17,
    "size": 12
  },
  {
    "optionid": 18,
    "size": 12.5
  },
  {
    "optionid": 19,
    "size": 13
  },
  {
    "optionid": 20,
    "size": 13.5
  },
  {
    "optionid": 21,
    "size": 14
  }
]
}

const rootReducer = (state = initialState, action) => {
  let newState = {};
  //debugger;
  switch(action.type){
    case C.ADD_TO_CART:
    let addedItems = [...action.payload.addedItems];
    newState = Object.assign({}, state, {addedItems: addedItems} );
    break;
    case C.PRICE_UPDATE:
    case C.SIZE_CHANGE:
    case C.GEM_STONE_QUALITY_UPDATE: 
    case C.CARAT_WEIGHT_UPDATE: 
    case C.METAL_TYPE_UPDATE: 
    newState = Object.assign({}, state, { userSelection: Object.assign({}, state.userSelection,  action.payload.userSelection)} );
    break;
      default:
       newState = state;
    break;
  }
  return newState;
}

export default rootReducer;