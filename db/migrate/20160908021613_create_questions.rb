class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.string :body
      t.string :lessonLink
      t.string :githubLink
      t.integer :votes

      t.timestamps
    end
  end
end
