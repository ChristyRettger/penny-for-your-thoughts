$(document).ready(function() {
 
  var currentQuote = "Quote Machine";
  
  var quotes = ["Either you run the day or the day runs you", "Accept the challenges so that you can feel the exhilaration of victory.", "Failure will never overtake me if my determination to succeed is strong enough.", "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", "Knowing is not enough; we must apply. Willing is not enough; we must do.", "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", "If you can dream it, you can do it.", "Go for it now. The future is promised to no one.", "What you get by achieving your goals is not as important as what you become by achieving your goals.", "I'd rather attempt to do something great and fail than to attempt to do nothing and succeed.",        "Things do not happen. Things are made to happen.", "Either I will find a way, or I will make one.", "There is no passion to be found playing small - in settling for a life that is less than the one you are capable of living.", "The key is to keep company only with people who uplift you, whose presence calls forth your best.", "Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do.", "Quality is not an act, it is a habit.", "I learned that we can do anything, but we can't do everything... at least not at the same time. So think of your priorities not in terms of what activities you do, but when you do them. Timing is everything.", "When something is important enough, you do it even if the odds are not in your favor.", "A goal is a dream with a deadline.", "Well done is better than well said."];
  
  var saidBy = ["-Jim Rohn", "-George S. Patton", "-Og Mandino", "-Thomas A. Edison", "-Johann Wolfgang von Goethe", "-Confucius", "-Walt Disney", "-Wayne Dyer", "-Zig Ziglar", "-Robert H. Schuller", "-John F. Kennedy", "-Philip Sidney", "-Nelson Mandela", "-Epictetus", "-Pope John XXIII", "-Aristotle", "-Dan Millman", "-Elon Musk", "-Napoleon Hill", "-Benjamin Franklin"]
  
  $(".well").hover(function(){
    $(".penny").effect("shake");
},
function(){
    $(".penny").effect("shake");
});
  
  
  
  
  $(".penny").click(function(){
    $("#tweetButton").empty();
    var n = Math.floor((Math.random() *20) + 1 );
    currentQuote = quotes[n];
    $(".penny").fadeOut();
    $(".quotes").text(function() {
      return currentQuote;
    });
    $(".saidby").text(function() {
      return saidBy[n];
    });
    $(".penny").fadeIn();
    
  

  
  function getQuote(){
    if (currentQuote.length < 95) {
   return currentQuote;
    } else {
      return currentQuote.slice(0,92) + "...";
    }
    
}
  
  twttr.widgets.createShareButton(
  'http://codepen.io/christyrettger/full/xVrdeR/',
  document.getElementById('tweetButton'),
  {
    size: "large",
    text: getQuote()
  }
  );
  
     });

});
