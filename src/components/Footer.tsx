
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Navegação',
      links: [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Localização', href: '#location' },
        { name: 'Contato', href: '#contact' },
      ]
    },
    {
      title: 'Serviços',
      links: [
        { name: 'Reabilitação Pediátrica', href: '#services' },
        { name: 'Reabilitação Neurológica', href: '#services' },
        { name: 'Reabilitação da Mão', href: '#services' },
        { name: 'Avaliação Ambiental', href: '#services' },
        { name: 'Saúde Mental', href: '#services' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Termos de Uso', href: '#' },
        { name: 'Política de Privacidade', href: '#' },
        { name: 'Cookies', href: '#' },
      ]
    }
  ];

  return (
    <footer className="bg-therapeutic-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-display font-medium mb-4">Terapia Ocupacional</div>
            <p className="text-therapeutic-200 mb-6">
              Dedicados a restaurar e desenvolver as habilidades essenciais para a independência e qualidade de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-therapeutic-200 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-therapeutic-200 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-therapeutic-200 hover:text-white transition-colors" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.355 4.642A9.938 9.938 0 0 0 12.008 2a9.97 9.97 0 0 0-8.516 15.1L2 22l5.068-1.273A9.962 9.962 0 0 0 12.009 22 9.982 9.982 0 0 0 22 12.009a9.916 9.916 0 0 0-2.645-7.367zm-7.347 15.221a8.275 8.275 0 0 1-4.23-1.16l-.302-.182-3.152.821.85-3.026-.196-.314a8.245 8.245 0 0 1-1.277-4.394A8.216 8.216 0 0 1 12.006 3.5a8.157 8.157 0 0 1 5.806 2.402 8.148 8.148 0 0 1 2.405 5.824 8.227 8.227 0 0 1-8.209 8.137zm4.526-6.174c-.247-.123-1.46-.72-1.688-.802-.227-.082-.392-.123-.557.123-.164.247-.638.802-.783.967-.145.165-.289.185-.536.062-.247-.123-1.045-.385-1.991-1.23-.737-.657-1.233-1.468-1.378-1.715-.145-.247-.015-.38.109-.504.111-.11.247-.29.37-.433.122-.145.164-.249.247-.413.082-.165.04-.309-.02-.432-.062-.124-.557-1.345-.764-1.839-.201-.486-.405-.42-.557-.427a9.925 9.925 0 0 0-.454-.008c-.165 0-.433.062-.659.309-.226.247-.865.846-.865 2.066 0 1.22.889 2.399 1.013 2.564.123.165 1.736 2.653 4.208 3.717.587.253 1.045.405 1.403.518.59.188 1.127.161 1.552.098.473-.07 1.46-.597 1.667-1.174.206-.577.206-1.072.144-1.175-.061-.102-.226-.165-.473-.289z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-therapeutic-200 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-therapeutic-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-therapeutic-300 text-sm">
            &copy; {currentYear} Terapia Ocupacional. Todos os direitos reservados.
          </p>
          <p className="text-therapeutic-300 text-sm flex items-center mt-4 md:mt-0">
            Feito com <Heart className="w-4 h-4 mx-1 text-therapeutic-500" /> para melhorar vidas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
