const APIUtil = require('./api_until.js');

class FollowToggle{
  constructor(el){
    this.$el = $(el); 
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    // this.handleClick();
    this.$el.on('click', (e) => {
      e.preventDefault();
      this.handleClick();
    });
  }


  render(){
    if(this.followState === 'unfollowed'){
      this.$el.text('Follow!');
    } else {
      this.$el.text('Unfollow!');
    }
  }

  handleClick() {
    if (this.followState === 'followed') {
      APIUtil.unfollowUser(this.userId)
        .then(this.followState = "unfollowed")
        .then(res => this.render());
        console.log("this works");
    } else {
      APIUtil.followUser(this.userId)
      .then(this.fol wState = "followed")
      .then(res => this.render());
      console.log("this works");
    }
    // if (this.followState === "followed") {
    //   return $.ajax({
    //     method: "DELETE",
    //     url: `/users/${this.userId}/follow`, 
    //     dataType: "JSON",
    //     success: res => {
    //       this.followState = 'unfollowed';
    //       this.render();
    //     }
    //   });
    // } else {
    //   return $.ajax({
    //     method: "POST",
    //     url: `/users/${this.userId}/follow`,
    //     dataType: "JSON",
    //     success: res => {
    //       this.followState = 'followed';
    //       this.render();
    //     }
    //   });
    // }
  }
} 

module.exports = FollowToggle;