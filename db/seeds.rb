# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Question.create(body: 'post2', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 2)
Question.create(body: 'post3', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 3)
Question.create(body: 'post4', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 4)
Answer.create(question_id: 1, body: "Let's make up an answer", votes: 0 )
