
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'JSON'
path_data = RestClient.get('https://data.cityofnewyork.us/resource/vjbm-hsyr.json')
path_array = JSON.parse(path_data)

path_array.each do |path|
    byebug
    Path.create(
    name: path["park_name"],
    surface_type: path["surface"],
    topography: path["gen_topog"],
    trail_markers: path["trailmarkersinstalled"],
    difficulty: path["difficulty"],
    coordinates:path["coordinates"][0][0]
    )
end

