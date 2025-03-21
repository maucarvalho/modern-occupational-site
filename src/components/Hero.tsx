
import React from 'react';
import { ChevronDown } from 'lucide-react';
import image1 from "./assets/1.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="hero-blur-circle w-96 h-96 -top-20 -left-20"></div>
      <div className="hero-blur-circle w-96 h-96 bottom-0 right-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-block bg-pastel-100 text-pastel-800 px-4 py-1 rounded-full text-sm font-medium">
              Cuidado especializado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-pastel-900">
              Desenvolvendo Autonomia e<br />
              <span className="text-pastel-500 relative">
                Independência
                <span className="absolute bottom-2 left-0 w-full h-3 bg-pastel-200 -z-10"></span>
              </span>
            </h1>
            <p className="text-pastel-700 text-lg md:text-base max-w-lg">
            Promovemos o desenvolvimento infantil por meio da Terapia Ocupacional especializada, auxiliando crianças e adolescentes a conquistarem maior autonomia nas atividades do dia a dia. Nossa abordagem é baseada em evidências científicas, com foco na Integração Sensorial de Ayres, em estratégias de manejo comportamental e no fortalecimento das habilidades funcionais, proporcionando mais qualidade de vida para crianças e adolescentes com transtornos do neurodesenvolvimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-pastel-500 hover:bg-pastel-600 text-white px-6 py-3 rounded-lg font-medium transition-colors card-effect"
              >
                Conheça nossos serviços
              </a>
              <a 
                href="#contact" 
                className="border border-pastel-300 hover:border-pastel-400 text-pastel-700 px-6 py-3 rounded-lg font-medium transition-colors card-effect"
              >
                Agende uma consulta
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative mx-auto w-full h-[600px] rounded-2xl overflow-hidden card-effect">
              <div className="glass-effect absolute inset-0 p-8">
                <div className="w-full h-full relative bg-pastel-50 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src={image1} 
                    alt="Terapeuta ocupacional trabalhando com paciente" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-soft text-pastel-700"
      >
        <span className="text-sm mb-2">Saiba mais</span>
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
