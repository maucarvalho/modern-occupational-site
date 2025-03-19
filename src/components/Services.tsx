
import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Reabilitação Pediátrica',
      description: 'Abordagens especializadas para crianças com atrasos no desenvolvimento, autismo, TDAH e outras condições que afetam o desenvolvimento motor e sensorial.',
      image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: 'Reabilitação Neurológica',
      description: 'Tratamento para pacientes após AVC, lesões cerebrais traumáticas, esclerose múltipla e outras condições neurológicas que afetam a mobilidade e função.',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80'
    },
    {
      title: 'Reabilitação da Mão',
      description: 'Terapia especializada para lesões, cirurgias ou condições que afetam a função da mão, pulso e antebraço.',
      image: 'https://images.unsplash.com/photo-1570655653816-c7d95ea36ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: 'Avaliação e Modificação do Ambiente',
      description: 'Avaliação do ambiente doméstico ou de trabalho para recomendações de adaptações que promovam independência e segurança.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
    },
    {
      title: 'Saúde Mental',
      description: 'Intervenções para ajudar indivíduos com depressão, ansiedade, transtorno bipolar e outras condições de saúde mental a desenvolver habilidades para a vida diária.',
      image: 'https://images.unsplash.com/photo-1559169637-a25b8433de93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    {
      title: 'Geriatria',
      description: 'Terapia para adultos mais velhos lidando com os desafios do envelhecimento, incluindo mobilidade reduzida, declínio cognitivo e prevenção de quedas.',
      image: 'https://images.unsplash.com/photo-1516307078-3bac19bcab9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    }
  ];

  return (
    <section id="services" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Oferecemos uma ampla gama de serviços de terapia ocupacional para ajudar nossos pacientes a conquistar independência e melhorar sua qualidade de vida.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-therapeutic-100 rounded-xl overflow-hidden shadow-sm card-effect animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-therapeutic-800 text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-therapeutic-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
