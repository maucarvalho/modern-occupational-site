import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <body class="politica-de-privacidade">
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mt-6">Política de Privacidade</h2>
      <br />
      
      <h2 className="text-2xl font-semibold mt-6">1. Introdução</h2>
      <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos as informações pessoais dos usuários do nosso site. Ao utilizar nosso site, você concorda com as práticas descritas nesta política.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">2. Coleta de Dados</h2>
      <p>Coletamos informações pessoais fornecidas voluntariamente pelos usuários, como nome, endereço de e-mail e número de telefone, por meio de formulários de contato ou inscrição. Além disso, podemos coletar dados de navegação, como endereço IP, tipo de navegador e páginas acessadas.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">3. Uso das Informações</h2>
      <p>As informações coletadas são utilizadas para:</p>
      <p>•	Responder a consultas e solicitações dos usuários.</p>
      <p>•	Melhorar a experiência do usuário em nosso site.</p>
      <p>•	Enviar comunicações relevantes sobre nossos serviços, desde que haja consentimento prévio.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">4. Compartilhamento de Dados</h2>
      <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou proteger nossos direitos.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">5. Segurança</h2>
      <p>Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração ou divulgação.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">6. Seus Direitos</h2>
      <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais armazenadas em nosso site. Para exercer esses direitos, entre em contato conosco através das informações fornecidas na seção de contato.</p>
      <br />

      <h2 className="text-2xl font-semibold mt-6">7. Alterações nesta Política</h2>
      <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.</p>
      <br />
      

      <p className="mt-6">
        <Link to="/" className="text-pink-600 hover:text-pink-800 underline focus:outline-none">
          Voltar para a Home
        </Link>
      </p>
    </div>
    </body>
  );
};

export default TermsOfUse;
