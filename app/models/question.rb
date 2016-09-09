class Question < ApplicationRecord
  has_many :answers

  def as_json(options = {})
    super(options.merge(include: :answers))
  end
end
