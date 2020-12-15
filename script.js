$(document).ready(function(){
    $("#videos").empty();
    //event listener for yt button
    $("#youtube").click(function(e){
    e.preventDefault();
    
    var key = "AIzaSyAa1zc7O33vu-6VA17JJFLnWPC9ckiXcOw";
    var search = $("#search").val();
    var maxResults= 6;
    var video ="";
    var ytUrl = "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search;

        $.ajax({
            url:ytUrl,
            method: "GET"
        }).then(function(data) {
         // console.log(data)

         data.items.forEach(items => {
            video =`<iframe width="420" height="315" src="https://www.youtube.com/embed/${items.id.videoId}" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>`

            $("#videos").append(video)
         });

        })
    })
})