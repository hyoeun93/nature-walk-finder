class PathsController < ApplicationController
    def index
        # byebug
        # paths = Path.all
        @paths = Path.search(params[:path])
        render json: @paths.to_json(except: [:created_at, :updated_at]) 
    end

    def show
        path = Path.find_by(id: params[:id])
        render json: path.to_json(except: [:created_at, :updated_at])
    end 

    def delete
    end 

end
