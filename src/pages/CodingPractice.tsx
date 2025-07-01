
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Code, Play, CheckCircle } from 'lucide-react';

const CodingPractice = () => {
  const [selectedProblem, setSelectedProblem] = useState(0);
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState<any>(null);
  const [running, setRunning] = useState(false);

  const problems = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      example: 'Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]',
      solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
    },
    {
      id: 2,
      title: 'Valid Parentheses',
      difficulty: 'Easy',
      description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
      example: 'Input: s = "()"\nOutput: true',
      solution: `function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in pairs) {
            if (stack.pop() !== pairs[char]) return false;
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}`
    },
    {
      id: 3,
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Medium',
      description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
      example: 'Input: root = [1,null,2,3]\nOutput: [1,3,2]',
      solution: `function inorderTraversal(root) {
    const result = [];
    
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    
    traverse(root);
    return result;
}`
    }
  ];

  const runCode = async () => {
    setRunning(true);
    
    // Simulate code execution and AI feedback
    setTimeout(() => {
      setFeedback({
        passed: true,
        score: 85,
        timeComplexity: 'O(n)',
        spaceComplexity: 'O(n)',
        suggestions: [
          'Great job! Your solution is correct and efficient.',
          'Consider adding edge case handling for empty arrays.',
          'The variable names are clear and descriptive.',
          'You could add comments to explain the algorithm.'
        ]
      });
      setRunning(false);
    }, 2000);
  };

  const currentProblem = problems[selectedProblem];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Coding Practice 💻
          </h1>
          <p className="text-gray-600">
            Solve coding problems and get AI-powered feedback on your solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Problem List */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Problems</CardTitle>
              <CardDescription>Select a problem to solve</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {problems.map((problem, index) => (
                  <div
                    key={problem.id}
                    onClick={() => setSelectedProblem(index)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedProblem === index
                        ? 'bg-purple-100 border-2 border-purple-500'
                        : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-sm">{problem.title}</h3>
                      <Badge
                        variant={problem.difficulty === 'Easy' ? 'default' : 'secondary'}
                        className={
                          problem.difficulty === 'Easy'
                            ? 'bg-green-100 text-green-800'
                            : problem.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }
                      >
                        {problem.difficulty}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Problem Details & Code Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Problem Description */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Code className="w-5 h-5" />
                    <span>{currentProblem.title}</span>
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className={
                      currentProblem.difficulty === 'Easy'
                        ? 'border-green-500 text-green-700'
                        : currentProblem.difficulty === 'Medium'
                        ? 'border-yellow-500 text-yellow-700'
                        : 'border-red-500 text-red-700'
                    }
                  >
                    {currentProblem.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{currentProblem.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Example:</h4>
                  <pre className="text-sm text-gray-600 whitespace-pre-wrap">
                    {currentProblem.example}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Code Editor */}
            <Card>
              <CardHeader>
                <CardTitle>Your Solution</CardTitle>
                <CardDescription>Write your code here</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="// Write your solution here..."
                  className="font-mono text-sm min-h-[200px] resize-none"
                />
                <div className="flex justify-between items-center mt-4">
                  <Button
                    onClick={runCode}
                    disabled={!code.trim() || running}
                    className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {running ? 'Running...' : 'Run & Get Feedback'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feedback */}
            {feedback && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>AI Feedback</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{feedback.score}/100</div>
                        <div className="text-sm text-gray-600">Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{feedback.timeComplexity}</div>
                        <div className="text-sm text-gray-600">Time Complexity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold">{feedback.spaceComplexity}</div>
                        <div className="text-sm text-gray-600">Space Complexity</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Suggestions:</h4>
                      <ul className="space-y-2">
                        {feedback.suggestions.map((suggestion: string, index: number) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPractice;
