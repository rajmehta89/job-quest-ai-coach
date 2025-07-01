
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Clock, CheckCircle, XCircle } from 'lucide-react';

const DailyQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the time complexity of accessing an element in an array by index?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correct: 0,
      explanation: "Array access by index is O(1) because we can directly calculate the memory address."
    },
    {
      question: "Which of the following is NOT a valid JavaScript data type?",
      options: ["undefined", "boolean", "float", "symbol"],
      correct: 2,
      explanation: "JavaScript doesn't have a separate 'float' type. Numbers are stored as double-precision floating-point."
    },
    {
      question: "What does REST stand for in web development?",
      options: [
        "Really Easy Server Technology",
        "Representational State Transfer", 
        "Remote Execution Service Tool",
        "Rapid Enterprise Software Testing"
      ],
      correct: 1,
      explanation: "REST stands for Representational State Transfer, an architectural style for web services."
    },
    {
      question: "Which SQL command is used to retrieve data from a database?",
      options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
      correct: 2,
      explanation: "SELECT is the SQL command used to query and retrieve data from database tables."
    },
    {
      question: "What is the purpose of the 'key' prop in React lists?",
      options: [
        "To encrypt list data",
        "To help React identify which items have changed",
        "To sort the list items",
        "To validate list data"
      ],
      correct: 1,
      explanation: "The 'key' prop helps React identify which items have changed, been added, or removed for efficient re-rendering."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        <Navigation />
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="text-center">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Quiz Complete! 🎉</CardTitle>
              <CardDescription>Here's how you performed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {score} / {questions.length}
                </div>
                <div className="text-gray-600">
                  {score === questions.length ? 'Perfect score!' : 
                   score >= questions.length * 0.8 ? 'Great job!' :
                   score >= questions.length * 0.6 ? 'Good effort!' :
                   'Keep practicing!'}
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Performance Breakdown:</h3>
                <div className="text-sm text-gray-600">
                  <p>Correct answers: {score}</p>
                  <p>Incorrect answers: {questions.length - score}</p>
                  <p>Accuracy: {Math.round((score / questions.length) * 100)}%</p>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  onClick={resetQuiz}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  Take Quiz Again
                </Button>
                <Button variant="outline" className="w-full">
                  View Detailed Results
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Daily Quiz 🏆
          </h1>
          <p className="text-gray-600">
            Test your knowledge with our daily quiz and track your progress.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300">
                Question {currentQuestion + 1} of {questions.length}
              </Badge>
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">No time limit</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentQ.question}
                </h2>
                
                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                        showResult
                          ? index === currentQ.correct
                            ? 'bg-green-100 border-green-500 text-green-800'
                            : index === selectedAnswer && index !== currentQ.correct
                            ? 'bg-red-100 border-red-500 text-red-800'
                            : 'bg-gray-50 border-gray-200 text-gray-500'
                          : selectedAnswer === index
                          ? 'bg-orange-100 border-orange-500 text-orange-800'
                          : 'bg-gray-50 border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {showResult && index === currentQ.correct && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {showResult && index === selectedAnswer && index !== currentQ.correct && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {showResult && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Explanation:</h3>
                  <p className="text-blue-800 text-sm">{currentQ.explanation}</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Score: {score} / {questions.length}
                </div>
                
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswer === null || showResult}
                  className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DailyQuiz;
