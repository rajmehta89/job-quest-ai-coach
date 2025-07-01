
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File uploaded successfully",
        description: `${selectedFile.name} is ready for analysis.`,
      });
    }
  };

  const analyzeResume = async () => {
    if (!file) return;
    
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis({
        score: 85,
        strengths: [
          'Strong technical skills section',
          'Quantified achievements with metrics',
          'Relevant work experience',
          'Clean formatting and structure'
        ],
        improvements: [
          'Add more keywords related to your target role',
          'Include a professional summary',
          'Add more details about project impact',
          'Consider adding certifications section'
        ],
        keywords: {
          present: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
          missing: ['TypeScript', 'AWS', 'Docker', 'GraphQL', 'Jest']
        }
      });
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Resume Analyzer 📄
          </h1>
          <p className="text-gray-600">
            Upload your resume and get AI-powered feedback to improve your chances of landing your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="w-5 h-5" />
                <span>Upload Resume</span>
              </CardTitle>
              <CardDescription>
                Upload your resume in PDF or DOC format for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
                <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <Input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer text-sm text-gray-600"
                >
                  Click to upload or drag and drop your resume here
                </label>
                {file && (
                  <p className="mt-2 text-sm text-green-600">
                    Selected: {file.name}
                  </p>
                )}
              </div>
              
              <Button
                onClick={analyzeResume}
                disabled={!file || analyzing}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                {analyzing ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          {analysis && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Analysis Results</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-green-600">
                      {analysis.score}/100
                    </span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Strengths */}
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {analysis.strengths.map((strength: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div>
                  <h3 className="font-semibold text-orange-700 mb-3 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Suggestions for Improvement
                  </h3>
                  <ul className="space-y-2">
                    {analysis.improvements.map((improvement: string, index: number) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Keywords */}
                <div>
                  <h3 className="font-semibold text-blue-700 mb-3">
                    Keyword Analysis
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-700 mb-2">Present Keywords:</p>
                      <div className="flex flex-wrap gap-2">
                        {analysis.keywords.present.map((keyword: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-700 mb-2">Missing Keywords:</p>
                      <div className="flex flex-wrap gap-2">
                        {analysis.keywords.missing.map((keyword: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-red-100 text-red-700 rounded-md text-xs">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
