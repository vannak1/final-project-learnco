class Question < ApplicationRecord
  has_many :answers
  belongs_to :user

  def as_json(options = {})
    super(options.merge(include: [:user, answers: {include: :user}]))
  end
end
