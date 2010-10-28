# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_web_module_session',
  :secret      => '4b1f5a2606f3c693845dc5a99fa0e2abbae41230e43550fe2906a0e9daecce6f2b6da0475770e0464cc06875d40a8764075df5760754ece741840e6a3d81fbf6'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
