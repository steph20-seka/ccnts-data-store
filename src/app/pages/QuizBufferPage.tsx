import { useState } from 'react';
import { ChevronRight, Home, Award, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import { SEOHead } from '../components/SEOHead';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un tampon (buffer) en analyse spatiale ?",
    options: [
      "Une zone de stockage temporaire pour les données SIG",
      "Une zone géographique créée autour d'un élément à une distance déterminée",
      "Un outil de modification des attributs d'une couche",
      "Une fonction de projection cartographique"
    ],
    correctAnswer: 1,
    explanation: "Un tampon est une zone géographique créée autour d'un élément spatial (point, ligne ou polygone) à une distance définie."
  },
  {
    id: 2,
    question: "Dans quel système de projection devez-vous travailler pour créer des tampons précis ?",
    options: [
      "WGS84 (EPSG:4326)",
      "Web Mercator",
      "Un système de projection métrique comme UTM",
      "N'importe quel système de projection"
    ],
    correctAnswer: 2,
    explanation: "Il faut toujours travailler dans un système métrique (UTM) car les tampons en degrés sont géométriquement incorrects."
  },
  {
    id: 3,
    question: "Quel est le menu QGIS pour accéder à l'outil Tampon ?",
    options: [
      "Raster → Analyse → Tampon",
      "Vecteur → Outils de géotraitement → Tampon",
      "Projet → Créer un tampon",
      "Édition → Tampon"
    ],
    correctAnswer: 1,
    explanation: "L'outil Tampon se trouve dans le menu Vecteur → Outils de géotraitement → Tampon."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'un tampon variable ?",
    options: [
      "Un tampon dont la forme change au fil du temps",
      "Un tampon qui s'adapte automatiquement au terrain",
      "Un tampon dont la distance varie selon un attribut",
      "Un tampon qui peut être modifié après création"
    ],
    correctAnswer: 2,
    explanation: "Un tampon variable utilise un champ numérique pour définir des distances différentes pour chaque entité."
  },
  {
    id: 5,
    question: "Que signifie l'option 'Dissoudre' lors de la création d'un tampon ?",
    options: [
      "Supprimer les tampons après création",
      "Réduire la taille des tampons progressivement",
      "Fusionner les tampons qui se chevauchent en un seul polygone",
      "Rendre les tampons transparents"
    ],
    correctAnswer: 2,
    explanation: "L'option 'Dissoudre' fusionne tous les tampons qui se chevauchent pour créer une zone continue."
  },
  {
    id: 6,
    question: "Quelle est l'unité de distance utilisée pour créer un tampon dans QGIS ?",
    options: [
      "Toujours des mètres",
      "Toujours des kilomètres",
      "L'unité du système de projection de la couche",
      "Toujours des degrés"
    ],
    correctAnswer: 2,
    explanation: "La distance est exprimée dans l'unité du système de projection de la couche (mètres pour UTM, degrés pour WGS84, etc.)."
  },
  {
    id: 7,
    question: "Qu'est-ce qu'un tampon négatif ?",
    options: [
      "Un tampon qui supprime des entités",
      "Un tampon créé à l'intérieur d'un polygone",
      "Un tampon avec une valeur négative d'attributs",
      "Un tampon inversé dans l'autre hémisphère"
    ],
    correctAnswer: 1,
    explanation: "Un tampon négatif crée une zone à l'intérieur d'un polygone en réduisant sa superficie."
  },
  {
    id: 8,
    question: "Dans quel domaine utilise-t-on les tampons pour créer des zones de protection des cours d'eau ?",
    options: [
      "Urbanisme commercial",
      "Environnement",
      "Transport aérien",
      "Télécommunications"
    ],
    correctAnswer: 1,
    explanation: "Les tampons sont largement utilisés en environnement pour créer des zones de protection autour des cours d'eau et zones humides."
  },
  {
    id: 9,
    question: "Quel paramètre contrôle l'arrondi des angles dans un tampon ?",
    options: [
      "La résolution",
      "Le nombre de segments",
      "Le facteur de lissage",
      "L'échelle"
    ],
    correctAnswer: 1,
    explanation: "Le paramètre 'segments' définit le nombre de segments utilisés pour arrondir les angles du tampon (25 par défaut)."
  },
  {
    id: 10,
    question: "Pour une ligne, on peut créer un tampon :",
    options: [
      "Uniquement des deux côtés",
      "Uniquement du côté gauche",
      "Des deux côtés, à gauche ou à droite",
      "Uniquement au centre de la ligne"
    ],
    correctAnswer: 2,
    explanation: "Pour les lignes, QGIS permet de créer un tampon des deux côtés, uniquement à gauche ou uniquement à droite."
  },
  {
    id: 11,
    question: "Quelle est une bonne pratique pour nommer une couche de tampons ?",
    options: [
      "Toujours la nommer 'buffer'",
      "Inclure la distance dans le nom (ex: rivieres_buffer_100m)",
      "Utiliser uniquement des chiffres",
      "Ne pas la renommer"
    ],
    correctAnswer: 1,
    explanation: "Il est recommandé d'inclure la distance et l'élément d'origine dans le nom pour faciliter l'identification."
  },
  {
    id: 12,
    question: "Pourquoi éviter de créer des tampons en WGS84 (degrés) ?",
    options: [
      "C'est techniquement impossible",
      "Les distances en degrés sont géométriquement incorrectes et varient selon la latitude",
      "Cela prend trop de temps de calcul",
      "QGIS n'accepte pas ce système"
    ],
    correctAnswer: 1,
    explanation: "Les tampons en degrés sont incorrects car 1 degré de longitude varie en distance selon la latitude (plus court aux pôles)."
  },
  {
    id: 13,
    question: "Qu'est-ce qu'un tampon multi-anneaux ?",
    options: [
      "Un tampon créé simultanément autour de plusieurs couches",
      "Un tampon avec plusieurs zones concentriques de distances différentes",
      "Un tampon qui traverse plusieurs projections",
      "Un tampon calculé en plusieurs étapes"
    ],
    correctAnswer: 1,
    explanation: "Un tampon multi-anneaux crée plusieurs zones concentriques (ex: 100m, 200m, 500m) autour d'un même élément."
  },
  {
    id: 14,
    question: "Dans un projet d'urbanisme, à quoi sert un tampon autour d'une ligne électrique haute tension ?",
    options: [
      "À calculer la consommation électrique",
      "À définir une zone de servitude non constructible",
      "À mesurer la longueur de la ligne",
      "À identifier les postes électriques"
    ],
    correctAnswer: 1,
    explanation: "Les tampons autour des lignes électriques définissent des zones de servitude où la construction est interdite pour des raisons de sécurité."
  },
  {
    id: 15,
    question: "Quelle transparence est recommandée pour visualiser efficacement les tampons ?",
    options: [
      "0% (opaque)",
      "100% (invisible)",
      "50-70%",
      "10-20%"
    ],
    correctAnswer: 2,
    explanation: "Une transparence de 50-70% permet de visualiser les tampons tout en voyant les données sous-jacentes."
  }
];

export function QuizBufferPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quizQuestions.length).fill(null)
  );
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState('');
  const [showNamePrompt, setShowNamePrompt] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: quizQuestions.length,
      percentage: Math.round((correct / quizQuestions.length) * 100),
    };
  };

  const handleSubmit = () => {
    const allAnswered = selectedAnswers.every((answer) => answer !== null);
    if (!allAnswered) {
      alert('Veuillez répondre à toutes les questions avant de soumettre.');
      return;
    }
    setShowResults(true);
  };

  const generateCertificate = () => {
    if (!userName.trim()) {
      setShowNamePrompt(true);
      return;
    }

    const score = calculateScore();
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Background
    doc.setFillColor(249, 250, 251);
    doc.rect(0, 0, 297, 210, 'F');

    // Border
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(2);
    doc.rect(10, 10, 277, 190);

    // Inner border
    doc.setDrawColor(96, 165, 250);
    doc.setLineWidth(0.5);
    doc.rect(15, 15, 267, 180);

    // Title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.setTextColor(37, 99, 235);
    doc.text('CERTIFICAT DE RÉUSSITE', 148.5, 45, { align: 'center' });

    // Subtitle
    doc.setFontSize(14);
    doc.setTextColor(75, 85, 99);
    doc.text('Académie CCNTS - Formation Géospatiale', 148.5, 55, { align: 'center' });

    // Decorative line
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.line(80, 60, 217, 60);

    // Certificate text
    doc.setFontSize(12);
    doc.setTextColor(55, 65, 81);
    doc.text('Ce certificat atteste que', 148.5, 75, { align: 'center' });

    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(37, 99, 235);
    doc.text(userName, 148.5, 90, { align: 'center' });

    // Achievement text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(55, 65, 81);
    doc.text('a suivi avec succès le cours', 148.5, 105, { align: 'center' });

    // Course title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(37, 99, 235);
    doc.text('Maîtriser les tampons pour créer des zones de protection', 148.5, 118, { align: 'center' });

    // Score
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(55, 65, 81);
    doc.text(`avec un score de ${score.percentage}%`, 148.5, 130, { align: 'center' });

    // Date
    const today = new Date();
    const dateStr = today.toLocaleDateString('fr-FR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    doc.setFontSize(10);
    doc.setTextColor(107, 114, 128);
    doc.text(`Délivré le ${dateStr}`, 148.5, 145, { align: 'center' });

    // Footer - Organization
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(37, 99, 235);
    doc.text('CCNTS', 148.5, 170, { align: 'center' });
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(107, 114, 128);
    doc.text('Cabinet de Cartographie Numérique, de Télédétection et de Statistiques', 148.5, 176, { align: 'center' });
    doc.text('Côte d\'Ivoire - Bouaké & Abidjan', 148.5, 182, { align: 'center' });
    doc.text('ccnts.cabinet33@gmail.com', 148.5, 188, { align: 'center' });

    // Decorative elements
    doc.setFillColor(37, 99, 235);
    doc.circle(25, 25, 3, 'F');
    doc.circle(272, 25, 3, 'F');
    doc.circle(25, 185, 3, 'F');
    doc.circle(272, 185, 3, 'F');

    doc.save(`Certificat_CCNTS_Tampons_${userName.replace(/\s+/g, '_')}.pdf`);
    setShowNamePrompt(false);
  };

  const score = showResults ? calculateScore() : null;
  const passed = score && score.percentage >= 80;

  if (showResults) {
    return (
      <>
        <SEOHead 
          pageKey="courseQGIS" 
          customTitle="Quiz Zone Tampon"
          noIndex={true}
        />
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
                <Home className="w-4 h-4" />
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/academy" className="text-gray-600 hover:text-blue-600">
                Académie
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/academy/buffer" className="text-gray-600 hover:text-blue-600">
                Maîtriser les tampons
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-gray-900">Résultats du quiz</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12">
              <div className="text-center mb-8">
                {passed ? (
                  <>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">
                      🎉 Félicitations !
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">
                      Vous avez réussi le quiz avec un score de
                    </p>
                    <p className="text-5xl font-bold text-green-600 mb-4">
                      {score.percentage}%
                    </p>
                    <p className="text-gray-600">
                      {score.correct} bonnes réponses sur {score.total} questions
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertCircle className="w-12 h-12 text-orange-600" />
                    </div>
                    <h1 className="text-3xl md:text-4xl text-gray-900 mb-4">
                      Continuez vos efforts !
                    </h1>
                    <p className="text-xl text-gray-600 mb-2">
                      Votre score
                    </p>
                    <p className="text-5xl font-bold text-orange-600 mb-4">
                      {score.percentage}%
                    </p>
                    <p className="text-gray-600 mb-4">
                      {score.correct} bonnes réponses sur {score.total} questions
                    </p>
                    <p className="text-gray-600">
                      Un score minimum de 80% est requis pour obtenir le certificat.
                    </p>
                  </>
                )}
              </div>

              {passed && (
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Certification disponible
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Vous êtes éligible à recevoir votre certificat officiel CCNTS.
                        Téléchargez-le maintenant !
                      </p>
                      
                      {showNamePrompt && (
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Entrez votre nom complet pour le certificat :
                          </label>
                          <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Ex: Jean Dupont"
                          />
                        </div>
                      )}
                      
                      <Button 
                        onClick={generateCertificate}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Award className="w-5 h-5 mr-2" />
                        Télécharger mon certificat
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {/* Detailed Results */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Détail des réponses
                </h3>
                {quizQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[index];
                  const isCorrect = userAnswer === question.correctAnswer;
                  
                  return (
                    <Card key={question.id} className={`p-6 ${isCorrect ? 'border-green-200 bg-green-50/50' : 'border-red-200 bg-red-50/50'}`}>
                      <div className="flex items-start gap-4">
                        {isCorrect ? (
                          <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                        )}
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Question {index + 1}: {question.question}
                          </h4>
                          <p className={`text-sm mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            Votre réponse : {question.options[userAnswer!]}
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-gray-700 mb-2">
                              Réponse correcte : {question.options[question.correctAnswer]}
                            </p>
                          )}
                          <p className="text-sm text-gray-600 italic">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedAnswers(new Array(quizQuestions.length).fill(null));
                    setShowResults(false);
                  }}
                  variant="outline"
                >
                  Retenter le quiz
                </Button>
                <Button
                  onClick={() => navigate('/academy/buffer')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Retour au cours
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <>
      <SEOHead 
        pageKey="courseQGIS" 
        customTitle="Quiz Zone Tampon"
        noIndex={true}
      />
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <Home className="w-4 h-4" />
              Accueil
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/academy" className="text-gray-600 hover:text-blue-600">
              Académie
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/academy/buffer" className="text-gray-600 hover:text-blue-600">
              Maîtriser les tampons
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900">Quiz de certification</span>
          </div>
        </div>
      </div>

      {/* Quiz */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentQuestion + 1} sur {quizQuestions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <Card className="p-8 mb-6">
            <h2 className="text-2xl text-gray-900 mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-900">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              ← Question précédente
            </Button>

            {currentQuestion === quizQuestions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
                disabled={selectedAnswers[currentQuestion] === null}
              >
                Soumettre le quiz
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === null}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Question suivante →
              </Button>
            )}
          </div>

          {/* Answer Status */}
          <div className="mt-6 flex gap-2 flex-wrap justify-center">
            {quizQuestions.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                  selectedAnswers[index] !== null
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                } ${
                  index === currentQuestion ? 'ring-2 ring-blue-600 ring-offset-2' : ''
                }`}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default QuizBufferPage;