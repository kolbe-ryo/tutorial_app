## 1. 概要

ユーザー情報を取得するAPIの詳細設計を提供する。

### WF

画面ID_マイページ_ワイヤーフレーム

## 2. エンドポイント

**GET**: `/profile`

## 3. OpenAPI仕様

[OpenAPI Documentページリンク]

※ バリデーションはOpenAPIに記述

## 4. 呼び出し仕様

### a. 呼出API一覧

| サブシステム | API名 (リンク)         |
|--------------|------------------------|
| BE           | ユーザー情報取得API    |

### b. リトライ・タイムアウト

WIP:【共通設計】リトライ・バックオフ、タイムアウトほか設計

## 5. シーケンス図

## 6. 処理詳細

### a. リクエスト

なし

### b. 処理フロー

#### 1. 初期処理

なし

#### 2. ユーザー情報取得API

条件を指定してAPIコールし、データを取得する。

| 属性名       | 値                     | 指定カラム(JSON) |
|--------------|------------------------|------------------|
| ユーザーID   | アクセストークンから取得 | user_id          |

#### 3. レスポンス成形（マッピング）

対象：[https://github.com/swe-comado-fit/comado-fit-bff/blob/main/paths/profile.yaml](https://github.com/swe-comado-fit/comado-fit-bff/blob/main/paths/profile.yaml)

| 物理名          | 論理名           | 型      | 呼出API／項目／加工／その他                     |
|------------------|------------------|---------|-----------------------------------------------|
| gender           | 性別             | string  | ユーザー情報取得API 性別：user_info.gender     |
| birthYearMonth   | 生年月           | string  | ユーザー情報取得API 生年月：user_info.birth_year_month |
| goal             | レッスン目標     | string  | ユーザー情報取得API 目標ID：user_info.goal_id  |
| exIntensity      | 好み運動強度     | string  | ユーザー情報取得API 好み運動強度ID：user_info.ex_intensity_id |
| lessonDuration   | レッスン時間     | string  | ユーザー情報取得API 一回当たりのレッスン時間ID：user_info.ex_lesson_duration_id |
| nickname         | ニックネーム     | string  | ユーザー情報取得API ニックネーム：user_info.nickname |
| profileImageID   | プロフィール画像ID | string  | ユーザー情報取得API プロフィール画像ID：user_info.profile_image_id |

---

## 7. 処理結果
