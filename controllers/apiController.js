function index(req, res) {
  res.json({
    message: "HeeAnswers: When google dosen't have the answer, HeeAnswers will!",
    documentation_url: "https://github.com/samadrid92/project_1_heeanswers",
    base_url: "https://mighty-garden-14500.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/scriptures", description: "Sends back all scriptures in database"},
      {method: "GET", path: "/api/scriptures/:emotion", description: "Fetches all scriptures associated with particular emotion"},
      {method: "POST", path: "/api/scriptures", description: "Creates and saves a new scripture in the database"},
      {method: "DELETE", path: "/api/scriptures/:emotion_id", description: "Allows you to delete a particular scripture by using its ID"},
      {method: "PUT", path: "/api/scriptures/:emotion", description: "Allows you to edit a particular scripture based in its ID"}
    ]
  });
}

module.exports.index = index;
