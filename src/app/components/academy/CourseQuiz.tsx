import { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { CheckCircle2, XCircle, Award, Download, RefreshCw, Calendar, Hash, Shield, FileDown, Image as ImageIcon } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface CourseQuizProps {
  courseTitle: string;
  questions: Question[];
  passingScore: number; // Pourcentage requis pour obtenir le certificat (ex: 80)
}

export function CourseQuiz({ courseTitle, questions, passingScore }: CourseQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleRetry = () => {
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setCurrentQuestion(0);
    setShowResults(false);
    setCertificateGenerated(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const score = calculateScore();
  const passed = score >= passingScore;
  const correctCount = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;

  const handleGenerateCertificate = () => {
    if (studentName.trim()) {
      setCertificateGenerated(true);
      setShowNameInput(false);
    }
  };

  const handleDownloadCertificate = () => {
    // Vérifier si l'utilisateur est connecté
    if (!user) {
      toast.error('Connexion requise', {
        description: 'Vous devez créer un compte pour télécharger votre certificat.',
      });
      navigate('/signup');
      return;
    }

    const element = document.getElementById('certificate');
    if (element) {
      // Convertir les couleurs oklch en RGB avant la capture
      html2canvas(element, { 
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        const fileName = `Certificat_CCNTS_${courseTitle.replace(/\s+/g, '_')}_${studentName.replace(/\s+/g, '_')}.png`;
        link.download = fileName;
        link.click();
      }).catch(err => {
        console.error('Erreur lors de la génération du certificat:', err);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
    }
  };

  const handleDownloadPDFCertificate = () => {
    // Vérifier si l'utilisateur est connecté
    if (!user) {
      toast.error('Connexion requise', {
        description: 'Vous devez créer un compte pour télécharger votre certificat.',
      });
      navigate('/signup');
      return;
    }

    const element = document.getElementById('certificate');
    if (element) {
      html2canvas(element, { 
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false,
        useCORS: true
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        const fileName = `Certificat_CCNTS_${courseTitle.replace(/\s+/g, '_')}_${studentName.replace(/\s+/g, '_')}.pdf`;
        pdf.save(fileName);
      }).catch(err => {
        console.error('Erreur lors de la génération du certificat PDF:', err);
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
    }
  };

  // Générer un numéro de certificat unique
  const generateCertificateNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const courseCode = (courseTitle || 'CRS').substring(0, 3).toUpperCase();
    return `CCNTS-${courseCode}-${year}${month}-${random}`;
  };

  const certificateNumber = generateCertificateNumber();

  if (showResults) {
    return (
      <div className="space-y-6">
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="text-center mb-6">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
              passed ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              {passed ? (
                <Award className="w-12 h-12 text-green-600" />
              ) : (
                <RefreshCw className="w-12 h-12 text-orange-600" />
              )}
            </div>
            <h2 className="text-gray-900 mb-2">
              {passed ? '🎉 Félicitations !' : '📚 Continuez vos efforts !'}
            </h2>
            <p className="text-gray-600 mb-4">
              Vous avez obtenu <strong className={passed ? 'text-green-600' : 'text-orange-600'}>{score.toFixed(0)}%</strong>
            </p>
            <div className="flex items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>{correctCount} correctes</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>{questions.length - correctCount} incorrectes</span>
              </div>
            </div>
          </div>

          {passed ? (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <p className="text-green-800 font-medium mb-2">
                  ✅ Vous avez réussi le quiz !
                </p>
                <p className="text-sm text-green-700">
                  Vous êtes éligible pour recevoir votre certificat CCNTS gratuit
                </p>
              </div>

              {!certificateGenerated && !showNameInput && (
                <Button 
                  onClick={() => setShowNameInput(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  size="lg"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Obtenir mon certificat gratuit
                </Button>
              )}

              {showNameInput && !certificateGenerated && (
                <div className="p-6 bg-white rounded-lg border-2 border-blue-200">
                  <p className="text-gray-900 font-medium mb-4">Entrez votre nom complet pour le certificat :</p>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Ex: Jean Kouassi"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-3">
                    <Button 
                      onClick={handleGenerateCertificate}
                      disabled={!studentName.trim()}
                      className="flex-1 bg-green-600 hover:bg-green-700"
                    >
                      Générer le certificat
                    </Button>
                    <Button 
                      onClick={() => setShowNameInput(false)}
                      variant="outline"
                    >
                      Annuler
                    </Button>
                  </div>
                </div>
              )}

              {certificateGenerated && (
                <div className="space-y-4">
                  {/* Certificat */}
                  <div 
                    className="relative p-12 rounded-xl shadow-2xl" 
                    id="certificate"
                    style={{
                      background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #e0e7ff 100%)',
                      border: '8px double #2563eb',
                    }}
                  >
                    {/* Ornements décoratifs */}
                    <div className="absolute top-4 left-4 w-16 h-16 rounded-tl-lg" style={{ borderTop: '4px solid #60a5fa', borderLeft: '4px solid #60a5fa' }}></div>
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-tr-lg" style={{ borderTop: '4px solid #60a5fa', borderRight: '4px solid #60a5fa' }}></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-bl-lg" style={{ borderBottom: '4px solid #60a5fa', borderLeft: '4px solid #60a5fa' }}></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 rounded-br-lg" style={{ borderBottom: '4px solid #60a5fa', borderRight: '4px solid #60a5fa' }}></div>

                    <div className="text-center space-y-8">
                      {/* Header */}
                      <div className="pb-6" style={{ borderBottom: '2px solid #d1d5db' }}>
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <Shield className="w-8 h-8" style={{ color: '#2563eb' }} />
                          <h3 style={{ color: '#2563eb', fontSize: '1.5rem', fontWeight: '700' }}>ACADÉMIE CCNTS</h3>
                          <Shield className="w-8 h-8" style={{ color: '#2563eb' }} />
                        </div>
                        <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>Cabinet de Cartographie Numérique, de Télédétection et de Statistiques</p>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Abidjan, Côte d'Ivoire</p>
                      </div>
                      
                      {/* Titre */}
                      <div>
                        <Award className="w-20 h-20 mx-auto mb-4" style={{ color: '#eab308' }} />
                        <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '0.5rem', letterSpacing: '0.1em' }}>CERTIFICAT DE RÉUSSITE</p>
                        <h2 style={{ color: '#111827', fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.5rem' }}>{courseTitle}</h2>
                        <div className="flex items-center justify-center gap-2">
                          <Hash className="w-4 h-4" style={{ color: '#6b7280' }} />
                          <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>N° {certificateNumber}</span>
                        </div>
                      </div>

                      {/* Contenu principal */}
                      <div className="py-8 space-y-4">
                        <p style={{ color: '#4b5563', fontSize: '1rem' }}>Ce certificat atteste que</p>
                        <p style={{ 
                          fontSize: '2.25rem', 
                          fontWeight: '700', 
                          color: '#2563eb', 
                          padding: '1rem 0',
                          borderTop: '2px solid #dbeafe',
                          borderBottom: '2px solid #dbeafe'
                        }}>{studentName}</p>
                        <p style={{ color: '#4b5563', maxWidth: '42rem', margin: '0 auto', lineHeight: '1.75' }}>
                          a complété avec succès le programme de formation dispensé par l'Académie CCNTS 
                          et a obtenu un score de <strong style={{ color: '#2563eb' }}>{score.toFixed(0)}%</strong> au quiz de validation, 
                          démontrant ainsi sa maîtrise des compétences enseignées.
                        </p>
                      </div>

                      {/* Footer avec informations */}
                      <div className="grid grid-cols-3 gap-6 pt-6" style={{ borderTop: '2px solid #d1d5db' }}>
                        <div className="text-left">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="w-5 h-5" style={{ color: '#2563eb' }} />
                            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Date de délivrance</p>
                          </div>
                          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>{new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)' }}>
                            <Award className="w-12 h-12" style={{ color: '#ffffff' }} />
                          </div>
                          <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Certificat officiel</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center justify-end gap-2 mb-2">
                            <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Score obtenu</p>
                            <CheckCircle2 className="w-5 h-5" style={{ color: '#16a34a' }} />
                          </div>
                          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>{score.toFixed(0)}% ({correctCount}/{questions.length})</p>
                        </div>
                      </div>

                      {/* Signature */}
                      <div className="pt-6" style={{ borderTop: '1px solid #e5e7eb' }}>
                        <div className="max-w-xs mx-auto">
                          <div className="mb-2" style={{ borderTop: '2px solid #9ca3af', paddingTop: '0.5rem' }}></div>
                          <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#111827' }}>Direction de l'Académie CCNTS</p>
                          <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>Cabinet de Cartographie Numérique</p>
                        </div>
                      </div>

                      {/* Note de bas */}
                      <div className="pt-4 space-y-1">
                        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                          Ce certificat numérique atteste de la réussite au cours et au quiz de validation
                        </p>
                        <p style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                          Email : ccnts.cabinet33@gmail.com • www.ccnts-academy.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Boutons d'action avec message */}
                  <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
                    <div className="text-center mb-4">
                      <h4 className="text-gray-900 mb-2">🎉 Votre certificat est prêt !</h4>
                      <p className="text-sm text-gray-600">
                        Téléchargez et imprimez votre certificat ou enregistrez-le en PDF
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        onClick={handleDownloadCertificate}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Télécharger / Imprimer (PNG)
                      </Button>
                      <Button 
                        onClick={handleDownloadPDFCertificate}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        size="lg"
                      >
                        <FileDown className="w-5 h-5 mr-2" />
                        Télécharger (PDF)
                      </Button>
                      <Button 
                        onClick={handleRetry}
                        variant="outline"
                        size="lg"
                      >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Refaire le quiz
                      </Button>
                    </div>
                  </Card>

                  {/* Info complémentaire */}
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <p className="text-sm text-blue-800 text-center">
                      <strong>💡 Conseil :</strong> Utilisez le bouton "Télécharger (PDF)" pour obtenir une version PDF haute qualité de votre certificat,
                      ou "Télécharger (PNG)" pour une image. Les deux formats sont acceptés pour prouver votre certification.
                    </p>
                  </Card>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg text-center">
                <p className="text-orange-800 font-medium mb-2">
                  Score minimum requis : {passingScore}%
                </p>
                <p className="text-sm text-orange-700">
                  Révisez le cours et réessayez pour obtenir votre certificat
                </p>
              </div>
              <Button 
                onClick={handleRetry}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refaire le quiz
              </Button>
            </div>
          )}
        </Card>

        {/* Détails des réponses */}
        <Card className="p-8">
          <h3 className="text-gray-900 mb-6">📋 Détails de vos réponses</h3>
          <div className="space-y-6">
            {questions.map((question, index) => {
              const isCorrect = selectedAnswers[index] === question.correctAnswer;
              return (
                <div key={question.id} className={`p-5 rounded-lg border-2 ${
                  isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                }`}>
                  <div className="flex items-start gap-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 mb-3">
                        Question {index + 1} : {question.question}
                      </p>
                      <div className="space-y-2 text-sm">
                        <p className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                          <strong>Votre réponse :</strong> {question.options[selectedAnswers[index]] || 'Aucune réponse'}
                        </p>
                        {!isCorrect && (
                          <p className="text-green-700">
                            <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                          </p>
                        )}
                        {question.explanation && (
                          <p className="text-gray-700 mt-3 pt-3 border-t border-gray-300">
                            💡 <strong>Explication :</strong> {question.explanation}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Card className="p-8">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-600">
            Question {currentQuestion + 1} sur {questions.length}
          </p>
          <p className="text-sm font-medium text-blue-600">{progress.toFixed(0)}%</p>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-gray-900 mb-6">
          {question.question}
        </h3>
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-600 bg-blue-600'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  )}
                </div>
                <span className="text-gray-700">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          variant="outline"
        >
          ← Précédent
        </Button>
        
        {currentQuestion === questions.length - 1 ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswers.includes(-1)}
            className="bg-green-600 hover:bg-green-700"
          >
            Soumettre le quiz
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={selectedAnswers[currentQuestion] === -1}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Suivant →
          </Button>
        )}
      </div>

      {/* Warning si des questions non répondues */}
      {currentQuestion === questions.length - 1 && selectedAnswers.includes(-1) && (
        <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-orange-800">
            ⚠️ Veuillez répondre à toutes les questions avant de soumettre le quiz
          </p>
        </div>
      )}
    </Card>
  );
}