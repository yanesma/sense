class ExampleController < ApplicationController

def index
    @people = Person.all
    @people.to_json
    respond_to do |format|
      format.html # index.html.erb
      
    end


 end
end

