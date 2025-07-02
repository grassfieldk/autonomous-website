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
 * Theme Preview Page
 *
 * Demonstrates all theme colors and components for visual verification
 * across light and dark themes in the AI coding environment.
 */

export default function ThemePreviewPage() {
  return (
    <div className="container py-8">
      <h1>テーマプレビュー</h1>
      <p>ライトテーマとダークテーマでの全コンポーネントの表示確認用ページです。</p>

      {/* Typography */}
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
            通常のテキスト段落です。<a href="#">リンクテキスト</a>や
            <code>インラインコード</code>も含まれます。
          </p>

          <blockquote>引用文のサンプルです。</blockquote>

          <pre>{`// コードブロック
function sample() {
  return "Hello World";
}`}</pre>

          <ul>
            <li>リスト項目1</li>
            <li>リスト項目2</li>
            <li>リスト項目3</li>
          </ul>

          <ol>
            <li>番号付きリスト1</li>
            <li>番号付きリスト2</li>
            <li>番号付きリスト3</li>
          </ol>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2>ボタン</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">プライマリ</Button>
            <Button variant="accent">アクセント</Button>
            <Button variant="secondary">セカンダリ</Button>
            <Button variant="destructive">削除</Button>
            <Button variant="outline">アウトライン</Button>
            <Button variant="ghost">ゴースト</Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="sm">
              小
            </Button>
            <Button variant="primary">標準</Button>
            <Button variant="primary" size="lg">
              大
            </Button>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" disabled>
              無効化
            </Button>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="mb-12">
        <h2>フォーム要素</h2>
        <div className="max-w-md space-y-4">
          <div className="form-group">
            <label htmlFor="text-input">テキスト入力</label>
            <input type="text" id="text-input" placeholder="テキストを入力" />
            <div className="form-help">ヘルプテキスト</div>
          </div>

          <div className="form-group">
            <label htmlFor="email-input">メールアドレス</label>
            <input type="email" id="email-input" placeholder="example@email.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password-input">パスワード</label>
            <input type="password" id="password-input" placeholder="パスワード" />
            <div className="form-error">エラーメッセージ</div>
          </div>

          <div className="form-group">
            <label htmlFor="textarea">テキストエリア</label>
            <textarea id="textarea" rows={4} placeholder="長いテキスト"></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="select">選択</label>
            <select id="select">
              <option value="">選択してください</option>
              <option value="option1">オプション1</option>
              <option value="option2">オプション2</option>
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

      {/* Cards */}
      <section className="mb-12">
        <h2>カード</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader title="基本カード" description="カードの説明文" />
            <CardContent>
              <p>カードのメインコンテンツです。</p>
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
              <p>ヘッダーとフッターのないカードです。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section className="mb-12">
        <h2>バッジ</h2>
        <div className="flex flex-wrap gap-2">
          <Badge variant="primary">プライマリ</Badge>
          <Badge variant="accent">アクセント</Badge>
          <Badge variant="secondary">セカンダリ</Badge>
          <Badge variant="destructive">重要</Badge>
        </div>
      </section>

      {/* Color Palette */}
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
                <div className="bg-brand-gray mb-2 h-20 w-full rounded-lg"></div>
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

      {/* Alerts */}
      <section className="mb-12">
        <h2>アラート</h2>
        <div className="space-y-4">
          <Alert variant="info">情報アラートのサンプルです。</Alert>
          <Alert variant="success">成功アラートのサンプルです。</Alert>
          <Alert variant="warning">警告アラートのサンプルです。</Alert>
          <Alert variant="error">エラーアラートのサンプルです。</Alert>
        </div>
      </section>
    </div>
  );
}
