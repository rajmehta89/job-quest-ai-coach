
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Code, MessageCircle, Trophy, Target, TrendingUp, Users, Zap } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: BookOpen,
      title: 'Resume Analyzer',
      description: 'Get AI-powered feedback on your resume with detailed suggestions for improvement.',
      buttonText: 'Analyze Resume',
      onClick: () => navigate('/resume-analyzer'),
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'Mock Interview',
      description: 'Practice with realistic AI-powered mock interviews tailored to your role.',
      buttonText: 'Start Interview',
      onClick: () => navigate('/mock-interview'),
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      icon: Code,
      title: 'Coding Practice',
      description: 'Solve coding problems and get instant AI feedback on your solutions.',
      buttonText: 'Practice Coding',
      onClick: () => navigate('/coding-practice'),
      gradient: 'from-purple-600 to-violet-600'
    },
    {
      icon: Trophy,
      title: 'Daily Quiz',
      description: 'Test your knowledge with daily quizzes and track your progress over time.',
      buttonText: 'Take Quiz',
      onClick: () => navigate('/daily-quiz'),
      gradient: 'from-orange-600 to-red-600'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Job Seekers Helped'
    },
    {
      icon: TrendingUp,
      value: '85%',
      label: 'Success Rate'
    },
    {
      icon: Zap,
      value: '24/7',
      label: 'AI Availability'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Job Prep Coach
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button 
                size="sm" 
                onClick={() => navigate('/dashboard')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Ace Your Next Job Interview with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Coaching
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized resume feedback, practice mock interviews, solve coding problems, 
            and take daily quizzes to land your dream job with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/dashboard')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-3"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform provides comprehensive job preparation tools 
              to help you stand out from the competition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of successful job seekers who used our AI coach to ace their interviews.
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate('/dashboard')}
            className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-3"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                AI Job Prep Coach
              </span>
            </div>
            
            <div className="text-sm text-gray-400">
              © 2024 AI Job Prep Coach. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
