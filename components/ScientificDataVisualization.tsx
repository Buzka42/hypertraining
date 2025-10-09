import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface RIRDataPoint {
  rir: number;
  hypertrophyEffectiveness: number;
  beginnerMissedGains: number;
}

const ScientificDataVisualization: React.FC = () => {
  const { language } = useLanguage();
  const [trainingStage, setTrainingStage] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  // Scientific data based on RIR research
  const getRIRData = (): RIRDataPoint[] => {
    // Based on research findings:
    // - Optimal hypertrophy occurs at RIR 1-4
    // - Training at RIR ≥5 leads to significant missed gains for novices
    // - Training at RIR 0 (failure) provides slight edge but less sustainable
    
    const data: RIRDataPoint[] = [];
    
    for (let rir = 0; rir <= 10; rir++) {
      let hypertrophyEffectiveness = 0;
      let beginnerMissedGains = 0;
      
      // Hypertrophy effectiveness based on RIR
      if (rir === 0) {
        // Training to failure - slightly higher but less sustainable
        hypertrophyEffectiveness = 100;
      } else if (rir >= 1 && rir <= 4) {
        // Optimal range for hypertrophy
        hypertrophyEffectiveness = 95;
      } else if (rir >= 5 && rir <= 6) {
        // Moderate effectiveness but significant drop
        hypertrophyEffectiveness = 70;
      } else {
        // Poor effectiveness
        hypertrophyEffectiveness = 40;
      }
      
      // Calculate missed gains for beginners
      if (trainingStage === 'beginner') {
        if (rir >= 5) {
          // Significant missed gains when RIR is ≥5
          beginnerMissedGains = 30 + (rir - 5) * 5; // Up to 80% missed gains at RIR 10
        } else {
          beginnerMissedGains = 0;
        }
      } else if (trainingStage === 'intermediate') {
        if (rir >= 6) {
          beginnerMissedGains = 20 + (rir - 6) * 3;
        } else {
          beginnerMissedGains = 0;
        }
      } else {
        if (rir >= 7) {
          beginnerMissedGains = 10 + (rir - 7) * 2;
        } else {
          beginnerMissedGains = 0;
        }
      }
      
      data.push({
        rir,
        hypertrophyEffectiveness,
        beginnerMissedGains
      });
    }
    
    return data;
  };

  const currentData = getRIRData();
  
  // Get max values for scaling
  const maxMissedGains = Math.max(...currentData.map(d => d.beginnerMissedGains));
  const maxEffectiveness = Math.max(...currentData.map(d => d.hypertrophyEffectiveness));

  // Get translations
  const getTrainingStageLabel = (stage: 'beginner' | 'intermediate' | 'advanced') => {
    switch (stage) {
      case 'beginner': return language === 'pl' ? 'Początkujący' : 'Beginner';
      case 'intermediate': return language === 'pl' ? 'Średniozaawansowany' : 'Intermediate';
      case 'advanced': return language === 'pl' ? 'Zaawansowany' : 'Advanced';
      default: return '';
    }
  };

  const getTrainingStageDescription = (stage: 'beginner' | 'intermediate' | 'advanced') => {
    switch (stage) {
      case 'beginner': 
        return language === 'pl' 
          ? 'Nowy w treningu, znaczące potencjalne zyski' 
          : 'New to training, significant potential gains';
      case 'intermediate': 
        return language === 'pl' 
          ? 'Nieco doświadczony, umiarkowane zyski' 
          : 'Some experience, moderate gains';
      case 'advanced': 
        return language === 'pl' 
          ? 'Doświadczony, wolniejsze ale spójne zyski' 
          : 'Experienced, slower but consistent gains';
      default: return '';
    }
  };

  return (
    <div className="card p-6 w-full">
      <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
        {language === 'pl' 
          ? 'Naukowe Podejście do Treningu: RIR' 
          : 'Scientific Approach: RIR (Reps in Reserve)'}
      </h3>
      
      <div className="mb-8">
        <div className="mb-6">
          <label className="block text-gray-300 mb-2">
            {language === 'pl' ? 'Poziom Treningowy' : 'Training Stage'}
          </label>
          <div className="flex flex-wrap gap-2">
            {(['beginner', 'intermediate', 'advanced'] as const).map((stage) => (
              <button
                key={stage}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  trainingStage === stage 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
                onClick={() => setTrainingStage(stage)}
              >
                {getTrainingStageLabel(stage)}
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-400 mt-1">
            {getTrainingStageDescription(trainingStage)}
          </div>
        </div>
        
        <div className="bg-card/50 p-5 rounded-xl border border-border mb-6">
          <h4 className="text-lg font-bold mb-3 text-foreground">
            {language === 'pl' ? 'Kluczowe Odkrycia Naukowe' : 'Key Scientific Findings'}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
              <span>
                {language === 'pl' 
                  ? 'Początkujący najczęściej "tracą" znaczące zyski mięśniowe, jeśli źle szacują RIR i trenują przy ≥5 RIR, podczas gdy optymalny zakres dla hipertrofii to ≤4 RIR.' 
                  : 'Novice lifters are most likely "missing out" on substantial muscle gains if their poor RIR estimation consistently places their sets at ≥5 RIR, when the general recommendation for hypertrophy is ≤4 RIR.'}
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
              <span>
                {language === 'pl' 
                  ? 'Trenowanie do upadu (RIR 0) może dać niewielką przewagę w hipertrofii, ale trenowanie blisko upadu (RIR 1-4) jest równie skuteczne i bardziej zrównoważone.' 
                  : 'While training to failure (RIR 0) might provide a slight edge in hypertrophy, training close to failure (RIR 1−4) is highly effective and likely more sustainable.'}
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
              <span>
                {language === 'pl' 
                  ? 'Celem początkującego nie jest trenowanie przy RIR 0, ale zlikwidowanie luki między szacowanym (np. RIR 2) a rzeczywistym RIR (np. RIR 5) - to źródło "utraconych zysków".' 
                  : 'Therefore, the goal for a novice is not to train at RIR 0 but to bridge the gap between their estimated (e.g., RIR 2) and actual RIR (e.g., RIR 5), which is the source of the "missed gains."'}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-8 overflow-x-auto w-full">
        <h4 className="text-xl font-bold mb-4 text-foreground text-center">
          {language === 'pl' ? 'Skuteczność Hipertrofii vs Utracone Zyski' : 'Hypertrophy Effectiveness vs Missed Gains'}
        </h4>
        <div className="min-w-full md:min-w-0">
          <div className="h-64 flex items-end space-x-2 justify-center px-4" style={{ minWidth: '100%', maxWidth: '100%' }}>
            {currentData.map((point, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0" style={{ width: '8%' }}>
                <div className="flex flex-col items-center space-y-2 mb-2">
                  {/* Hypertrophy Effectiveness Bar */}
                  <div 
                    className="w-8 bg-accent rounded-t transition-all duration-500 relative"
                    style={{ height: `${(point.hypertrophyEffectiveness / maxEffectiveness) * 100}px` }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium whitespace-nowrap">
                      {point.hypertrophyEffectiveness}%
                    </div>
                  </div>
                  
                  {/* Missed Gains Bar (inverted - higher is worse) */}
                  <div 
                    className="w-8 bg-destructive rounded-t transition-all duration-500 relative"
                    style={{ height: `${(point.beginnerMissedGains / maxMissedGains) * 100}px` }}
                  >
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-foreground font-medium whitespace-nowrap">
                      {point.beginnerMissedGains}%
                    </div>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground/70 mt-2">RIR {point.rir}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-accent rounded mr-2"></div>
            <span className="text-sm text-muted-foreground">
              {language === 'pl' ? 'Skuteczność Hipertrofii' : 'Hypertrophy Effectiveness'}
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-destructive rounded mr-2"></div>
            <span className="text-sm text-muted-foreground">
              {language === 'pl' ? 'Utracone Zyski (%)' : 'Missed Gains (%)'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <h4 className="font-medium text-foreground mb-3">
          {language === 'pl' ? 'Dlaczego RIR jest Kluczowe?' : 'Why RIR Matters'}
        </h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
            <span>
              {language === 'pl' 
                ? 'Dokładne szacowanie RIR pozwala zoptymalizować stymulację mięśni i maksymalizować zyski hipertroficzne' 
                : 'Accurate RIR estimation allows for optimal muscle stimulation and maximizes hypertrophy gains'}
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
            <span>
              {language === 'pl' 
                ? 'Trener personalny pomaga w prawidłowym szacowaniu RIR, eliminując "utracone zyski"' 
                : 'A personal trainer helps with accurate RIR estimation, eliminating "missed gains"'}
            </span>
          </li>
          <li className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
            <span>
              {language === 'pl' 
                ? 'Własne szacowanie RIR przez początkujących często prowadzi do trenowania zbyt lekko, co ogranicza postępy' 
                : 'Self-estimated RIR by beginners often leads to training too lightly, limiting progress'}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScientificDataVisualization;