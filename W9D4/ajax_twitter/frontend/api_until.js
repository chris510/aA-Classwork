const APIUtil = {
  followUser: id => {
    APIUtil.followStatus(id, 'POST');
  },

  unfollowUser: id => {
    APIUtil.followStatus(id, 'DELETE');
  },

  followStatus: (id, method) => (
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method: method,
    })
  ),
};

module.exports = APIUtil;

