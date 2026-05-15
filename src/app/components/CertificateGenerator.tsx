import { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Download, Eye, Share2, CheckCircle, Printer, FileDown } from 'lucide-react';
import { CertificateTemplate } from './CertificateTemplate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface CertificateGeneratorProps {
  recipientName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
  language?: 'fr' | 'en' | 'de' | 'es';
  onGenerated?: (certificateUrl: string) => void;
}

export function CertificateGenerator({
  recipientName,
  courseName,
  completionDate,
  certificateId,
  language = 'fr',
  onGenerated,
}: CertificateGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    toast.loading('Génération du certificat en cours...', { id: 'cert-gen' });

    try {
      // Attendre un peu pour que le rendu soit complet
      await new Promise(resolve => setTimeout(resolve, 500));

      // Capturer le certificat en haute résolution
      const canvas = await html2canvas(certificateRef.current, {
        scale: 3, // Haute résolution (3x)
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 1122,
        height: 794,
      });

      // Créer le PDF en format paysage A4
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // Dimensions A4 paysage en mm
      const pdfWidth = 297;
      const pdfHeight = 210;

      // Ajouter l'image au PDF
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

      // Ajouter des métadonnées
      pdf.setProperties({
        title: `Certificat CCNTS - ${recipientName}`,
        subject: `Certificat de compétence - ${courseName}`,
        author: 'Cabinet CCNTS',
        keywords: 'certificat, formation, CCNTS, géomatique',
        creator: 'CCNTS Academy',
      });

      // Télécharger le PDF
      const fileName = `Certificat_CCNTS_${recipientName.replace(/\s+/g, '_')}_${certificateId}.pdf`;
      pdf.save(fileName);

      toast.success('Certificat téléchargé avec succès !', { id: 'cert-gen' });

      if (onGenerated) {
        onGenerated(imgData);
      }
    } catch (error) {
      console.error('Erreur lors de la génération du certificat:', error);
      toast.error('Erreur lors de la génération du certificat', { id: 'cert-gen' });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadImage = async () => {
    if (!certificateRef.current) return;

    setIsGenerating(true);
    toast.loading('Génération de l\'image en cours...', { id: 'img-gen' });

    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      const canvas = await html2canvas(certificateRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 1122,
        height: 794,
      });

      // Convertir en blob et télécharger
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `Certificat_CCNTS_${recipientName.replace(/\s+/g, '_')}.png`;
          link.click();
          URL.revokeObjectURL(url);

          toast.success('Image téléchargée avec succès !', { id: 'img-gen' });
        }
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('Erreur lors de la génération de l\'image:', error);
      toast.error('Erreur lors de la génération de l\'image', { id: 'img-gen' });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    if (!certificateRef.current) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const certificateHTML = certificateRef.current.outerHTML;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificat CCNTS - ${recipientName}</title>
          <style>
            @page {
              size: A4 landscape;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: 'Georgia', serif;
            }
            @media print {
              body {
                width: 297mm;
                height: 210mm;
              }
            }
          </style>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
          ${certificateHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 500);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Certificat CCNTS - ${recipientName}`,
          text: `Certificat de compétence professionnelle délivré par le Cabinet CCNTS pour : ${courseName}`,
          url: window.location.href,
        });
        toast.success('Certificat partagé avec succès !');
      } catch (error) {
        if ((error as Error).name !== 'AbortError') {
          toast.error('Erreur lors du partage');
        }
      }
    } else {
      // Fallback: copier l'URL dans le presse-papiers
      navigator.clipboard.writeText(window.location.href);
      toast.success('Lien copié dans le presse-papiers !');
    }
  };

  return (
    <div className="space-y-6">
      {/* Actions */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">🎉 Certificat prêt !</h3>
            <p className="text-gray-600">Télécharge ton certificat officiel CCNTS</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold shadow-lg"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Génération...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                PDF
              </>
            )}
          </Button>

          <Button
            onClick={handleDownloadImage}
            disabled={isGenerating}
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-50 font-bold"
          >
            <FileDown className="w-4 h-4 mr-2" />
            Image PNG
          </Button>

          <Button
            onClick={() => setShowPreview(true)}
            variant="outline"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold"
          >
            <Eye className="w-4 h-4 mr-2" />
            Aperçu
          </Button>

          <Button
            onClick={handlePrint}
            variant="outline"
            className="border-2 border-gray-600 text-gray-600 hover:bg-gray-50 font-bold"
          >
            <Printer className="w-4 h-4 mr-2" />
            Imprimer
          </Button>
        </div>

        <div className="mt-4 flex justify-center">
          <Button
            onClick={handleShare}
            variant="ghost"
            className="text-blue-600 hover:bg-blue-50"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Partager mon certificat
          </Button>
        </div>
      </Card>

      {/* Informations */}
      <Card className="p-6 bg-blue-50 border-2 border-blue-200">
        <h4 className="font-bold text-gray-900 mb-3">📋 Informations du certificat</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-700">Bénéficiaire :</span>
            <p className="text-gray-900">{recipientName}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Compétence :</span>
            <p className="text-gray-900">{courseName}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Date de délivrance :</span>
            <p className="text-gray-900">{completionDate}</p>
          </div>
          <div>
            <span className="font-semibold text-gray-700">N° de certificat :</span>
            <p className="text-gray-900 font-mono">{certificateId}</p>
          </div>
        </div>
      </Card>

      {/* Certificat caché pour la génération */}
      <div className="hidden">
        <CertificateTemplate
          ref={certificateRef}
          recipientName={recipientName}
          courseName={courseName}
          completionDate={completionDate}
          certificateId={certificateId}
          language={language}
        />
      </div>

      {/* Modal d'aperçu */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle>Aperçu du certificat</DialogTitle>
            <DialogDescription>
              Voici à quoi ressemblera ton certificat officiel CCNTS
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 overflow-auto">
            <div className="flex justify-center">
              <div className="transform scale-75 origin-top">
                <CertificateTemplate
                  recipientName={recipientName}
                  courseName={courseName}
                  completionDate={completionDate}
                  certificateId={certificateId}
                  language={language}
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
