function setPlaylists(data, url) {
  $("#loader").remove();
  $("#output").fadeIn(100);

  console.log(data);
  var iframes = data.results.iframes;
  for (var iframe in iframes) {
      $("#results > ul").append("<li>"+iframes[iframe].iframe+"</li>");
  }

  var tags = data.results.tags;
  var tagString = "";
  for (var tag in tags) {
      tagString += tags[tag].class + " ";
  }

  $("#image").append("<p>"+tagString+"</p>");

}

/**
 * Load the image in question and display it, along with its metadata.
 */
document.addEventListener("DOMContentLoaded", function () {
  // The URL of the image to load is passed on the URL fragment.
  var imageUrl = window.location.hash.substring(1);
  if (imageUrl) {
    // Use the ImageInfo library to load the image and parse it.
    // alert(imageUrl);
    $("#image").append("<img src='"+imageUrl+"'/>");
    GetPlaylists.findPlaylists(imageUrl, setPlaylists);
    // ImageInfo.loadInfo(imageUrl, getImageInfoHandler(imageUrl));

  }
});
