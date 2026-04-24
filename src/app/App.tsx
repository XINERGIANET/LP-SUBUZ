import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { NosotrosPage } from './pages/NosotrosPage';
import { ProductosPage } from './pages/ProductosPage';
import { ProcesoPage } from './pages/ProcesoPage';
import { ClientesPage } from './pages/ClientesPage';
import { ContactoPage } from './pages/ContactoPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/proceso" element={<ProcesoPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
