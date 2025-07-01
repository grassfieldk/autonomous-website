# Autonomous Website

[![Next.js](https://img.shields.io/badge/Next.js-15.3.4-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](./LICENSE)

[English](./README.md) | [ドキュメント](./docs/)

AI が開発ライフサイクルを担当する自律型ウェブサイト

## 概要

**Autonomous Website** は、AI 駆動の Web 開発を実証しています。このプロジェクトでは、AI が以下を処理します：

- **コード生成**: GitHub Copilot を使用した機能開発
- **ドキュメンテーション**: 自動的なドキュメント生成と保守
- **バージョン管理**: コミット メッセージとブランチ戦略
- **UI/UX デザイン**: コンポーネント ベースのデザイン システム実装
- **コンテンツ管理**: AI 駆動のコンテンツ作成と更新

## 主要機能

### モダン アーキテクチャ

- **Next.js 15** App Router と Turbopack による高速開発
- **TypeScript** による型安全で保守性の高いコード
- **Tailwind CSS v4** カスタム デザイン システム付き
- **コンポーネント駆動** 再利用可能な UI コンポーネント アーキテクチャ

### 開発者体験

- **事前設定済みセットアップ** 統合ツール付き
- **自動コード品質管理** ESLint と Prettier
- **Git フック** による一貫したコード標準
- **ホット リロード** Turbopack 統合

### AI ファースト開発

- **GitHub Copilot Agent** モードによる開発支援
- **コード レビュー** と提案
- **自動テスト** と品質保証
- **AI 生成** ドキュメントとコメント

## 🛠️ 技術スタック

| カテゴリ               | 技術         | バージョン | 用途                              |
| ---------------------- | ------------ | ---------- | --------------------------------- |
| **フレームワーク**     | Next.js      | 15.3.4     | フルスタック React フレームワーク |
| **言語**               | TypeScript   | 5.8.3      | 型安全 JavaScript                 |
| **スタイリング**       | Tailwind CSS | 4.1.11     | ユーティリティ ファースト CSS     |
| **ランタイム**         | React        | 19.0.0     | UI ライブラリ                     |
| **ビルド ツール**      | Turbopack    | -          | 次世代バンドラー                  |
| **リンティング**       | ESLint       | 9.30.0     | コード品質管理                    |
| **フォーマッティング** | Prettier     | 3.6.2      | コード整形                        |
| **Git フック**         | Husky        | 9.1.7      | Git ワークフロー自動化            |

## 🚀 クイック スタート

### 前提条件

- **Node.js** 18.17.0 以上
- **npm** 9.0.0 以上
- **Git** バージョン管理用

### インストール

1. **リポジトリをクローン**

   ```bash
   git clone https://github.com/your-username/autonomous-website.git
   cd autonomous-website
   ```

2. **依存関係をインストール**

   ```bash
   npm install
   ```

3. **開発サーバーを起動**

   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   [http://localhost:3000](http://localhost:3000) に移動

### 利用可能なスクリプト

| スクリプト       | 説明                        |
| ---------------- | --------------------------- |
| `npm run dev`    | Turbopack 開発サーバー起動  |
| `npm run build`  | プロダクション ビルド       |
| `npm run start`  | プロダクション サーバー起動 |
| `npm run lint`   | ESLint 実行                 |
| `npm run format` | Prettier でコード整形       |

## 📁 プロジェクト構造

```
autonomous-website/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📄 layout.tsx          # ルート レイアウト
│   │   ├── 📄 page.tsx            # ホームページ
│   │   ├── 📄 globals.css         # グローバル スタイル
│   │   └── 📂 style-guide/        # コンポーネント ショーケース
│   ├── 📂 components/             # 再利用可能コンポーネント
│   │   ├── 📂 ui/                 # ベース UI コンポーネント
│   │   │   ├── 📄 Button.tsx      # ボタン バリアント
│   │   │   ├── 📄 Card.tsx        # カード レイアウト
│   │   │   ├── 📄 Badge.tsx       # ステータス バッジ
│   │   │   └── 📄 Alert.tsx       # アラート メッセージ
│   │   └── 📄 FeatureCard.tsx     # 機能紹介カード
├── 📂 docs/                       # ドキュメント
├── 📂 public/                     # 静的アセット
├── ⚙️ tailwind.config.ts          # Tailwind 設定
├── ⚙️ tsconfig.json               # TypeScript 設定
└── ⚙️ package.json                # 依存関係とスクリプト
```

## 🎨 デザイン システム

Tailwind CSS をベースとした包括的なデザイン システムを実装：

### カラー パレット

- **プライマリ**: ブルー (#0070f3) - メイン アクションとリンク
- **セカンダリ**: グレー (#6b7280) - サポート要素
- **成功**: グリーン (#10b981) - ポジティブ フィードバック
- **警告**: イエロー (#f59e0b) - 注意状態
- **エラー**: レッド (#ef4444) - エラー状態

### タイポグラフィ

- **見出し**: Geist Sans フォント ファミリー
- **本文**: フォールバック付きシステム フォント
- **コード**: モノスペース要素用 Geist Mono

### コンポーネント

すべてのコンポーネントはアトミック デザイン原則に従い、TypeScript で完全に型付けされています。

## 🔮 ロードマップ

### 🎯 **フェーズ 1: 基盤構築** (完了)

- [x] モダン技術スタック セットアップ
- [x] コンポーネント システム実装
- [x] 開発ツール設定
- [x] ドキュメント フレームワーク

### 🎯 **フェーズ 2: AI 統合** (進行中)

- [ ] **AI トレンド ニュース システム**
  - Gemini CLI を使用した自動ニュース収集
  - インテリジェントな要約と分類
  - 動的コンテンツ生成と公開
- [ ] **コンテンツ管理システム**
  - AI 駆動記事作成
  - 自動 SEO 最適化
  - スマート コンテンツ スケジューリング

### 🎯 **フェーズ 3: 高度機能** (計画中)

- [ ] **多言語サポート**
- [ ] **パフォーマンス最適化**
- [ ] **デプロイ自動化**
- [ ] **アナリティクス統合**

## 🤝 貢献

このプロジェクトは主に AI によって開発されていますが、貢献を歓迎します！詳細については[貢献ガイドライン](./docs/CONTRIBUTING.md)をお読みください。

### 開発ワークフロー

1. すべてのコードは GitHub Copilot Agent モードで生成
2. 変更は pre-commit フックで自動検証
3. ドキュメントは自動生成・更新
4. コミットは conventional commit 標準に従う

## 📖 ドキュメント

- **[開発ガイド](./docs/development.md)** - 詳細な開発手順
- **[コンポーネント ガイド](./docs/components.md)** - コンポーネント使用法と API リファレンス
- **[デプロイ ガイド](./docs/deployment.md)** - プロダクション デプロイ手順
- **[貢献方法](./docs/CONTRIBUTING.md)** - プロジェクト貢献方法

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています - 詳細は [LICENSE](./LICENSE) ファイルを参照してください。

## 🙏 謝辞

- **GitHub Copilot** - AI ペア プログラミング アシスタント
- **Next.js チーム** - 素晴らしい React フレームワーク
- **Tailwind CSS** - ユーティリティ ファースト CSS フレームワーク
- **Vercel** - デプロイ プラットフォーム

---

**AI が ❤️ で構築** | **GitHub Copilot で実現**
