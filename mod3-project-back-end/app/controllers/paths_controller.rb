class PathsController < ApplicationController
    def index
        paths = Path.all
        render json: paths.to_json(except: [:created_at, :updated_at])
    end

    def show
        path = Path.find_by(id: params[:id])
        render json: path.to_json(except: [:created_at, :updated_at])
    end 

    def delete
    end 

end
