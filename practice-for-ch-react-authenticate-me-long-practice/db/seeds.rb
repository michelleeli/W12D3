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

  Bench.create!({
    title: 'Manhattan Movie Bench',
    description: 'View of Queensborough bridge and water',
    price: 30,
    seating:3,
    lng:40.759008811124424,
    lat:-73.95902392836702
  })

    Bench.create!({
    title: 'Fun Bench',
    description: 'fun!',
    price: 40,
    seating: 69,
    lng: 40.75684736081709, 
    lat: -73.98310473666788
  })

    Bench.create!({
    title: 'Ok bench',
    description: 'its ok',
    price: 10,
    seating: 13,
    lng: 40.66034195637639,
    lat: -73.96890217847232
  })

    Bench.create!({
    title: 'Nice Bench',
    description: 'nice!',
    price: 52,
    seating: 5,
    lng: 40.73699414100244, 
    lat: -73.99060733097531,
  })

    Bench.create!({
    title: 'Cool Bench',
    description: 'cool!',
    price: 40,
    seating: 6,
    lng:40.75487271153465, 
    lat: -73.98374088713236,
  })

    Bench.create!({
    title: 'Ugly bench',
    description: 'ew',
    price: 10,
    seating: 1,
    lng: 40.73198524677008, 
    lat: -73.99730826764701,
  })


  puts "Done!"
end