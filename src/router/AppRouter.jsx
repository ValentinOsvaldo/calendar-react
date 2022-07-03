import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore()
  // const authStatus = 'not-authenticated'; // authenticated || not-authenticated || checking

  useEffect(() => {
    checkAuthToken();
  }, [])

  if (status === 'checking') {
    return (
      <h3>cargando...</h3>
    )
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<CalendarPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
