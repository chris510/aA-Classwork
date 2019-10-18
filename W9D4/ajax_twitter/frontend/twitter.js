const FollowToggle = require('./follow_toggle.js');

$(() => {
  const $ft = $('.follow-toggle');

  $ft.each( function(i ,ele) {
    new FollowToggle(ele);
  });

});

