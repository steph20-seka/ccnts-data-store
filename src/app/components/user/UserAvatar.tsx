interface UserAvatarProps {
  photoURL?: string | null;
  fullName?: string | null;
  email?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  xs: { container: 'w-6 h-6', text: 'text-xs' },
  sm: { container: 'w-8 h-8', text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-14 h-14', text: 'text-lg' },
  xl: { container: 'w-20 h-20', text: 'text-2xl' },
};

function getInitials(fullName?: string | null, email?: string | null): string {
  if (fullName && fullName.trim()) {
    const parts = fullName.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return fullName.substring(0, 2).toUpperCase();
  }
  if (email) {
    return email.substring(0, 2).toUpperCase();
  }
  return 'CC';
}

function getAvatarColor(name?: string | null, email?: string | null): string {
  const str = name || email || 'CCNTS';
  const colors = [
    'from-blue-600 to-blue-700',
    'from-orange-500 to-orange-600',
    'from-emerald-500 to-emerald-600',
    'from-violet-600 to-violet-700',
    'from-rose-500 to-rose-600',
    'from-cyan-600 to-cyan-700',
    'from-amber-500 to-amber-600',
    'from-indigo-600 to-indigo-700',
  ];
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}

export function UserAvatar({ photoURL, fullName, email, size = 'md', className = '' }: UserAvatarProps) {
  const { container, text } = sizeMap[size];
  const initials = getInitials(fullName, email);
  const gradientColor = getAvatarColor(fullName, email);

  if (photoURL) {
    return (
      <img
        src={photoURL}
        alt={fullName || 'Avatar'}
        className={`${container} rounded-full object-cover ring-2 ring-white shadow-sm ${className}`}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  }

  return (
    <div
      className={`${container} rounded-full bg-gradient-to-br ${gradientColor} flex items-center justify-center ring-2 ring-white shadow-sm flex-shrink-0 ${className}`}
    >
      <span className={`${text} font-semibold text-white select-none`}>{initials}</span>
    </div>
  );
}
