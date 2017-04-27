/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
//var Vector2 = require('vector2');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

//var tmpResult = '';

var main = new UI.Card({
  title: 'Transfer Info',
  //icon: 'images/menu_icon.png',
  icon: 'images/AppIcon.png',
  body: 'Initializing...',
  //subtitle: 'Hello World!',
  //body: 'Press any button.'
  //subtitleColor: 'indigo', // Named colors
  //bodyColor: '#9a0036' // Hex colors
  style: 'large'
});

var url='http://www.jorudan.co.jp/norikae/cgi/nori.cgi?eki1=%E6%9C%88%E5%B3%B6&eki2=%E6%9D%B1%E5%A4%A7%E5%B3%B6&eki3=%E6%A3%AE%E4%B8%8B%EF%BC%88%E6%9D%B1%E4%BA%AC%EF%BC%89&via_on=1&Cway=0&Czu=2&C7=1&C2=0&C3=0&C1=0&C4=0&C6=2&S.x=78&S.y=14&S=%E6%A4%9C%E7%B4%A2&Cmap1=&rf=nr&pg=0&eok1=R-&eok2=R-&eok3=R-&Csg=1&type=t&Cid=0&Cfp=1';

var parseResult = function(url){
  var tmpResult = 'updating...';
  main.body(tmpResult);
  ajax(
    {
      url: url, type: 'text'
      },
    function(data) {
      tmpResult = data.match(/.....発.→......着/).toString();
    //tmpArrivetime = data.match(/発着時間：(.*?)\n所要時間：/);
    //card.body(tmpResult);
    //return tmpResult;
    //main.body(tmpResult);
    //console.log(tmpResult);
    //console.log(tmpResult.length);
    //tmpResult = tmpResult.substring(0,5)+'\n↓\n'+tmpResult.substring(9,14);
    //console.log(tmpResult.length);
    //console.log(tmpResult);
      main.body(tmpResult);
    },
    function(error){
      tmpResult = 'Oops...';
      main.body(tmpResult);
    }
  ); 
  console.log(tmpResult);
  main.body(tmpResult);
};
parseResult(url);
//console.log('test');
//main.body = tmpResult;
console.log('show');
main.show();

//main.on('click', 'up', function(e) {
//  var menu = new UI.Menu({
//    sections: [{
//      items: [{
//        title: 'Pebble.js',
//        //icon: 'images/menu_icon.png',
//        subtitle: 'Can do Menus'
//      }, {
//        title: 'Second Item',
//        subtitle: 'Subtitle Text'
//      }, {
//        title: 'Third Item',
//      }, {
//        title: 'Fourth Item',
//      }]
//    }]
//  });
//  menu.on('select', function(e) {
//    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
//    console.log('The item is titled "' + e.item.title + '"');
//  });
//  menu.show();
//});

main.on('click', 'select', function(e) {
  parseResult(url);
});

main.on('accelTap', function(e){
  parseResult(url);
  // Notify the user
  Vibe.vibrate('short');
});

//main.on('click', 'down', function(e) {
//  var card = new UI.Card();
//  card.title('A Card');
//  card.subtitle('Is a Window');
//  card.body('The simplest window type in Pebble.js.');
//  card.show();
//});

// Prepare the accelerometer
Accel.init();