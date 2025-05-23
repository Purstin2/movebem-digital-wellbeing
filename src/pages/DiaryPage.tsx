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
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calendário de Registros</h2>
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <Calendar 
                mode="single"
                selected={date}
                onSelect={(date) => {
                  if (date) setDate(date);
                }}
                className="mx-auto"
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
        );
      
      case 'stats':
        if (entries.length === 0) {
          return (
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
          );
        }
        
        return (
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
        );
        
      case 'form':
      default:
        return (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {isEditing ? "Editar Registro" : "Novo Registro"}
              </h2>
              {hasEntryForToday && !isEditing && (
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    // Encontrar e carregar a entrada de hoje
                    const today = format(new Date(), 'yyyy-MM-dd');
                    const todayEntry = entries.find(entry => entry.date === today);
                    if (todayEntry) loadEntry(todayEntry.id);
                  }}
                >
                  Carregar Registro de Hoje
                </Button>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Data */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Data
                </Label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="mr-2"
                    onClick={() => {
                      const newDate = new Date(date);
                      newDate.setDate(newDate.getDate() - 1);
                      setDate(newDate);
                    }}
                  >
                    <ChevronLeft size={16} />
                  </Button>
                  <div className="flex-1 text-center">
                    <p className="text-base font-medium">
                      {format(date, "EEEE, dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="ml-2"
                    onClick={() => {
                      const newDate = new Date(date);
                      newDate.setDate(newDate.getDate() + 1);
                      setDate(newDate);
                    }}
                  >
                    <ChevronRight size={16} />
                  </Button>
                </div>
              </div>
              
              {/* Nível de dor */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Nível de Dor Hoje (1-10)
                </Label>
                <div className="flex items-center gap-3">
                  <Slider
                    value={[painLevel]}
                    min={1}
                    max={10}
                    step={1}
                    onValueChange={(values) => setPainLevel(values[0])}
                    className="flex-1"
                  />
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                    style={{ backgroundColor: getPainLevelColor(painLevel), color: painLevel > 7 ? 'white' : 'black' }}
                  >
                    {painLevel}
                  </div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Sem dor</span>
                  <span>Dor moderada</span>
                  <span>Dor extrema</span>
                </div>
              </div>
              
              {/* Humor */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label className="text-sm font-medium text-gray-700 mb-3 block">
                  Como está seu humor hoje?
                </Label>
                <div className="flex justify-between">
                  {['terrible', 'bad', 'neutral', 'good', 'great'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMood(m as any)}
                      className={cn(
                        "flex flex-col items-center p-2 rounded transition-colors w-16",
                        mood === m ? "bg-fenjes-purple/10 text-fenjes-purple" : "bg-transparent hover:bg-gray-100"
                      )}
                    >
                      <span className="text-2xl">{getMoodEmoji(m as any)}</span>
                      <span className="text-xs mt-1">{getMoodText(m as any)}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Atividades realizadas */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Atividades Realizadas Hoje
                </Label>
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
              </div>
              
              {/* Sintomas */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Sintomas Observados Hoje
                </Label>
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
              </div>
              
              {/* Notas */}
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Label 
                  htmlFor="notes" 
                  className="text-sm font-medium text-gray-700 mb-2 block"
                >
                  Notas e Observações
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Escreva observações sobre como se sentiu hoje..."
                  className="min-h-[120px]"
                />
              </div>
              
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
            </div>
          </div>
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

  return (
    <AppLayout>
      <div className="container mx-auto px-4 pb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-fenjes-purple mb-6">
          Diário de Alívio
        </h1>
        
        <div className="mb-4">
          <JourneyTracker className="mb-6" />
        </div>
        
        <p className="text-sm text-gray-600 mb-6">
          Acompanhe sua jornada de cura e registre seus progressos diários. Mantenha um registro de como você se sente,
          suas atividades e níveis de dor para visualizar sua evolução ao longo do tempo.
        </p>
        
        <div className="mb-6">
          <Tabs defaultValue="form" onValueChange={(value) => setCurrentView(value as any)}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="form" className="flex items-center gap-1">
                <BookOpen size={16} /> Registrar
              </TabsTrigger>
              <TabsTrigger value="calendar" className="flex items-center gap-1">
                <CalendarIcon2 size={16} /> Calendário 
              </TabsTrigger>
              <TabsTrigger value="stats" className="flex items-center gap-1">
                <LineChart size={16} /> Estatísticas
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="form" className="pt-2">
              {renderView()}
            </TabsContent>
            <TabsContent value="calendar" className="pt-2">
              {renderView()}
            </TabsContent>
            <TabsContent value="stats" className="pt-2">
              {renderView()}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </AppLayout>
  );
};

export default DiaryPage; 