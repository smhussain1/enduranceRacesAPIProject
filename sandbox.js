

html += 
'<table><tr><td><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity>' + 
'<div class="thumbnailWrap"><img class="thumbnail" src="' + value.snippet.thumbnails.medium.url + 
'"><p class="play"><i class="fa fa-play-circle" aria-hidden="true"></i><br><span class="popup">Play here</span></p></div>
</a></td>' + 
'<td class="tdtext"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity><p class="videotitle">' + 
title + '</p></a><p class="videochannel">' + 
value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace(/-/g, '/') + 
' &middot; <a href="https://www.youtube.com/channel/' + value.snippet.channelId + '" target="_blank">' +
value.snippet.channelTitle + '</a></p><a class="read_description" href="#v' + index + 
'" rel="modal:open"><i class="fa fa-question-circle" aria-hidden="true"></i> Read description</a><p class="fulldescription" id="v' 
+ index + '" style="display: none;"><span class="fd_title"><i class="fa fa-question-circle" aria-hidden="true"></i> ' 
+ value.snippet.title + '</span><span class="fd_by">Posted by <a href="https://www.youtube.com/channel/' + value.snippet.channelId 
+ '" target="_blank">' +
value.snippet.channelTitle + '</a> on '+ value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace
(/-/g, '/') +'</span>' + value.snippet.description + '<a class="fd_link" href="https://www.youtube.com/watch?v=' 
+ value.id.videoId + '?vq=hd1080" data-lity rel="modal:close"> Watch the video to learn more<i>!</i></a></p>
<p class="videodescription">' + value.snippet.description.substring(0, 130).trim() + '...' + '</p>
</td></tr></table>';
