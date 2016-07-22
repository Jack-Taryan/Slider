//var Slide = {
   //src: {
      //SL_Image_1: './Image/01.jpg',
      //SL_Image_2: './Image/02.jpg',
      //SL_Image_3: './Image/03.jpg',
      //SL_Image_4: './Image/04.jpg',
      //SL_Image_5: './Image/05.jpg',
      //SL_Image_6: './Image/06.jpg'
   //}
//};

//function toggle(button) {
  //if (button.value == "Pause") {
    //button.value = "Start";
  //} else {
    //button.value = "Pause";
  //}
//}


var i = 0, timer = 0;
var Image = new Array(4);

Image[0] = "Image/Slider/01.jpg";
Image[1] = "Image/Slider/02.jpg";
Image[2] = "Image/Slider/03.jpg";
Image[3] = "Image/Slider/04.jpg";
Image[4] = "Image/Slider/05.jpg";

function slide() {
	document.getElementById("Slider").src = Image[i];

	if (i < Image.length - 1) i++;
	else i = 0;

	timer = setTimeout("slide()", 2000);
}

function slide() {
	document.getElementById("Slider").src = Image[i];
	i = (i + 1)%Image.length;
}


function setTimer(){
	if (timer) {
       // stop
       clearInterval( timer );
       timer=null;
    }
    else {
    	timer = setInterval(slide, 1000);
    }
 }
