var initial = 30;
var finale = 59;

window.addEventListener("scroll",function(){
	var scroll = scroller();
	var scroll_size = scrollSize();

/*	console.log("Scroll is: " + scroll);
	console.log("Scroll_size is: " + (scroll_size - 500));*/

    if(scroll > (scroll_size - 500)){
		var imgNs = JSON.parse("[" + localStorage.getItem("ls.imgs") + "]")[0];
		var sectionmain = document.getElementsByClassName("content")[0];
		for(var j = initial;j < finale;j++){
		   	var node = document.createElement("figure");
		   	node.className = "pict ng-scope";
		   	var img_img = document.createElement("img");
		   	img_img.src = imgNs[j].url;
		   	node.appendChild(img_img);
		   	sectionmain.appendChild(node);
		}
		initial += 50;
		finale += 50;
    } 
});

var scroller = function(){
		var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
		return scrollT;
}
var scrollSize = function(){
	    var element = document.getElementsByTagName("body")[0];
	    var scroll_size = element.offsetHeight || element.style.pixelHeight;
	    return scroll_size;
}
