import { useMemo, useState } from 'react';
import { Container, Theme } from './settings/types';
import Header from './components/generated/Header';
import Footer from './components/generated/Footer';
import HomePage from './components/generated/HomePage';
import ServicesPage from './components/generated/ServicesPage';
import IndustriesPage from './components/generated/IndustriesPage';
import ProjectsPage from './components/generated/ProjectsPage';
import CertificatesPage from './components/generated/CertificatesPage';
import CareersPage from './components/generated/CareersPage';
import AboutPage from './components/generated/AboutPage';
import ContactPage from './components/generated/ContactPage';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'leistungen':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'branchen':
        return <IndustriesPage onNavigate={handleNavigate} />;
      case 'projekte':
        return <ProjectsPage onNavigate={handleNavigate} />;
      case 'zertifikate':
        return <CertificatesPage onNavigate={handleNavigate} />;
      case 'karriere':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'uber-uns':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'kontakt':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  const generatedComponent = useMemo(() => {
    return (
      <div className="min-h-screen w-full bg-black">
        <Header onNavigate={handleNavigate} currentPage={currentPage} />
        <main>
          {renderPage()}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }, [currentPage]);

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return generatedComponent;
  }
}

export default App;