import { CodeIcon, UserIcon } from "lucide-react";

export function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-linear-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 border-2 border-slate-100 dark:border-slate-800 relative shadow-2xl group">
              {/* <div className="absolute inset-0 flex items-center justify-center text-indigo-300 dark:text-indigo-800/50">
                <UserIcon size={120} />
              </div> */}
              <img
                src="https://i.postimg.cc/PJMYZPt6/eu-cortado.jpg"
                alt="José Vitor Soares"
                className="w-full h-full object-cover relative z-10"
              />

              <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors z-20 pointer-events-none" />
            </div>

            <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-slate-800 px-4 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-30 animate-float">
              <div className="flex items-center gap-3">
                <div className="size-5 sm:size-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <CodeIcon size={20} />
                </div>
                <p className="pt-0.5 text-sm sm:text-lg font-bold text-slate-900 dark:text-white whitespace-nowrap">
                  Full Stack Dev
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-bold uppercase tracking-wider mb-6">
              <UserIcon size={16} /> Sobre Mim
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Desenvolvedor Full Stack unindo{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Clean Architecture e o ecossistema JavaScript
              </span>{" "}
              para criar soluções robustas.
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Sempre fui fascinado por entender como as coisas funcionam por
                trás das telas. Minha jornada na tecnologia começou lá atrás, no
                IFPI, passando por linguagens como C e Python. Porém, foi no
                ecossistema JavaScript e TypeScript que realmente me encontrei.
                A fluidez de utilizar a mesma linguagem para transitar entre a
                concepção de uma interface no front-end e a estruturação de uma
                API no back-end mudou a minha forma de desenvolver.
              </p>
              <p>
                Atualmente, atuo como Desenvolvedor Full Stack Jr na AX4B. Minha
                experiência prática envolve desde a criação de estruturas do
                zero e refatoração de features com{" "}
                <strong>Next.js e Angular</strong>, até o desenvolvimento de
                back-ends robustos com <strong>Node.js</strong>, lidando
                diretamente com a integração de serviços externos complexos
                (como <strong>BrasilAPI</strong> e <strong>Autodesk</strong>).
              </p>
              <p>
                Para mim, um código não deve apenas funcionar hoje; ele deve ser
                fácil de manter amanhã. Por isso, aplico ativamente conceitos de{" "}
                <strong>
                  Domain-Driven Design (DDD), Clean Architecture e princípios
                  SOLID
                </strong>{" "}
                nos meus desenvolvimentos. Projetos pessoais, como a minha{" "}
                <strong>API Rastro Correios</strong>, servem como laboratórios
                práticos para garantir que eu entregue softwares com alta
                abstração e baixo acoplamento, utilizando tecnologias modernas
                como React e Fastify.
              </p>
              <p>
                Quando não estou codando, a disciplina continua ativa nas pistas
                de corrida e nas trilhas de Mountain Bike. E claro, toda essa
                rotina — seja debugar um problema complexo no trabalho ou
                explorar uma cidade nova após um longo pedal — é sempre muito
                bem acompanhada por um bom café puro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
