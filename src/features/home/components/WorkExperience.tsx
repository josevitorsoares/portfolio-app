import {
  BriefcaseIcon,
  BuildingIcon,
  CalendarIcon,
  ClockIcon,
} from "lucide-react";

export function WorkExperience() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const monthsDifference = currentMonth - 1; //1 is subtracted because January is month 1.

  const MOCK_EXPERIENCE = [
    {
      id: 1,
      role: "Desenvolvedor Full Stack Jr.",
      company: "AX4B Enterprise Solutions",
      logo: "https://i.postimg.cc/dtSKGRFY/ax4b-logo.png",
      initials: "AX",
      period: "Jan 2024 - Atual",
      duration: `${currentYear - 2024} anos e ${monthsDifference} ${monthsDifference > 1 ? "meses" : "mês"}`,
      isCurrent: true,
      description:
        "Atuação no desenvolvimento de aplicações web completas utilizando Next.js (React) no front-end e Node.js no back-end. Além disso, aplico na prática a Clean Architecture e princípios SOLID, garantindo código limpo e escalável.",
      skills: [
        "React",
        "Angular 17",
        "Next.JS",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "MongoDB",
        "Docker",
      ],
    },
    {
      id: 2,
      role: "Professor de Informática",
      company: "CETI Antônio Freitas",
      logo: null,
      initials: "AF",
      period: "Fev 2023 - Dez 2023",
      duration: "11 meses",
      isCurrent: false,
      description:
        "Professor de informática voltado ao desenvolvimento de estratégias pedagógicas no ensino de informática para alunos da modalidade EJA (Educação de Jovens e Adultos).",
      skills: ["Informática", "Técnicas de Ensino"],
    },
  ];

  return (
    <section
      id="works"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mb-16 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-wider mb-4">
          <BriefcaseIcon size={16} /> Trajetória
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
          Experiência Profissional
        </h2>
      </div>

      <div className="relative border-l-2 border-indigo-100 dark:border-slate-700 ml-4 md:ml-6 space-y-12 pb-8">
        {MOCK_EXPERIENCE.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot / Logo */}
            <div className="absolute -left-6.25 md:-left-8.25 top-0 w-12 h-12 md:w-16 md:h-16 bg-white dark:bg-slate-800 border-4 border-indigo-50 dark:border-slate-900 rounded-full flex items-center justify-center shadow-lg overflow-hidden group-hover:border-indigo-500 transition-colors duration-300">
              {exp.logo ? (
                <img
                  src={exp.logo}
                  alt={`Logo ${exp.company}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-bold text-lg md:text-xl text-indigo-600 dark:text-indigo-400">
                  {exp.initials}
                </span>
              )}
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-3.5 sm:p-6 md:p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-md sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                    {exp.role}
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase tracking-wider border border-green-200 dark:border-green-800">
                        Atual
                      </span>
                    )}
                  </h3>
                  <h4 className="text-md sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mt-1">
                    <BuildingIcon size={18} /> {exp.company}
                  </h4>
                </div>
                <div className="flex flex-col md:items-end text-sm text-slate-500 dark:text-slate-400 gap-1">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ClockIcon size={14} /> {exp.duration}
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
