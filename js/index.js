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



var sound6 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency3 , attack: 0.1  , release: 0.3   }
});

var sound7 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency2 , attack: 0.1  , release: 0.2   }
});

var sound8 = new Pizzicato.Sound({
  source: 'wave',
  options: {type: wave1[x] , frequency: wave1Frequency4 , attack: 0.1  , release: 0.4   }
});


function s6(){
        $('.sample6').click(function() {
          if (sound6.playing === false) {
              sound6.volume = 1;
              sound7.volume = 1;
              sound8.volume = 1;
              var randomnNoise = setTimeout(function tick() {
                sound6.play();
                sound6.addEffect(flanger2);
                sound6.addEffect(delay2);
                sound6.addEffect(reverb2);
                timerId = setTimeout(tick,100);
              },200);

              var randomnNoiseStop = setTimeout(function tick2() {
                sound6.stop();
                timerId2 = setTimeout(tick2,100);
              },210);

              var randomnNoise2 = setTimeout(function tick6() {
                sound7.play();
                sound7.addEffect(flanger2);
                sound7.addEffect(delay2);
                sound7.addEffect(reverb2);
                timerId3 = setTimeout(tick6, 111);
              },102);

              var randomnNoiseStop2 = setTimeout(function tick3() {
                sound7.stop();
                timerId4 = setTimeout(tick3,130);
              },110);

              var randomnNoise3 = setTimeout(function tick4() {
                sound8.play();
                sound8.addEffect(flanger2);
                sound8.addEffect(delay2);
                sound8.addEffect(reverb2);
                timerId5 = setTimeout(tick4,200);
              },100);

              var randomnNoiseStop3 = setTimeout(function tick5() {
                sound8.stop();
                timerId6 = setTimeout(tick5,130);
              },220);
              $('.sample6').hide();
              $('.sample7').show("slow");
              
          }
          else{
            
            
          } 
        }
      );
}

s6();

function sNoise(){
        $('.sample7').click(function() {
            $('.sample6').show("slow");
            $('.sample7').hide();
            sound6.volume = 0;
            sound7.volume = 0;
            sound8.volume = 0;
           
        }
      );
}
   
sNoise();


var fxMix = Math.floor((Math.random() * 10) + 1);

var flanger = new Pizzicato.Effects.Flanger({
    time: 0.5,
    speed: 0.2,
    depth: 0.9,
    feedback: 0.7,
    mix: 0,
});


var reverb = new Pizzicato.Effects.Reverb({
    time: fxMix,
    decay: fxMix,
    reverse: false,
    mix: 0,
});


var delay = new Pizzicato.Effects.Delay({
    feedback: 0.6,
    time: 0.2,
    mix: 0,
});

var flanger2 = new Pizzicato.Effects.Flanger({
    time: 0.9,
    speed: 0.2,
    depth: 0.9,
    feedback: 0.3,
    mix: 0.5,
});


var reverb2 = new Pizzicato.Effects.Reverb({
    time: fxMix,
    decay: fxMix,
    reverse: false,
    mix: 0.3,
});


var delay2 = new Pizzicato.Effects.Delay({
    feedback: 0.7,
    time: 0.9,
    mix: 0.3,
});


var segments = [
  {
    
    audio: sound5,
    effects: [
          {
            instance: delay,
            parameters: {
              mix: document.getElementById('delay-mix')
            }
          },
          {
            instance: reverb,
            parameters: {
              mix: document.getElementById('reverb-mix')
            }
          },
          {
            instance: flanger,
            parameters: {
               mix: document.getElementById('flanger-mix')
            }
          },
        ],
  },
];


for (var i = 0; i < segments.length; i++) {
  (function(segment) {


    if (!segment.effects || !segment.effects.length)
      return;

    for (var i = 0; i < segment.effects.length; i++) {
      var effect = segment.effects[i];

      for (var key in effect.parameters) {
        (function(key, slider, instance){

          var display = slider.parentNode.getElementsByClassName('slider-value')[0];

          slider.addEventListener('input', function(e) {
            display.innerHTML = instance[key] = e.target.valueAsNumber;

          });

        })(key, effect.parameters[key], effect.instance); 
      }
    }

  })(segments[i]);
}

