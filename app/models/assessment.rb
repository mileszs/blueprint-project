require_relative Rails.root.join('lib', 'assessment_data')
class Assessment
  def initialize(params)
    @params = params
    @answers = [
      {
        "value": 1,
        "question_id": "question_a"
      },
      {
        "value": 0,
        "question_id": "question_b"
      },
      {
        "value": 2,
        "question_id": "question_c"
      },
      {
        "value": 3,
        "question_id": "question_d"
      },
      {
        "value": 1,
        "question_id": "question_e"
      },
      {
        "value": 0,
        "question_id": "question_f"
      },
      {
        "value": 1,
        "question_id": "question_g"
      },
      {
        "value": 0,
        "question_id": "question_h"
      }
    ] 
  end

  def scores
    scores = {}

    @answers.each do |answer|
      prev_score = scores.fetch(domain(answer[:question_id]), 0)
      puts "domain #{domain(answer[:question_id])}"
      puts "prev_score: #{prev_score}"
      puts "value: #{answer[:value].to_i}"
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
