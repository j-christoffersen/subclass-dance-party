$(document).ready(function() {
  window.dancers = [];
  //window.audioplayer = $('body').append('<iframe width="0" height="0" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122591187&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>');
  
  window.$audioplayer = $('<iframe width="0" height="0" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/95272083&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>');
  $('body').append($audioplayer);
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = eval(dancerMakerFunctionName);
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random() - 32,
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    dancers.push(dancer);
  });
  
  $('.lineupButton').on('click', function(event) {
    window.dancers.forEach(function(item, index, collection) {
      var top = $('body').height() / 2;
      var left = $('body').width() / (collection.length + 1) * (index + 1);
      item.moveTo(top, left);
    });  
  });
  
  $('.jumpButton').on('click', function(event) {
    window.$audioplayer.remove();
    window.$audioplayer = $('<iframe width="0" height="0" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122591187&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>');
    $('body').append($audioplayer);
    $('.carlton').addClass('jump');
    $('.will').addClass('jump');
  });
});

