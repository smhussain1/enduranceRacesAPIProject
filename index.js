'use strict';

const youtube_key = "AIzaSyDPmO5VRwaw1PS1caF2ZXpg1cXaEtjtWSM";
const youtube_baseurl = "";

function userSearch() {
    // just creates the variable of the search term
    $('.entry-form').submit(function(event) {  
        event.preventDefault();
        //$('.display-results').empty();
        //let entry = $("#races option:selected").val();
        let entry = $('#races option:selected').text();
        console.log(entry);
        
        searchYouTube(entry);
        showWebsite(entry);

        }
      );
    }
    

//AJAX call to YouTube API
function searchYouTube(entry) {
    var params = {
      part:'snippet',
      key:'AIzaSyDPmO5VRwaw1PS1caF2ZXpg1cXaEtjtWSM',
      q: entry,
      maxResults: 4,
      type: 'video',
      order: 'Relevance',
      safeSearch: 'strict',
      relevanceLanguage: 'en'
    };
    let url = 'https://www.googleapis.com/youtube/v3/search';
    $.getJSON(url, params, function(data) {
      showYouTube(data.items);
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
        if (title.length > 70) {
          title = title.substring(0, 70).trim() + '...';
        }
        
        html += '<table><tr><td><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity>' + 
        '<div class="thumbnailWrap"><img class="thumbnail" src="' + value.snippet.thumbnails.medium.url + 
        '"><p class="play"><i class="fa fa-play-circle" aria-hidden="true"></i><br><span class="popup">Play here</span></p></div></a></td>' + 
        '<td class="tdtext"><a href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity><p class="videotitle">' + 
        title + '</p></a><p class="videochannel">' + 
        value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace(/-/g, '/') + ' &middot; <a href="https://www.youtube.com/channel/' + value.snippet.channelId + '" target="_blank">' +
        value.snippet.channelTitle + '</a></p><a class="read_description" href="#v' + index + '" rel="modal:open"><i class="fa fa-question-circle" aria-hidden="true"></i> Read description</a><p class="fulldescription" id="v' + index + '" style="display: none;"><span class="fd_title"><i class="fa fa-question-circle" aria-hidden="true"></i> ' + value.snippet.title + '</span><span class="fd_by">Posted by <a href="https://www.youtube.com/channel/' + value.snippet.channelId + '" target="_blank">' +
        value.snippet.channelTitle + '</a> on '+ value.snippet.publishedAt.substring(0, value.snippet.publishedAt.length - 14).replace(/-/g, '/') +'</span>' + value.snippet.description + '<a class="fd_link" href="https://www.youtube.com/watch?v=' + value.id.videoId + '?vq=hd1080" data-lity rel="modal:close"> Watch the video to learn more<i>!</i></a></p><p class="videodescription">' + value.snippet.description.substring(0, 130).trim() + '...' + '</p></td></tr></table>';
      });
      //console.log(html);
      $('.youtube').append(html);
      $('.youtube').append('<hr class="youtubehr"><p class="ext_link"><a href="https://www.youtube.com/results?search_query=' + $('#races option:selected').text() + 
        '" target="_blank"><i class="fa fa-external-link-square" aria-hidden="true"></i> &nbsp;More on YouTube</a></p>');
      $('.results-page').removeClass('hidden');

    }
}

function showWebsite(entry) {
    let entryUrl = '';
    if (entry == 'Tor des Geants') {
        entryUrl = 'https://www.tordesgeants.it/en';
    } else if (entry == 'Ultra Trail Mont Blanc') {
        entryUrl = 'https://utmbmontblanc.com/en/UTMB';
    }
    $('.webpage').html(`<embed class='web' src='${entryUrl}'>`)
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    userSearch();
  }
);
