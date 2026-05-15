import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Award, Download, Calendar, CheckCircle, ExternalLink } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { SEOHead } from '../components/SEOHead';
import jsPDF from 'jspdf';

interface Certificate {
  id: string;
  userId: string;
  userName: string;
  courseId: string;
  courseName: string;
  score: number;
  issuedAt: string;
  certificateNumber: string;
}

export function MyCertificatesPage() {
  const { user, isAuthenticated } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    if (user) {
      // Charger les certificats depuis localStorage
      const certificatesData = localStorage.getItem('ccnts_certificates');
      if (certificatesData) {
        const allCertificates = JSON.parse(certificatesData);
        const userCertificates = allCertificates.filter(
          (cert: Certificate) => cert.userId === user.id
        );
        // Trier par date d'émission (plus récent en premier)
        userCertificates.sort(
          (a: Certificate, b: Certificate) =>
            new Date(b.issuedAt).getTime() - new Date(a.issuedAt).getTime()
        );
        setCertificates(userCertificates);
      }
    }
  }, [user]);

  const downloadCertificate = (certificate: Certificate) => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // Bordure décorative
    doc.setDrawColor(13, 71, 161);
    doc.setLineWidth(3);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);

    doc.setDrawColor(221, 107, 32);
    doc.setLineWidth(1);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);

    // Titre
    doc.setFontSize(36);
    doc.setTextColor(13, 71, 161);
    doc.text('CERTIFICAT DE RÉUSSITE', pageWidth / 2, 40, { align: 'center' });

    // Ligne décorative
    doc.setDrawColor(221, 107, 32);
    doc.setLineWidth(0.5);
    doc.line(60, 48, pageWidth - 60, 48);

    // Texte de certification
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text('Ce certificat atteste que', pageWidth / 2, 65, { align: 'center' });

    // Nom de l'apprenant
    doc.setFontSize(28);
    doc.setTextColor(13, 71, 161);
    doc.text(certificate.userName, pageWidth / 2, 85, { align: 'center' });

    // Texte de complétion
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text('a complété avec succès le cours', pageWidth / 2, 100, { align: 'center' });

    // Nom du cours
    doc.setFontSize(20);
    doc.setTextColor(221, 107, 32);
    const courseLines = doc.splitTextToSize(certificate.courseName, pageWidth - 80);
    doc.text(courseLines, pageWidth / 2, 115, { align: 'center' });

    // Score
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text(
      `avec un score de ${certificate.score}%`,
      pageWidth / 2,
      135,
      { align: 'center' }
    );

    // Organisation
    doc.setFontSize(16);
    doc.setTextColor(13, 71, 161);
    doc.text(
      'CCNTS - Cabinet de Cartographie Numérique,',
      pageWidth / 2,
      155,
      { align: 'center' }
    );
    doc.text(
      'de Télédétection et de Statistiques',
      pageWidth / 2,
      163,
      { align: 'center' }
    );

    // Date et numéro de certificat
    doc.setFontSize(11);
    doc.setTextColor(100, 100, 100);
    const issueDate = new Date(certificate.issuedAt).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    doc.text(`Délivré le ${issueDate}`, 25, pageHeight - 25);
    doc.text(
      `N° ${certificate.certificateNumber}`,
      pageWidth - 25,
      pageHeight - 25,
      { align: 'right' }
    );

    // Signature
    doc.setFontSize(12);
    doc.setTextColor(13, 71, 161);
    doc.text('Direction CCNTS', pageWidth - 60, pageHeight - 35, { align: 'center' });
    doc.setLineWidth(0.3);
    doc.line(pageWidth - 80, pageHeight - 37, pageWidth - 40, pageHeight - 37);

    // Télécharger le PDF
    doc.save(`Certificat_CCNTS_${certificate.courseName.replace(/\s+/g, '_')}.pdf`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full p-8 text-center">
          <Award className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="mb-2 text-gray-900">Connexion requise</h2>
          <p className="text-gray-600 mb-6">
            Vous devez être connecté pour accéder à vos certificats.
          </p>
          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link to="/login">Se connecter</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      <SEOHead pageKey="myCertificates" noIndex={true} />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Award className="w-16 h-16 mx-auto mb-6 text-white" />
            <h1 className="text-white mb-4">Mes Certificats</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Vos accomplissements et certifications CCNTS
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Certificats obtenus</p>
                  <p className="text-2xl text-gray-900">{certificates.length}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Score moyen</p>
                  <p className="text-2xl text-gray-900">
                    {certificates.length > 0
                      ? Math.round(
                          certificates.reduce((sum, cert) => sum + cert.score, 0) /
                            certificates.length
                        )
                      : 0}
                    %
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="p-6 bg-white shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dernier certificat</p>
                  <p className="text-sm text-gray-900">
                    {certificates.length > 0
                      ? new Date(certificates[0].issuedAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                        })
                      : 'Aucun'}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
      {certificates.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                  {/* Header avec gradient */}
                  <div className="h-32 bg-gradient-to-br from-orange-600 to-orange-800 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>
                    <div className="relative h-full flex items-center justify-center">
                      <Award className="w-16 h-16 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-gray-900 line-clamp-2">
                      {certificate.courseName}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Score: {certificate.score}%</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(certificate.issuedAt).toLocaleDateString('fr-FR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-xs text-gray-500 mb-3">
                        N° {certificate.certificateNumber}
                      </p>
                      <Button
                        onClick={() => downloadCertificate(certificate)}
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        size="sm"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger le certificat
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      ) : (
        /* Empty State */
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Award className="w-20 h-20 mx-auto mb-6 text-gray-400" />
          <h2 className="mb-4 text-gray-900">Aucun certificat pour le moment</h2>
          <p className="text-gray-600 mb-8">
            Complétez des cours et réussissez les quiz pour obtenir vos certificats de réussite.
            Un score minimum de 80% est requis pour la certification.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/academy">
              Découvrir les cours
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </section>
      )}
    </div>
  );
}

export default MyCertificatesPage;