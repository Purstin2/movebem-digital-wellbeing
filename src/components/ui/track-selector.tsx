
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CheckCircle2, Zap } from "lucide-react";
import { Track } from '@/types/onboarding';

interface TrackSelectorProps {
  tracks: Track[];
  selectedTrack?: string;
  onSelect: (trackId: string) => void;
}

const TrackSelector = ({ tracks, selectedTrack, onSelect }: TrackSelectorProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  const getTrackIcon = (trackId: string) => {
    switch(trackId) {
      case 'therapeutic':
        return <Heart className="text-red-500" />;
      case 'adaptive':
        return <CheckCircle2 className="text-blue-500" />;
      case 'wellness':
        return <Zap className="text-green-500" />;
      default:
        return <CheckCircle2 className="text-gray-500" />;
    }
  };
  
  const handleExpand = (trackId: string) => {
    setExpanded(prev => prev === trackId ? null : trackId);
  };
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-quicksand font-semibold text-gray-800">
        Trilhas Personalizadas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tracks.map(track => (
          <Card 
            key={track.id}
            className={`overflow-hidden transition-all hover:shadow-md ${
              selectedTrack === track.id ? 'border-2 border-movebem-purple' : ''
            }`}
          >
            <CardHeader className={`pb-3 border-b ${track.color.replace('bg-', 'bg-opacity-10 bg-')} flex flex-row items-center gap-2`}>
              <div className={`p-2 rounded-full ${track.color} bg-opacity-20`}>
                {getTrackIcon(track.id)}
              </div>
              <CardTitle className="text-lg">{track.name}</CardTitle>
            </CardHeader>
            
            <CardContent className="p-4">
              <p className="text-gray-600 text-sm mb-3">{track.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Foco em: </span>
                  {track.focusAreas.join(', ')}
                </div>
                
                <div className="text-sm">
                  <span className="font-medium">Sessões: </span>
                  {track.sessionDuration} min • {track.weeklyGoal}x semana
                </div>
                
                {expanded === track.id && (
                  <div className="pt-3 space-y-3 animate-fade-in">
                    <div className="text-sm">
                      <span className="font-medium block mb-1">Nutrição: </span>
                      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                        {track.nutritionFocus.map((focus, i) => (
                          <li key={i}>{focus}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium block mb-1">Mindfulness: </span>
                      <ul className="list-disc pl-5 text-xs text-gray-600 space-y-1">
                        {track.mindfulnessComponent.map((focus, i) => (
                          <li key={i}>{focus}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleExpand(track.id)}
                    className="text-xs"
                  >
                    {expanded === track.id ? 'Menos detalhes' : 'Mais detalhes'}
                  </Button>
                  
                  <Button
                    size="sm"
                    className={`text-xs ${selectedTrack === track.id ? 'bg-movebem-purple hover:bg-movebem-purple-dark' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => onSelect(track.id)}
                  >
                    {selectedTrack === track.id ? 'Selecionada' : 'Selecionar'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrackSelector;
