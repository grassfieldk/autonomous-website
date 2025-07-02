import {
  Button,
  Alert,
  Badge,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components";

/**
 * Style Guide Page
 *
 * This page demonstrates the usage of common styles and components
 * defined in globals.css. It serves as a reference for developers
 * and designers to see all available styling options.
 */

export default function StyleGuidePage() {
  return (
    <div className="container py-8">
      <h1>スタイルガイド</h1>
      <p>
        このページでは、サイト全体で使用可能な共通スタイルとコンポーネントを紹介します。
      </p>

      {/* Typography Section */}
      <section className="mb-12">
        <h2>タイポグラフィ</h2>
        <div className="space-y-4">
          <div>
            <h1>見出し1 (H1)</h1>
            <h2>見出し2 (H2)</h2>
            <h3>見出し3 (H3)</h3>
            <h4>見出し4 (H4)</h4>
            <h5>見出し5 (H5)</h5>
            <h6>見出し6 (H6)</h6>
          </div>

          <p>
            これは通常の段落テキストです。<a href="#">リンクテキスト</a>も含まれています。
            <code>インラインコード</code>も使用できます。
          </p>

          <blockquote>
            これは引用文です。重要な情報や他の情報源からの引用に使用します。
          </blockquote>

          <pre>{`// コードブロックの例
function greeting(name: string) {
  return \`こんにちは、\${name}さん！\`;
}`}</pre>

          <ul>
            <li>箇条書きリスト項目1</li>
            <li>箇条書きリスト項目2</li>
            <li>箇条書きリスト項目3</li>
          </ul>

          <ol>
            <li>番号付きリスト項目1</li>
            <li>番号付きリスト項目2</li>
            <li>番号付きリスト項目3</li>
          </ol>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="mb-12">
        <h2>ボタン</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">プライマリボタン</Button>
            <Button variant="accent">アクセントボタン</Button>
            <Button variant="secondary">セカンダリボタン</Button>
            <Button variant="destructive">削除ボタン</Button>
            <Button variant="outline">アウトラインボタン</Button>
            <Button variant="ghost">ゴーストボタン</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              小さいボタン
            </Button>
            <Button variant="primary">標準ボタン</Button>
            <Button variant="primary" size="lg">
              大きいボタン
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              無効化ボタン
            </Button>
          </div>
        </div>
      </section>

      {/* Form Elements Section */}
      <section className="mb-12">
        <h2>フォーム要素</h2>
        <div className="max-w-md space-y-4">
          <div className="form-group">
            <label htmlFor="text-input">テキスト入力</label>
            <input
              type="text"
              id="text-input"
              placeholder="ここにテキストを入力してください"
            />
            <div className="form-help">これはヘルプテキストです。</div>
          </div>

          <div className="form-group">
            <label htmlFor="email-input">メールアドレス</label>
            <input type="email" id="email-input" placeholder="example@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password-input">パスワード</label>
            <input type="password" id="password-input" placeholder="パスワードを入力" />
            <div className="form-error">パスワードは8文字以上である必要があります。</div>
          </div>

          <div className="form-group">
            <label htmlFor="textarea">テキストエリア</label>
            <textarea
              id="textarea"
              rows={4}
              placeholder="長いテキストを入力してください"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="select">選択</label>
            <select id="select">
              <option value="">選択してください</option>
              <option value="option1">オプション1</option>
              <option value="option2">オプション2</option>
              <option value="option3">オプション3</option>
            </select>
          </div>

          <div className="form-group">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              チェックボックス
            </label>
          </div>

          <div className="form-group">
            <label className="mb-2 block">ラジオボタン</label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" />
                選択肢1
              </label>
              <label className="flex items-center">
                <input type="radio" name="radio-group" className="mr-2" />
                選択肢2
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-12">
        <h2>カード</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader title="基本カード" description="これはカードの説明文です。" />
            <CardContent>
              <p>カードのメインコンテンツがここに表示されます。</p>
            </CardContent>
            <CardFooter>
              <Button variant="primary" size="sm">
                アクション
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardContent>
              <h3 className="card-title">シンプルカード</h3>
              <p>ヘッダーやフッターのないシンプルなカードです。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section className="mb-12">
        <h2>バッジ</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">プライマリ</Badge>
          <Badge variant="accent">アクセント</Badge>
          <Badge variant="secondary">セカンダリ</Badge>
          <Badge variant="destructive">重要</Badge>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="mb-12">
        <h2>カラーパレット</h2>
        <div className="space-y-6">
          <div>
            <h3 className="mb-4">メインカラー</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-primary mb-2 h-20 w-full rounded-lg"></div>
                <p className="text-sm font-medium">Primary</p>
                <p className="text-muted-foreground text-xs">#00bfbf</p>
              </div>
              <div className="text-center">
                <div className="bg-accent mb-2 h-20 w-full rounded-lg"></div>
                <p className="text-sm font-medium">Accent</p>
                <p className="text-muted-foreground text-xs">#e3007f</p>
              </div>
              <div className="text-center">
                <div className="bg-foreground mb-2 h-20 w-full rounded-lg"></div>
                <p className="text-sm font-medium">Text</p>
                <p className="text-muted-foreground text-xs">#333333</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h-20 w-full rounded-lg bg-[#333436]"></div>
                <p className="text-sm font-medium">Gray</p>
                <p className="text-muted-foreground text-xs">#333436</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4">システムカラー</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-muted mb-2 h-20 w-full rounded-lg border"></div>
                <p className="text-sm font-medium">Muted</p>
              </div>
              <div className="text-center">
                <div className="bg-destructive mb-2 h-20 w-full rounded-lg"></div>
                <p className="text-sm font-medium">Destructive</p>
              </div>
              <div className="text-center">
                <div className="bg-background mb-2 h-20 w-full rounded-lg border-2"></div>
                <p className="text-sm font-medium">Background</p>
              </div>
              <div className="text-center">
                <div className="bg-border mb-2 h-20 w-full rounded-lg"></div>
                <p className="text-sm font-medium">Border</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerts Section */}
      <section className="mb-12">
        <h2>アラート</h2>
        <div className="space-y-4">
          <Alert variant="info">
            <strong>情報:</strong> これは情報アラートです。
          </Alert>
          <Alert variant="success">
            <strong>成功:</strong> 操作が正常に完了しました。
          </Alert>
          <Alert variant="warning">
            <strong>警告:</strong> 注意が必要な項目があります。
          </Alert>
          <Alert variant="error">
            <strong>エラー:</strong> 問題が発生しました。
          </Alert>
        </div>
      </section>

      <hr />

      <section className="mt-8">
        <h2>使用方法</h2>
        <p>
          これらのスタイルは <code>globals.css</code> で定義されており、 各ページで追加の
          CSS クラスを記述することなく使用できます。
        </p>
        <p>
          新しいコンポーネントを作成する際は、まずこれらの基本スタイルを活用し、
          必要に応じてカスタムスタイルを追加してください。
        </p>
      </section>
    </div>
  );
}
