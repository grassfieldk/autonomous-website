import { LinkButton, ExternalLinkButton } from "@/components";
import { FeatureCard } from "@/components/FeatureCard";
import { TechBadgeList, TechBadgeItem } from "@/components/TechBadgeList";
import { RoadmapSection, RoadmapItem } from "@/components/RoadmapSection";

/**
 * Feature data for the homepage
 */
const features = [
  {
    title: "自動化された開発",
    description: "GitHub Copilot による自律的なコーディング",
    content:
      "Visual Studio Code と GitHub Copilot（Agent モード）を使用して、コーディングからドキュメンテーション、コミットまで AI が自動で実行します。",
  },
  {
    title: "モダンな技術スタック",
    description: "Next.js と TypeScript による堅牢な基盤",
    content:
      "Next.js 15、TypeScript、Tailwind CSS を使用した最新の Web 開発環境を構築しています。",
  },
  {
    title: "品質管理",
    description: "ESLint と Prettier による自動品質チェック",
    content:
      "Pre-commit hook により、すべてのコミットで自動的にコード品質チェックとフォーマットが実行されます。",
  },
];

/**
 * Technology stack data
 */
const technologies: TechBadgeItem[] = [
  { name: "Next.js", variant: "primary", url: "https://nextjs.org" },
  { name: "TypeScript", variant: "primary", url: "https://www.typescriptlang.org" },
  { name: "Tailwind CSS", variant: "primary", url: "https://tailwindcss.com" },
  {
    name: "GitHub Copilot",
    variant: "secondary",
    url: "https://github.com/features/copilot",
  },
  { name: "ESLint", variant: "secondary", url: "https://eslint.org" },
  { name: "Prettier", variant: "secondary", url: "https://prettier.io" },
];

/**
 * Roadmap data
 */
const roadmapItems: RoadmapItem[] = [
  {
    title: "AI News Intelligence",
    description:
      "Gemini CLI による AI トレンドの自動収集・要約システム。\n最新の AI 情報を自動で整理し、サイト上で閲覧可能な記事として配信します。",
    status: "planned",
  },
  {
    title: "Component Library",
    description:
      "再利用可能な UI コンポーネントライブラリの構築。\n統一されたデザインシステムによる開発効率の向上を実現します。",
    status: "completed",
    updatedAt: "2025/07/01",
  },
  {
    title: "Theme System",
    description:
      "ダークモード対応のテーマシステムの実装。\nユーザー体験の向上とアクセシビリティの改善を目指します。",
    status: "completed",
    updatedAt: "2025/07/01",
  },
];

/**
 * Home Page Component
 *
 * Demonstrates the usage of common styles defined in globals.css
 * without requiring extensive class declarations.
 */
export default function Home() {
  return (
    <div className="container py-12">
      <main>
        <h1 className="text-center">
          Autonom<span className="text-primary">Lab.</span>
        </h1>

        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              content={feature.content}
            />
          ))}
        </div>

        <div className="mb-24 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/theme-preview" variant="accent">
            テーマプレビューを見る
          </LinkButton>
          <ExternalLinkButton
            href="https://github.com/grassfieldk/autonomous-website"
            variant="outline"
          >
            GitHub で見る
          </ExternalLinkButton>
        </div>

        <RoadmapSection items={roadmapItems} className="mb-8" />

        <div className="mt-12 border-t pt-8">
          <TechBadgeList technologies={technologies} />
        </div>
      </main>
    </div>
  );
}
