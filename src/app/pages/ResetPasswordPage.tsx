import { Navigate } from 'react-router-dom';

export function ResetPasswordPage() {
  // Rediriger vers la nouvelle page de mot de passe oublié
  return <Navigate to="/forgot-password" replace />;
}

export default ResetPasswordPage;