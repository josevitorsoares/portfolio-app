import { CalendarIcon, GraduationCapIcon } from "lucide-react";

export function Education() {
  const MOCK_EDUCATION = [
    {
      id: 1,
      course: "Análise e Desenvolvimento de Sistemas",
      institution:
        "Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI)",
      period: "Fev 2019 - Mai 2023",
      duration: "4 anos",
      status: "Concluído",
      description:
        "Contato mais aprofundado com linguagens de programação como C e Java e também com arquitetura de software, estrutura de dados, algoritmos e engenharia de requisitos. Primeiro contato com desenvolvimento mobile utilizando Kotlin. Desenvolvimento do projeto acadêmico Shorextractor para o Trabalho de Conclusão de Curso.",
    },
    {
      id: 2,
      course: "Técnico em Informática Integrado ao Ensino Médio",
      institution:
        "Instituto Federal de Educação, Ciência e Tecnologia do Piauí (IFPI)",
      period: "Fev 2015 - Jan 2018",
      duration: "3 anos",
      status: "Concluído",
      description:
        "Introdução aos fundamentos da computação, algoritmos e estrutura de dados. Primeiro contato com linguagens de programação utilizando C e com o paradigma da Programação Orientação a Objetos (POO) através da linguagem Java. Além disso, também foi o primeiro contato com o universo web utilizando HTML, CSS e JavaScript.",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4">
            <GraduationCapIcon size={16} /> Base Acadêmica
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Formação Acadêmica
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {MOCK_EDUCATION.map((education) => (
            <div
              key={education.id}
              className="bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
                    <GraduationCapIcon size={28} />
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {education.duration}
                    </span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${education.status === "Concluído" ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800" : "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800"}`}
                    >
                      {education.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {education.course}
                </h3>
                <h4 className="text-sm sm:text-base text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                  {education.institution}
                </h4>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
                  <CalendarIcon size={16} /> {education.period}
                </div>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700 pt-6">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
