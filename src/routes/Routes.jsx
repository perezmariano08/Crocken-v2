import React from 'react'
import { BrowserRouter, Route, Routes as ReactDomRoutes, Navigate } from 'react-router-dom'

// ... (importaciones de páginas y componentes)

const HomeRoute = () => (
  <Route path='/home' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><Home/></PrivateLayout></ProtectedRoute>} />
);

const LoginRoute = () => (
  <Route path='/login' element={<Layout><Login/></Layout>} />
);

const LoadingRoute = () => (
  <Route path='/loading' element={<Layout><LoadingPage/></Layout>} />
);

const RegisterRoute = () => (
  <Route path='/register' element={<Layout><Register/></Layout>} />
);

const NotFoundRoute = () => (
  <Route path='*' element={<ProtectedRoute redirectTo='/login'><Layout><PageNotFound/></Layout></ProtectedRoute>} />
);

const AboutUsRoute = () => (
  <Route path='/about-us' element={<ProtectedRoute redirectTo='/login'><PrivateLayout><AboutUs/></PrivateLayout></ProtectedRoute>} />
);

// ... (definir rutas para otras páginas)

const Routes = () => {
  return (
    <ReactDomRoutes>
      <BrowserRouter>
        <HomeRoute />
        <LoginRoute />
        <LoadingRoute />
        <RegisterRoute />
        <NotFoundRoute />
        <AboutUsRoute />
        {/* ... (definir rutas para otras páginas) */}
        {/* Asegúrate de agregar nuevas rutas de esta manera */}
        <Route index element={<Navigate to='/loading' />} />
      </BrowserRouter>
    </ReactDomRoutes>
  );
}

export default Routes;
