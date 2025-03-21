
import React from 'react';
import image2 from "./assets/2.jpeg";
import image3 from "./assets/3.jpeg";
import image4 from "./assets/4.jpeg";
import image5 from "./assets/5.jpeg";
import image6 from "./assets/6.jpeg";
import image7 from "./assets/7.jpeg";

const Services = () => {
  const services = [
    {
      title: 'Desenvolvimento Infantil Especializado',
      description: 'Abordagens especializadas para crianças com atrasos no desenvolvimento, autismo, TDAH e outras condições que afetam o desenvolvimento motor e sensorial.',
      image: image2
    },
    {
      title: 'Sensibilidade Sensorial',
      description: 'Intervenções baseadas na Integração Sensorial para auxiliar na modulação e habituação às sensações. Trabalhamos para reduzir desconfortos da hipersensibilidade e estimular respostas adequadas em casos de baixa sensibilidade aos estímulos do ambiente.',
      image: image4
    },
    {
      title: 'Seletividade Alimentar',
      description: 'Acompanhamento para crianças e adolescentes com restrições alimentares, promovendo a aceitação gradativa de novos alimentos diante de desafios sensoriais.',
      image: image7
    },
    {
      title: 'Treinamento de Atividades da Vida Diária',
      description: 'Apoio no desenvolvimento da autonomia em atividades como vestir-se, alimentar-se, higiene pessoal e organização da rotina.',
      image: image6
    },
    {
      title: 'Desafios Motores',
      description: 'Intervenção focada no desenvolvimento da coordenação, planejamento motor e controle postural, ajudando crianças e adolescentes a realizarem tarefas diárias como escrever, se vestir e brincar com mais independência e funcionalidade.',
      image: image3
    },
    {
      title: 'Autorregulação Emocional e Comportamental',
      description: 'Intervenção com base na Integração Sensorial para ajudar crianças e adolescentes a modularem emoções e comportamentos. Focamos em aprimorar a autorregulação, a atenção e a adaptação a diferentes contextos, promovendo interações mais equilibradas.',
      image: image5
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
