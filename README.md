# 🍃 Tanuyomi 公式Webサイト（LP）

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://nullponta.github.io/tanuyomi-website/)
[![GitHub Release](https://img.shields.io/github/v/release/nponta/Tanuyomi?include_prereleases&label=Tanuyomi%20Release)](https://github.com/nponta/Tanuyomi/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

電子書籍・動画メディアサーバー **「Tanuyomi（たぬヨミ）」** の公式ランディングページ（Webサイト）用リポジトリです。

* **🌐 公式Webサイト**: [https://nullponta.github.io/tanuyomi-website/](https://nullponta.github.io/tanuyomi-website/)
* **📦 Tanuyomi アプリ本体リポジトリ**: [https://github.com/nponta/Tanuyomi](https://github.com/nponta/Tanuyomi)

---

## 📖 Tanuyomi（たぬヨミ）とは

**「開けば、そこにあなたの書斎がある。」**

Tanuyomi は、PC や自宅サーバーに保存してある自炊漫画・書籍（ZIP / CBZ / PDF）や動画ファイルを、同一 Wi-Fi 内のスマートフォン・タブレット・PC のブラウザから超高速・快適に閲覧・ストリーミング再生できる自前ホスト型のメディアサーバーです。

* **⚡ 超高速レスポンス**: Blazor Server + SQLite WAL による軽快な動作とページめくり
* **📦 ポータブル・導入簡単**: 面倒なインストール不要、ZIP を解凍して実行するだけですぐに利用可能
* **🔒 安心の自前完結**: クラウドにデータを預けず、自宅のプライベートネットワーク内で安全に完結

---

## 💻 本Webサイトの特徴・技術スタック

本Webサイトは、フレームワークや重いビルドツール（Node.js / Webpack / Vite など）を一切必要としない、**純粋な静的ファイル（Vanilla Web標準技術）** で構成されています。

- **HTML5**: セマンティックマークアップ、構造化データ、SEO・アクセシビリティ対応
- **Vanilla CSS**: CSS カスタムプロパティ（CSS変数）、グラスモーフィズム、ダークモード基調のモダンUIデザイン
- **Vanilla JavaScript**: スムーズスクロール、FAQアコーディオン、カルーセルなどの軽量なマイクロインタラクション
- **SVG & WebP**: 軽量・高精細なベクターアイコンおよび最適化画像
- **ゼロビルド**: `git clone` して `index.html` をブラウザで開くだけで即座にプレビュー・編集可能

---

## 📁 ディレクトリ構成

```text
website/
├── index.html              # メインページ（ランディングページ）
├── css/
│   ├── style.css           # デザイン・レイアウト・タイポグラフィ
│   └── animations.css      # マイクロアニメーション・キーフレーム
├── js/
│   └── main.js             # UI制御（ナビゲーション、FAQ開閉等）
├── assets/
│   ├── icons/              # ロゴ、ファビコン（SVG）
│   └── images/             # スクリーンショット、OGP画像
└── README.md               # 本ドキュメント
```

---

## 🚀 ローカルでのプレビュー方法

特別なビルド手順はありません。以下のいずれかの方法ですぐに確認できます。

### 方法1: ブラウザで直接開く
`index.html` をダブルクリックしてブラウザで開きます。

### 方法2: 簡易HTTPサーバー（推奨）
**Python を使う場合:**
```bash
python -m http.server 8080
```
ブラウザで `http://localhost:8080` を開きます。

**Node.js (npx) を使う場合:**
```bash
npx serve .
```

---

## 🌐 デプロイ・公開方法

本サイトは **GitHub Pages** により自動デプロイ・運用されています。

### 1. GitHub Pages（標準運用）
- リポジトリの `main` ブランチに push すると、GitHub Pages により自動的に本番サイトへ反映されます。
- 公開URL: [https://nullponta.github.io/tanuyomi-website/](https://nullponta.github.io/tanuyomi-website/)

### 2. その他のホスティングへの配置
純粋な静的ファイルのため、あらゆるホスティング環境（Cloudflare Pages、Firebase Hosting、レンタルサーバー等）にファイルをアップロードするだけで公開可能です。

<details>
<summary>他のホスティング手順（Cloudflare / Firebase / レンタルサーバー等）を展開</summary>

#### Cloudflare Pages
- ダッシュボードから「直接アップロード」で `website/` フォルダをドラッグ＆ドロップするだけで即時公開。

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # public directory には「.」を指定
firebase deploy --only hosting
```

#### Apache / Nginx / 各種Webサーバー
- 公開ドキュメントルート（例: `/var/www/html/` や `public_html/`）にファイルを丸ごとアップロード・配置します。

</details>

---

## 📄 ライセンス

本Webサイトのソースコードおよびアセットは [MIT License](LICENSE) のもとで公開されています。
