import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '../lib/i18n';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface LanguageSwitcherProps {
  variant?: 'default' | 'mobile' | 'compact';
  showFlag?: boolean;
  showText?: boolean;
}

export function LanguageSwitcher({
  variant = 'default',
  showFlag = true,
  showText = true,
}: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = SUPPORTED_LANGUAGES[i18n.language as LanguageCode] || SUPPORTED_LANGUAGES.fr;

  const changeLanguage = async (langCode: LanguageCode) => {
    await i18n.changeLanguage(langCode);
    setIsOpen(false);

    // Événement personnalisé pour notifier le changement de langue
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: langCode } }));
  };

  // Version Desktop (Dropdown)
  if (variant === 'default') {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all"
          >
            <Globe className="w-4 h-4 text-gray-600" />
            {showFlag && <span className="text-lg">{currentLanguage.flag}</span>}
            {showText && (
              <span className="hidden sm:inline font-medium text-gray-700">
                {currentLanguage.nativeName}
              </span>
            )}
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <div className="px-3 py-2 text-sm font-semibold text-gray-700 border-b">
            {t('common.selectLanguage')}
          </div>
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => changeLanguage(code as LanguageCode)}
              className="flex items-center justify-between px-3 py-2.5 cursor-pointer hover:bg-blue-50"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{lang.flag}</span>
                <div>
                  <p className="font-medium text-gray-900">{lang.nativeName}</p>
                  <p className="text-xs text-gray-500">{lang.name}</p>
                </div>
              </div>
              {i18n.language === code && (
                <Check className="w-5 h-5 text-blue-600" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Version Mobile (Liste compacte)
  if (variant === 'mobile') {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">{t('common.language')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">{currentLanguage.flag}</span>
            <span className="text-sm text-gray-600">{currentLanguage.nativeName}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {isOpen && (
          <div className="mt-2 space-y-1 px-4">
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
              <button
                key={code}
                onClick={() => changeLanguage(code as LanguageCode)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                  i18n.language === code
                    ? 'bg-blue-50 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{lang.nativeName}</p>
                    <p className="text-xs text-gray-500">{lang.name}</p>
                  </div>
                </div>
                {i18n.language === code && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Version Compact (Icône seule avec tooltip)
  if (variant === 'compact') {
    return (
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-gray-100"
            title={t('common.selectLanguage')}
          >
            <span className="text-xl">{currentLanguage.flag}</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48">
          {Object.entries(SUPPORTED_LANGUAGES).map(([code, lang]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => changeLanguage(code as LanguageCode)}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{lang.flag}</span>
                <span className="font-medium">{lang.nativeName}</span>
              </div>
              {i18n.language === code && (
                <Check className="w-4 h-4 text-blue-600" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return null;
}

// Hook pour détecter les changements de langue
export function useLanguageChange(callback: (language: string) => void) {
  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent) => {
      callback(event.detail.language);
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
    };
  }, [callback]);
}
