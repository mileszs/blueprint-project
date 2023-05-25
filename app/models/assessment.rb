require_relative Rails.root.join('lib', 'assessment_data')
class Assessment
  def initialize(answers)
    @answers = answers
  end

  def scores
    scores = {}

    @answers.each do |answer|
      prev_score = scores.fetch(domain(answer[:question_id]), 0)
      scores[domain(answer[:question_id])] = prev_score + answer[:value].to_i
    end

    scores
  end

  def level_2_recommendations
    recommendations = []

    ::LEVEL_2_REQUIREMENTS.each do |requirement|
      if scores[requirement[:domain].to_s] >= requirement[:threshold]
        recommendations << requirement[:assessment]
      end
    end
    recommendations
  end

  private

  def domain(question_id)
    ::QUESTION_DOMAINS.detect { |question_domain| question_domain[:question_id] == question_id }[:domain]
  end
end
