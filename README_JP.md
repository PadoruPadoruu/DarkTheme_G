# ダークモード - Chrome 拡張機能

すべてのウェブサイトにダークテーマを適用する Google Chrome 拡張機能。低照度環境でのブラウジングを快適にします。色をカスタマイズし、特定のサイトをホワイトリストに追加して、シームレスな体験を実現します。

## 機能
- **すべてのウェブサイトのダークテーマ**：訪問するすべてのウェブサイトに自動的にダークテーマを適用します。
- **カスタマイズ可能な色**：好みに合わせてテーマの色を調整します。
- **ホワイトリストサポート**：特定のウェブサイトをダークテーマから除外します。
- **自動スケジュール**：1日の特定の時間にダークモードを有効にします。

## インストール
1. `.crx` ファイルをダウンロードするか、このリポジトリをクローンします。
2. Chrome を開き、`chrome://extensions/` に移動します。
3. 右上の「デベロッパーモード」を有効にします。
4. `.crx` ファイルを拡張機能ページにドラッグ＆ドロップするか、解凍した拡張機能を読み込みます。

## 使用方法
- 拡張機能のアイコンをクリックして、ダークテーマをオン/オフします。
- オプションページを使用して、色をカスタマイズし、ホワイトリストを管理し、自動スケジュールを設定します。

## 開発 (AI 生成)
拡張機能を変更またはビルドするには：
1. リポジトリをクローンします。
2. 依存関係をインストールします（ある場合）：`npm install`。
3. Parcel などのバンドラーを使用して拡張機能をビルドします：
   ```bash
   parcel build src/background/index.js src/options/options.js
   ```
4. 解凍した拡張機能を Chrome に読み込みます。

## オリジナル拡張機能
このプロジェクトは、以下のオリジナル拡張機能に基づいています：
[オリジナル Super Dark Mode 拡張機能](https://chrome.google.com/webstore/detail/super-dark-mode/your-extension-id)

## ライセンス
このプロジェクトは MIT ライセンスの下で提供されています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。



このプロジェクトの To-Do リストについては、[To-Do リスト](TODO.md) ファイルを参照してください。 