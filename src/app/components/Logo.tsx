import logoSrc from "../../imports/t_l_chargement-2.png";

interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClass = sizeClasses[size];

  return (
    <img
      src={logoSrc}
      alt="CCNTS - Cabinet de Cartographie Numérique, de Télédétection et de Statistiques"
      className={`${sizeClass} object-contain ${className}`}
    />
  );
}
