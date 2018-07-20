let clearTime; 
let seconds = 0, minutes = 0, hours = 0;
let secs, mins, gethours ;
function startWatch( ) { 
  if ( seconds === 60 ) { seconds = 0; minutes = minutes + 1; }
 mins = ( minutes < 10 ) ? ( '0' + minutes + ': ' ) : ( minutes + ': ' );
 if ( minutes === 60 ) { minutes = 0; hours = hours + 1; }
 gethours = ( hours < 10 ) ? ( '0' + hours + ': ' ) : ( hours + ': ' ); secs = ( seconds < 10 ) ? ( '0' + seconds ) : ( seconds );
  let x = document .getElementById("timer");
  x.innerHTML = 'Time: ' + gethours + mins + secs;
 seconds++;
 clearTime = setTimeout( "startWatch( )", 1000 ); }

function startTime( ) { 
  if ( seconds === 0 && minutes === 0 && hours === 0 || seconds !== 0 || minutes !== 0 || hours !== 0) { 
      let currenttime = document.getElementById( "currenttime" );
     currenttime.style.display = "none";
    this.style.display = "none";
     startWatch(); 
   }
 }
  window.addEventListener( 'load', function() {
 let start = document.getElementById("start");
     start.addEventListener( 'click', startTime ); });

function pauseTime( ) {
   if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) {
  let currenttime = document .getElementById( "currenttime" ); 
 currenttime.style.display = "block"; 
 let time = gethours + mins + secs; currenttime.innerHTML = 'Paused: ' + time; 
 let x = document.getElementById ("timer"); 
 let pauseTime = gethours + mins + secs; x.innerHTML = pauseTime; 
  let showStart = document.getElementById ("start"); showStart.style.display = "inline-block"; 
  let showPause = document.getElementById("pause"); showPause.style.display = "inline-block";
 clearTimeout(clearTime); }
}
window.addEventListener( 'load', function ( ) {
  let pause = document.getElementById("pause"); pause.addEventListener('click', pauseTime);
});
                      
function stopTime( ) {
 if ( seconds !== 0 || minutes !== 0 || hours !== 0 ) { 
 let currenttime = document .getElementById("currenttime" ); 
 currenttime.style.display = "block"; 
 let time = gethours + mins + secs; currenttime.innerHTML = 'Stopped: ' + time; 
 seconds = 0; minutes = 0; hours = 0; 
   secs = '0' + seconds; mins = '0' + minutes + ': '; gethours = '0' + hours + ': ';
 let x = document.getElementById ("timer"); 
 let stopTime = gethours + mins + secs; x.innerHTML = stopTime; 
  let showStart = document.getElementById ("start"); showStart.style.display = "inline-block"; 
 let showStop = document.getElementById ("stop"); showStop.style.display = "inline-block"; 
clearTimeout( clearTime ); } 
 } 
 
window.addEventListener( 'load', function ( ) {
  let stop = document.getElementById ("stop"); stop.addEventListener( 'click', stopTime ); });
