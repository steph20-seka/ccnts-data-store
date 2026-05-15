import { forwardRef } from 'react';
import { Award, CheckCircle, Shield } from 'lucide-react';

interface CertificateTemplateProps {
  recipientName: string;
  courseName: string;
  completionDate: string;
  certificateId: string;
  language?: 'fr' | 'en' | 'de' | 'es';
}

const translations = {
  fr: {
    title: 'CERTIFICAT DE COMPÉTENCE PROFESSIONNELLE',
    certifies: 'Le Cabinet de cartographie numérique, de télédétection et de la statistique (CCNTS) certifie que :',
    hasCompleted: 'a suivi et validé avec succès la formation / certification relative à la compétence suivante :',
    attestation: 'Cette certification atteste de sa capacité à appliquer des méthodes professionnelles conformes aux standards du domaine.',
    issueDate: 'Date de délivrance',
    certificateNumber: 'Numéro de certificat',
    signature: 'Signature officielle du Cabinet',
    seal: 'Cachet officiel CCNTS',
    footer: 'Ce certificat peut être vérifié en ligne sur ccnts.com/verify avec le numéro de certificat ci-dessus.'
  },
  en: {
    title: 'PROFESSIONAL SKILLS CERTIFICATE',
    certifies: 'The Cabinet of Digital Cartography, Remote Sensing and Statistics (CCNTS) hereby certifies that:',
    hasCompleted: 'has successfully completed and validated the training / certification in the following field:',
    attestation: 'This certificate attests to the holder\'s professional ability to apply industry-standard methods.',
    issueDate: 'Date of issue',
    certificateNumber: 'Certificate number',
    signature: 'Official signature',
    seal: 'Official CCNTS seal',
    footer: 'This certificate can be verified online at ccnts.com/verify using the certificate number above.'
  },
  de: {
    title: 'PROFESSIONELLES KOMPETENZZERTIFIKAT',
    certifies: 'Das Büro für Digitale Kartographie, Fernerkundung und Statistik (CCNTS) bescheinigt hiermit, dass:',
    hasCompleted: 'die Schulung / Zertifizierung in folgendem Bereich erfolgreich absolviert und validiert hat:',
    attestation: 'Diese Bescheinigung bestätigt die Fähigkeit zur Anwendung professioneller Methoden gemäß Branchenstandards.',
    issueDate: 'Ausstellungsdatum',
    certificateNumber: 'Zertifikatsnummer',
    signature: 'Offizielle Unterschrift',
    seal: 'Offizielles CCNTS-Siegel',
    footer: 'Dieses Zertifikat kann online unter ccnts.com/verify mit der oben genannten Zertifikatsnummer überprüft werden.'
  },
  es: {
    title: 'CERTIFICADO DE COMPETENCIA PROFESIONAL',
    certifies: 'El Gabinete de Cartografía Digital, Teledetección y Estadística (CCNTS) certifica que:',
    hasCompleted: 'ha seguido y validado con éxito la formación / certificación relativa a la siguiente competencia:',
    attestation: 'Esta certificación atestigua su capacidad para aplicar métodos profesionales conformes a los estándares del sector.',
    issueDate: 'Fecha de emisión',
    certificateNumber: 'Número de certificado',
    signature: 'Firma oficial',
    seal: 'Sello oficial CCNTS',
    footer: 'Este certificado puede verificarse en línea en ccnts.com/verify utilizando el número de certificado anterior.'
  }
};

export const CertificateTemplate = forwardRef<HTMLDivElement, CertificateTemplateProps>(
  ({ recipientName, courseName, completionDate, certificateId, language = 'fr' }, ref) => {
    const t = translations[language];

    return (
      <div
        ref={ref}
        style={{
          position: 'relative',
          width: '1122px',
          height: '794px',
          backgroundColor: '#ffffff',
          fontFamily: "'Playfair Display', 'Georgia', serif",
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
        }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `
                repeating-linear-gradient(0deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 20px),
                repeating-linear-gradient(90deg, #1e3a8a 0px, #1e3a8a 1px, transparent 1px, transparent 20px)
              `,
            }}
          />
        </div>

        {/* Decorative Border */}
        <div style={{ position: 'absolute', inset: '16px' }}>
          <div style={{
            width: '100%',
            height: '100%',
            border: '8px double #1e3a8a',
            position: 'relative',
          }}>
            {/* Inner border */}
            <div style={{
              position: 'absolute',
              inset: '8px',
              border: '2px solid #1e40af',
            }} />
            
            {/* Corner decorations */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '96px', height: '96px' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', color: '#1e3a8a', opacity: 0.2 }}>
                <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '96px', height: '96px', transform: 'rotate(90deg)' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', color: '#1e3a8a', opacity: 0.2 }}>
                <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '96px', height: '96px', transform: 'rotate(-90deg)' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', color: '#1e3a8a', opacity: 0.2 }}>
                <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '96px', height: '96px', transform: 'rotate(180deg)' }}>
              <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', color: '#1e3a8a', opacity: 0.2 }}>
                <path d="M0,0 L100,0 L100,20 L20,20 L20,100 L0,100 Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          padding: '64px 96px',
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center' }}>
            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{
                width: '128px',
                height: '128px',
                background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '4px solid #1e40af',
              }}>
                <div style={{ textAlign: 'center', color: '#ffffff' }}>
                  <div style={{ fontSize: '36px', fontWeight: 'bold' }}>CCNTS</div>
                  <div style={{ fontSize: '12px', marginTop: '4px', letterSpacing: '3px' }}>CABINET</div>
                </div>
              </div>
            </div>

            {/* Institution name */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                color: '#1e3a8a',
                fontSize: '20px',
                fontWeight: 600,
                letterSpacing: '1px',
                marginBottom: '8px',
              }}>
                CABINET DE CARTOGRAPHIE NUMÉRIQUE
              </h3>
              <h4 style={{
                color: '#1e40af',
                fontSize: '18px',
                letterSpacing: '1px',
              }}>
                DE TÉLÉDÉTECTION ET DE LA STATISTIQUE
              </h4>
              <div style={{
                width: '192px',
                height: '4px',
                background: 'linear-gradient(to right, transparent, #1e3a8a, transparent)',
                margin: '16px auto 0',
              }} />
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#172554',
              letterSpacing: '2px',
              marginBottom: '8px',
            }}>
              {t.title}
            </h1>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '64px',
                height: '2px',
                background: 'linear-gradient(to right, transparent, #15803d)',
              }} />
              <Award style={{ width: '32px', height: '32px', color: '#15803d' }} />
              <div style={{
                width: '64px',
                height: '2px',
                background: 'linear-gradient(to left, transparent, #15803d)',
              }} />
            </div>
          </div>

          {/* Body */}
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '960px',
          }}>
            <p style={{
              color: '#1f2937',
              fontSize: '18px',
              marginBottom: '32px',
              lineHeight: '1.75',
            }}>
              {t.certifies}
            </p>

            {/* Recipient Name */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'inline-block', position: 'relative' }}>
                <h2 style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  color: '#172554',
                  marginBottom: '8px',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {recipientName}
                </h2>
                <div style={{
                  height: '4px',
                  background: 'linear-gradient(to right, #1e3a8a, #1e40af, #1e3a8a)',
                  borderRadius: '9999px',
                }} />
              </div>
            </div>

            <p style={{
              color: '#1f2937',
              fontSize: '18px',
              marginBottom: '24px',
              lineHeight: '1.75',
            }}>
              {t.hasCompleted}
            </p>

            {/* Course Name */}
            <div style={{
              background: 'linear-gradient(to right, #eff6ff, #f0fdf4, #eff6ff)',
              border: '2px solid #bfdbfe',
              borderRadius: '8px',
              padding: '24px',
              marginBottom: '32px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            }}>
              <h3 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#172554',
              }}>
                {courseName}
              </h3>
            </div>

            <p style={{
              color: '#374151',
              fontSize: '16px',
              fontStyle: 'italic',
              lineHeight: '1.75',
            }}>
              {t.attestation}
            </p>
          </div>

          {/* Footer */}
          <div style={{ width: '100%' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              marginBottom: '24px',
            }}>
              {/* Date */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#1e40af' }} />
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a8a',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {t.issueDate}
                  </p>
                </div>
                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937' }}>{completionDate}</p>
              </div>

              {/* Certificate ID */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                }}>
                  <Shield style={{ width: '20px', height: '20px', color: '#1e40af' }} />
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a8a',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}>
                    {t.certificateNumber}
                  </p>
                </div>
                <p style={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  fontFamily: 'monospace',
                }}>
                  {certificateId}
                </p>
              </div>

              {/* Signature */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '8px' }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#1e3a8a',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '8px',
                  }}>
                    {t.signature}
                  </p>
                  <div style={{
                    position: 'relative',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                  }}>
                    <div style={{
                      fontSize: '28px',
                      fontWeight: 'bold',
                      color: '#172554',
                      fontStyle: 'italic',
                      marginBottom: '8px',
                      fontFamily: "'Brush Script MT', cursive",
                    }}>
                      CCNTS
                    </div>
                  </div>
                  <div style={{
                    width: '192px',
                    height: '2px',
                    backgroundColor: '#1e3a8a',
                    margin: '0 auto',
                  }} />
                </div>
              </div>
            </div>

            {/* Seal */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '16px',
            }}>
              <div style={{ position: 'relative', width: '96px', height: '96px' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#1e3a8a',
                  borderRadius: '50%',
                  opacity: 0.1,
                }} />
                <div style={{
                  position: 'absolute',
                  inset: '8px',
                  border: '4px dashed #1e40af',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <Shield style={{
                      width: '32px',
                      height: '32px',
                      color: '#1e3a8a',
                      margin: '0 auto 4px',
                    }} />
                    <p style={{
                      fontSize: '8px',
                      fontWeight: 'bold',
                      color: '#1e3a8a',
                      lineHeight: 1.2,
                    }}>
                      {t.seal.split(' ')[0]}<br />{t.seal.split(' ')[1]}<br />{t.seal.split(' ')[2] || ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification footer */}
            <p style={{
              fontSize: '12px',
              color: '#4b5563',
              textAlign: 'center',
              fontStyle: 'italic',
            }}>
              {t.footer}
            </p>
          </div>
        </div>

        {/* Watermark */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            color: '#1e3a8a',
            opacity: 0.02,
            transform: 'rotate(-45deg)',
          }}>
            <p style={{
              fontSize: '144px',
              fontWeight: 'bold',
              letterSpacing: '10px',
            }}>
              CCNTS
            </p>
          </div>
        </div>
      </div>
    );
  }
);

CertificateTemplate.displayName = 'CertificateTemplate';
