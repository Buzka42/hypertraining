import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const RIRGraphVisualization: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<'novice' | 'intermediate' | 'advanced'>('novice');
  
  // Data for the graph showing difference with and without trainer
  const graphData = {
    novice: {
      level: language === 'pl' ? 'Początkujący' : 'Novice',
      withTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 80 },
        { week: 8, gain: 150 },
        { week: 12, gain: 200 }
      ],
      withoutTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 30 },
        { week: 8, gain: 60 },
        { week: 12, gain: 80 }
      ]
    },
    intermediate: {
      level: language === 'pl' ? 'Średniozaawansowany' : 'Intermediate',
      withTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 40 },
        { week: 8, gain: 70 },
        { week: 12, gain: 90 }
      ],
      withoutTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 20 },
        { week: 8, gain: 30 },
        { week: 12, gain: 40 }
      ]
    },
    advanced: {
      level: language === 'pl' ? 'Zaawansowany' : 'Advanced',
      withTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 20 },
        { week: 8, gain: 30 },
        { week: 12, gain: 40 }
      ],
      withoutTrainer: [
        { week: 0, gain: 0 },
        { week: 4, gain: 10 },
        { week: 8, gain: 15 },
        { week: 12, gain: 20 }
      ]
    }
  };

  const currentData = graphData[selectedLevel];

  // Find max value for scaling
  const allValues = [
    ...currentData.withTrainer.map(d => d.gain),
    ...currentData.withoutTrainer.map(d => d.gain)
  ];
  const maxValue = Math.max(...allValues, 1); // Ensure at least 1 to avoid division by zero

  // Calculate percentage improvement
  const lastWithTrainer = currentData.withTrainer[currentData.withTrainer.length - 1].gain;
  const lastWithoutTrainer = currentData.withoutTrainer[currentData.withoutTrainer.length - 1].gain;
  const improvementPercentage = lastWithoutTrainer > 0 
    ? (((lastWithTrainer - lastWithoutTrainer) / lastWithoutTrainer) * 100).toFixed(0)
    : '0';

  return (
    <div className="my-10 p-6 bg-background/50 rounded-xl border border-border">
      <h3 className="text-xl font-bold mb-4 text-center">
        {language === 'pl' 
          ? 'Wpływ Trenera Personalnego na Zyski Mięśniowe' 
          : 'Impact of a Personal Trainer on Muscle Gains'}
      </h3>
      <p className="text-center text-muted-foreground mb-6">
        {language === 'pl' 
          ? 'Porównanie tempa zysków mięśniowych z trenerem i bez trenera' 
          : 'Comparison of muscle gain progression with and without a trainer'}
      </p>
      
      {/* Level Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-border p-1 bg-background/50">
          {(['novice', 'intermediate', 'advanced'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedLevel === level
                  ? 'bg-primary text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {language === 'pl' 
                ? (level === 'novice' ? 'Początkujący' : level === 'intermediate' ? 'Średniozaawansowany' : 'Zaawansowany')
                : (level === 'novice' ? 'Novice' : level === 'intermediate' ? 'Intermediate' : 'Advanced')}
            </button>
          ))}
        </div>
      </div>
      
      {/* Graph Visualization */}
      <div className="flex flex-col items-center">
        <div className="w-full bg-background/30 rounded-lg border border-border p-6">
          {/* Chart Header */}
          <div className="flex justify-between mb-2">
            <div className="text-xs text-muted-foreground w-12"></div>
            <div className="text-xs text-muted-foreground flex-1 text-center">
              {language === 'pl' ? 'Bez trenera' : 'Without Trainer'}
            </div>
            <div className="text-xs text-muted-foreground flex-1 text-center">
              {language === 'pl' ? 'Z trenerem' : 'With Trainer'}
            </div>
          </div>
          
          {/* Chart Data - Using a simple table-like approach */}
          <div className="space-y-4">
            {currentData.withTrainer.map((_, i) => (
              <div key={i} className="flex items-center space-x-4">
                {/* Week Label */}
                <div className="w-12 text-sm text-muted-foreground">
                  {language === 'pl' ? `Tydz. ${currentData.withTrainer[i].week}` : `Wk ${currentData.withTrainer[i].week}`}
                </div>
                
                {/* Without Trainer Bar */}
                <div className="flex-1 flex items-center">
                  <div 
                    className="h-6 bg-red-400 rounded-l transition-all duration-700 ease-out"
                    style={{ 
                      width: `${(currentData.withoutTrainer[i].gain / maxValue) * 100}%`,
                      maxWidth: '100%'
                    }}
                  ></div>
                  <span className="ml-2 text-xs text-muted-foreground min-w-[30px]">
                    {currentData.withoutTrainer[i].gain}
                  </span>
                </div>
                
                {/* With Trainer Bar */}
                <div className="flex-1 flex items-center">
                  <div 
                    className="h-6 bg-blue-400 rounded-l transition-all duration-700 ease-out"
                    style={{ 
                      width: `${(currentData.withTrainer[i].gain / maxValue) * 100}%`,
                      maxWidth: '100%'
                    }}
                  ></div>
                  <span className="ml-2 text-xs text-muted-foreground min-w-[30px]">
                    {currentData.withTrainer[i].gain}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chart Footer */}
          <div className="flex justify-between mt-6 pt-4 border-t border-border">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
              <span className="text-sm">
                {language === 'pl' ? 'Bez trenera' : 'Without Trainer'}
              </span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
              <span className="text-sm">
                {language === 'pl' ? 'Z trenerem' : 'With Trainer'}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20 text-center">
        <p className="font-bold">
          {language === 'pl' 
            ? `Zysk mięśniowy z trenerem jest o ~${improvementPercentage}% wyższy niż bez trenera` 
            : `Muscle gain with a trainer is ~${improvementPercentage}% higher than without a trainer`}
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          {language === 'pl' 
            ? `Poziom: ${currentData.level}` 
            : `Level: ${currentData.level}`}
        </p>
      </div>
    </div>
  );
};

export default RIRGraphVisualization;