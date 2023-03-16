puts "Now seeding..."

# Create Company
puts "Creating Company..."
CompanyInfo.create(
  name: "Daggett Control Company, LLC",
  byline: Faker::Company.catch_phrase,
  bio: Faker::Lorem.paragraph(sentences: 8)
)

# Create Team Members
puts "Creating Team Members..."
TeamMember.create(
  name: "",
  role: "",
  bio: "",
  website: "",
)
TeamMember.create(
  name: "",
  role: "",
  bio: "",
  website: "",
)
TeamMember.create(
  name: "",
  role: "",
  bio: "",
  website: "",
)

# Create Product Lines
puts "Creating Product Lines..."
product_amount = 10
product_amount.times do
  ProductLine.create(
    company: Faker::Company.name,
    logo: Faker::Company.logo,
    description: Faker::Lorem.paragraph(sentences: 3),
    website: "https://en.wikipedia.org/wiki/Company"
  )
end

puts "Creating Testimonials..."
testimonial_amount = product_amount * 3
testimonial_amount.times do
  Testimonial.create(
    name: "",
    content: "",
    website: "",
    image: "",
    product_line_id: rand(1..product_amount)
  )
end
