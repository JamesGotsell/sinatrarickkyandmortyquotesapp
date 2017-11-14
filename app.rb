require 'rubygems'
require 'bundler'
Bundler.setup
require 'sinatra'
require 'json'
require 'rest-client'
require 'sinatra/reloader' if development?
require 'sinatra/contrib'
require 'open-uri'


# creating routes / should be home route 
get '/' do
    erb :index
end

get '/quotes' do
    @quotes = get_qoutes()
    
end

def get_qoutes() 
    
    response = RestClient::Request.execute(
        method: :get,
        url: 'http://loremricksum.com/api/?paragraphs=3&quotes=2',
        )
    puts response
  
    JSON.parse(response)
end
