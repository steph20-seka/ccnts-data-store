import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Menu, X, UserPlus, LogIn, LogOut, BookOpen, Award,
  Settings, Shield, ChevronDown, UserCircle, ShieldCheck, ShieldAlert
} from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { TransitionLink } from '../TransitionLink';
import { UserAvatar } from '../user/UserAvatar';
import { EditProfileModal } from '../user/EditProfileModal';
import { AccountSecurityModal } from '../user/AccountSecurityModal';

export function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: t('common.home'), path: '/' },
    { name: t('common.services'), path: '/services' },
    { name: t('common.projects'), path: '/projects' },
    { name: t('common.academy'), path: '/academy' },
    { name: t('common.dataStore'), path: '/data-store' },
    { name: t('common.about'), path: '/about' },
    { name: t('common.contact'), path: '/contact' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  const openEditProfile = () => {
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    setShowEditProfile(true);
  };

  const openSecurity = () => {
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    setShowSecurity(true);
  };

  // Derive display name — first word only for compact trigger
  const firstName = user?.fullName?.split(' ')[0] || user?.email?.split('@')[0] || t('common.account');

  return (
    <>
      <header className="bg-white border-b border-geospatial-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 gap-8">
            {/* Logo */}
            <TransitionLink to="/" className="flex items-center flex-shrink-0">
              <Logo size="md" />
            </TransitionLink>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
              {navigation.map((item) => (
                <TransitionLink
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all text-sm font-medium whitespace-nowrap ${
                    isActive(item.path)
                      ? 'bg-geospatial-blue-600 text-white shadow-md'
                      : 'text-geospatial-gray-700 hover:bg-geospatial-blue-50 hover:text-geospatial-blue-900'
                  }`}
                >
                  {item.name}
                </TransitionLink>
              ))}
            </nav>

            {/* Right section — Desktop */}
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
              <LanguageSwitcher variant="compact" />

              {isAuthenticated ? (
                <div className="relative" ref={userMenuRef}>
                  {/* Trigger button */}
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className={`flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl border transition-all ${
                      isUserMenuOpen
                        ? 'border-blue-200 bg-blue-50 shadow-sm'
                        : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <UserAvatar
                      photoURL={user?.photoURL}
                      fullName={user?.fullName}
                      email={user?.email}
                      size="sm"
                    />
                    <span className="text-gray-700 text-sm font-medium max-w-[90px] truncate">
                      {firstName}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2.5 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">

                      {/* Profile header bloc */}
                      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 px-5 py-5">
                        <div className="flex items-center gap-4">
                          <UserAvatar
                            photoURL={user?.photoURL}
                            fullName={user?.fullName}
                            email={user?.email}
                            size="lg"
                            className="ring-2 ring-white/30"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold truncate">
                              {user?.fullName || t('header.notProvided')}
                            </p>
                            <p className="text-blue-300 text-sm truncate mt-0.5">{user?.email}</p>
                            <div className="mt-2">
                              {user?.emailVerified ? (
                                <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                                  <ShieldCheck className="w-3 h-3" /> {t('header.verified')}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                                  <ShieldAlert className="w-3 h-3" /> {t('header.notVerified')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Menu items */}
                      <div className="py-2">
                        {/* Mon compte */}
                        <button
                          onClick={openEditProfile}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors">
                            <UserCircle className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium">{t('header.editProfile')}</p>
                            <p className="text-xs text-gray-400">{t('profile.mainInfo')}</p>
                          </div>
                        </button>

                        {/* Sécurité */}
                        <button
                          onClick={openSecurity}
                          className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-slate-50 hover:text-slate-800 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-slate-50 group-hover:bg-slate-100 rounded-lg flex items-center justify-center transition-colors">
                            <Shield className="w-4 h-4 text-slate-600" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-medium">{t('header.accountSecurity')}</p>
                            <p className="text-xs text-gray-400">{t('profile.securitySettings')}</p>
                          </div>
                        </button>

                        <div className="my-1.5 border-t border-gray-100 mx-4" />

                        {/* Mes cours */}
                        <TransitionLink
                          to="/my-courses"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-800 transition-colors group"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-orange-50 group-hover:bg-orange-100 rounded-lg flex items-center justify-center transition-colors">
                            <BookOpen className="w-4 h-4 text-orange-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('header.myCourses')}</p>
                            <p className="text-xs text-gray-400">{t('progress.continue')}</p>
                          </div>
                        </TransitionLink>

                        {/* Mes certificats */}
                        <TransitionLink
                          to="/my-certificates"
                          className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors group"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-emerald-50 group-hover:bg-emerald-100 rounded-lg flex items-center justify-center transition-colors">
                            <Award className="w-4 h-4 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{t('header.myCertificates')}</p>
                            <p className="text-xs text-gray-400">{t('certificate.myCertificates')}</p>
                          </div>
                        </TransitionLink>

                        <div className="my-1.5 border-t border-gray-100 mx-4" />

                        {/* Se déconnecter */}
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors group"
                        >
                          <div className="w-8 h-8 bg-red-50 group-hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors">
                            <LogOut className="w-4 h-4 text-red-500" />
                          </div>
                          <p className="text-sm font-medium">{t('common.logout')}</p>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <TransitionLink to="/login">
                      <LogIn className="w-4 h-4 mr-2" />
                      <span className="hidden lg:inline">{t('common.login')}</span>
                    </TransitionLink>
                  </Button>
                  <Button size="sm" asChild className="bg-geospatial-blue-600 hover:bg-geospatial-blue-700">
                    <TransitionLink to="/signup">
                      <UserPlus className="w-4 h-4 mr-2" />
                      <span className="hidden lg:inline">{t('common.signup')}</span>
                    </TransitionLink>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-geospatial-gray-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-geospatial-gray-200">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <TransitionLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-geospatial-blue-50 text-geospatial-blue-900'
                        : 'text-geospatial-gray-700 hover:bg-geospatial-gray-50'
                    }`}
                  >
                    {item.name}
                  </TransitionLink>
                ))}

                <div className="mt-3 pt-3 border-t border-geospatial-gray-200 space-y-2">
                  <div className="mb-3">
                    <LanguageSwitcher variant="mobile" />
                  </div>

                  {isAuthenticated ? (
                    <>
                      {/* Mobile profile card */}
                      <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-xl p-4 mb-3">
                        <div className="flex items-center gap-3">
                          <UserAvatar
                            photoURL={user?.photoURL}
                            fullName={user?.fullName}
                            email={user?.email}
                            size="md"
                            className="ring-2 ring-white/30"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-semibold text-sm truncate">
                              {user?.fullName || t('header.notProvided')}
                            </p>
                            <p className="text-blue-300 text-xs truncate">{user?.email}</p>
                            <div className="mt-1.5">
                              {user?.emailVerified ? (
                                <span className="inline-flex items-center gap-1 text-xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full">
                                  <ShieldCheck className="w-3 h-3" /> {t('header.verified')}
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-full">
                                  <ShieldAlert className="w-3 h-3" /> {t('header.notVerified')}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={openEditProfile}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-800 transition-colors"
                      >
                        <UserCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('header.editProfile')}</span>
                      </button>

                      <button
                        onClick={openSecurity}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-slate-100 text-gray-700 transition-colors"
                      >
                        <Shield className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('header.accountSecurity')}</span>
                      </button>

                      <TransitionLink
                        to="/my-courses"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-800 transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('header.myCourses')}</span>
                      </TransitionLink>

                      <TransitionLink
                        to="/my-certificates"
                        onClick={() => setIsMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-emerald-50 text-gray-700 hover:text-emerald-800 transition-colors"
                      >
                        <Award className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('header.myCertificates')}</span>
                      </TransitionLink>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('common.logout')}</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild className="w-full">
                        <TransitionLink to="/login" onClick={() => setIsMenuOpen(false)}>
                          <LogIn className="w-4 h-4 mr-2" />
                          {t('common.login')}
                        </TransitionLink>
                      </Button>
                      <Button asChild className="w-full bg-geospatial-blue-600 hover:bg-geospatial-blue-700">
                        <TransitionLink to="/signup" onClick={() => setIsMenuOpen(false)}>
                          <UserPlus className="w-4 h-4 mr-2" />
                          {t('common.signup')}
                        </TransitionLink>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Modals */}
      <EditProfileModal isOpen={showEditProfile} onClose={() => setShowEditProfile(false)} />
      <AccountSecurityModal isOpen={showSecurity} onClose={() => setShowSecurity(false)} />
    </>
  );
}
