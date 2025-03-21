
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
      title: 'Estratégias Inovadoras',
      description: 'Utilizamos técnicas e estratégias para potencializar os resultados dos tratamentos.'
    }
  ];

  return (
    <section id="about" className="bg-pastel-50 overflow-hidden">
      <div className="section-container">
        <h2 className="section-title">Quem Sou Eu</h2>
        <p className="section-subtitle">
        Sou Natalie Fonseca, terapeuta ocupacional formada pela Universidade Federal de Pelotas (UFPEL), com atuação especializada no desenvolvimento infantil. Possuo certificação internacional em Integração Sensorial de Ayres pela University of Southern California (USC) e sou pós-graduada em Análise do Comportamento Aplicada (ABA).
        </p>
        <p className="section-subtitle">        
        Atendo crianças e adolescentes com transtornos do neurodesenvolvimento, sempre buscando adaptar ou criar estratégias que facilitem seu dia a dia e favoreçam sua autonomia. Minha prática clínica é baseada em ciência e personalização, utilizando abordagens eficazes para o manejo do comportamento, seletividade alimentar e desenvolvimento de habilidades funcionais, garantindo intervenções alinhadas às necessidades de cada criança e sua família.
        </p>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-medium text-pastel-800 animate-fade-up">Nossa Missão</h3>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Nossa missão é proporcionar um atendimento terapêutico especializado e personalizado, 
            que capacite crianças e adolescentes a desenvolverem suas habilidades, superando desafios 
            e alcançando sua máxima independência.
            </p>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            Acreditamos que cada criança é única e, por isso, 
            nosso trabalho é baseado em estratégias cientificamente comprovadas, sempre adaptadas 
            para as necessidades individuais de cada paciente. 
            </p>
            <p className="text-pastel-700 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            Nosso objetivo é transformar o potencial de cada criança em realidade, promovendo 
            qualidade de vida para ela e para sua família.
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
