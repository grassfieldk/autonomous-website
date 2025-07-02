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
- **バージョン管理**: コミットメッセージとブランチ戦略
- **UI/UX デザイン**: コンポーネントベースのデザインシステム実装
- **コンテンツ管理**: AI 駆動のコンテンツ作成と更新

## 主要機能

### モダンアーキテクチャ

- **Next.js 15** App Router と Turbopack による高速開発
- **TypeScript** 型安全で保守性の高いコード
- **Tailwind CSS v4** カスタムデザインが可能なシステム
- **コンポーネント駆動** 再利用可能な UI コンポーネントアーキテクチャ

### 開発者体験

- **自動コード品質管理** ESLint と Prettier によるコード品質の担保
- **Git フック** 一貫したコード標準
- **ホットリロード** Turbopack 統合

### AIファースト開発

- **GitHub Copilot Agent** モードによる開発支援
- **コードレビュー** と提案
- **自動テスト** と品質保証
- **AI生成ドキュメント** とコメント

## 技術スタック

| カテゴリ           | 技術         | バージョン | 用途                                        |
| ------------------ | ------------ | ---------- | ------------------------------------------- |
| **フレームワーク** | Next.js      | 15.3.4     | フルスタック React フレームワーク           |
| **言語**           | TypeScript   | 5.8.3      | 型安全 JavaScript                           |
| **スタイリング**   | Tailwind CSS | 4.1.11     | ユーティリティファースト CSS フレームワーク |
| **ランタイム**     | React        | 19.0.0     | UI ライブラリ                               |
| **ビルドツール**   | Turbopack    | -          | 次世代バンドラー                            |
| **リンティング**   | ESLint       | 9.30.0     | コード品質管理                              |
| **フォーマット**   | Prettier     | 3.6.2      | コード整形                                  |
| **Git Hooks**      | Husky        | 9.1.7      | Git ワークフロー自動化                      |

## クイックスタート

### 前提条件

- **Node.js** 18.17.0 以上
- **npm** 9.0.0 以上
- **Git** バージョン管理用

### インストール

1. **リポジトリをクローン**

   ```bash
   git clone https://github.com/grassfieldk/autonomous-website.git
   cd autonomous-website
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

4. **ブラウザからアクセス**
   [http://localhost:3000](http://localhost:3000) に移動

### 利用可能なスクリプト

| スクリプト       | 説明                       |
| ---------------- | -------------------------- |
| `npm run dev`    | Turbopack 開発サーバー起動 |
| `npm run build`  | プロダクションビルド       |
| `npm run start`  | プロダクションサーバー起動 |
| `npm run lint`   | ESLint 実行                |
| `npm run format` | Prettier でコード整形      |

## プロジェクト構造

```
autonomous-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 共通レイアウト
│   │   ├── page.tsx            # ホームページ
│   │   ├── globals.css         # 共通スタイル
│   │   └── style-guide/        # コンポーネントショーケース
│   ├── components/             # 共通コンポーネント
│   │   ├── ui/                 # ベース UI コンポーネント
│   │   │   ├── Button.tsx      # ボタン
│   │   │   ├── Card.tsx        # カードレイアウト
│   │   │   ├── Badge.tsx       # ステータスバッジ
│   │   │   └── Alert.tsx       # アラート
│   │   └── FeatureCard.tsx     # 機能紹介カード
├── docs/                       # ドキュメント
├── public/                     # 静的アセット
├── tailwind.config.ts          # Tailwind 設定
├── tsconfig.json               # TypeScript 設定
└── package.json                # 依存関係とスクリプト
```

## デザインシステム

Tailwind CSS をベースとした包括的なデザインシステムを実装:

### カラーパレット

- **Primary**: ブルー (#0070f3) - メインアクションとリンク
- **Secondary**: グレー (#6b7280) - サポート要素
- **Success**: グリーン (#10b981) - ポジティブフィードバック
- **Warning**: イエロー (#f59e0b) - 注意状態
- **Error**: レッド (#ef4444) - エラー状態

### タイポグラフィ

- **見出し**: Geist Sans フォントファミリー
- **本文**: フォールバック付きシステムフォント
- **コード**: モノスペース要素用 Geist Mono

### コンポーネント

すべてのコンポーネントはアトミックデザイン原則に従い、TypeScript で完全に型付けされています。

## ロードマップ

### **フェーズ 1: 基盤構築** (完了)

- [x] モダン技術スタックセットアップ
- [x] コンポーネントシステム実装
- [x] ドキュメントフレームワーク

### **フェーズ 2: AI 統合** (進行中)

- [ ] **AI トレンドニュースシステム**
  - Gemini CLI を使用した自動ニュース収集
  - インテリジェントな要約と分類
  - 動的コンテンツ生成と公開
- [ ] **コンテンツ管理システム**
  - AI 駆動記事作成
  - 自動 SEO 最適化
  - スマートコンテンツスケジューリング

### **フェーズ 3: 高度機能** (計画中)

- [ ] **多言語サポート**
- [ ] **パフォーマンス最適化**
- [ ] **デプロイ自動化**
- [ ] **アナリティクス統合**

## 開発アプローチ

このプロジェクトは AI ファースト開発ワークフローを実証しています：

1. **コード生成**: GitHub Copilot がほとんどの開発タスクを処理
2. **品質管理**: pre-commit フックによる自動検証
3. **ドキュメンテーション**: AI 生成・保守されるドキュメント
4. **標準**: Conventional commit と TypeScript の強制

## ドキュメント

- **[開発ガイド](./docs/development.md)** - 詳細な開発手順
- **[コンポーネントガイド](./docs/components.md)** - コンポーネント使用法と API リファレンス
- **[デプロイガイド](./docs/deployment.md)** - プロダクションデプロイ手順

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています - 詳細は [LICENSE](./LICENSE) ファイルを参照してください。

## 謝辞

- **GitHub Copilot** - AI ペアプログラミングアシスタント
- **Next.js チーム** - 素晴らしい React フレームワーク
- **Tailwind CSS** - ユーティリティファースト CSS フレームワーク
- **Vercel** - デプロイプラットフォーム

---

**AI が ❤️ で構築** | **GitHub Copilot で実現**
