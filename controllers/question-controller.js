module.exports = (app) => {
    const questionService = require("../services/question-service.js")

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        const questions = questionService.findQuestionsForQuiz(quizId)
        res.json(questions)
    }
    app.get("/api/quizzes/:qid/questions",
        findQuestionsForQuiz)
}
