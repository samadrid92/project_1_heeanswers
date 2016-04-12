function index(req, res) {
  res.json({
    message: "HeeAnswers: When google dosen't have the answer, HeeAnswers will!",
    documentation_url: "https://github.com/samadrid92/project_1_heeanswers",
    base_url: "https://mighty-garden-14500.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/scriptures", description: ""},
      {method: "GET", path: "/api/scriptures/:emotion", description: ""},
      {method: "POST", path: "/api/scriptures", description: ""},
      {method: "DELETE", path: "/api/scriptures/:emotion_id", description: ""},
      {method: "PUT", path: "/api/scriptures/:emotion", description: ""}
    ]
  });
}

module.exports.index = index;
