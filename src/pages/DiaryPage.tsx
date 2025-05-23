import { useState, useEffect } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  CalendarIcon, PlusCircle, Save, Check, ChevronLeft, ChevronRight, 
  LineChart, BookOpen, Calendar as CalendarIcon2 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { JourneyTracker } from "@/components/JourneyTracker";

interface DiaryEntry {
  id: string;
  date: string;
  painLevel: number;
  mood: 'great' | 'good' | 'neutral' | 'bad' | 'terrible';
  notes: string;
  activities: string[];
  symptoms: string[];
}

const DiaryPage = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [painLevel, setPainLevel] = useState(5);
  const [mood, setMood] = useState<'great' | 'good' | 'neutral' | 'bad' | 'terrible'>('neutral');
  const [notes, setNotes] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [newActivity, setNewActivity] = useState("");
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [newSymptom, setNewSymptom] = useState("");
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [currentView, setCurrentView] = useState<'form' | 'calendar' | 'stats'>('form');
  const [isEditing, setIsEditing] = useState(false);
  const [currentEntryId, setCurrentEntryId] = useState<string | null>(null);
  const [hasEntryForToday, setHasEntryForToday] = useState(false);

  const { toast } = useToast();

  // Carregar entradas salvas
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem('diary-entries');
      if (savedEntries) {
        const parsedEntries = JSON.parse(savedEntries);
        setEntries(parsedEntries);

        // Verificar se já existe uma entrada para hoje
        const today = format(new Date(), 'yyyy-MM-dd');
        const todayEntry = parsedEntries.find((entry: DiaryEntry) => entry.date === today);

        if (todayEntry) {
          setHasEntryForToday(true);
          // Pré-carregar dados da entrada de hoje
          setPainLevel(todayEntry.painLevel);
          setMood(todayEntry.mood);
          setNotes(todayEntry.notes || '');
          setActivities(todayEntry.activities || []);
          setSymptoms(todayEntry.symptoms || []);
          setCurrentEntryId(todayEntry.id);
          setIsEditing(true);
        }
      }
    } catch (error) {
      console.error("Erro ao carregar entradas do diário:", error);
    }
  }, []);

  // Função para lidar com a adição de atividades
  const handleAddActivity = () => {
    if (newActivity.trim() === "") return;
    
    setActivities(prev => [...prev, newActivity.trim()]);
    setNewActivity("");
  };

  // Função para remover uma atividade
  const handleRemoveActivity = (index: number) => {
    setActivities(prev => prev.filter((_, i) => i !== index));
  };

  // Função para lidar com adição de sintomas
  const handleAddSymptom = () => {
    if (newSymptom.trim() === "") return;
    
    setSymptoms(prev => [...prev, newSymptom.trim()]);
    setNewSymptom("");
  };

  // Função para remover um sintoma
  const handleRemoveSymptom = (index: number) => {
    setSymptoms(prev => prev.filter((_, i) => i !== index));
  };

  // Salvar entrada
  const saveEntry = () => {
    const formattedDate = format(date, 'yyyy-MM-dd');
    const entryData: DiaryEntry = {
      id: currentEntryId || `entry-${Date.now()}`,
      date: formattedDate,
      painLevel,
      mood,
      notes,
      activities,
      symptoms
    };

    let updatedEntries: DiaryEntry[];
    
    if (isEditing) {
      // Atualizar entrada existente
      updatedEntries = entries.map(entry => 
        entry.id === currentEntryId ? entryData : entry
      );
      toast({
        title: "Entrada atualizada",
        description: "Seu registro diário foi atualizado com sucesso."
      });
    } else {
      // Adicionar nova entrada
      updatedEntries = [...entries, entryData];
      toast({
        title: "Entrada salva",
        description: "Seu registro foi adicionado ao diário."
      });
    }
    
    // Atualizar localStorage
    localStorage.setItem('diary-entries', JSON.stringify(updatedEntries));
    
    // Atualizar estado
    setEntries(updatedEntries);
    setHasEntryForToday(true);
    setIsEditing(true);
    setCurrentEntryId(entryData.id);

    // Atualizar o perfil do usuário com a nova informação de dor
    try {
      const userProfile = JSON.parse(sessionStorage.getItem('userProfile') || '{}');
      userProfile.lastPainLevel = painLevel;
      sessionStorage.setItem('userProfile', JSON.stringify(userProfile));
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    }
  };

  // Criar nova entrada
  const startNewEntry = () => {
    setDate(new Date());
    setPainLevel(5);
    setMood('neutral');
    setNotes("");
    setActivities([]);
    setSymptoms([]);
    setIsEditing(false);
    setCurrentEntryId(null);
  };

  // Carregar uma entrada específica
  const loadEntry = (entryId: string) => {
    const entry = entries.find(e => e.id === entryId);
    if (!entry) return;

    setDate(new Date(entry.date));
    setPainLevel(entry.painLevel);
    setMood(entry.mood);
    setNotes(entry.notes);
    setActivities(entry.activities || []);
    setSymptoms(entry.symptoms || []);
    setIsEditing(true);
    setCurrentEntryId(entry.id);
    setCurrentView('form');
  };

  // Renderização condicional de acordo com a visualização atual
  const renderView = () => {
    switch (currentView) {
      case 'calendar':
        return (
          <TabsContent value="calendar">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Calendário de Registros</h2>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Calendar 
                  mode="single"
                  selected={date}
                  onSelect={(date) => {
                    if (date) setDate(date);
                  }}
                  className="w-full"
                  locale={ptBR}
                  modifiers={{
                    marked: entries.map(entry => new Date(entry.date)),
                  }}
                  modifiersStyles={{
                    marked: { color: 'white', backgroundColor: 'rgb(var(--fenjes-purple))' },
                  }}
                  components={{
                    DayContent: ({ date }) => {
                      // Encontra a entrada para esta data, se existir
                      const formattedDate = format(date, 'yyyy-MM-dd');
                      const entry = entries.find(e => e.date === formattedDate);
                      
                      return (
                        <div 
                          className="w-full h-full flex items-center justify-center relative"
                          onClick={() => entry && loadEntry(entry.id)}
                        >
                          <span>{date.getDate()}</span>
                          {entry && (
                            <div 
                              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-1 rounded-full" 
                              style={{ 
                                backgroundColor: getPainLevelColor(entry.painLevel) 
                              }}
                            />
                          )}
                        </div>
                      );
                    }
                  }}
                />
                
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">Dor Alta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <span className="text-xs">Dor Média</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-xs">Dor Baixa</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        );
      
      case 'stats':
        return (
          <TabsContent value="stats">
            {entries.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Estatísticas</h2>
                <p className="text-gray-500">Você ainda não tem entradas no diário.</p>
                <Button 
                  className="mt-4 bg-fenjes-purple hover:bg-fenjes-purple-dark"
                  onClick={() => setCurrentView('form')}
                >
                  Criar Primeiro Registro
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Sua Evolução</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Níveis de dor média */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Nível de Dor Média</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-end justify-around">
                        {/* Gráfico simulado */}
                        {getLastEntries(7).reverse().map((entry, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div 
                              className="w-6 rounded-t"
                              style={{
                                height: `${entry?.painLevel * 3 || 0}px`,
                                backgroundColor: getPainLevelColor(entry?.painLevel || 0)
                              }}
                            ></div>
                            <span className="text-xs mt-1">
                              {entry ? format(new Date(entry.date), 'dd/MM') : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Humor */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Seu Humor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-32 flex items-end justify-around">
                        {/* Gráfico simulado */}
                        {getLastEntries(7).reverse().map((entry, index) => (
                          <div key={index} className="flex flex-col items-center">
                            <div className="text-2xl">
                              {entry ? getMoodEmoji(entry.mood) : ''}
                            </div>
                            <span className="text-xs mt-1">
                              {entry ? format(new Date(entry.date), 'dd/MM') : ''}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Principais sintomas */}
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Sintomas Mais Comuns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {getCommonSymptoms().map((symptom, index) => (
                        <div key={index} className="bg-fenjes-purple/10 text-fenjes-purple px-3 py-1 rounded-full text-sm">
                          {symptom}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Progresso geral */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Progresso Geral</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-2">
                      {getProgressMessage()}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        );
        
      case 'form':
      default:
        return (
          <TabsContent value="form" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                <CardHeader>
                  <CardTitle className="text-fenjes-purple text-lg sm:text-xl">
                    {isEditing ? "Editar Registro" : "Novo Registro Diário"} ({format(date, "PPP", { locale: ptBR })})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Data */} 
                  <div className="hidden">
                    <Label htmlFor="date">Data</Label>
                    <Input type="date" id="date" value={format(date, 'yyyy-MM-dd')} onChange={(e) => setDate(new Date(e.target.value))} />
                  </div>

                  {/* Pain Level Slider */}
                  <div>
                    <Label htmlFor="painLevel" className="flex justify-between items-center mb-1">
                      <span>Nível de Dor Hoje (1-10)</span>
                      <span 
                        className={`font-bold text-lg px-2 py-0.5 rounded ${getPainLevelStyle(painLevel).textColor} ${getPainLevelStyle(painLevel).bgColor}`}
                      >
                        {painLevel}
                      </span>
                    </Label>
                    <Slider
                      id="painLevel"
                      min={1}
                      max={10}
                      step={1}
                      value={[painLevel]}
                      onValueChange={(value) => setPainLevel(value[0])}
                      className={cn(
                        "w-full h-3 rounded-lg", // Base classes for the slider track
                        getPainLevelStyle(painLevel).sliderTrackClass // Dynamic track background color
                      )}
                      style={{
                        '--slider-range-color': getPainLevelStyle(painLevel).rangeColor,
                        '--slider-thumb-color': getPainLevelStyle(painLevel).thumbColor,
                        '--slider-thumb-border-color': getPainLevelStyle(painLevel).thumbBorderColor,
                      } as React.CSSProperties}
                    />
                     <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Sem dor</span>
                        <span>Dor moderada</span>
                        <span>Dor extrema</span>
                      </div>
                  </div>

                  {/* Mood Selection */}
                  <div className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                    <CardHeader>
                      <CardTitle className="text-fenjes-purple text-base">Como está seu humor hoje?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-around items-center gap-1 sm:gap-2 flex-wrap">
                        {[ 
                          { value: 'terrible', emoji: '😖', label: 'Péssimo' },
                          { value: 'bad', emoji: '🙁', label: 'Ruim' },
                          { value: 'neutral', emoji: '😐', label: 'Neutro' },
                          { value: 'good', emoji: '🙂', label: 'Bom' },
                          { value: 'great', emoji: '😊', label: 'Ótimo' },
                        ].map(m => (
                          <Button
                            key={m.value}
                            variant={mood === m.value ? "default" : "outline"}
                            onClick={() => setMood(m.value as any)}
                            className={cn(
                              "flex flex-col items-center justify-center h-16 w-16 sm:h-20 sm:w-20 p-1 text-xs rounded-lg transition-all transform hover:scale-105",
                              mood === m.value 
                                ? `${getMoodColor(m.value)} text-white` 
                                : "bg-white dark:bg-fenjes-neutral-700 hover:bg-gray-50 dark:hover:bg-fenjes-neutral-600"
                            )}
                            aria-pressed={mood === m.value}
                            aria-label={m.label}
                          >
                            <span className="text-xl sm:text-2xl mb-0.5 sm:mb-1" role="img" aria-label={m.label}>{m.emoji}</span>
                            {m.label}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Atividades Realizadas */}
                  <Card className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                    <CardHeader>
                      <CardTitle className="text-fenjes-purple text-base">Atividades Realizadas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-2">
                        <Input
                          value={newActivity}
                          onChange={(e) => setNewActivity(e.target.value)}
                          placeholder="Ex: Yoga na cadeira, caminhada..."
                          className="flex-1 mr-2"
                        />
                        <Button 
                          variant="outline" 
                          onClick={handleAddActivity}
                          type="button"
                        >
                          <PlusCircle size={16} className="mr-1" /> Adicionar
                        </Button>
                      </div>
                      {activities.length > 0 ? (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {activities.map((activity, index) => (
                            <div
                              key={index}
                              className="bg-fenjes-purple/10 text-fenjes-purple px-2 py-1 rounded text-xs flex items-center"
                            >
                              {activity}
                              <button
                                className="ml-1 text-fenjes-purple/70 hover:text-fenjes-purple"
                                onClick={() => handleRemoveActivity(index)}
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500 mt-1">
                          Adicione as atividades que você realizou hoje.
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Sintomas Observados */}
                  <Card className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                    <CardHeader>
                      <CardTitle className="text-fenjes-purple text-base">Sintomas Observados</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-2">
                        <Input
                          value={newSymptom}
                          onChange={(e) => setNewSymptom(e.target.value)}
                          placeholder="Ex: Dor lombar, tensão no pescoço..."
                          className="flex-1 mr-2"
                        />
                        <Button 
                          variant="outline" 
                          onClick={handleAddSymptom}
                          type="button"
                        >
                          <PlusCircle size={16} className="mr-1" /> Adicionar
                        </Button>
                      </div>
                      {symptoms.length > 0 ? (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {symptoms.map((symptom, index) => (
                            <div
                              key={index}
                              className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs flex items-center"
                            >
                              {symptom}
                              <button
                                className="ml-1 text-red-600/70 hover:text-red-600"
                                onClick={() => handleRemoveSymptom(index)}
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500 mt-1">
                          Adicione os sintomas que você observou hoje.
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Notas */}
                  <Card className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                    <CardHeader>
                      <CardTitle className="text-fenjes-purple text-base">Notas e Observações</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Escreva observações sobre como se sentiu hoje..."
                        className="min-h-[120px]"
                      />
                    </CardContent>
                  </Card>

                  {/* Botões de ação */}
                  <div className="flex justify-end gap-2">
                    {isEditing && (
                      <Button 
                        variant="outline" 
                        onClick={startNewEntry}
                      >
                        Nova Entrada
                      </Button>
                    )}
                    <Button 
                      className="bg-fenjes-purple hover:bg-fenjes-purple-dark"
                      onClick={saveEntry}
                    >
                      <Save size={16} className="mr-2" /> 
                      {isEditing ? "Atualizar Registro" : "Salvar Registro"}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 md:col-span-1">
                <Card className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-fenjes-purple text-base">Atividades Realizadas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {activities.map((activity, index) => (
                        <div
                          key={index}
                          className="bg-fenjes-purple/10 text-fenjes-purple px-2 py-1 rounded text-xs flex items-center"
                        >
                          {activity}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-fenjes-neutral-200 dark:bg-fenjes-neutral-800">
                  <CardHeader>
                    <CardTitle className="text-fenjes-purple text-base">Sintomas Observados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {symptoms.map((symptom, index) => (
                        <div
                          key={index}
                          className="bg-fenjes-purple/10 text-fenjes-purple px-2 py-1 rounded text-xs flex items-center"
                        >
                          {symptom}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        );
    }
  };

  // Funções auxiliares
  
  // Obter as últimas N entradas
  const getLastEntries = (count: number) => {
    const sortedEntries = [...entries].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    // Preencher com null se não houver entradas suficientes
    const result = new Array(count).fill(null);
    sortedEntries.slice(0, count).forEach((entry, index) => {
      result[index] = entry;
    });
    
    return result;
  };
  
  // Obter os sintomas mais comuns
  const getCommonSymptoms = () => {
    const symptomCount: Record<string, number> = {};
    
    // Contar ocorrências de cada sintoma
    entries.forEach(entry => {
      (entry.symptoms || []).forEach(symptom => {
        if (symptomCount[symptom]) {
          symptomCount[symptom]++;
        } else {
          symptomCount[symptom] = 1;
        }
      });
    });
    
    // Ordenar por frequência e retornar no máximo 5
    return Object.entries(symptomCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([symptom]) => symptom);
  };
  
  // Obter emoji correspondente ao humor
  const getMoodEmoji = (mood: string) => {
    switch (mood) {
      case 'terrible': return '😖';
      case 'bad': return '🙁';
      case 'neutral': return '😐';
      case 'good': return '🙂';
      case 'great': return '😀';
      default: return '😐';
    }
  };
  
  // Obter texto correspondente ao humor
  const getMoodText = (mood: string) => {
    switch (mood) {
      case 'terrible': return 'Péssimo';
      case 'bad': return 'Ruim';
      case 'neutral': return 'Neutro';
      case 'good': return 'Bom';
      case 'great': return 'Ótimo';
      default: return 'Neutro';
    }
  };
  
  // Obter cor correspondente ao nível de dor
  const getPainLevelColor = (level: number) => {
    if (level <= 3) return '#4ADE80'; // verde
    if (level <= 6) return '#FACC15'; // amarelo
    return '#EF4444'; // vermelho
  };
  
  // Obter mensagem de progresso com base nas entradas
  const getProgressMessage = () => {
    if (entries.length < 3) {
      return "Continue registrando diariamente para acompanhar seu progresso.";
    }
    
    // Calcular média de dor das últimas 3 entradas vs. 3 anteriores
    const sortedEntries = [...entries].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    if (sortedEntries.length >= 6) {
      const last3Avg = sortedEntries.slice(0, 3).reduce((sum, entry) => sum + entry.painLevel, 0) / 3;
      const prev3Avg = sortedEntries.slice(3, 6).reduce((sum, entry) => sum + entry.painLevel, 0) / 3;
      
      const diff = prev3Avg - last3Avg;
      if (diff >= 2) {
        return "Parabéns! Sua dor diminuiu significativamente nas últimas entradas.";
      } else if (diff >= 0.5) {
        return "Você está melhorando gradualmente! Continue com suas atividades.";
      } else if (diff <= -1) {
        return "Sua dor aumentou recentemente. Considere revisar suas atividades.";
      } else {
        return "Seu nível de dor está relativamente estável.";
      }
    }
    
    return "Continue registrando para obter insights sobre seu progresso.";
  };

  const getPainLevelStyle = (level: number) => {
    if (level <= 0) { // Default/error
      return {
        bgColor: "bg-gray-100 dark:bg-gray-700",
        textColor: "text-gray-700 dark:text-gray-300",
        sliderTrackClass: "bg-gray-300 dark:bg-gray-600", // Cinza para track
        rangeColor: '#9CA3AF', // theme.colors.gray[400]
        thumbColor: '#6B7280', // theme.colors.gray[500]
        thumbBorderColor: '#6B7280' // theme.colors.gray[500]
      };
    } else if (level <= 3) { // Verde (Dor Baixa)
      return {
        bgColor: "bg-green-100 dark:bg-green-900",
        textColor: "text-green-700 dark:text-green-300",
        sliderTrackClass: "bg-green-200 dark:bg-green-700/50",
        rangeColor: '#22C55E', // theme.colors.green[500]
        thumbColor: '#16A34A', // theme.colors.green[600]
        thumbBorderColor: '#15803D' // theme.colors.green[700]
      };
    } else if (level <= 6) { // Amarelo (Dor Média)
      return {
        bgColor: "bg-yellow-100 dark:bg-yellow-900",
        textColor: "text-yellow-700 dark:text-yellow-300",
        sliderTrackClass: "bg-yellow-200 dark:bg-yellow-700/50",
        rangeColor: '#F59E0B', // theme.colors.amber[500] (Tailwind v2 yellow-500)
        thumbColor: '#D97706', // theme.colors.amber[600]
        thumbBorderColor: '#B45309' // theme.colors.amber[700]
      };
    } else { // Vermelho (Dor Alta)
      return {
        bgColor: "bg-red-100 dark:bg-red-900",
        textColor: "text-red-700 dark:text-red-300",
        sliderTrackClass: "bg-red-200 dark:bg-red-700/50",
        rangeColor: '#EF4444', // theme.colors.red[500]
        thumbColor: '#DC2626', // theme.colors.red[600]
        thumbBorderColor: '#B91C1C' // theme.colors.red[700]
      };
    }
  };

  const getMoodColor = (mood: string): string => {
    switch (mood) {
      case 'terrible': return 'bg-red-500 hover:bg-red-500/90';
      case 'bad': return 'bg-orange-500 hover:bg-orange-500/90';
      case 'neutral': return 'bg-gray-500 hover:bg-gray-500/90';
      case 'good': return 'bg-green-500 hover:bg-green-500/90';
      case 'great': return 'bg-fenjes-purple hover:bg-fenjes-purple/90';
      default: return 'bg-gray-500 hover:bg-gray-500/90';
    }
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-card rounded-lg shadow-sm border p-4 mb-6">
              <Tabs value={currentView} onValueChange={(value: any) => setCurrentView(value)} className="w-full">
                <TabsList className="w-full grid grid-cols-3 mb-4 sm:mb-6">
                  <TabsTrigger value="form" className="h-10 sm:h-12 touch-manipulation text-sm sm:text-base">
                    <BookOpen className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Registro</span>
                    <span className="sm:hidden">Reg.</span>
                  </TabsTrigger>
                  <TabsTrigger value="calendar" className="h-10 sm:h-12 touch-manipulation text-sm sm:text-base">
                    <CalendarIcon2 className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Calendário</span>
                    <span className="sm:hidden">Cal.</span>
                  </TabsTrigger>
                  <TabsTrigger value="stats" className="h-10 sm:h-12 touch-manipulation text-sm sm:text-base">
                    <LineChart className="h-4 w-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Estatísticas</span>
                    <span className="sm:hidden">Est.</span>
                  </TabsTrigger>
                </TabsList>

                {renderView()}
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-4 sm:space-y-6">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Últimos Registros</CardTitle>
              </CardHeader>
              <CardContent>
                {getLastEntries(5).map((entry, index) => (
                  <Button
                    key={entry?.id || index}
                    variant="ghost"
                    className="w-full justify-start text-left mb-2 last:mb-0 h-auto py-2"
                    onClick={() => entry && loadEntry(entry.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 text-lg sm:text-xl">
                        {entry ? getMoodEmoji(entry.mood) : ''}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {entry ? format(new Date(entry.date), "d 'de' MMMM", { locale: ptBR }) : ''}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {entry ? `Nível de dor: ${entry.painLevel}` : ''}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <JourneyTracker className="bg-card" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DiaryPage; 