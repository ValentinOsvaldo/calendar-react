import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  const authStatus = 'authenticated'; // authenticated || not-authenticated

  return (
    <Routes>
      {authStatus === 'not-authenticated' ? (
        <>
          <Route path="login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="login" />} />
        </>
      ) : (
        <Route path="/" element={<CalendarPage />} />
      )}
    </Routes>
  );
};
