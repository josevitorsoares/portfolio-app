import { FastifyIcon, GitHubIcon } from "@/shared/components/icons";
import { Code2Icon, CodeIcon, DatabaseIcon } from "lucide-react";
import { TechBadge } from "../TechBadge";
import { TrackingWidget } from "./components";

export function CorreiosProject() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      <div className="flex-1 w-full flex justify-center lg:justify-start order-1">
        <TrackingWidget />
      </div>
      <div className="flex-1 order-2">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Rastreamento Inteligente
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
          Uma API de rastreamento de alta performance desenvolvida em Node.js e
          Fastify, projetada sob os princípios da{" "}
          <strong>Clean Architecture</strong> e <strong>DDD</strong>. A solução
          atua como um proxy otimizado para consultas aos Correios,
          destacando-se pela implementação de um{" "}
          <strong>Cache Dinâmico Inteligente</strong> (Redis), com TTL ajustável
          conforme o status da entrega. Além disso, integra a estratégia de{" "}
          <strong>Rate Limiting</strong> por <em>sliding window</em>, garantindo
          alta performance, segurança e resiliência.
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <TechBadge icon={<Code2Icon size={14} />} label="Node.js" />
          <TechBadge
            icon={<FastifyIcon className="size-3.5 fill-white" />}
            label="Fastify API"
          />
          <TechBadge icon={<DatabaseIcon size={14} />} label="Redis" />
          <TechBadge icon={<CodeIcon size={14} />} label="Clean Architecture" />
        </div>
        <a
          href="https://github.com/josevitorsoares/rastro-correios/"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:opacity-90 transition-opacity"
        >
          <GitHubIcon className="size-5" /> Ver documentação da API
        </a>
      </div>
    </div>
  );
}
