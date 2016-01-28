
var GetPlaylists = {};

(function() {

  GetPlaylists.findPlaylists = function(url, cb) {
  		// alert("URL TO BE TAGGED: " + url);
  		$.ajax({
  		  type:'post',
		  url: "https://photoverse-.herokuapp.com/findPhotoTags",
		  data:{image_url:url},
		  success: function(data) {
		  	// console.log(data);
		  	if (cb) { cb(data, url); }
		  }
		});
  }

})();

