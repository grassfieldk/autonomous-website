import { Alert, LinkButton, ExternalLinkButton } from "@/components";
import { FeatureCard } from "@/components/FeatureCard";
import { TechBadgeList, TechBadgeItem } from "@/components/TechBadgeList";

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
  { name: "Next.js", variant: "primary" },
  { name: "TypeScript", variant: "primary" },
  { name: "Tailwind CSS", variant: "accent" },
  { name: "GitHub Copilot", variant: "accent" },
  { name: "ESLint", variant: "secondary" },
  { name: "Prettier", variant: "secondary" },
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
      <main className="text-center">
        <h1>Autonomous Website</h1>
        <p className="text-muted-foreground mb-8 text-xl">
          AI が制作から運用までのほとんどすべてを担当する自律型ウェブサイト
        </p>

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

        <div className="mb-8 space-y-4">
          <h2>今後の予定機能</h2>
          <div className="mx-auto max-w-2xl text-left">
            <Alert variant="info">
              <strong>AI トレンドニュース: </strong>
              Gemini CLI に近1ヶ月の AI 関連ニュースをリサーチさせ、 要約した Markdown
              ファイルを記事としてサイト上で閲覧できる機能を開発予定です。
            </Alert>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <LinkButton href="/style-guide" variant="accent">
            スタイルガイドを見る
          </LinkButton>
          <ExternalLinkButton
            href="https://github.com/grassfieldk/autonomous-website"
            variant="outline"
          >
            GitHub で見る
          </ExternalLinkButton>
        </div>

        <div className="mt-12 border-t pt-8">
          <TechBadgeList technologies={technologies} />
        </div>
      </main>
    </div>
  );
}
