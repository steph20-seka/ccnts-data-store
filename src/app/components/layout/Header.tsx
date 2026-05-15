import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, UserPlus, LogIn, User, LogOut, BookOpen, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '../../contexts/AuthContext';
import { Logo } from '../Logo';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { TransitionLink } from '../TransitionLink';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Projets', path: '/projects' },
    { name: 'Académie', path: '/academy' },
    { name: 'Vente de données', path: '/data-store' },
    { name: 'À propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
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

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Language Switcher */}
            <LanguageSwitcher variant="compact" />
            
            {isAuthenticated ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-3 lg:px-4 py-2 rounded-lg hover:bg-geospatial-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-geospatial-blue-600 to-geospatial-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-geospatial-gray-700 text-sm lg:text-base max-w-[100px] truncate">
                    {user?.fullName?.split(' ')[0]}
                  </span>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-geospatial-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-geospatial-gray-100">
                      <p className="text-sm text-geospatial-gray-500">Connecté en tant que</p>
                      <p className="text-geospatial-gray-900 truncate">{user?.fullName}</p>
                      <p className="text-sm text-geospatial-gray-500 truncate">{user?.email}</p>
                    </div>
                    <TransitionLink
                      to="/my-courses"
                      className="flex items-center gap-3 px-4 py-2 text-geospatial-gray-700 hover:bg-geospatial-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <BookOpen className="w-4 h-4" />
                      Mes cours
                    </TransitionLink>
                    <TransitionLink
                      to="/my-certificates"
                      className="flex items-center gap-3 px-4 py-2 text-geospatial-gray-700 hover:bg-geospatial-gray-50 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Award className="w-4 h-4" />
                      Mes certificats
                    </TransitionLink>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm" asChild>
                  <TransitionLink to="/login">
                    <LogIn className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">Connexion</span>
                  </TransitionLink>
                </Button>
                <Button size="sm" asChild className="bg-geospatial-blue-600 hover:bg-geospatial-blue-700">
                  <TransitionLink to="/signup">
                    <UserPlus className="w-4 h-4 mr-2" />
                    <span className="hidden lg:inline">Créer un compte</span>
                  </TransitionLink>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-geospatial-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-geospatial-gray-200">
            <div className="flex flex-col gap-2">
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
              
              {/* Auth Buttons Mobile */}
              <div className="mt-4 space-y-2">
                {/* Language Switcher Mobile */}
                <div className="mb-4 pt-4 border-t border-geospatial-gray-200">
                  <LanguageSwitcher variant="mobile" />
                </div>

                {isAuthenticated ? (
                  <>
                    <div className="px-4 py-3 bg-geospatial-gray-50 rounded-lg">
                      <p className="text-sm text-geospatial-gray-500">Connecté en tant que</p>
                      <p className="text-geospatial-gray-900 truncate">{user?.fullName}</p>
                    </div>
                    <Button variant="outline" asChild className="w-full">
                      <TransitionLink to="/my-courses" onClick={() => setIsMenuOpen(false)}>
                        <BookOpen className="w-4 h-4 mr-2" />
                        Mes cours
                      </TransitionLink>
                    </Button>
                    <Button variant="outline" asChild className="w-full">
                      <TransitionLink to="/my-certificates" onClick={() => setIsMenuOpen(false)}>
                        <Award className="w-4 h-4 mr-2" />
                        Mes certificats
                      </TransitionLink>
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Se déconnecter
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="outline" asChild className="w-full">
                      <TransitionLink to="/login" onClick={() => setIsMenuOpen(false)}>
                        <LogIn className="w-4 h-4 mr-2" />
                        Connexion
                      </TransitionLink>
                    </Button>
                    <Button asChild className="w-full bg-geospatial-blue-600 hover:bg-geospatial-blue-700">
                      <TransitionLink to="/signup" onClick={() => setIsMenuOpen(false)}>
                        <UserPlus className="w-4 h-4 mr-2" />
                        Créer un compte
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
  );
}