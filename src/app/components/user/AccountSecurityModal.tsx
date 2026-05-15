import { useState } from 'react';
import { X, Lock, Mail, ShieldCheck, ShieldAlert, Eye, EyeOff, Loader2, CheckCircle, AlertCircle, LogOut, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../contexts/AuthContext';
import { useFirebaseAuth } from '../../contexts/FirebaseAuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { UserAvatar } from './UserAvatar';

interface AccountSecurityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'overview' | 'password' | 'email';

export function AccountSecurityModal({ isOpen, onClose }: AccountSecurityModalProps) {
  const { user, sendVerificationEmail, logout } = useAuth();
  const { updatePassword, reloadUser } = useFirebaseAuth();

  const [activeTab, setActiveTab] = useState<Tab>('overview');

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwSuccess, setPwSuccess] = useState(false);
  const [pwError, setPwError] = useState('');

  // Email verification state
  const [emailLoading, setEmailLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [reloadLoading, setReloadLoading] = useState(false);

  const handlePasswordChange = async () => {
    setPwError('');
    if (!newPassword) { setPwError('Le nouveau mot de passe est requis.'); return; }
    if (newPassword.length < 8) { setPwError('Le mot de passe doit contenir au moins 8 caractères.'); return; }
    if (newPassword !== confirmPassword) { setPwError('Les mots de passe ne correspondent pas.'); return; }

    setPwLoading(true);
    const { error } = await updatePassword(newPassword);
    setPwLoading(false);

    if (error) {
      if (error.code === 'auth/requires-recent-login') {
        setPwError('Reconnectez-vous pour modifier le mot de passe (session expirée).');
      } else {
        setPwError('Erreur lors du changement de mot de passe.');
      }
    } else {
      setPwSuccess(true);
      setNewPassword('');
      setConfirmPassword('');
      setCurrentPassword('');
      setTimeout(() => setPwSuccess(false), 3000);
    }
  };

  const handleSendVerification = async () => {
    setEmailLoading(true);
    setEmailError('');
    const result = await sendVerificationEmail();
    setEmailLoading(false);
    if (result.success) {
      setEmailSuccess(true);
      setTimeout(() => setEmailSuccess(false), 5000);
    } else {
      setEmailError(result.error || 'Erreur lors de l\'envoi.');
    }
  };

  const handleReloadUser = async () => {
    setReloadLoading(true);
    await reloadUser();
    setReloadLoading(false);
  };

  const handleClose = () => {
    setActiveTab('overview');
    setPwError('');
    setPwSuccess(false);
    setEmailError('');
    setEmailSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Aperçu', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'password', label: 'Mot de passe', icon: <Lock className="w-4 h-4" /> },
    { id: 'email', label: 'Vérification', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-5 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Sécurité du compte</h2>
                    <p className="text-slate-300 text-xs mt-0.5">Gérez la sécurité de votre compte</p>
                  </div>
                </div>
                <button onClick={handleClose} className="p-2 rounded-lg hover:bg-white/20 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 bg-gray-50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-medium transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 bg-white'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* OVERVIEW TAB */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Profile summary */}
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <UserAvatar photoURL={user?.photoURL} fullName={user?.fullName} email={user?.email} size="lg" />
                    <div>
                      <p className="font-semibold text-gray-900">{user?.fullName || 'Nom non renseigné'}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                      <div className="mt-1">
                        {user?.emailVerified ? (
                          <span className="inline-flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                            <ShieldCheck className="w-3 h-3" /> Compte vérifié
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                            <ShieldAlert className="w-3 h-3" /> Email non vérifié
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Security items */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                          <Lock className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">Mot de passe</p>
                          <p className="text-xs text-gray-400">Dernière modification inconnue</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab('password')}
                        className="text-xs text-blue-600 font-medium hover:text-blue-700"
                      >
                        Modifier →
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${user?.emailVerified ? 'bg-emerald-50' : 'bg-amber-50'}`}>
                          <Mail className={`w-4 h-4 ${user?.emailVerified ? 'text-emerald-600' : 'text-amber-600'}`} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800">Email</p>
                          <p className="text-xs text-gray-400">{user?.email}</p>
                        </div>
                      </div>
                      {!user?.emailVerified && (
                        <button
                          onClick={() => setActiveTab('email')}
                          className="text-xs text-amber-600 font-medium hover:text-amber-700"
                        >
                          Vérifier →
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Logout all */}
                  <div className="pt-2 border-t border-gray-100">
                    <button
                      onClick={() => { logout(); handleClose(); }}
                      className="w-full flex items-center gap-2 p-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      Se déconnecter de ce compte
                    </button>
                  </div>
                </div>
              )}

              {/* PASSWORD TAB */}
              {activeTab === 'password' && (
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-xl text-sm text-blue-700 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Choisissez un mot de passe fort d'au moins 8 caractères avec des lettres, chiffres et symboles.</span>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Nouveau mot de passe</Label>
                    <div className="relative">
                      <Input
                        type={showNew ? 'text' : 'password'}
                        value={newPassword}
                        onChange={(e) => { setNewPassword(e.target.value); setPwError(''); }}
                        placeholder="••••••••"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNew(!showNew)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {newPassword && (
                      <div className="mt-1.5 flex gap-1">
                        {[8, 12, 16].map((len, i) => (
                          <div
                            key={i}
                            className={`h-1 flex-1 rounded-full transition-colors ${
                              newPassword.length >= len
                                ? i === 0 ? 'bg-red-400' : i === 1 ? 'bg-amber-400' : 'bg-emerald-500'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1.5 block">Confirmer le mot de passe</Label>
                    <div className="relative">
                      <Input
                        type={showConfirm ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => { setConfirmPassword(e.target.value); setPwError(''); }}
                        placeholder="••••••••"
                        className={`pr-10 ${confirmPassword && newPassword !== confirmPassword ? 'border-red-400' : ''}`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {pwError && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" /> {pwError}
                    </motion.div>
                  )}
                  {pwSuccess && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2.5 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" /> Mot de passe modifié avec succès !
                    </motion.div>
                  )}

                  <Button
                    onClick={handlePasswordChange}
                    disabled={pwLoading || pwSuccess}
                    className="w-full bg-slate-800 hover:bg-slate-900 text-white"
                  >
                    {pwLoading ? (
                      <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Modification…</>
                    ) : (
                      <><Lock className="w-4 h-4 mr-2" /> Changer le mot de passe</>
                    )}
                  </Button>
                </div>
              )}

              {/* EMAIL VERIFICATION TAB */}
              {activeTab === 'email' && (
                <div className="space-y-4">
                  {user?.emailVerified ? (
                    <div className="flex flex-col items-center py-6 text-center gap-3">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                        <ShieldCheck className="w-8 h-8 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Email vérifié</p>
                        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                        <p className="text-xs text-gray-400 mt-2">Votre adresse email est confirmée et sécurisée.</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col items-center py-4 text-center gap-3">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                          <ShieldAlert className="w-8 h-8 text-amber-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Email non vérifié</p>
                          <p className="text-sm text-gray-500 mt-1">{user?.email}</p>
                          <p className="text-xs text-gray-400 mt-2">Vérifiez votre email pour sécuriser votre compte et accéder à toutes les fonctionnalités.</p>
                        </div>
                      </div>

                      {emailError && (
                        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2.5 text-sm">
                          <AlertCircle className="w-4 h-4 flex-shrink-0" /> {emailError}
                        </div>
                      )}
                      {emailSuccess && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2.5 text-sm">
                          <CheckCircle className="w-4 h-4 flex-shrink-0" /> Email envoyé ! Vérifiez votre boîte de réception.
                        </motion.div>
                      )}

                      <Button
                        onClick={handleSendVerification}
                        disabled={emailLoading || emailSuccess}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        {emailLoading ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Envoi…</>
                        ) : emailSuccess ? (
                          <><CheckCircle className="w-4 h-4 mr-2" /> Email envoyé</>
                        ) : (
                          <><Mail className="w-4 h-4 mr-2" /> Envoyer l'email de vérification</>
                        )}
                      </Button>

                      <button
                        onClick={handleReloadUser}
                        disabled={reloadLoading}
                        className="w-full flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700 py-2"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${reloadLoading ? 'animate-spin' : ''}`} />
                        Actualiser le statut de vérification
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
