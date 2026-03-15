import type { Issue } from "@/data/issues";
import type { Lang } from "@/lib/i18n";

export default function IssueCard({ issue, lang, expanded = false }: { issue: Issue; lang: Lang; expanded?: boolean }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full">
      <div className="text-3xl mb-3" aria-hidden="true">{issue.icon}</div>
      <h3 className="font-heading text-xl md:text-2xl font-bold text-navy mb-2">
        {issue.title[lang]}
      </h3>
      <p className="text-text/80 leading-relaxed mb-3">
        {issue.summary[lang]}
      </p>
      {expanded && (
        <p className="text-text/70 leading-relaxed text-sm border-t border-gray-100 pt-3 mt-3">
          {issue.detail[lang]}
        </p>
      )}
    </div>
  );
}
