# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."

    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."

    # Create one user with an easy to remember username, email, and password:
    User.create!(
        username: 'Demo-lition', 
        email: 'demo@user.io', 
        password: 'password'
    )

    # More users
    10.times do 
        User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
        }) 
    end

    puts "Creating benches..."

    # Create benches

    benches = Bench.create!([
        { title: "Ina Coolbrith Park", description: "Nice view of SF", price: 73, seating: 2, lat: 37.798262, lng: -122.413332},
        { title: "Lafayette Park", description: "Great space for picnics and scenic views", price: 42, seating: 8, lat: 37.791817, lng: -122.427464},
        { title: "Marina Green", description: "Right on the ocean! Very windy.", price: 29, seating: 4, lat: 37.807204, lng: -122.438348},
        { title: "Color Fountain Park Bench", description: 'Enjoy sitting in with shops nearby', price: 20, seating: 2, lat: 37.7824481, lng: -122.4334947},
        { title: "Golden Gate Park Bench", description: 'Right by a lake', price: 99, seating: 4, lat: 37.7715512, lng: -122.4934478}
    ])

    puts "Done!"
end