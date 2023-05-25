class AssessmentAPI {
  static postAssessment(answers) {
    const baseUrl = document.querySelector("meta[name='baseAPIURL']").getAttribute("content");
    const url = `${baseUrl}/api/assessments`;
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
    const baseUrl = document.querySelector("meta[name='baseAPIURL']").getAttribute("content");
    const url = `${baseUrl}/api/templates/1`;
    return fetch(url);
  }
}

export default AssessmentAPI;