
/* ## facebook.com/PasaComputer
 * โจทย์ 
 * - หาห้องที่มีสิ่งอำนวยความสะดวก (facilities) ครบตรงกับความต้องการทั้งหมด (preferences)
 * - รีเทิร์นชื่อของห้องในรูปแบบอาเรย์ เช่น ['Deluxe', 'Super deluxe', 'Villa']
 */

const preferences = ['Private bathroom', 'TV', 'WiFi', 'Air conditioning'];

const rooms = [{
    name: 'Standard',
    facilities: ['Private bathroom', 'TV']
}, {
    name: 'Deluxe',
    facilities: ['Private bathroom', 'TV', 'WiFi', 'Air conditioning']
}, {
    name: 'Super deluxe',
    facilities: ['Private bathroom', 'TV', 'WiFi', 'Air conditioning', 'Mountain view']
}, {
    name: 'Bungalow',
    facilities: ['Private bathroom', 'TV', 'Mountain view']
}, {
    name: 'Villa',
    facilities: ['Spa', 'Private bathroom', 'TV', 'WiFi', 'Air conditioning']
}];

// ##[1] my challenge.....

// const findRoom = rooms.filter(obj => preferences
//     .every(item => obj.facilities.includes(item)))
//     .map(val => val.name);

// console.log(findRoom);


//##[2] reCode *****.....

function filterRoom(arr1,arr2){
    return  arr1.filter(obj => arr2
            .every(item => obj.facilities.includes(item)))
            .map(val => val.name);
}

const findRoom = filterRoom(rooms,preferences);
