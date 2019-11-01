# json.set! @user.id do
  json.extract! @user, :id, :username
# end

# remove password digest and session token when finished with development