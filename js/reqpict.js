$(document).on("ready",__init__);

function __init__()
{
	loadImg();
	$(".carousel-control").click(function() {
		var actived = $(".item.active");
		var id = actived.attr("data-role");
		getPict(id);
	});
}

function loadImg(){
	$(".item:first-child").addClass("active");
	var actived = $(".item.active");
	var id = actived.attr("data-role");
	getPict(id);
}

function getPict(id){
	if(localStorage.getItem(id) != null){
		var img = $(".item.active figure img");
		img.src = localStorage.getItem(id);
	}
	else
	{
		$.ajax({
			url:"http://localhost:8000/getimg/" + id,
			dataType:"json",
			success:function(data){
				var img = $(".item.active figure img");
				img.attr("src",data.url);
				localStorage.setItem(id,data.url);
				console.log(img);
			},
			error:function(err){
				console.log(err);
			}
		});
	}
}