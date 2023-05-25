class AssessmentAPI {
  // Hardcoding here is gross, but I did not want to spend time with an esbuild config
  // to get env variables working here. So I'm cheating a bit, for now. I will make
  // improvements to this in the future.
  // static baseUrl = "http://localhost:3000/api"
  static baseUrl = "https://mileszs-blueprint-project.herokuapp.com/api"
  static postAssessment(answers) {
    const url = `${AssessmentAPI.baseUrl}/assessments`;
    const csrf = document.querySelector("meta[name='csrf-token']").getAttribute("content");
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrf
    }
    const body = JSON.stringify(answers);

    return fetch(url, { method: 'POST', body: body, headers: headers });
  }

  static getTemplate() {
    const url = `${AssessmentAPI.baseUrl}/templates/1`;
    return fetch(url);
  }
}

export default AssessmentAPI;