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
    <div className="my-10 bg-white/5 rounded-3xl border border-white/10 max-w-full backdrop-blur-sm overflow-hidden">
      <div className="p-4 md:p-6 pb-0 md:pb-0">
        <h3 className="text-xl font-bold mb-3 text-center text-foreground">
          {language === 'pl'
            ? 'Wpływ Trenera Personalnego na Zyski Mięśniowe'
            : 'Impact of a Personal Trainer on Muscle Gains'}
        </h3>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          {language === 'pl'
            ? 'Porównanie tempa zysków mięśniowych z trenerem i bez trenera'
            : 'Comparison of muscle gain progression with and without a trainer'}
        </p>
      </div>

      {/* Level Selector */}
      <div className="w-full border-y border-white/10 bg-black/20 mb-8 md:border-none md:bg-transparent md:px-6 md:flex md:justify-center">
        <div className="flex w-full md:w-auto md:bg-black/20 md:rounded-xl md:border md:border-white/10 md:p-1">
          {(['novice', 'intermediate', 'advanced'] as const).map((level) => (
            <button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`flex-1 min-w-0 px-1 py-3 md:px-4 md:py-2 text-[10px] md:text-sm font-medium transition-all duration-300 whitespace-nowrap truncate rounded-none md:rounded-lg ${selectedLevel === level
                ? 'bg-primary text-white shadow-none md:shadow-lg'
                : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
            >
              {language === 'pl'
                ? (level === 'novice' ? 'Początkujący' : level === 'intermediate' ? 'Średniozaaw.' : 'Zaawansowany')
                : (level === 'novice' ? 'Novice' : level === 'intermediate' ? 'Intermediate' : 'Advanced')}
            </button>
          ))}
        </div>
      </div>

      {/* Graph Visualization */}
      <div className="p-4 md:p-6 pt-0">
        <div className="w-full">
          {/* Chart Header */}
          <div className="flex justify-between mb-4">
            <div className="text-xs text-muted-foreground w-12"></div>
            <div className="text-xs font-medium text-muted-foreground flex-1 text-center uppercase tracking-wider">
              {language === 'pl' ? 'Bez trenera' : 'Without Trainer'}
            </div>
            <div className="text-xs font-medium text-muted-foreground flex-1 text-center uppercase tracking-wider">
              {language === 'pl' ? 'Z trenerem' : 'With Trainer'}
            </div>
          </div>

          {/* Chart Data - Using a simple table-like approach */}
          <div className="space-y-3">
            {currentData.withTrainer.slice(1).map((_, i) => (
              <div key={i} className="flex items-center space-x-2 group">
                {/* Week Label */}
                <div className="w-12 text-xs text-muted-foreground font-mono">
                  {language === 'pl' ? `Tydz.${currentData.withTrainer[i + 1].week}` : `Wk ${currentData.withTrainer[i + 1].week}`}
                </div>

                {/* Without Trainer Bar */}
                <div className="flex-1 flex items-center min-w-0 justify-end">
                  <div
                    className="h-8 bg-white/10 rounded-l-lg transition-all duration-1000 ease-out group-hover:bg-white/20 relative overflow-hidden"
                    style={{
                      width: `${(currentData.withoutTrainer[i + 1].gain / maxValue) * 100}%`,
                      maxWidth: '100%'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                  </div>
                </div>

                {/* With Trainer Bar */}
                <div className="flex-1 flex items-center min-w-0">
                  <div
                    className="h-8 bg-primary rounded-r-lg transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(255,100,50,0.3)] group-hover:shadow-[0_0_30px_rgba(255,100,50,0.5)] relative overflow-hidden"
                    style={{
                      width: `${(currentData.withTrainer[i + 1].gain / maxValue) * 100}%`,
                      maxWidth: '100%'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Footer */}
          <div className="flex justify-center mt-6 gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <span className="text-xs text-muted-foreground">
                {language === 'pl' ? 'Bez trenera' : 'Without Trainer'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(255,100,50,0.5)]"></div>
              <span className="text-xs text-muted-foreground">
                {language === 'pl' ? 'Z trenerem' : 'With Trainer'}
              </span>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl border border-primary/20 text-center backdrop-blur-md">
          <p className="font-bold text-lg text-primary-foreground">
            {language === 'pl'
              ? `Zysk mięśniowy z trenerem jest o ~${improvementPercentage}% wyższy niż bez trenera`
              : `Muscle gain with a trainer is ~${improvementPercentage}% higher than without a trainer`}
          </p>
          <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest opacity-70">
            {language === 'pl'
              ? `Poziom: ${currentData.level}`
              : `Level: ${currentData.level}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RIRGraphVisualization;