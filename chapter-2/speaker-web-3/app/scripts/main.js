'use strict';

console.log('Hello JSON at Work!');

$(document).ready(function(){

  function addSpeakersMustache(speakers) {
    var tbody = $('#speakers-tbody');

    $.get('templates/speakers-mustache-template.html', function(templatePartial) {
      var template = $(templatePartial).filter('#speakerTemplate').html();
      tbody.append(Mustache.render(template, speakers));
    }).fail(function() {
      alert("Error loading Speakers mustache template");
    });

  }

  $.getJSON('https://jsonatwork.firebaseio.com/speakers.json',
    function(data){
      addSpeakersMustache(data);
    }
  );

});