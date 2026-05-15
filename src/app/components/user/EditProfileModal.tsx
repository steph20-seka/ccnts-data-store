import { useState, useRef, useEffect, useCallback } from 'react';
import {
  X, Camera, Save, Loader2, CheckCircle, AlertCircle,
  User, Mail, Phone, Calendar, MapPin, Globe, Home, Trash2, Upload,
  ChevronDown,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../contexts/AuthContext';
import { UserAvatar } from './UserAvatar';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_SIZE_MB = 5;

const COUNTRY_CODES = [
  { code: '+225', country: 'CI', label: '🇨🇮 +225' },
  { code: '+33', country: 'FR', label: '🇫🇷 +33' },
  { code: '+32', country: 'BE', label: '🇧🇪 +32' },
  { code: '+41', country: 'CH', label: '🇨🇭 +41' },
  { code: '+1', country: 'US', label: '🇺🇸 +1' },
  { code: '+44', country: 'GB', label: '🇬🇧 +44' },
  { code: '+49', country: 'DE', label: '🇩🇪 +49' },
  { code: '+221', country: 'SN', label: '🇸🇳 +221' },
  { code: '+237', country: 'CM', label: '🇨🇲 +237' },
  { code: '+212', country: 'MA', label: '🇲🇦 +212' },
  { code: '+216', country: 'TN', label: '🇹🇳 +216' },
  { code: '+213', country: 'DZ', label: '🇩🇿 +213' },
  { code: '+234', country: 'NG', label: '🇳🇬 +234' },
  { code: '+233', country: 'GH', label: '🇬🇭 +233' },
];

function splitPhone(full: string): { prefix: string; number: string } {
  if (!full) return { prefix: '+225', number: '' };
  for (const c of COUNTRY_CODES) {
    if (full.startsWith(c.code)) {
      return { prefix: c.code, number: full.slice(c.code.length).trim() };
    }
  }
  return { prefix: '+225', number: full };
}

export function EditProfileModal({ isOpen, onClose }: EditProfileModalProps) {
  const { user, extendedProfile, updateExtendedProfile, uploadProfilePhoto, deleteProfilePhoto, refreshExtendedProfile, reloadUser } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // --- Photo state ---
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [pendingFile, setPendingFile] = useState<File | null>(null);
  const [photoRemoved, setPhotoRemoved] = useState(false);
  const [photoError, setPhotoError] = useState('');
  const [photoUploading, setPhotoUploading] = useState(false);

  // --- Main fields ---
  const [fullName, setFullName] = useState('');

  // --- Phone ---
  const [phonePrefix, setPhonePrefix] = useState('+225');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPrefixDropdown, setShowPrefixDropdown] = useState(false);

  // --- Extended fields ---
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [location, setLocation] = useState('');

  // --- UI state ---
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Initialise fields from current user data
  const initFields = useCallback(() => {
    setFullName(user?.fullName || '');
    setPhotoPreview(null);
    setPendingFile(null);
    setPhotoRemoved(false);
    setPhotoError('');
    setSuccess(false);
    setError('');
    setFieldErrors({});

    const { prefix, number } = splitPhone(extendedProfile?.phone || '');
    setPhonePrefix(prefix);
    setPhoneNumber(number);
    setBirthdate(extendedProfile?.birthdate || '');
    setAddress(extendedProfile?.address || '');
    setCity(extendedProfile?.city || '');
    setCountry(extendedProfile?.country || '');
    setLocation(extendedProfile?.location || '');
  }, [user, extendedProfile]);

  useEffect(() => {
    if (isOpen) {
      refreshExtendedProfile().then(() => initFields());
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) initFields();
  }, [extendedProfile, user?.fullName, user?.photoURL]);

  // Detect dirty state
  const originalPhone = extendedProfile?.phone || '';
  const currentPhone = phoneNumber.trim() ? `${phonePrefix}${phoneNumber.trim()}` : '';
  const isDirty =
    fullName !== (user?.fullName || '') ||
    currentPhone !== originalPhone ||
    birthdate !== (extendedProfile?.birthdate || '') ||
    address !== (extendedProfile?.address || '') ||
    city !== (extendedProfile?.city || '') ||
    country !== (extendedProfile?.country || '') ||
    location !== (extendedProfile?.location || '') ||
    pendingFile !== null ||
    photoRemoved;

  // --- Photo handlers ---
  const handlePhotoClick = () => {
    setPhotoError('');
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setPhotoError('Format non accepté. Utilisez JPG, PNG ou WebP.');
      return;
    }
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setPhotoError(`Fichier trop volumineux (max ${MAX_SIZE_MB} Mo).`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotoPreview(ev.target?.result as string);
      setPendingFile(file);
      setPhotoRemoved(false);
      setPhotoError('');
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    setPhotoPreview(null);
    setPendingFile(null);
    setPhotoRemoved(true);
    setPhotoError('');
  };

  const handleReplacePhoto = () => {
    setPhotoPreview(null);
    setPendingFile(null);
    setPhotoError('');
    fileInputRef.current?.click();
  };

  // --- Validation ---
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Le nom complet est requis.';
    else if (fullName.trim().length < 2) errs.fullName = 'Minimum 2 caractères.';
    if (phoneNumber.trim() && !/^\d[\d\s\-]{5,14}$/.test(phoneNumber.trim())) {
      errs.phone = 'Numéro invalide (chiffres uniquement, 6–15 caractères).';
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // --- Save ---
  const handleSave = async () => {
    if (!validate()) return;
    setLoading(true);
    setError('');
    setPhotoError('');

    try {
      // 1. Handle photo changes
      if (photoRemoved) {
        // User wants to remove photo
        setPhotoUploading(true);
        const result = await deleteProfilePhoto();
        setPhotoUploading(false);
        if (!result.success) {
          setError(result.error || 'Impossible de supprimer la photo. Veuillez réessayer.');
          setLoading(false);
          return;
        }
        // Reload user to reflect photo deletion
        await reloadUser();
      } else if (pendingFile) {
        // User wants to upload a new photo
        setPhotoUploading(true);
        const result = await uploadProfilePhoto(pendingFile);
        setPhotoUploading(false);
        if (!result.success) {
          setPhotoError(result.error || 'Impossible d\'importer la photo. Vérifiez le format ou la taille du fichier.');
          setLoading(false);
          return;
        }
        // Reload user to reflect new photo
        await reloadUser();
      }

      // 2. Build the full phone string
      const phone = phoneNumber.trim() ? `${phonePrefix}${phoneNumber.trim()}` : '';

      // 3. Update extended profile (also updates displayName in Auth + Firestore)
      const result = await updateExtendedProfile({
        displayName: fullName.trim(),
        phone,
        birthdate,
        address,
        city,
        country,
        location,
      });

      if (!result.success) {
        setError(result.error || 'Impossible d\'enregistrer les informations du profil. Veuillez réessayer.');
        setLoading(false);
        return;
      }

      // 4. Refresh extended profile to get latest data
      await refreshExtendedProfile();

      // Success!
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1600);
    } catch (e: any) {
      console.error('Profile update error:', e);
      const errorMsg = e?.message || '';
      if (errorMsg.includes('network') || errorMsg.includes('offline')) {
        setError('Connexion instable. Vérifiez votre réseau.');
      } else if (errorMsg.includes('permission')) {
        setError('Vous n\'avez pas les permissions nécessaires pour modifier ce profil.');
      } else {
        setError('Impossible d\'enregistrer les modifications pour le moment. Veuillez réessayer.');
      }
    } finally {
      setLoading(false);
      setPhotoUploading(false);
    }
  };

  const handleClose = () => {
    if (loading) return;
    initFields();
    onClose();
  };

  const currentAvatarSrc = photoRemoved ? undefined : (photoPreview || user?.photoURL);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg my-6 overflow-hidden"
          >
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Modal header */}
            <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">Modifier le profil</h2>
                  <p className="text-blue-300 text-sm mt-0.5">Mettez à jour vos informations personnelles</p>
                </div>
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="p-2 rounded-xl hover:bg-white/15 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="overflow-y-auto max-h-[80vh]">

              {/* ── SECTION: Photo ── */}
              <div className="px-6 pt-6 pb-4 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Photo de profil</p>

                <div className="flex items-center gap-5">
                  {/* Avatar + camera overlay */}
                  <div className="relative flex-shrink-0">
                    <button
                      type="button"
                      onClick={handlePhotoClick}
                      className="relative group block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      title="Changer la photo"
                    >
                      <UserAvatar
                        photoURL={currentAvatarSrc}
                        fullName={fullName || user?.fullName}
                        email={user?.email}
                        size="xl"
                        className="ring-4 ring-blue-100 group-hover:ring-blue-300 transition-all"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Camera className="w-7 h-7 text-white" />
                      </div>
                      {/* Camera badge */}
                      <div className="absolute bottom-0.5 right-0.5 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                    </button>
                    {photoUploading && (
                      <div className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center">
                        <Loader2 className="w-6 h-6 text-white animate-spin" />
                      </div>
                    )}
                  </div>

                  {/* Right side actions */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <button
                      type="button"
                      onClick={handlePhotoClick}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm font-medium transition-colors border border-blue-200"
                    >
                      <Upload className="w-4 h-4" />
                      {pendingFile ? 'Remplacer la photo' : 'Choisir une photo'}
                    </button>

                    {(currentAvatarSrc || pendingFile) && (
                      <button
                        type="button"
                        onClick={pendingFile ? handleReplacePhoto : handleRemovePhoto}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 text-sm transition-colors border border-gray-200 hover:border-red-200"
                      >
                        <Trash2 className="w-4 h-4" />
                        Supprimer la photo
                      </button>
                    )}

                    <p className="text-xs text-gray-400 leading-relaxed">JPG, PNG ou WebP — max {MAX_SIZE_MB} Mo</p>
                  </div>
                </div>

                {photoError && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 flex items-center gap-1.5 text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-3 py-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" /> {photoError}
                  </motion.p>
                )}
              </div>

              {/* ── SECTION: Informations principales ── */}
              <div className="px-6 py-5 border-b border-gray-100 space-y-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Informations principales</p>

                {/* Full name */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <User className="w-4 h-4 text-gray-400" /> Nom complet
                  </Label>
                  <Input
                    type="text"
                    value={fullName}
                    onChange={(e) => { setFullName(e.target.value); setFieldErrors(p => ({ ...p, fullName: '' })); }}
                    placeholder="Prénom Nom"
                    className={fieldErrors.fullName ? 'border-red-400' : ''}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                {/* Email (read-only) */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <Mail className="w-4 h-4 text-gray-400" /> Adresse email
                  </Label>
                  <Input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="bg-gray-50 text-gray-400 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-400 mt-1">Modifiable dans la section Sécurité du compte</p>
                </div>

                {/* Phone with country code */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <Phone className="w-4 h-4 text-gray-400" /> Téléphone
                  </Label>
                  <div className="flex gap-2">
                    {/* Country code dropdown */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowPrefixDropdown(!showPrefixDropdown)}
                        className="flex items-center gap-1.5 h-10 px-3 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 text-sm font-medium text-gray-700 transition-colors whitespace-nowrap"
                      >
                        {COUNTRY_CODES.find(c => c.code === phonePrefix)?.label || phonePrefix}
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${showPrefixDropdown ? 'rotate-180' : ''}`} />
                      </button>
                      {showPrefixDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-xl z-20 max-h-52 overflow-y-auto">
                          {COUNTRY_CODES.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => { setPhonePrefix(c.code); setShowPrefixDropdown(false); }}
                              className={`w-full flex items-center gap-2 px-3 py-2.5 text-sm text-left hover:bg-blue-50 transition-colors ${phonePrefix === c.code ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
                            >
                              {c.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <Input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => { setPhoneNumber(e.target.value); setFieldErrors(p => ({ ...p, phone: '' })); }}
                      placeholder="07 00 00 00 00"
                      className={`flex-1 ${fieldErrors.phone ? 'border-red-400' : ''}`}
                    />
                  </div>
                  {fieldErrors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {fieldErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* ── SECTION: Informations complémentaires ── */}
              <div className="px-6 py-5 space-y-4">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Informations complémentaires</p>

                {/* Birthdate */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" /> Date de naissance
                  </Label>
                  <Input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    max={new Date().toISOString().split('T')[0]}
                    className="text-gray-700"
                  />
                </div>

                {/* Address */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <Home className="w-4 h-4 text-gray-400" /> Adresse
                  </Label>
                  <Input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Rue, quartier…"
                  />
                </div>

                {/* City + Country */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Ville / Commune</Label>
                    <Input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Abidjan…"
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                      <Globe className="w-4 h-4 text-gray-400" /> Pays
                    </Label>
                    <Input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Côte d'Ivoire…"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-1.5 mb-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" /> Localisation / Adresse géographique
                  </Label>
                  <Input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Cocody, Abidjan, Côte d'Ivoire"
                  />
                  <p className="text-xs text-gray-400 mt-1">Précisez votre localisation géographique complète</p>
                </div>
              </div>

              {/* ── Feedback + Actions ── */}
              <div className="px-6 pb-6 space-y-3 border-t border-gray-100 pt-4">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-2.5 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    Profil mis à jour avec succès !
                  </motion.div>
                )}

                <div className="flex gap-3 pt-1">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                    disabled={loading}
                  >
                    Annuler
                  </Button>
                  <Button
                    onClick={handleSave}
                    disabled={loading || success || !isDirty}
                    className={`flex-1 text-white transition-all ${
                      isDirty && !loading && !success
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-blue-300 cursor-not-allowed'
                    }`}
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {photoUploading
                          ? (photoRemoved ? 'Suppression de la photo…' : 'Téléchargement de la photo…')
                          : 'Enregistrement en cours…'
                        }
                      </>
                    ) : success ? (
                      <><CheckCircle className="w-4 h-4 mr-2" /> Profil mis à jour avec succès</>
                    ) : (
                      <><Save className="w-4 h-4 mr-2" /> Enregistrer les modifications</>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
