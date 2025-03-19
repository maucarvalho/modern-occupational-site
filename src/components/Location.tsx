
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Location = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-pastel-500" />,
      title: 'Endereço',
      content: 'Rua Joci José Martins, 247 - sala 706 - Pagani, Palhoça - SC, 88132-000',
      link: 'https://maps.app.goo.gl/HUgRrgBYn1UK3eVNA',
      linkText: 'Ver no mapa'
    },
    {
      icon: <Phone className="w-5 h-5 text-pastel-500" />,
      title: 'Telefone',
      content: '(53) 99103-5330',
      link: 'tel:+5553991035330',
      linkText: 'Ligar agora'
    },
    {
      icon: <Mail className="w-5 h-5 text-pastel-500" />,
      title: 'Email',
      content: 'nataliefonseca.to@gmail.com',
      link: 'mailto:nataliefonseca.to@gmail.com',
      linkText: 'Enviar email'
    },
    {
      icon: <Clock className="w-5 h-5 text-pastel-500" />,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 8h às 19h',
      link: '#',
      linkText: 'Agende uma consulta'
    }
  ];

  // Nova cor rosa/lilás
  const rosaLilas = 'rgb(222, 173, 202)';

  return (
    <section id="location" className="bg-pastel-50">
      <div className="section-container">
      <h2 className="section-title">Localização e Contato</h2>
      <p className="section-subtitle">
          Estamos localizados em um ponto central e de fácil acesso. Entre em contato conosco para agendar uma consulta ou obter mais informações.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9833367791896!2d-48.67062512394055!3d-27.6422106281889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274bec1f3d9087%3A0x8ceae41b4e953f59!2sR.%20Joci%20Jos%C3%A9%20Martins%2C%20247%20-%20706%20-%20Pagani%2C%20Palho%C3%A7a%20-%20SC%2C%2088132-148!5e0!3m2!1spt-BR!2sbr!4v1716346097776!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do consultório"
            ></iframe>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div id="contact" className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-medium text-pastel-800 mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                        <h4 className="text-pastel-800 font-medium">{item.title}</h4>
                        <p className="text-pastel-600 mb-1">{item.content}</p>
                      <a 
                        href={item.link} 
                        className="text-pastel-500 hover:text-pastel-700 text-sm font-medium inline-flex items-center gap-1"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-pastel-700 text-white p-8 rounded-xl">
              <h3 className="text-xl font-medium mb-4">Primeira consulta</h3>
              <p className="mb-6">
                Agende sua avaliação inicial e descubra como a terapia ocupacional pode ajudar você ou seu familiar a conquistar mais independência e qualidade de vida.
              </p>
              <a 
                href="tel:+5511912345678" 
                className="inline-block bg-white text-pastel-700 hover:bg-pastel-100 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Agende pelo telefone
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;