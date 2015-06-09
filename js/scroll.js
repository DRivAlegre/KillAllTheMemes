var initial = 30;
var finale = 59;

window.addEventListener("scroll",function(){
	var scroll = scroller();
	var scroll_size = scrollSize();

    if(scroll > (scroll_size - 500)){
		var imgNs = JSON.parse("[" + localStorage.getItem("ls.imgs") + "]")[0];
		var sectionmain = document.getElementsByClassName("content")[0];
		for(var j = initial;j < finale;j++){
		   	var node = document.createElement("figure");
		   	node.className = "pict ng-scope";
		   	var img_img = document.createElement("img");
		   	img_img.src = imgNs[j].url;
		   	node.appendChild(img_img);
		   	getSocialButtons(node);
		   	sectionmain.appendChild(node);
		}
		initial += 70;
		finale += 70;
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


function getSocialButtons(elem){
	var social = document.createElement("div");
	social.className = "social";
	social.innerHTML = "<div class='facebook'><div id='fb-root'></div><div class='fb-like' data-href='https://drivalegre.github.io/KillAllTheMemes' data-layout='button' data-action='like' data-show-faces='false' data-share='true'></div><div class='twitter'><a href='https://twitter.com/share' class='twitter-share-button' data-url='http://drivalegre.github.io/KillAllTheMemes' data-text='http://fyslab.net/killallthememes' data-related='killallthememes' data-count='none' data-hashtags='KillAllTheMemes'>Tweet</a></div>";
	elem.appendChild(social);
}
