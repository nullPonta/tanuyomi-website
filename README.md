# Tanuyomi 公式Webサイト（LP）デプロイ・公開ガイド

本ディレクトリ（`website/`）は、ビルドツール不要の純粋な静的ファイル（HTML5 / CSS / JavaScript / SVGアセット）で構成されています。
どのホスティングサービス・Webサーバーにも、ファイルをそのままアップロードするだけで即座に公開できます。

---

## 1. GitHub Pages（完全無料・リポジトリ直結・おすすめ）

GitHub リポジトリをお持ちの場合、完全無料・追加契約なしで超高速CDN付きのWebサイトを公開できます。  
詳細な手順は [_memo/2026_0904_GitHubPages_and_Releases公開手順書.md](../_memo/2026_0904_GitHubPages_and_Releases公開手順書.md) を参照してください。

### 手順（GitHub Actions 方式）:
1. リポジトリ設定（**Settings** > **Pages**）を開く。
2. **Build and deployment** の **Source** を **「GitHub Actions」** に切り替える。
3. `.github/workflows/deploy-pages.yml`（`path: 'website'` を指定）をコミットして push する。
4. コミット push に連動して自動的にビルド・デプロイが実行され、`https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

---

## 2. Google Cloud / Firebase Hosting（Googleクレジット活用）

Google Cloud のクレジットを活用し、超高速CDNと無料SSL（HTTPS）付きで公開する手順です。

### 手順:
1. **Firebase CLI のインストール**:
   ```bash
   npm install -g firebase-tools
   ```
2. **ログイン**:
   ```bash
   firebase login
   ```
3. **初期化**:
   `website/` ディレクトリ内で初期化を実行します。
   ```bash
   cd website
   firebase init hosting
   ```
   - 質問 `What do you want to use as your public directory?` には `.`（カレントディレクトリ）を指定。
   - 質問 `Configure as a single-page app?` には `No` を指定。
   - 質問 `Set up automatic builds and deploys with GitHub?` には `No`（または必要に応じてYes）。
4. **デプロイ（公開）**:
   ```bash
   firebase deploy --only hosting
   ```
   - コマンド完了時に発行される `https://<project-id>.web.app` にて即座に公開されます。

---

## 3. ロリポップ！レンタルサーバー（格安運用・FTPアップロード）

月額100〜200円台で維持できるロリポップ等への配置手順です。

### 手順:
1. **ユーザー専用ページ（管理画面）にログイン**。
2. **ロリポップ！FTP**（ブラウザ内ファイルマネージャー）を開くか、FTPソフト（FileZilla等）で接続。
3. 公開フォルダ（`web` やドメイン設定で指定したフォルダ）を開く。
4. `website/` フォルダ内のすべてのファイル・フォルダ（`index.html`, `css/`, `js/`, `assets/`）をそのままドラッグ＆ドロップでアップロード。
5. 設定したドメインまたはロリポップ提供URLにアクセスして表示を確認。

---

## 4. さくらのレンタルサーバー / VPS

### さくらのレンタルサーバー（共有ホスティング）:
- ファイルマネージャーまたは FTPS / SFTP にて、`~/www/<公開フォルダ名>/` 配下に `website/` の中身を丸ごとアップロードします。

### さくらのVPS（Linux / Nginx の場合）:
1. Nginx のドキュメントルート（例: `/var/www/tanuyomi/`）に `website/` 内のファイルを配置（`rsync` または `scp`）。
   ```bash
   scp -r website/* user@your-server-ip:/var/www/tanuyomi/
   ```
2. Nginx 設定例:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/tanuyomi;
       index index.html;

       location / {
           try_files $uri $uri/ =404;
       }
   }
   ```

---

## 5. Cloudflare Pages（完全無料・高信頼CDN）

1. [Cloudflare Dashboard](https://dash.cloudflare.com/) にログインし、「Compute (Workers & Pages)」→「Pages」を選択。
2. **直接アップロード**:
   - `website/` フォルダをそのままドラッグ＆ドロップしてアップロードするだけで即時公開。
3. **GitHub連携（Privateリポジトリでも可能）**:
   - リポジトリを連携し、ビルド設定で「Build output directory」を `website` に指定して保存。

---

## 6. ローカルでの動作確認方法

ローカルPC上で直接表示を確認したい場合：

- **ブラウザで直接開く**: `website/index.html` をダブルクリックするだけで閲覧可能。
- **簡易HTTPサーバーで確認（Python）**:
  ```bash
  cd website
  python -m http.server 8080
  ```
  ブラウザで `http://localhost:8080` を開く。
- **簡易HTTPサーバーで確認（Node.js / npx）**:
  ```bash
  cd website
  npx serve .
  ```
