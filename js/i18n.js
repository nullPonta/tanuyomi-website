/**
 * Tanuyomi Official Website - Internationalization (i18n) Module
 * Supports Japanese (ja), English (en), and Chinese (zh-CN).
 * Default: English for any language other than Japanese and Chinese.
 */

const I18N_STORAGE_KEY = 'tanuyomi_lang';

const TRANSLATIONS = {
  ja: {
    meta: {
      title: 'Tanuyomi（たぬヨミ）- 軽快でかんたんに使えるメディアサーバー＆ビューワー',
      description: 'Tanuyomi（たぬヨミ）は、大容量の画像・漫画書庫・動画・PDFをお手元のPC上で心地よく探索＆鑑賞できるメディアサーバーです。同一Wi-Fiのスマホやタブレットからもブラウザだけで快適に閲覧できます。',
      ogTitle: 'Tanuyomi（たぬヨミ）- 軽快でかんたんに使えるメディアサーバー＆ビューワー',
      ogDescription: 'PCで動かすだけで、同一Wi-Fiのスマホやタブレットからもブラウザだけでサクサク閲覧。解凍不要・インストール不要のポータブルアプリ。'
    },
    nav: {
      highlights: '特徴',
      devices: 'スマホ連携',
      features: '機能紹介',
      formats: '対応形式',
      faq: 'Q&A',
      download: 'ダウンロード'
    },
    hero: {
      badge: '🍃 インストール不要・解凍してすぐ動く',
      title: '<span class="phrase">PCでも、</span><span class="phrase">スマホやタブレットでも。</span><br class="br-pc"><span class="gradient-text"><span class="phrase">お気に入りの作品を</span><span class="phrase">どこでも心地よく。</span></span>',
      description: '<span class="phrase">Tanuyomi（たぬヨミ）は、</span><span class="phrase">PCに保存してある大容量の漫画書庫や動画を</span><br class="br-pc"><span class="phrase">かんたんに楽しめるメディアサーバー＆ビューワーです。</span><br class="br-pc"><span class="phrase">PC本体での閲覧はもちろん、</span><span class="phrase">同一Wi-Fi内なら</span><span class="phrase"><strong>スマホやタブレットのブラウザから直接</strong></span><span class="phrase">サクサク鑑賞できます。</span>',
      ctaDownload: 'Windows版を無料ダウンロード',
      ctaDevices: '📱 スマホでの使い方を見る',
      metaDevices: '📱 スマホ・タブレットはアプリ不要（ブラウザだけ）',
      metaPortable: '✨ 単一実行ファイル（SQLite・各種ツール同梱）',
      metaOs: '💻 Windows 10 / 11 対応'
    },
    mock: {
      windowTitle: 'Tanuyomi - ライブラリ探索',
      libraryTitle: 'ライブラリ',
      recentAdded: '最近追加',
      continueReading: '続きから読む',
      favorites: 'お気に入り',
      random: 'ランダム',
      foldersTitle: 'フォルダ',
      folderManga: 'マンガ・単行本',
      folderArt: 'イラスト画集',
      folderVideo: '動画コレクション',
      syncDone: 'ライブラリ: 同期完了',
      breadcrumbHome: '🏠 ホーム',
      breadcrumbActive: 'マンガ・単行本',
      searchPlaceholder: '検索...',
      card1Title: '森の小さな魔法使い_第01巻.zip',
      card1Sub: '24.5 MB ｜ 2時間前に閲覧',
      card1ArtTitle: '森の小さな<br>魔法使い',
      card2Title: '週末キャンプ記録_星空撮影.mp4',
      card2Sub: '1.4 GB ｜ 100サムネイル生成済',
      card3Title: 'コンセプトアート作品集_v2.pdf',
      card3Sub: '88.2 MB ｜ 高画質展開対応',
      card3ArtTitle: 'コンセプトアート<br>作品集 2026',
      card4Title: 'タヌキの里山探検記_第02巻.cbz',
      card4Sub: '32.8 MB ｜ 見開き対応',
      card4ArtTitle: 'タヌキの里山<br>探検記'
    },
    highlights: {
      tag: 'Highlights',
      title: '<span class="phrase">Tanuyomi が選ばれる</span><span class="phrase"> 4 つの魅力</span>',
      subtitle: '<span class="phrase">誰でもかんたんに使えて、</span><span class="phrase">おうちのどこからでも快適に楽しめる設計です。</span>',
      card1Title: '<span class="phrase">スマホ・タブレットも</span><br><span class="phrase">ブラウザだけで即閲覧</span>',
      card1Desc: 'アプリの追加インストールは不要。同じWi-Fiにつないだスマホやタブレットから、ブラウザでアクセスするだけでベッドやソファからでも楽しめます。',
      card2Title: '<span class="phrase">解凍不要で</span><br><span class="phrase">そのまま閲覧</span>',
      card2Desc: 'ZIP, CBZ, PDF などの書庫を解凍せずに直接オープン。ディスク容量を節約しながら、読みたいときにすぐ読めます。',
      card3Title: '<span class="phrase">待たせない</span><br><span class="phrase">爆速プレビュー</span>',
      card3Desc: '独自のスマートキャッシュにより、膨大なライブラリでもサムネイルやページを瞬時に描画。テンポ良く快適に作品を選べます。',
      card4Title: '<span class="phrase">動画の</span><br><span class="phrase">100サムネイル一覧</span>',
      card4Desc: 'あらかじめ生成された100枚のサムネイル一覧から、見たい場面へ即ジャンプ。長時間の動画も快適にシークできます。'
    },
    devices: {
      tag: 'Cross-Device',
      title: '<span class="phrase">おうちのWi-Fiでつながる、</span><span class="phrase">自由な鑑賞スタイル</span>',
      subtitle: '<span class="phrase">PCを母艦にして起動しておくだけ。</span><span class="phrase">専用アプリを入れなくても、手元の端末ですぐ開けます。</span>',
      pcBadge: '💻 PC母艦（バックグラウンド常駐）',
      wifiLabel: '同一Wi-Fi',
      wifiSublabel: '専用アプリ不要・ブラウザ直結',
      phoneBadge: '📱 スマホ（Safari / Chrome）',
      step1Title: '1. PCで Tanuyomi を起動',
      step1Desc: 'Windows PCで実行ファイルを開くだけで、メディアサーバーとして準備が整います。',
      step2Title: '2. 同一Wi-Fiに接続',
      step2Desc: 'スマホやタブレットを、ご自宅の同じWi-Fi（ルーター）につなぎます。',
      step3Title: '3. ブラウザでアクセス',
      step3Desc: 'Safari や Chrome などのブラウザからURLを開くだけで、すぐに漫画や動画を楽しめます。'
    },
    features: {
      tag: 'Showcase',
      title: '<span class="phrase">多彩なメディアを</span><span class="phrase">直感的な操作感で</span>',
      subtitle: '<span class="phrase">ビューワー、プレイヤー、ファイラーが</span><span class="phrase">ひとつのアプリに心地よくまとまっています。</span>',
      tabViewer: '📖 漫画・画像ビューワー',
      tabVideo: '🎥 動画プレイヤー',
      tabFiler: '📁 ファイル管理 &amp; ZIP',
      tabCompress: '🗜️ 動画圧縮',
      viewerTitle: '<span class="phrase">見開き・回転・ページ送りを</span><br class="br-pc"><span class="phrase">自由自在に</span>',
      viewerDesc: '右開き・左開き表示はもちろん、90度回転やサムネイル一覧ドロワーからのページジャンプなど、読書に必要な機能がキーボードやスマホの画面タッチでスムーズに操作できます。',
      viewerCheck1: '単ページ ＆ 見開き（右開き・左開き）の瞬時切替',
      viewerCheck2: '快適なショートカットキー ＆ タッチスワイプ操作',
      viewerCheck3: 'ZIPやPDF内の画像も端末のメモリを圧迫せず高速展開',
      viewerSpread: '見開き表示',
      viewerBtnSpread: '📖 見開き',
      viewerBtnRotate: '🔄 回転',
      viewerBtnFullscreen: '⛶ 全画面',
      videoTitle: '<span class="phrase">100サムネイル一覧で</span><br class="br-pc"><span class="phrase">狙った場面へ即ジャンプ</span>',
      videoDesc: '長時間の動画でも、あらかじめ用意された100枚のサムネイル一覧から気になる瞬間へ一瞬で移動できます。ブラウザでそのまま快適に再生可能です。',
      videoCheck1: '100枚のサムネイル一覧による視覚的な高速シーク',
      videoCheck2: 'ブラウザ標準対応フォーマットによる軽快な再生',
      videoCheck3: '倍速再生（0.5x 〜 2.0x）や全画面再生に対応',
      videoBadge: '100サムネイル',
      videoBarLabel: '🎞️ 100シーン・サムネイルシークバー',
      videoSeekHint: 'ホバーで瞬時にプレビュー',
      filerTitle: '<span class="phrase">ZIPアーカイブの整理や</span><br class="br-pc"><span class="phrase">書庫化も思いのままに</span>',
      filerDesc: '鑑賞するだけでなく、ライブラリの整頓もTanuyomiにおまかせ。PDFから高画質画像を抽出して扱いやすいZIP書庫に変換したり、アーカイブの整理をバックグラウンドで安全に行えます。',
      filerCheck1: 'PDF からの高画質画像抽出 ＆ ZIP書庫化',
      filerCheck2: 'ライブラリ内のZIPアーカイブ整理・管理',
      filerCheck3: '閲覧を妨げないバックグラウンド処理',
      filerBadge: 'ファイラーモード',
      filerFolder: 'ライブラリ / PDF資料集',
      filerPdfName: 'デザイン設定資料集_高精細.pdf',
      filerBtnZip: '⚡ ZIP書庫化',
      filerZipName: 'デザイン設定資料集_高精細.zip',
      filerZipDone: '生成完了',
      filerToastTitle: 'PDF画像抽出 完了',
      filerToastDesc: '64枚の画像を最高画質で抽出し、ZIP書庫を作成しました',
      compressTitle: '<span class="phrase">大容量動画を</span><br class="br-pc"><span class="phrase">高画質のままスマートに圧縮</span>',
      compressDesc: 'ディスク容量を圧迫しがちな動画ファイルを、画質を保ちながら効率的に軽量化。バックグラウンドジョブとして実行できるため、鑑賞の合間にまとめて省容量化できます。',
      compressCheck1: '画質をキープした効率的な動画圧縮・軽量化',
      compressCheck2: 'バックグラウンドでのジョブキュー管理',
      compressCheck3: 'ストレージ容量の節約と快適な管理を両立',
      compressBadge: '省容量化',
      compressJobStatus: '変換中 68%',
      compressOriginal: '元サイズ',
      compressPredicted: '圧縮後予測',
      compressReduction: '-75% 削減',
      compressFooter: '⚙️ ハードウェア支援: NVENC (GPU) 高速モード'
    },
    formats: {
      tag: 'Formats',
      title: '<span class="phrase">幅広いフォーマットに</span><span class="phrase">標準対応</span>',
      subtitle: '<span class="phrase">追加のコーデックや外部ツールの導入は不要。</span><span class="phrase">すべてアプリ本体に同梱されています。</span>',
      categoryBooks: '📚 書庫・ドキュメント',
      categoryImages: '🖼️ 画像フォーマット',
      categoryVideos: '🎬 動画・映像フォーマット'
    },
    download: {
      tag: 'Get Started',
      title: '<span class="phrase">今すぐ Tanuyomi で</span><span class="phrase">心地よいメディア体験を</span>',
      desc: '<span class="phrase">面倒なインストールや初期設定は不要です。</span><br class="br-pc"><span class="phrase">ZIPを解凍して実行するだけで、</span><span class="phrase">すぐにお手元のライブラリが開きます。</span>',
      btnDownload: 'Tanuyomi for Windows を無料ダウンロード (v0.1.2-beta)',
      subLink: 'すべてのリリース・更新履歴・Mac/Linux版はこちら（GitHub Releases）➔',
      metaInfo: '<span class="phrase">対応OS: Windows 10 / 11 (64bit)</span> ｜ <span class="phrase">ポータブルZIP形式（約147MB）</span> ｜ <span class="phrase">完全無料・オープンソース</span>',
      step1Title: 'ダウンロード',
      step1Desc: '<span class="phrase">配布ZIPファイルを</span><span class="phrase">ダウンロードします。</span>',
      step2Title: 'お好きな場所に解凍',
      step2Desc: '<span class="phrase">レジストリを変更せず、</span><span class="phrase">フォルダ移動も自由です。</span>',
      step3Title: 'tanuyomi.exe を実行',
      step3Desc: '<span class="phrase">PCやスマホのブラウザですぐ鑑賞できます。</span>'
    },
    faq: {
      tag: 'FAQ',
      title: '<span class="phrase">よくある質問</span>',
      subtitle: '<span class="phrase">気になる点や疑問について</span><span class="phrase">お答えします。</span>',
      q1: 'スマホやタブレットで見るためにアプリのインストールは必要ですか？',
      a1: 'いいえ、アプリのインストールは一切不要です。iPhone、iPad、Android端末などの標準ブラウザ（Safari や Chrome 等）からアクセスするだけで、見開き閲覧や動画ストリーミング再生をそのままご利用いただけます。',
      q2: '面倒なインストールや環境設定は必要ですか？',
      a2: 'いいえ、一切不要です。必要なデータベース（SQLite）や各種変換ツール（FFmpeg, Poppler, BPGデコーダー等）はすべて同梱されていますので、解凍して <code>tanuyomi.exe</code> を起動するだけですぐにお使いいただけます。',
      q3: '同一Wi-Fiでスマホからつなぐにはどうすればいいですか？',
      a3: 'Tanuyomi を起動しているPCと同じ自宅Wi-Fiにスマホを接続し、スマホのブラウザのアドレスバーに「PCのローカルIPアドレス:ポート番号」（例: <code>http://192.168.1.10:5005</code>）を入力するだけですぐにライブラリが開きます。',
      q4: '動画の再生やシークは軽快に動きますか？',
      a4: 'はい。100コマのシーンサムネイルがあらかじめ用意されているため、動画全体を読み込み直すことなく、見たい位置へ直感的にシークしてスムーズに再生できます。',
      q5: '質問や不具合報告、要望、問い合わせはどこから行えばいいですか？',
      a5: 'ご質問・不具合のご報告・機能追加のご要望や各種お問い合わせは、公式 <a href="https://ci-en.net/creator/40053" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light); text-decoration: underline;">Ci-en クリエイターページ</a> のメッセージ機能または最新記事のコメント欄より受け付けております。お気軽にご連絡ください。開発状況や最新の更新情報も Ci-en で随時発信しています。'
    },
    contact: {
      tag: 'Support &amp; Community',
      title: '<span class="phrase">お問い合わせ・ご意見・</span><span class="phrase">不具合のご報告</span>',
      desc: '<span class="phrase">Tanuyomi をご利用いただきありがとうございます。</span><br class="br-pc"><span class="phrase">機能のご要望や不具合報告、各種お問い合わせは、</span><span class="phrase">公式 <strong>Ci-en</strong> クリエイターページにて受け付けております。</span><br class="br-pc"><span class="phrase">開発の進捗報告やアップデート情報も順次発信していますので、</span><span class="phrase">ぜひお気軽にフォローやメッセージをお寄せください！</span>',
      btnCta: '公式 Ci-en ページでお問い合わせ・応援する ➔',
      note: '※ ご質問・ご相談は Ci-en のメッセージ機能または最新記事のコメント欄よりお送りいただけます。'
    },
    footer: {
      brandDesc: '<span class="phrase">大容量メディアライブラリのための、</span><br><span class="phrase">軽快でかんたんに使えるメディアサーバー＆ビューワー。</span>',
      colNav: 'ナビゲーション',
      colSupport: 'サポート &amp; コミュニティ',
      linkHighlights: '特徴',
      linkDevices: 'スマホ・タブレット連携',
      linkFeatures: '機能一覧',
      linkFormats: '対応フォーマット',
      linkDownload: 'ダウンロード',
      linkContact: 'お問い合わせ',
      linkCien: 'お問い合わせ・最新情報（Ci-en） ↗',
      linkGithub: 'GitHub リポジトリ ↗',
      linkFaq: 'よくある質問 (FAQ)',
      linkEnv: '動作環境・形式',
      bottomNotice: 'Built for gentle & easy cross-device media browsing.'
    },
    langSelect: {
      ariaLabel: '言語を選択',
      ja: '日本語',
      en: 'English',
      zh: '简体中文'
    }
  },
  en: {
    meta: {
      title: 'Tanuyomi - Lightweight, Easy-to-Use Media Server & Viewer',
      description: 'Tanuyomi is a self-hosted media server designed for seamless browsing of large manga/comic archives, videos, and PDFs. Access and stream directly from your phone or tablet browser over the same Wi-Fi.',
      ogTitle: 'Tanuyomi - Lightweight, Easy-to-Use Media Server & Viewer',
      ogDescription: 'Run on your PC and enjoy fast, effortless browsing on phones & tablets over your local Wi-Fi. Completely portable with zero installation required.'
    },
    nav: {
      highlights: 'Highlights',
      devices: 'Mobile Sync',
      features: 'Features',
      formats: 'Formats',
      faq: 'FAQ',
      download: 'Download'
    },
    hero: {
      badge: '🍃 Zero Setup · Portable & Instant Run',
      title: '<span class="phrase">On your PC, </span><span class="phrase">phone, or tablet.</span><br class="br-pc"><span class="gradient-text"><span class="phrase">Enjoy your collection </span><span class="phrase">anywhere comfortably.</span></span>',
      description: '<span class="phrase">Tanuyomi is a lightweight media server and viewer </span><span class="phrase">for manga archives and videos on your PC.</span><br class="br-pc"><span class="phrase">Enjoy high-speed browsing on your PC, </span><span class="phrase">or stream directly </span><span class="phrase"><strong>from your phone or tablet browser</strong></span><span class="phrase"> over local Wi-Fi with no extra app required.</span>',
      ctaDownload: 'Free Download for Windows',
      ctaDevices: '📱 View Mobile Setup Guide',
      metaDevices: '📱 No app needed on mobile (pure web browser)',
      metaPortable: '✨ Single executable (SQLite & tools bundled)',
      metaOs: '💻 Windows 10 / 11 Compatible'
    },
    mock: {
      windowTitle: 'Tanuyomi - Library Explorer',
      libraryTitle: 'LIBRARY',
      recentAdded: 'Recently Added',
      continueReading: 'Continue Reading',
      favorites: 'Favorites',
      random: 'Random',
      foldersTitle: 'FOLDERS',
      folderManga: 'Manga & Books',
      folderArt: 'Art Collections',
      folderVideo: 'Video Archive',
      syncDone: 'Library: Synced',
      breadcrumbHome: '🏠 Home',
      breadcrumbActive: 'Manga & Books',
      searchPlaceholder: 'Search...',
      card1Title: 'Little_Forest_Mage_Vol01.zip',
      card1Sub: '24.5 MB ｜ Read 2 hours ago',
      card1ArtTitle: 'Little Forest<br>Mage',
      card2Title: 'Weekend_Camping_StarrySky.mp4',
      card2Sub: '1.4 GB ｜ 100 Thumbnails Ready',
      card3Title: 'Concept_Artworks_2026.pdf',
      card3Sub: '88.2 MB ｜ Hi-Res Rendering',
      card3ArtTitle: 'Concept Art<br>Collection',
      card4Title: 'Tanuki_Satoyama_Chronicles_02.cbz',
      card4Sub: '32.8 MB ｜ Spread Supported',
      card4ArtTitle: 'Tanuki<br>Chronicles'
    },
    highlights: {
      tag: 'Highlights',
      title: '<span class="phrase">Why Choose Tanuyomi: </span><span class="phrase">4 Core Highlights</span>',
      subtitle: '<span class="phrase">Simple for anyone to use, </span><span class="phrase">crafted for comfortable browsing anywhere at home.</span>',
      card1Title: '<span class="phrase">Instant Mobile Browsing</span><br><span class="phrase">No App Required</span>',
      card1Desc: 'Zero extra apps to install. Connect phones or tablets to your home Wi-Fi and open your browser to enjoy your collection from your bed or sofa.',
      card2Title: '<span class="phrase">Zero Extraction</span><br><span class="phrase">Read Archives Directly</span>',
      card2Desc: 'Open ZIP, CBZ, and PDF files instantly without unpacking. Save storage space while accessing anything you want right away.',
      card3Title: '<span class="phrase">Blazing-Fast</span><br><span class="phrase">Instant Previews</span>',
      card3Desc: 'Smart caching delivers lightning-quick thumbnails and page rendering even for huge libraries. Browse smoothly without waiting.',
      card4Title: '<span class="phrase">Video Visual Seek</span><br><span class="phrase">100 Thumbnail Gallery</span>',
      card4Desc: 'Jump to any scene instantly using 100 pre-generated visual thumbnails. Effortlessly navigate through long movies and recordings.'
    },
    devices: {
      tag: 'Cross-Device',
      title: '<span class="phrase">Connected via Home Wi-Fi, </span><span class="phrase">Total Viewing Freedom</span>',
      subtitle: '<span class="phrase">Just run Tanuyomi on your main PC. </span><span class="phrase">Access instantly from any mobile device without dedicated apps.</span>',
      pcBadge: '💻 Host PC (Runs in background)',
      wifiLabel: 'Same Wi-Fi',
      wifiSublabel: 'Zero app installation · Direct browser access',
      phoneBadge: '📱 Mobile (Safari / Chrome)',
      step1Title: '1. Launch on PC',
      step1Desc: 'Just open the executable on your Windows PC to instantly launch the media server.',
      step2Title: '2. Connect to Wi-Fi',
      step2Desc: 'Connect your smartphone or tablet to your home Wi-Fi network.',
      step3Title: '3. Open in Browser',
      step3Desc: 'Open the URL in Safari, Chrome, or any browser to start enjoying your manga and videos.'
    },
    features: {
      tag: 'Showcase',
      title: '<span class="phrase">Rich Media Experience </span><span class="phrase">With Intuitive Controls</span>',
      subtitle: '<span class="phrase">Book viewer, video player, and file manager </span><span class="phrase">seamlessly united into one elegant app.</span>',
      tabViewer: '📖 Manga &amp; Image Viewer',
      tabVideo: '🎥 Video Player',
      tabFiler: '📁 File Manager &amp; ZIP',
      tabCompress: '🗜️ Video Compressor',
      viewerTitle: '<span class="phrase">Double-Page Spreads, </span><br class="br-pc"><span class="phrase">Rotation &amp; Smooth Navigation</span>',
      viewerDesc: 'Supports right-to-left / left-to-right reading, 90° rotation, and quick drawer page hopping. Controlled smoothly with keyboard shortcuts or mobile touch gestures.',
      viewerCheck1: 'Instant toggle between single page & double-page spread',
      viewerCheck2: 'Comfortable keyboard shortcuts & mobile touch swipe support',
      viewerCheck3: 'Fast streaming of images inside ZIP & PDF with low memory footprint',
      viewerSpread: 'Spread View',
      viewerBtnSpread: '📖 Spread',
      viewerBtnRotate: '🔄 Rotate',
      viewerBtnFullscreen: '⛶ Fullscreen',
      videoTitle: '<span class="phrase">100-Thumbnail Bar </span><br class="br-pc"><span class="phrase">Jump Directly to Key Scenes</span>',
      videoDesc: 'Even with long videos, 100 pre-generated scene thumbnails let you jump to the exact scene you want in an instant. Smooth native playback right inside your browser.',
      videoCheck1: 'Visual high-speed seeking with 100 thumbnail filmstrip',
      videoCheck2: 'Smooth playback via native browser media formats',
      videoCheck3: 'Playback speed control (0.5x - 2.0x) & fullscreen mode',
      videoBadge: '100 Thumbnails',
      videoBarLabel: '🎞️ 100-Scene Thumbnail Seek Bar',
      videoSeekHint: 'Hover to preview instantly',
      filerTitle: '<span class="phrase">Effortless ZIP Archiving </span><br class="br-pc"><span class="phrase">&amp; Library Organization</span>',
      filerDesc: 'More than just viewing—Tanuyomi handles library maintenance too. Extract high-resolution images from PDFs into manageable ZIP archives in the background safely.',
      filerCheck1: 'Extract high-resolution images from PDF into ZIP archives',
      filerCheck2: 'Organize and manage ZIP archives directly in your library',
      filerCheck3: 'Non-blocking background job execution while you browse',
      filerBadge: 'Filer Mode',
      filerFolder: 'Library / PDF Reference Collection',
      filerPdfName: 'Art_Design_Reference_HiRes.pdf',
      filerBtnZip: '⚡ Create ZIP',
      filerZipName: 'Art_Design_Reference_HiRes.zip',
      filerZipDone: 'Completed',
      filerToastTitle: 'PDF Image Extraction Finished',
      filerToastDesc: 'Extracted 64 images at highest quality and created ZIP archive',
      compressTitle: '<span class="phrase">Smart Video Compression </span><br class="br-pc"><span class="phrase">High Quality, Small Size</span>',
      compressDesc: 'Shrink bulky video files without losing visual clarity. Queue tasks as background jobs so you can reclaim disk space while enjoying your collection.',
      compressCheck1: 'Efficient compression keeping pristine visual fidelity',
      compressCheck2: 'Background job queue management',
      compressCheck3: 'Save massive storage space with hassle-free automation',
      compressBadge: 'Space Saver',
      compressJobStatus: 'Converting 68%',
      compressOriginal: 'Original',
      compressPredicted: 'Compressed',
      compressReduction: '-75% Reduced',
      compressFooter: '⚙️ Hardware Acceleration: NVENC (GPU) High Speed'
    },
    formats: {
      tag: 'Formats',
      title: '<span class="phrase">Comprehensive Format Support </span><span class="phrase">Out of the Box</span>',
      subtitle: '<span class="phrase">No extra codecs or external tools required. </span><span class="phrase">Everything is pre-bundled with the application.</span>',
      categoryBooks: '📚 Archives &amp; Documents',
      categoryImages: '🖼️ Image Formats',
      categoryVideos: '🎬 Video &amp; Movie Formats'
    },
    download: {
      tag: 'Get Started',
      title: '<span class="phrase">Start Your Comfortable </span><span class="phrase">Media Experience with Tanuyomi</span>',
      desc: '<span class="phrase">No complicated installation or configuration needed. </span><br class="br-pc"><span class="phrase">Just unzip and launch to explore your personal library immediately.</span>',
      btnDownload: 'Free Download for Windows (v0.1.2-beta)',
      subLink: 'All Releases, Changelog, macOS & Linux builds on GitHub Releases ➔',
      metaInfo: '<span class="phrase">OS: Windows 10 / 11 (64bit)</span> ｜ <span class="phrase">Portable ZIP (~147MB)</span> ｜ <span class="phrase">Free & Open Source</span>',
      step1Title: 'Download',
      step1Desc: '<span class="phrase">Download the release </span><span class="phrase">ZIP archive.</span>',
      step2Title: 'Extract Anywhere',
      step2Desc: '<span class="phrase">No registry modifications, </span><span class="phrase">free to move anywhere.</span>',
      step3Title: 'Run tanuyomi.exe',
      step3Desc: '<span class="phrase">Browse immediately on </span><span class="phrase">your PC or mobile browser.</span>'
    },
    faq: {
      tag: 'FAQ',
      title: '<span class="phrase">Frequently Asked Questions</span>',
      subtitle: '<span class="phrase">Answers to common questions </span><span class="phrase">and details about Tanuyomi.</span>',
      q1: 'Do I need to install any app on my mobile phone or tablet?',
      a1: 'No, absolutely no app installation is required. Simply open standard mobile browsers (such as Safari on iOS or Chrome on Android) and connect to enjoy smooth spread reading and video streaming immediately.',
      q2: 'Is there any complex installation or environment setup required?',
      a2: 'No, none at all. All required components—including SQLite, FFmpeg, Poppler, and BPG decoders—are pre-bundled in the download. Just unpack and double-click <code>tanuyomi.exe</code> to begin.',
      q3: 'How do I connect from my phone over the same Wi-Fi?',
      a3: 'Make sure your phone is connected to the same home Wi-Fi router as your host PC. Then enter your PC\'s local IP address and port (e.g. <code>http://192.168.1.10:5005</code>) into your phone\'s browser address bar to access your library instantly.',
      q4: 'Does video playback and seeking perform smoothly?',
      a4: 'Yes! Tanuyomi pre-generates a 100-thumbnail filmstrip for each video, allowing you to visually scrub and jump to the exact scene you want without reloading the entire stream.',
      q5: 'Where can I ask questions, report bugs, or submit feature requests?',
      a5: 'For questions, bug reports, feature requests, and feedback, please visit our official <a href="https://ci-en.net/creator/40053" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light); text-decoration: underline;">Ci-en Creator Page</a> via messages or comments. We regularly publish development progress and release updates there!'
    },
    contact: {
      tag: 'Support &amp; Community',
      title: '<span class="phrase">Contact, Feedback &amp; </span><span class="phrase">Bug Reports</span>',
      desc: '<span class="phrase">Thank you for using Tanuyomi! </span><br class="br-pc"><span class="phrase">Feature suggestions, bug reports, and general feedback </span><span class="phrase">are welcomed on our official <strong>Ci-en</strong> creator page. </span><br class="br-pc"><span class="phrase">We share ongoing development logs and updates regularly—feel free to follow and drop us a message!</span>',
      btnCta: 'Contact & Support on Official Ci-en Page ➔',
      note: '※ Inquiries and suggestions can be sent via Ci-en messages or article comments.'
    },
    footer: {
      brandDesc: '<span class="phrase">Lightweight, easy-to-use media server &amp; viewer </span><br><span class="phrase">crafted for large personal media libraries.</span>',
      colNav: 'Navigation',
      colSupport: 'Support &amp; Community',
      linkHighlights: 'Highlights',
      linkDevices: 'Mobile Sync',
      linkFeatures: 'Features',
      linkFormats: 'Supported Formats',
      linkDownload: 'Download',
      linkContact: 'Contact',
      linkCien: 'Ci-en Official Page & Updates ↗',
      linkGithub: 'GitHub Repository ↗',
      linkFaq: 'FAQ',
      linkEnv: 'System Requirements',
      bottomNotice: 'Built for gentle & easy cross-device media browsing.'
    },
    langSelect: {
      ariaLabel: 'Select language',
      ja: '日本語',
      en: 'English',
      zh: '简体中文'
    }
  },
  zh: {
    meta: {
      title: 'Tanuyomi（たぬヨミ）- 轻快易用的个人媒体服务器与阅览器',
      description: 'Tanuyomi 是一款专为漫画书库、图像收藏、高清视频与 PDF 打造的轻量级自建媒体服务器。同局域网（Wi-Fi）下的手机与平板仅需浏览器即可高速流畅阅览与串流播放。',
      ogTitle: 'Tanuyomi（たぬヨミ）- 轻快易用的个人媒体服务器与阅览器',
      ogDescription: '在电脑上一键启动，同局域网手机与平板即可直接在浏览器畅快阅览。无需安装、免解压的便携式应用。'
    },
    nav: {
      highlights: '特色',
      devices: '移动端连接',
      features: '功能介绍',
      formats: '支持格式',
      faq: '常见问题',
      download: '立即下载'
    },
    hero: {
      badge: '🍃 无需安装 · 解压即用便携设计',
      title: '<span class="phrase">电脑、手机、平板，</span><br class="br-pc"><span class="gradient-text"><span class="phrase">随时随地随心畅享</span><span class="phrase">你的精彩收藏。</span></span>',
      description: '<span class="phrase">Tanuyomi 是一款轻快易用的自建媒体服务器与阅览器，</span><span class="phrase">专为管理电脑中的海量漫画归档与视频收藏而设计。</span><br class="br-pc"><span class="phrase">不仅能在电脑上畅快阅读，</span><span class="phrase">同 Wi-Fi 局域网下</span><span class="phrase"><strong>手机和平板只需浏览器</strong></span><span class="phrase">即可秒开阅览与串流播放。</span>',
      ctaDownload: '免费下载 Windows 版',
      ctaDevices: '📱 查看移动端使用指南',
      metaDevices: '📱 手机/平板免装 App（纯网页浏览器访问）',
      metaPortable: '✨ 单文件绿色版（内置 SQLite 与解码工具）',
      metaOs: '💻 支持 Windows 10 / 11 系统'
    },
    mock: {
      windowTitle: 'Tanuyomi - 媒体库探索',
      libraryTitle: '媒体库',
      recentAdded: '最近添加',
      continueReading: '继续阅读',
      favorites: '我的收藏',
      random: '随机漫游',
      foldersTitle: '文件夹',
      folderManga: '漫画·单行本',
      folderArt: '插画画集',
      folderVideo: '精选视频',
      syncDone: '媒体库: 同步完成',
      breadcrumbHome: '🏠 首页',
      breadcrumbActive: '漫画·单行本',
      searchPlaceholder: '搜索...',
      card1Title: '森林小魔女_第01卷.zip',
      card1Sub: '24.5 MB ｜ 2小时前阅读',
      card1ArtTitle: '森林小魔女<br>第01卷',
      card2Title: '周末露营日记_星空延时.mp4',
      card2Sub: '1.4 GB ｜ 100张缩略图已就绪',
      card3Title: '概念艺术设定集_2026.pdf',
      card3Sub: '88.2 MB ｜ 支持高清渲染',
      card3ArtTitle: '概念艺术<br>设定作品集',
      card4Title: '狸猫的山里探险记_第02卷.cbz',
      card4Sub: '32.8 MB ｜ 支持双页拼合',
      card4ArtTitle: '狸猫的山里<br>探险记'
    },
    highlights: {
      tag: 'Highlights',
      title: '<span class="phrase">为何选择 Tanuyomi：</span><span class="phrase">4 大核心特色</span>',
      subtitle: '<span class="phrase">操作极简无门槛，</span><span class="phrase">在家中任意角落均可享受沉浸式阅览体验。</span>',
      card1Title: '<span class="phrase">手机·平板免装App</span><br><span class="phrase">纯浏览器即开即看</span>',
      card1Desc: '无需额外下载安装任何客户端应用。只要连接家庭相同 Wi-Fi，用手机自带浏览器打开地址，在床上或沙发上即可轻松阅览。',
      card2Title: '<span class="phrase">无需解压归档</span><br><span class="phrase">秒速直接开启</span>',
      card2Desc: '无需解压即可直接阅览 ZIP、CBZ、PDF 等格式文件。极大节省磁盘空间的同时，即点即看，毫无等待。',
      card3Title: '<span class="phrase">毫秒级瞬时响应</span><br><span class="phrase">丝滑快速预览</span>',
      card3Desc: '自研智能缓存系统，即使面对数万部作品的海量媒体库，缩略图与页面也能秒速渲染，翻页选书行云流水。',
      card4Title: '<span class="phrase">视频百张缩略图</span><br><span class="phrase">精准跳转精彩瞬间</span>',
      card4Desc: '自动生成 100 张均匀时间轴胶片缩略图，一览全片轮廓，长视频亦能一触直达目标画面。'
    },
    devices: {
      tag: 'Cross-Device',
      title: '<span class="phrase">局域网 Wi-Fi 直连，</span><span class="phrase">畅享跨设备自由阅览</span>',
      subtitle: '<span class="phrase">只需在电脑端启动 Tanuyomi 作为母舰服务器，</span><span class="phrase">手中的任何移动设备皆可即刻随心访问。</span>',
      pcBadge: '💻 电脑母舰（后台静默常驻）',
      wifiLabel: '相同 Wi-Fi',
      wifiSublabel: '无需额外客户端 · 浏览器直连',
      phoneBadge: '📱 手机平板（Safari / Chrome）',
      step1Title: '1. 电脑端一键启动',
      step1Desc: '双击打开 Windows 版执行文件，媒体服务器即刻在本地准备就绪。',
      step2Title: '2. 连接同一 Wi-Fi',
      step2Desc: '将手机或平板电脑连接至家庭路由器相同的 Wi-Fi 网络。',
      step3Title: '3. 浏览器输入地址',
      step3Desc: '在 Safari 或 Chrome 等浏览器中输入电脑 IP 地址与端口，即可立刻开始阅览。'
    },
    features: {
      tag: 'Showcase',
      title: '<span class="phrase">全能多媒体支持，</span><span class="phrase">直观舒适的操作质感</span>',
      subtitle: '<span class="phrase">将漫画阅览器、视频播放器与归档文件管理</span><span class="phrase">完美集于一体。</span>',
      tabViewer: '📖 漫画·图像阅览器',
      tabVideo: '🎥 视频播放器',
      tabFiler: '📁 文件管理与归档',
      tabCompress: '🗜️ 视频压缩瘦身',
      viewerTitle: '<span class="phrase">双页并排、90°旋转与翻页</span><br class="br-pc"><span class="phrase">随心自如掌控</span>',
      viewerDesc: '完美支持日漫右翻（从右向左）与普通左翻、整幅跨页合并、一键 90 度旋转以及缩略图抽屉快捷跳页，键盘与触摸手势均可畅快操作。',
      viewerCheck1: '单页与双页拼合（右开/左开模式）瞬时切换',
      viewerCheck2: '丰富便捷的键盘快捷键与移动端触摸滑动交互',
      viewerCheck3: '内存低占用直接解流 ZIP 与 PDF 内图片，加载迅捷',
      viewerSpread: '双页并排显示',
      viewerBtnSpread: '📖 双页模式',
      viewerBtnRotate: '🔄 画面旋转',
      viewerBtnFullscreen: '⛶ 全屏显示',
      videoTitle: '<span class="phrase">100 帧全景缩略图</span><br class="br-pc"><span class="phrase">一触直达目标高光场景</span>',
      videoDesc: '即使长达数小时的高清视频，也能借助预先生成的 100 张胶片缩略图轻松寻景，浏览器原生硬件加速畅快播放。',
      videoCheck1: '100 张全片缩略图胶片轨道视效快速搜寻',
      videoCheck2: '基于浏览器标准解码的轻快流畅视频播放',
      videoCheck3: '支持 0.5x 至 2.0x 倍速调节及沉浸式全屏播放',
      videoBadge: '100 帧缩略图',
      videoBarLabel: '🎞️ 100 场景缩略图寻轨条',
      videoSeekHint: '鼠标悬停或轻触即刻预览画面',
      filerTitle: '<span class="phrase">高效 ZIP 归档整理</span><br class="br-pc"><span class="phrase">媒体库管理得心应手</span>',
      filerDesc: '不仅是阅览器，更能成为整理收藏的强力助手。可将 PDF 自动提取高清图片并打包为标准 ZIP 漫画书库，后台静默安全执行。',
      filerCheck1: '一键提取 PDF 内全部高清图像并转换为标准 ZIP 归档',
      filerCheck2: '媒体库内部 ZIP 归档统一管理与维护',
      filerCheck3: '非阻塞式后台队列，不影响前台沉浸阅读体验',
      filerBadge: '文件管理模式',
      filerFolder: '媒体库 / PDF资料集',
      filerPdfName: '美术设定资料集_高精细.pdf',
      filerBtnZip: '⚡ 转为 ZIP 归档',
      filerZipName: '美术设定资料集_高精细.zip',
      filerZipDone: '转换完毕',
      filerToastTitle: 'PDF 图像提取完毕',
      filerToastDesc: '已成功以最高画质提取 64 张图片并生成 ZIP 漫画包',
      compressTitle: '<span class="phrase">大容量视频智能压缩</span><br class="br-pc"><span class="phrase">兼顾超高画质与轻盈体积</span>',
      compressDesc: '高效压缩占用巨量磁盘空间的高清视频文件，在保留清晰细节的同时大幅缩减体积。后台异步转码，省心省力。',
      compressCheck1: '保留优质视觉观感的高效视频压缩瘦身',
      compressCheck2: '后台异步转码任务队列排队管理',
      compressCheck3: '大幅节约宝贵的硬盘存储空间',
      compressBadge: '容量瘦身',
      compressJobStatus: '转码中 68%',
      compressOriginal: '原始大小',
      compressPredicted: '压缩后预估',
      compressReduction: '-75% 大幅节省',
      compressFooter: '⚙️ 硬件加速支持: NVENC (GPU) 极速模式'
    },
    formats: {
      tag: 'Formats',
      title: '<span class="phrase">全面支持</span><span class="phrase">常见多媒体格式</span>',
      subtitle: '<span class="phrase">无需手动配置解码器或第三方依赖工具，</span><span class="phrase">一切均已开箱内置。</span>',
      categoryBooks: '📚 归档与文档',
      categoryImages: '🖼️ 图像格式',
      categoryVideos: '🎬 视频与影视格式'
    },
    download: {
      tag: 'Get Started',
      title: '<span class="phrase">即刻开启 Tanuyomi</span><span class="phrase">畅快舒适的媒体新体验</span>',
      desc: '<span class="phrase">无需繁琐的安装向导或复杂数据库配置。</span><br class="br-pc"><span class="phrase">仅需解压 ZIP 运行，</span><span class="phrase">即可瞬间唤醒你的精彩媒体库。</span>',
      btnDownload: '免费下载 Windows 版 (v0.1.2-beta)',
      subLink: '前往 GitHub Releases 查看所有版本历史、更新日志、macOS 与 Linux 构建 ➔',
      metaInfo: '<span class="phrase">支持系统: Windows 10 / 11 (64位)</span> ｜ <span class="phrase">绿色免安装 ZIP（约 147MB）</span> ｜ <span class="phrase">完全免费·开源</span>',
      step1Title: '下载软件包',
      step1Desc: '<span class="phrase">获取最新版本的</span><span class="phrase">发布版 ZIP 压缩包。</span>',
      step2Title: '解压至任意目录',
      step2Desc: '<span class="phrase">不写入注册表，</span><span class="phrase">支持随意移动路径。</span>',
      step3Title: '运行 tanuyomi.exe',
      step3Desc: '<span class="phrase">电脑或手机浏览器</span><span class="phrase">立即开启阅览。</span>'
    },
    faq: {
      tag: 'FAQ',
      title: '<span class="phrase">常见问题解答</span>',
      subtitle: '<span class="phrase">关于 Tanuyomi 运行原理与</span><span class="phrase">使用疑问的详尽解答。</span>',
      q1: '在手机或平板上阅读需要专门安装 App 吗？',
      a1: '完全不需要！无论是 iPhone、iPad 还是各类 Android 设备，只需使用系统自带的现代浏览器（如 Safari、Chrome 等）访问电脑端提供的网页地址，即可享受双页拼合翻页、触屏手势和视频串流等完整功能。',
      q2: '需要安装复杂的依赖运行库或进行环境配置吗？',
      a2: '不需要，完全开箱即用。核心数据库（SQLite）以及所有底层解码转换组件（FFmpeg、Poppler、BPG 解码器等）均已预置打包在程序目录中，解压后双击运行 <code>tanuyomi.exe</code> 即可立即使用。',
      q3: '如何通过相同 Wi-Fi 让手机连上电脑？',
      a3: '请确保手机和运行 Tanuyomi 的电脑连接在同一个家庭 Wi-Fi 路由器下。在手机浏览器的地址栏中输入「电脑局域网 IP 地址:端口号」（例如 <code>http://192.168.1.10:5005</code>），即可直接打开媒体库。',
      q4: '长视频的播放和时间轴跳转足够流畅吗？',
      a4: '是的！Tanuyomi 在入库时会自动为视频提取 100 张全片关键帧缩略图，在拖动进度条时可直接对照缩略图快速精准寻帧，无需重新全量缓冲等待。',
      q5: '如何反馈意见、提交 Bug 或提出新功能建议？',
      a5: '如有任何疑问、使用反馈、问题报告或功能建议，欢迎前往官方 <a href="https://ci-en.net/creator/40053" target="_blank" rel="noopener noreferrer" style="color: var(--primary-light); text-decoration: underline;">Ci-en 创作者页面</a> 发送站内私信或在最新日志留言交流。最新的开发进展与版本动态也会同步在 Ci-en 持续更新发布。'
    },
    contact: {
      tag: 'Support &amp; Community',
      title: '<span class="phrase">问题反馈、交流与</span><span class="phrase">功能建议</span>',
      desc: '<span class="phrase">感谢你对 Tanuyomi 的关注与喜爱！</span><br class="br-pc"><span class="phrase">如果你在使用过程中有任何问题、优化建议或故障报告，</span><span class="phrase">欢迎前往官方 <strong>Ci-en</strong> 创作者主页留言互动。</span><br class="br-pc"><span class="phrase">我们将定期分享最新研发进度与版本发布日志，期待你的关注与支持！</span>',
      btnCta: '前往 Ci-en 官方主页留言与支持 ➔',
      note: '※ 如有咨询或反馈，可通过 Ci-en 的站内信功能或在最新文章评论区留言。'
    },
    footer: {
      brandDesc: '<span class="phrase">专为海量媒体库打造的</span><br><span class="phrase">轻快、舒适、开箱即用的个人媒体服务器与阅览器。</span>',
      colNav: '导航目录',
      colSupport: '支持与社区',
      linkHighlights: '核心特色',
      linkDevices: '跨端无线连接',
      linkFeatures: '功能总览',
      linkFormats: '支持格式',
      linkDownload: '下载客户端',
      linkContact: '联系我们',
      linkCien: 'Ci-en 官方主页与最新日志 ↗',
      linkGithub: 'GitHub 开源仓库 ↗',
      linkFaq: '常见问题 (FAQ)',
      linkEnv: '系统要求与格式',
      bottomNotice: 'Built for gentle & easy cross-device media browsing.'
    },
    langSelect: {
      ariaLabel: '选择语言',
      ja: '日本語',
      en: 'English',
      zh: '简体中文'
    }
  }
};

/**
 * Detect initial language based on:
 * 1. Saved localStorage preference
 * 2. Browser language (navigator.languages / navigator.language)
 *    - 'ja*' -> ja
 *    - 'zh*' -> zh
 *    - all others -> en (default)
 */
function detectLanguage() {
  try {
    const saved = localStorage.getItem(I18N_STORAGE_KEY);
    if (saved && TRANSLATIONS[saved]) {
      return saved;
    }
  } catch (e) {
    // Ignore localStorage access errors (e.g. incognito restrictions)
  }

  const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage || ''];

  for (const rawLang of browserLangs) {
    if (!rawLang) continue;
    const lang = rawLang.toLowerCase();
    if (lang.startsWith('ja')) {
      return 'ja';
    }
    if (lang.startsWith('zh')) {
      return 'zh';
    }
    if (lang.startsWith('en')) {
      return 'en';
    }
  }

  // Default to English for all other languages (French, German, Korean, Spanish, etc.)
  return 'en';
}

/**
 * Get nested translation value by dot-notated key string
 */
function getTranslation(lang, keyPath) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const parts = keyPath.split('.');
  let current = dict;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // Fallback to English if missing in target language
      let fallback = TRANSLATIONS.en;
      for (const fbPart of parts) {
        if (fallback && typeof fallback === 'object' && fbPart in fallback) {
          fallback = fallback[fbPart];
        } else {
          return null;
        }
      }
      return fallback;
    }
  }
  return current;
}

/**
 * Apply the selected language to the DOM
 */
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) {
    lang = 'en';
  }

  // 1. Update <html lang="..."> attribute
  const htmlLangCode = lang === 'zh' ? 'zh-CN' : lang;
  document.documentElement.setAttribute('lang', htmlLangCode);

  // 2. Update page title and meta description
  const metaTitle = getTranslation(lang, 'meta.title');
  const metaDesc = getTranslation(lang, 'meta.description');
  const ogTitle = getTranslation(lang, 'meta.ogTitle');
  const ogDesc = getTranslation(lang, 'meta.ogDescription');

  if (metaTitle) {
    document.title = metaTitle;
  }
  if (metaDesc) {
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute('content', metaDesc);
  }
  if (ogTitle) {
    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (ogTitleEl) ogTitleEl.setAttribute('content', ogTitle);
    const twTitleEl = document.querySelector('meta[name="twitter:title"]');
    if (twTitleEl) twTitleEl.setAttribute('content', ogTitle);
  }
  if (ogDesc) {
    const ogDescEl = document.querySelector('meta[property="og:description"]');
    if (ogDescEl) ogDescEl.setAttribute('content', ogDesc);
    const twDescEl = document.querySelector('meta[name="twitter:description"]');
    if (twDescEl) twDescEl.setAttribute('content', ogDesc);
  }

  // 3. Update all elements with [data-i18n] (plain text)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = getTranslation(lang, key);
    if (text !== null && text !== undefined) {
      el.textContent = text;
    }
  });

  // 4. Update all elements with [data-i18n-html] (HTML content)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const html = getTranslation(lang, key);
    if (html !== null && html !== undefined) {
      el.innerHTML = html;
    }
  });

  // 5. Update attributes (e.g. placeholder, title, aria-label)
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getTranslation(lang, key);
    if (val) el.setAttribute('placeholder', val);
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const val = getTranslation(lang, key);
    if (val) el.setAttribute('title', val);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    const val = getTranslation(lang, key);
    if (val) el.setAttribute('aria-label', val);
  });

  // 6. Update language switcher UI elements
  document.querySelectorAll('.lang-switcher-select').forEach(select => {
    select.value = lang;
  });

  // Save preference
  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (e) {
    // Ignore storage errors
  }
}

/**
 * Initialize language selector events
 */
function initLanguageSwitcher() {
  const currentLang = detectLanguage();
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-switcher-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      applyLanguage(selectedLang);
    });
  });
}

// Export for global usage
window.TanuyomiI18n = {
  detectLanguage,
  applyLanguage,
  initLanguageSwitcher,
  TRANSLATIONS
};
