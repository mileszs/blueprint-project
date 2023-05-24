class Api::TemplatesController < ApplicationController
  def show
    @assessment = ASSESSMENT_DATA.dig(:content, :sections)[0]
    render json: @assessment.to_json
  end
end