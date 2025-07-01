
import React from 'react';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import { BookOpen, Code, MessageCircle, Trophy, TrendingUp, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: 'Resume Analyzer',
      description: 'Upload your resume and get AI-powered feedback and improvement suggestions.',
      buttonText: 'Analyze Resume',
      onClick: () => navigate('/resume-analyzer'),
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Mock Interview',
      description: 'Practice with AI-powered mock interviews tailored to your target role.',
      buttonText: 'Start Interview',
      onClick: () => navigate('/mock-interview'),
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Coding Practice',
      description: 'Solve coding problems and get AI feedback on your solutions.',
      buttonText: 'Practice Coding',
      onClick: () => navigate('/coding-practice'),
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      icon: Trophy,
      title: 'Daily Quiz',
      description: 'Take daily quizzes to test your knowledge and track your progress.',
      buttonText: 'Take Quiz',
      onClick: () => navigate('/daily-quiz'),
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back! 👋
          </h1>
          <p className="text-gray-600">
            Continue your job preparation journey with AI-powered tools.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Practice Sessions</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Quiz Streak</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Coding Problems Solved</CardTitle>
              <Code className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">+5 this week</p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              buttonText={feature.buttonText}
              onButtonClick={feature.onClick}
              gradient={feature.gradient}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
