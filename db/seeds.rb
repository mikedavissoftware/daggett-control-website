puts "Now seeding..."

# Create Team Members
puts "Creating Users..."
User.create(
  username: "ron",
  password: "123",
  name: "Ron Daggett",
  role: "Owner and Operator",
  bio: "Ron Daggett has decades of experience in industrial controls, and has been an independent industrial control distributor. Ron values customers highly, going above and beyond in providing expertise & guidance to clients.",
  website: "",
  x_offset: 0,
  y_offset: 0
)
User.create(
  username: "stephanie",
  password: "123",
  name: "Stephanie Helfer",
  role: "Administrator",
  bio: "",
  website: "",
  x_offset: 0,
  y_offset: 0
)
User.create(
  username: "mike",
  password: "123",
  name: "Mike Davis",
  role: "Web Developer & Tech Consultant",
  bio: "Mike is a web developer, multimedia producer, and ethical entrepreneur. With many years of experience in technical project management & event production, he brings a tech savviness to Daggett Control that ensures smooth, efficient operation.",
  website: "http://mikedavissoftware.com",
  x_offset: 0,
  y_offset: 0
)

# Create Product Lines
puts "Creating Product Lines..."
product_amount = 10
product_amount.times do
  ProductLine.create(
    company: Faker::Company.name,
    logo: Faker::Company.logo,
    description: Faker::Lorem.paragraph(sentence_count: 3),
    website: "https://en.wikipedia.org/wiki/Company"
  )
end

puts "Creating Testimonials..."
testimonial_amount = product_amount * 3
# testimonial_amount.times do
#   Testimonial.create(
#     name: Faker::Name.name,
#     content: Faker::Lorem.paragraph(sentence_count: 3),
#     website: "http://website.com",
#     x_offset: 0,
#     y_offset: 0,
#     product_line_id: rand(1..product_amount)
#   )
# end

puts "Seeding Finished!"