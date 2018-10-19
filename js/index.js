var wave1 = new Array();
wave1[0] = 'sawtooth';
wave1[1] = 'triangle';
wave1[2] = 'sine';
wave1[3] = 'square';
var size = wave1.length;
var x = Math.floor(size*Math.random());


var freqMin = 120;
var freqMax = 1200;
var wave1Frequency =  Math.floor((Math.random() * (freqMax - freqMin)) + freqMin);

var freqMin2 = 100;
var freqMax2 = 300;
var wave1Frequency2 =  Math.floor((Math.random() * (freqMax2 - freqMin2)) + freqMin2);

var freqMin3 = 120;
var freqMax3 = 700;
var wave1Frequency3 =  Math.floor((Math.random() * (freqMax3 - freqMin3)) + freqMin3);

var freqMin4 = 320;
var freqMax4 = 800;
var wave1Frequency4 =  Math.floor((Math.random() * (freqMax4 - freqMin4)) + freqMin4);

var freqMin5 = 100;
var freqMax5 = 900;
var wave1Frequency5 =  Math.floor((Math.random() * (freqMax5 - freqMin5)) + freqMin5);

var wave1A =  Math.random();

var wave1R =  Math.random();

var sound1 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency , attack: wave1A  , release: wave1R   }
});


function s1(){
        $('.sample1').click(function() {
          if (sound1.playing === false) {
            sound1.play();
            sound1.addEffect(flanger);
            sound1.addEffect(delay);
            sound1.addEffect(reverb);
            $('.sample1').css('animation-play-state', 'running');
          }
          else{
            sound1.stop();
            $('.sample1').css('animation-play-state', 'paused');
          } 
        }
      );
}
   
s1();


var sound2 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency2 , attack: wave1A  , release: wave1R   }
});


function s2(){
        $('.sample2').click(function() {
          if (sound2.playing === false) {
            sound2.play();
            sound2.addEffect(flanger);
            sound2.addEffect(delay);
            sound2.addEffect(reverb);
            $('.sample2').css('animation-play-state', 'running');
          }
          else{
            sound2.stop();
            $('.sample2').css('animation-play-state', 'paused');
          } 
        }
      );
}
   
s2();


var sound3 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency3 , attack: wave1A  , release: wave1R   }
});


function s3(){
        $('.sample3').click(function() {
          if (sound3.playing === false) {
            sound3.play();
            sound3.addEffect(flanger);
            sound3.addEffect(delay);
            sound3.addEffect(reverb);
            $('.sample3').css('animation-play-state', 'running');
          }
          else{
            sound3.stop();
            $('.sample3').css('animation-play-state', 'paused');
          } 
        }
      );
}
   
s3();



var sound4 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency4 , attack: wave1A  , release: wave1R   }
});


function s4(){
        $('.sample4').click(function() {
          if (sound4.playing === false) {
            sound4.play();
            sound4.addEffect(flanger);
            sound4.addEffect(delay);
            sound4.addEffect(reverb);
            $('.sample4').css('animation-play-state', 'running');
          }
          else{
            sound4.stop();
            $('.sample4').css('animation-play-state', 'paused');
          } 
        }
      );
}
   
s4();


var sound5 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency5 , attack: wave1A  , release: wave1R   }
});


function s5(){
        $('.sample5').click(function() {
          if (sound5.playing === false) {
            sound5.play();
            sound5.addEffect(flanger);
            sound5.addEffect(delay);
            sound5.addEffect(reverb);
            $('.sample5').css('animation-play-state', 'running');
          }
          else{
            sound5.stop();
            $('.sample5').css('animation-play-state', 'paused');
          } 
        }
      );
}
   
s5();


var fxMix = Math.floor((Math.random() * 10) + 1);

var flanger = new Pizzicato.Effects.Flanger({
    time: 0.45,
    speed: 0.2,
    depth: 0.1,
    feedback: 0.1,
    mix: 0.5
})


var reverb = new Pizzicato.Effects.Reverb({
    time: fxMix,
    decay: fxMix,
    reverse: false,
    mix: 0.8
});


var delay = new Pizzicato.Effects.Delay({
    feedback: 0.1,
    time: 0.2,
    mix: 0.8
});



