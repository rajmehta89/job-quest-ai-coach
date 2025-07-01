
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  gradient?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  buttonText, 
  onButtonClick,
  gradient = "from-purple-600 to-blue-600"
}: FeatureCardProps) => {
  return (
    <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      <CardHeader>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={onButtonClick}
          className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 transition-opacity`}
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
