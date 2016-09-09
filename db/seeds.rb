# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
question1 = Question.create(body: 'How do I create an html link?', lessonLink: 'www.learn.co', githubLink: 'github.com', votes: 2)
question2 = Question.create(body: 'What does a for loop work in ruby?', lessonLink: 'https://learn.co/tracks/full-stack-web-development/procedural-ruby/looping/looping',
                            votes: 3)

Answer.create(question_id: question1.id, body: "Let's make up an answer", votes: 0 )
Answer.create(question_id: question1.id, body: "You create it like so: <a href='yourlink'>Link Text</a> Here's a reference site: http://www.w3schools.com/html/html_links.asp",
                                                votes: 1 )
Answer.create(question_id: question1.id, body: "Fake answer", votes: 0 )
Answer.create(question_id: question2.id, body: "Fake answer", votes: 0 )
Answer.create(question_id: question2.id, body: "Let's make up an answer", votes: 0 )
Answer.create(question_id: question2.id, body: "Loop let's you do thinks multiple times. Here's a good tutorial
                                                for you: http://www.tutorialspoint.com/ruby/ruby_loops.htm", votes: 1)
