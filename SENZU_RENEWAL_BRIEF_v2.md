# 仙豆のちから姫路店 — サイトリニューアル指示書 v2

> **対象**：senzu-himeji.com（Next.js 15 App Router + React 19 + Tailwind v4）
> **目的**：既存ブランド（sage/moss/cream）を尊重しながら、エディトリアル水準の装飾レイヤーを追加
> **重要**：CLAUDE.md のルールを最優先。このBRIEFは補足資料。

---

## 🔒 PHASE 0：絶対禁止事項（SEO・既存資産の保護）

### CLAUDE.md のルール（完全継承）

以下は CLAUDE.md に準拠。**再掲**：

- **サーバーコンポーネント優先**：`'use client'` はクライアント機能が必要な子コンポーネントだけに限定
- **`metadata` / `generateMetadata` 必須**：`alternates.canonical` を自身のパスで指定（`'/recruit'` 等）
- **recruit の2ファイル構成維持**：`page.tsx`（metadata + JobPosting JSON-LD）+ `RecruitClient.tsx`（UI）
- **新規ルートは `app/sitemap.ts` に登録**
- **`@/*` パス alias を使用**（相対パス避ける）

### SEO資産（変更禁止）

| 項目 | 詳細 |
|---|---|
| GA4測定ID | `G-1GHH9D830V`、`app/layout.tsx` inline読み込み維持 |
| `metadataBase` | `SITE.url` 参照を維持 |
| JobPosting JSON-LD | `app/recruit/page.tsx` 内、Google for Jobs 3位掲載中 |
| LocalBusiness JSON-LD | `app/page.tsx` の `generateLocalBusinessJsonLd` 呼び出し維持 |
| Article + FAQPage JSON-LD | 各 `/concerns/[slug]` ページの2ブロック構造維持 |
| robots.ts / sitemap.ts | `SITE.url` 参照維持、ハードコード禁止 |

### コンテンツ構造（変更禁止）

`lib/` 以下は**コンテンツの単一ソース**。リニューアルで触るのは**表示側のみ**：

- `lib/site.ts` — 住所・営業時間・地理情報。**変更禁止**
- `lib/concerns.ts` — お悩み配列。**配列の中身は変更禁止**（表示方法だけ変える）
- `lib/notes.ts` — noteインデックス。**変更禁止**
- `lib/jsonld.ts` — 構造化データビルダー。**変更禁止**

### 既存スタイルクラス（活用 or 維持、削除禁止）

`app/globals.css` 内の以下のクラスは**既存ブランド資産**。削除せず、新規レイアウトで活用：

| クラス | 用途 |
|---|---|
| `label-sm` | エディトリアルラベル |
| `botanical-line` | 装飾罫線（既存） |
| `text-glow` | テキストアクセント |
| `ambient` | 背景ブラーブロブ装飾 |
| `sr` / `sr.vis` | ScrollReveal用（既存アニメ） |
| `cta-main` | メインCTAボタン |
| `feat` | 特徴カード |
| `tag-pill` | タグバッジ |
| `acc-body` | アコーディオン本文 |

---

## 📦 PHASE 1：素材パック配置

### ファイル構造

```
public/assets/svg/
  features/                       # Sheet 1（4種）
    feature-01-chair.svg
    feature-02-curtain.svg
    feature-03-pair.svg
    feature-04-waterdrop-no.svg
  blobs/                          # Sheet 2（4種）
    blob-01.svg  (385×606 縦長)
    blob-02.svg  (624×420 横長)
    blob-03.svg  (488×504 円形)
    blob-04.svg  (513×498 斜め長円)
  rules/                          # Sheet 3（6種）
    rule-01-line-diamond.svg
    rule-02-vertical-dots.svg
    rule-03-line-circle.svg
    rule-04-stacked-lines.svg
    rule-05-corner-bracket.svg
    rule-06-asterisk-line.svg
  sections/                       # Sheet 4（4種、番号装飾）
    section-01-line.svg
    section-02-circle.svg
    section-03-section.svg
    section-04-bracket.svg
  symbols/                        # Sheet 5（8種、微細装飾）
    symbol-01-asterisk.svg
    symbol-02-quote-open.svg
    symbol-03-quote-close.svg
    symbol-04-arrow-right.svg
    symbol-05-arrow-down.svg
    symbol-06-diamond.svg
    symbol-07-plus.svg
    symbol-08-sun.svg
```

### SVG使用方針

**全SVGが `currentColor` 対応**なので、親要素の `color` プロパティで色制御可能。既存の `senzu / base / cream` パレットに**自動で馴染む**。

**3つの読み込み方法を使い分け：**

1. **インラインSVG（主力）**：Next.js で `@svgr/webpack` 設定済みならコンポーネント化。未設定なら、`<img>` で読み込み → 必要な箇所だけインライン化
2. **`<img>` タグ**：色変更不要な装飾
3. **CSS `mask-image`**：写真を blob でマスクする場合

### ⚠️ 既知の落とし穴

| ファイル | 問題 | 対策 |
|---|---|---|
| `rule-02-vertical-dots.svg` | 各`<line>`に `stroke-width="2"` ハードコード | そのまま使う（基本問題なし） |
| `symbol-04〜08.svg` | SVG本体に `stroke-width="1.25"` ハードコード | そのまま使う（基本問題なし） |

サイズ動的変更が必要な箇所だけ、SVG属性削除 or CSS `!important` で対応。

---

## 🎨 PHASE 2：デザインシステム拡張（Tailwind v4方式）

### 既存パレットを活かす方針

**既存トークンを変更せず、必要な箇所だけ追加**：

```css
/* app/globals.css の @theme セクションに追加 */
@theme {
  /* ↓ 既存の senzu / base / cream トークンは保持 ↓ */
  
  /* ↓ 以下は必要に応じて追加（既存に無ければ） ↓ */
  --color-ink: #1A1A1A;           /* 本文用濃い文字色（既存のbaseで代替可なら不要） */
  --color-mute: #8A8A85;          /* キャプション用ミュートグレー */
  --spacing-section: 7.5rem;      /* セクション間の大きい余白（120px） */
}
```

**判断基準**：既存トークンで賄えるものは追加しない。Claude Code が `@theme` 定義を確認し、**足りない分だけ最小追加**すること。

### タイポグラフィ階層（3層構造）

| 階層 | 用途 | 例 |
|---|---|---|
| 英字セリフ | 大見出し・装飾番号 | Concept / Menu / For Your Concerns |
| 和文ゴシック | 本文・日本語見出し | 既存のまま |
| モノスペース | キャプション・小さい英数字 | 01 — / [04] |

**フォント追加が必要な場合**：Google Fonts の `Playfair Display`（serif）を `app/layout.tsx` の `next/font` で追加。既存の日本語フォント設定は維持。

### スペーシング原則

- **セクション間**：min `py-section`（120px）、現状の1.5倍
- **見出し→本文**：`mt-8`〜`mt-12`
- **画面左右パディング**：既存のcontainer設定を尊重

---

## 📐 PHASE 3：レイアウト再設計

### 基本原則

1. **完璧な左右対称を避ける**：中央揃え一辺倒を崩し、非対称を混在
2. **装飾は引き算**：各セクション 3〜5箇所以内
3. **余白を恐れない**：現状の1.5〜2倍
4. **既存の `ambient` / `botanical-line` を活かす**：新装飾を追加する時は既存と競合しないよう配置
5. **既存のブランドテイスト（sage/moss/cream のボタニカル世界観）を維持**

### 各セクション仕様

#### 【Hero】
- テキスト左寄せ / 画像を右配置、**`blob-01.svg` で写真マスク**
- 画像左下に `section-01-line.svg`（01 ——）を絶対配置
- 右下に小さく `symbol-05-arrow-down.svg` + "Scroll" テキスト
- **既存の `ambient` クラスと併用可**（背景に薄いブロブ、前面に写真blobマスク）

#### 【Concept】
- セクション冒頭に `section-02-circle.svg`（中央寄せ）
- 英字「Concept」serif italic、その下に既存 `botanical-line` を使った罫線
- 本文横に縦書きキャッチコピー（sm、`label-sm` 応用）
- セクション終わりに `rule-01-line-diamond.svg`

#### 【For Your Concerns】
- 見出し上に `section-02-circle.svg`
- お悩みタグ8個：**ジグザグ配置**（中央揃えを崩す）、各タグ前に `symbol-06-diamond.svg`
  - 既存の `tag-pill` スタイルを継承して、小アイコン追加
- お悩み4カード：**マガジン風ずらしレイアウト**（上下左右にオフセット）
  - 各カード左上に `rule-05-corner-bracket.svg`
  - "詳しく読む →" に `symbol-04-arrow-right.svg`、hover で 8px 右スライド

#### 【Menu】
- 左端に `section-03-section.svg`（03 / SECTION）配置
- 3コース：**縦並び + インデント段階変化**（60分→75分→90分で少しずつ右にずれる）
- 各コース見出しの上に `rule-04-stacked-lines.svg`
- 既存の `feat` クラスを継承、装飾のみ追加

#### 【Features】
- 右上に `section-04-bracket.svg`（[04]）
- アイコン4種を横並び、1つ目と4つ目を少し大きく（視覚リズム）
- 各アイコン下に `rule-02-vertical-dots.svg` で区切り

#### 【FAQ】
- 各質問前に serif で `01 / 02 / 03...`
- 開閉ボタンに `symbol-07-plus.svg`、開いてる時は `—`（横線）
- 既存の `acc-body` クラスを活かす

#### 【Access】
- 地図上に `rule-06-asterisk-line.svg`
- 地図マーカーに `symbol-08-sun.svg` 重ね配置（装飾目的）

#### 【Reservation】
- 見出しを serif italic で巨大表示
- 前に `symbol-02-quote-open.svg`、後ろに `symbol-03-quote-close.svg`
- CTAは既存 `cta-main` クラスに `symbol-04-arrow-right.svg` 追加

#### 【Footer】
- `rule-06-asterisk-line.svg` で締め
- 既存のフッター構造維持、装飾追加のみ

---

## 🎬 PHASE 4：アニメーション（既存資産活用）

### ScrollReveal を最大限活用

**新規実装より既存活用を優先**：

- 既存の `sr` / `sr.vis` + `ScrollReveal` コンポーネントを、新規セクション全てに適用
- 各要素に `className="sr"` を付与すれば、IntersectionObserver で自動フェードイン
- **新規アニメーションライブラリ導入禁止**（Framer Motion等）

### 追加で実装する演出（軽量なCSSのみ）

| 要素 | 演出 |
|---|---|
| CTAボタン hover | 矢印アイコンが 8px 右にスライド（`transition-transform`） |
| お悩みカード hover | `transform: scale(1.02)` + shadow 強調 |
| Menuカード hover | 罫線装飾の色が `senzu` → `base` に変化 |
| 罫線装飾の入場 | `stroke-dasharray` で左→右描画（`sr` トリガー時） |

---

## ✅ PHASE 5：実装順序

1. **既存コードベースの確認**：`app/globals.css` の `@theme`、既存クラス、`lib/` 構造を把握
2. **素材配置確認**：`public/assets/svg/` 以下26ファイルの存在確認
3. **デザイントークン最小追加**：`@theme` に不足分のみ追加
4. **共通コンポーネント作成**（必要最小限）：
   - `<SectionNumber variant="01|02|03|04" />`
   - `<Divider variant="diamond|dots|circle|triple|corner|asterisk" />`
   - `<Symbol name="asterisk|arrow-right|..." />`
   - `<BlobMaskedImage src={...} blob="01|02|03|04" />`
5. **Home（`app/page.tsx`）** から順に実装：Hero → Concept → Concerns → Menu → Features → FAQ → Access → Reservation
6. **`/concerns/[slug]`** にも同じ装飾システム適用
7. **`/faq` `/notes` `/recruit`** にも同じデザイン適用（`/recruit` は2ファイル構成維持）
8. **Lighthouse確認**（Performance 80+ / Accessibility 90+）
9. **SEO差分チェック**：`<head>` 内の差分ゼロ、JSON-LD全件正常
10. **Vercel preview URL で全ページ実機確認**

---

## ✅ PHASE 6：完成チェックリスト

### SEO・技術（最優先）
- [ ] `CLAUDE.md` の全ルール準拠
- [ ] `<head>` 内 meta/script リニューアル前後で**差分ゼロ**
- [ ] GA4 `G-1GHH9D830V` 発火確認
- [ ] JobPosting JSON-LD 正常（Rich Results Test通過）
- [ ] LocalBusiness + FAQPage（home）両方出力
- [ ] 各 `/concerns/*` が Article + FAQPage 出力
- [ ] `alternates.canonical` 全ページで自身のパス指定
- [ ] サイトマップ全ページ200応答
- [ ] ホットペッパー予約リンク全動作
- [ ] note導線正常

### ブランド整合性
- [ ] 既存の `senzu / base / cream` パレットを維持
- [ ] 新規色トークンは**最小限**の追加のみ
- [ ] 既存クラス（`ambient`, `botanical-line`, `ScrollReveal` 等）を**活用**、削除せず
- [ ] ボタニカル・ハーブ系の世界観を**破壊していない**

### デザイン品質
- [ ] 左右対称偏重 → **非対称**に変更
- [ ] セクション間余白が十分（120px相当）
- [ ] serif + JP + mono の**三層タイポ**成立
- [ ] 全写真に **blob マスク**適用
- [ ] 全セクションに**番号装飾**配置
- [ ] 装飾は**厳選**、詰め込みすぎてない
- [ ] ScrollReveal が全新規要素に適用

### AI感除去
- [ ] **完璧な左右対称が存在しない**
- [ ] のっぺりグラデーション背景ゼロ
- [ ] 意味のないカラフル装飾ゼロ
- [ ] 写真が**有機的マスク**で切り抜かれてる
- [ ] 同じパターンの3回以上の繰り返しが無い

---

## 💬 Claude Code への最初の指示文（コピペ用）

```
senzu-himeji.com のデザインリニューアルを実行します。

【読む順番】
1. CLAUDE.md（プロジェクトの絶対ルール）
2. SENZU_RENEWAL_BRIEF_v2.md（今回の改修指示書）
   ※v2がCLAUDE.mdと整合性を取った最新版です

【最初にやってほしいこと】
1. 上記2ファイルを熟読
2. 以下の現状を把握：
   - app/globals.css の @theme で定義済みの色トークン一覧
   - 既存の utility クラス（ambient, botanical-line, ScrollReveal, cta-main 等）
   - app/page.tsx の現状の構造
   - lib/concerns.ts の配列内容
3. 以下を提示：
   a) 既存ブランドとの整合性をどう取るかの方針（3〜5行）
   b) PHASE 2で追加が必要な最小限のデザイントークンリスト
   c) PHASE 3で実装する共通コンポーネントのファイル配置案
   d) 実装計画の第1弾（Heroセクションまで）

【絶対厳守】
- CLAUDE.md の全ルール
- BRIEF PHASE 0 の SEO資産保護
- 既存 lib/ 構造の変更禁止
- 既存クラスの削除禁止（拡張はOK）
- ブランドパレット（senzu/base/cream）の維持

計画を私が承認するまで、ファイル編集は一切しないでください。
```

---

## 📝 補足：判断に迷った時の優先順位

1. **CLAUDE.md ルール > BRIEF指示**（CLAUDE.md優先）
2. **SEO資産保護 > デザイン品質**（絶対）
3. **既存ブランド維持 > 新規装飾追加**
4. **既存クラス活用 > 新規クラス作成**
5. **「引き算」> 「足し算」**（装飾は迷ったら削る）

---

> **完成イメージ**：既存のボタニカル・癒し系世界観を**強化**し、Aesop / Muji / Kinfolk 系のエディトリアル装飾レイヤーが加わった状態。ブランドが変わるのではなく、**洗練される**。
