class PathsController < ApplicationController
    def index
        # paths = Path.all
        # byebug
        @paths = Path.search(paths_params)
        # byebug
        render json: @paths.to_json(except: [:created_at, :updated_at]) 
    end

    def show
        path = Path.find_by(id: params[:id])
        render json: path.to_json(except: [:created_at, :updated_at])
    end 

    def destroy
        path = Path.find_by(id: params[:id])

    end 

    def update
        path = Path.find_by(id: params[:id])
    end

    def add_like
        @path = Path.find(params[:id])
        if @path.likes 
            @path.likes += 1
            @path.save
        else
            @path.likes = 1 
            @path.save
        end
        redirect_to path_path(@path)
    end


    private

    def paths_params
        params.require(:path).permit(:difficulty, :surface_type, :topography)
    end

end
