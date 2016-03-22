'use strict';

console.log('\'Allo \'Allo!');


window.onload = function() {
  cartodb.createVis('map', 'https://baseball-hack.cartodb.com/api/v2/viz/4380d8dc-ee10-11e5-bf98-0ecd1babdde5/viz.json');
};
