class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :user

  def as_json(options = {})
   super(options.merge(include: :user))
  end
end
