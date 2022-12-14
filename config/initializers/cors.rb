# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://example.com:80'
    resource '*', headers: :any, methods: %i[get post]
  end
end
