
import React from 'react';
import image2 from "./assets/2.jpeg";
import image3 from "./assets/3.jpeg";
import image4 from "./assets/4.jpeg";
import image5 from "./assets/5.jpeg";
import image6 from "./assets/6.jpeg";

const Services = () => {
  const services = [
    {
      title: 'Reabilitação Pediátrica',
      description: 'Abordagens especializadas para crianças com atrasos no desenvolvimento, autismo, TDAH e outras condições que afetam o desenvolvimento motor e sensorial.',
      image: image2
    },
    {
      title: 'Estimulação Sensorial e Motora',
      description: 'Intervenções para crianças com dificuldades na regulação sensorial e no desenvolvimento motor, ajudando na coordenação, equilíbrio e habilidades motoras finas.',
      image: image4
    },
    // {
    //   title: 'Reabilitação Neurológica',
    //   description: 'Tratamento para pacientes após AVC, lesões cerebrais traumáticas, esclerose múltipla e outras condições neurológicas que afetam a mobilidade e função.',
    //   image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1746&q=80'
    // },
    {
      title: 'Reabilitação da Mão',
      description: 'Terapia especializada para lesões, cirurgias ou condições que afetam a função da mão, pulso e antebraço.',
      image: 'https://www.finama.edu.br/uploads/courses/2018/06/terapia-da-mao-e-reabilitacao-do-membro-superior-tmrms-118-1529745942.jpg'
    },
    {
      title: 'Treinamento de Atividades da Vida Diária',
      description: 'Apoio no desenvolvimento da autonomia em atividades como vestir-se, alimentar-se, higiene pessoal e organização da rotina.',
      image: image6
    },
    // {
    //   title: 'Avaliação e Modificação do Ambiente',
    //   description: 'Avaliação do ambiente doméstico ou de trabalho para recomendações de adaptações que promovam independência e segurança.',
    //   image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80'
    // },
    {
      title: 'Saúde Mental',
      description: 'Intervenções para ajudar indivíduos com depressão, ansiedade, transtorno bipolar e outras condições de saúde mental a desenvolver habilidades para a vida diária.',
      image: image3
    },
    {
      title: 'Regulação Emocional e Comportamental',
      description: 'Estratégias para ajudar crianças a lidarem com emoções, melhorar a atenção, a interação social e a adaptação a diferentes contextos.',
      image: image5
    }
    // {
    //   title: 'Geriatria',
    //   description: 'Terapia para adultos mais velhos lidando com os desafios do envelhecimento, incluindo mobilidade reduzida, declínio cognitivo e prevenção de quedas.',
    //   image: 'https://www.rionortesaude.com.br/blog/wp-content/uploads/2022/10/5-Razoes-para-Consultar-um-Medico-Geriatra.jpg'
    // }
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
              className="bg-white border border-pastel-100 rounded-xl overflow-hidden shadow-sm card-effect animate-fade-up"
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
                <h3 className="text-pastel-800 text-xl font-medium mb-2">{service.title}</h3>
                <p className="text-pastel-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
