import { startTransition } from 'react';
import { Link, LinkProps, useNavigate } from 'react-router-dom';

/**
 * A wrapper around React Router's Link that uses startTransition
 * to prevent "component suspended" errors when navigating to lazy-loaded routes
 */
export function TransitionLink({ to, onClick, ...props }: LinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Call any existing onClick handler
    onClick?.(e);

    // Only handle if the event wasn't prevented
    if (!e.defaultPrevented) {
      e.preventDefault();
      startTransition(() => {
        navigate(to as string);
      });
    }
  };

  return <Link to={to} onClick={handleClick} {...props} />;
}
