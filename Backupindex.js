'use strict';

const youtube_key = "AIzaSyDPmO5VRwaw1PS1caF2ZXpg1cXaEtjtWSM";
const youtube_baseurl = "";

// creates the variable of the search term
function userSearch() {
    $('.head').on('click', function(event) {  
        event.preventDefault();    
        let entry = $(this).text();
        searchYouTube(entry);
        }
      );
    }
    

//AJAX call to YouTube API
function searchYouTube(entry) {
    var params = {
      part:'snippet',
      key:'AIzaSyDPmO5VRwaw1PS1caF2ZXpg1cXaEtjtWSM',
      q: entry,
      maxResults: 8,
      type: 'video',
      order: 'Relevance',
      safeSearch: 'strict',
      relevanceLanguage: 'en'
    };
    let url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) {
      showYouTube(data.items);
      showHeader(entry);
      autoScroll();
    });
  }
  
  //Display YouTube data
function showYouTube(results) {
    let html = "";
    //Error msg for no search results
    console.log(results.length);
    if (results.length === 0) {
      html += '<div class="center"><dt class="youtube_color">Sorry, no YouTube clips were found.</dt><hr><dd class="tips">- Check for correct spelling, spacing and punctunations.<br />- Avoid using other search engine tricks in your search term.<br />- If the YouTube API server is down, try again at a later time.</dd>';
      $('.youtube').append(html);
    } else {
      $.each(results, function(index,value) {
        let title = value.snippet.title;
        console.log(title);
        if (title.length > 75) {
          title = title.substring(0, 75).trim() + '...';
        }
        
        html += '<table><tr><td><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity>' + 
        '<div class="thumbnailWrap"><img class="thumbnail" src="' + value.snippet.thumbnails.medium.url + 
        '"></div></a></td>' + 
        '<td class="tdtext"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity><p class="videotitle">' + 
        title + '</p></a><p class="videochannel">' + 
        value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace(/-/g, '/') + ' &middot; <a href="https://www.youtube.com/channel/' + value.snippet.channelId + 'target="_blank">' +
        value.snippet.channelTitle + '</a></p></h1><p class="fulldescription" id="v' + index + '" style="display: none;"><span class="fd_title"><i class="fa fa-question-circle" aria-hidden="true"></i> ' + value.snippet.title + '</span><span class="fd_by">Posted by <a href="https://www.youtube.com/channel/' + value.snippet.channelId + 'target="_blank">' +
        value.snippet.channelTitle + '</a> on '+ value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace(/-/g, '/') +'</span>' + value.snippet.description + '<a class="fd_link" href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity rel="modal:close"> Watch the video to learn more<i>!</i></a></p><p class="videodescription">' + value.snippet.description.substring(0, 110).trim() + '...' + '</p></td></tr></table>';
      });
      $('.youtube').html(html); 
      $('.external-link').html('<p class="ext_link"><a href="https://www.youtube.com/results?search_query=' + $('.head').text() + 
        'target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> &nbsp;More on YouTube</a></p>');
      $('.results-page').removeClass('hidden');
      $('.search-again').html('<a href="#page-top">Back to top of page</a>');
    }
}

// Plugs the Race Name Selected by User into the Header above the YouTube Results
function showHeader(entry) {
  $('.main-header').html('<h1>'+ entry + '</h1>');
}


function autoScroll() {
  let heightToScroll = $('.topContainer').outerHeight();
      $('html').animate({scrollTop: heightToScroll});
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    userSearch();
  }
);
