const h2 = document.createElement("h2");
h2.textContent = "The Ups and Downs of Bits and Bytes";
document.querySelector("body").appendChild(h2);
//document.body.createElement(h2);


window.onload=function(){
 const input = document.getElementById("likeButton1");
 const input2 = document.getElementById("likeButton2");
 const input3 = document.getElementById("likeButton3");
function addingEventListener() {
    input.addEventListener('click', function() {
      alert('Thanks For Liking My Super Mario Bros Article!!');
    });
    
    
  }
  function addingEventListener2() {
      input2.addEventListener('click', function() {
      alert('Thanks For Liking My Tetris Article!!');
    });
  }
  function addingEventListener3() {
      input3.addEventListener('click', function() {
      alert('Thanks For Liking My Minecraft Article!!');
    });
  }
addingEventListener(input);
addingEventListener2(input2);
addingEventListener3(input3);
}