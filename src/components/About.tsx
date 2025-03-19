
import React from 'react';
import { Heart, BookOpen, Users, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-6 h-6 text-pastel-500" />,
      title: 'Cuidado Centrado no Paciente',
      description: 'Abordagem personalizada focada nas necessidades específicas de cada indivíduo.'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-pastel-500" />,
      title: 'Experiência Profissional',
      description: 'Nossa equipe possui ampla formação e experiência em diversas áreas da terapia ocupacional.'
    },
    {
      icon: <Users className="w-6 h-6 text-pastel-500" />,
      title: 'Abordagem Multidisciplinar',
      description: 'Trabalhamos integrados com outros profissionais de saúde para oferecer um tratamento completo.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-pastel-500" />,
      title: 'Métodos Inovadores',
      description: 'Utilizamos técnicas e tecnologias modernas para potencializar os resultados dos tratamentos.'
    }
  ];

  return (
    <section id="about" className="bg-pastel-50 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Quem Somos</h2>
        <p className="section-subtitle">
          Dedicados a restaurar, desenvolver e melhorar as habilidades essenciais para a independência e qualidade de vida.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-medium text-pastel-800 animate-fade-up">Nossa Missão</h3>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Nossa prática de Terapia Ocupacional é dedicada a ajudar indivíduos de todas as idades a superar desafios físicos, 
              cognitivos e emocionais que afetam sua capacidade de realizar atividades cotidianas significativas.
            </p>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              Acreditamos que cada pessoa merece viver com independência, dignidade e satisfação, 
              independentemente de suas limitações. Nosso compromisso é criar planos de tratamento personalizados 
              que atendam às necessidades únicas de cada cliente.
            </p>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              Com uma abordagem centrada no cliente e baseada em evidências, 
              estamos comprometidos em capacitar nossos pacientes a atingir seu máximo potencial 
              funcional e melhorar sua qualidade de vida geral.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm card-effect animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="bg-pastel-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-pastel-800 text-lg font-medium mb-2">
                  {feature.title}
                </h4>
                <p className="text-pastel-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
