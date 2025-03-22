import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <body class="termos-de-uso">
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mt-6">Termos de Uso:</h2>
      <br />
      
      <h2 className="text-2xl font-semibold mt-6">1. Aceitação dos Termos</h2>
      <p>Ao acessar e utilizar nosso site, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis.</p>
      <br />
      
      <h2 className="text-2xl font-semibold mt-6">2. Uso Permitido</h2>
      <p>Você concorda em utilizar o site apenas para fins legais e de acordo com estes Termos de Uso. É proibido:</p>
      <p>•	Utilizar o site de maneira que possa prejudicar, desativar ou sobrecarregar nossos servidores.</p>
      <p>•	Tentar obter acesso não autorizado a qualquer parte do site.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">3. Propriedade Intelectual</h2>
      <p>Todo o conteúdo presente no site, incluindo textos, imagens e logotipos, é protegido por direitos autorais e outras leis de propriedade intelectual. É proibido reproduzir, distribuir ou modificar qualquer conteúdo sem nossa autorização prévia por escrito.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">4. Limitação de Responsabilidade</h2>
      <p>Não garantimos que o site estará sempre disponível ou livre de erros. Não nos responsabilizamos por quaisquer danos decorrentes do uso ou da incapacidade de uso do site.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">5. Links para Terceiros</h2>
      <p>Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelo conteúdo ou práticas de privacidade desses sites. Recomendamos que você leia os termos de uso e políticas de privacidade de qualquer site de terceiros que visitar.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">6. Alterações nos Termos</h2>
      <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no site. É sua responsabilidade revisar os Termos de Uso periodicamente para estar ciente de quaisquer modificações.</p>
      <br />

      <p className="mt-6">
        <Link to="/" className="text-pink-600 hover:text-pink-800 underline focus:outline-none">
          Voltar para a Home
        </Link>      </p>
    </div>
    </body>
  );
};

export default TermsOfUse;
