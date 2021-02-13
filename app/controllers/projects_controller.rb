class ProjectsController < ApplicationController
    def show
        render template: "projects/#{params[:project]}"
    end
end
