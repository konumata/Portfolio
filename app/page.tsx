'use client';

import React, { FormEvent, useState } from "react";
import RadarChart from "./src/features/components/RadarChart";
import Card from "./src/features/components/content";
import emailjs from '@emailjs/browser';

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const templateParams = {
        to_email: 'kota.numata.work@gmail.com',
        from_email: formData.get('email'),
        company: formData.get('company'),
        from_name: formData.get('name'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,  // EmailJSのサービスID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, // EmailJSのテンプレートID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string   // EmailJSのパブリックキー
      );

      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <div className="menu">
        <nav className="fixed">
          <ul className="items">
            <li>
              <a href="#Profile">PROFILE</a>
            </li>
            <li>
              <a href="#Skill">SKILL</a>
            </li>
            <li>
              <a href="#Works">WORKS</a>
            </li>
            <li>
              <a href="#Blog">BLOG</a>
            </li>
            <li>
              <a href="#Contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="section" id="Top">
        <div className="inner">
          <div className="logo">
            <h1>My Portfolio</h1>
          </div>
        </div>
      </section>
      <section className="section" id="Profile">
        <div className="inner">
          <h1>
            <img width={60} src="image/profile.png"/>
            <span>PROFILE</span>
          </h1>
          <p>
          API・Python・GASを活用し、業務効率化と収益最大化を支援するフリーランスエンジニアです。
          </p>
          <p>
            ECサイト運営者や個人事業主など、「もっと効率的に稼ぎたい」という方に向けて、
            以下のソリューションを提供しています。
          </p>
          <ul>
            <li>
              <strong>Python：</strong>
              データ処理・分析の自動化、ウェブスクレイピング、カスタムアプリ開発
            </li>
            <li>
              <strong>GAS(Google Apps Script)：</strong>
              スプレッドシートやGmailなどを連携した在庫・顧客管理の自動化
            </li>
            <li>
              <strong>Amazon API：</strong>
              リアルタイムの価格・在庫情報取得、売れ筋商品のランキング抽出、レビュー分析
            </li>
            <li>
              <strong>オーダーメイド開発：</strong>
              既存システムとの連携を含め、ビジネス特化型ツールを開発
            </li>
          </ul>
          <p>
            導入企業からは「売上1.5倍＆作業時間半減」「クレーム激減」
            「商品リサーチ時間4分の1」など、多くの成果をご報告いただいています。
          </p>
          <p>
            まずは無料でご相談を承ります。ビジネス課題やご要望に合わせた最適なプランを
            ご提案いたしますので、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="section" id="Skill">
        <div className="inner">
          <h1>
            <img width={60} src="image/program.png"/>
            <span>SKILL</span>
          </h1>
          <p>
            主にオープン系の言語を中心にフロントエンドからバックエンドまで幅広い領域に触れながら、フルスタックエンジニアになれるよう日々研鑽を積んでいます。下のグラフは各スキルの理解度を表しています。
          </p>
          <div className="chart">
            <RadarChart label="SKILL" labels={["Front-End", "Back-End", "DB", "Frame-Work", "OS"]} radarData={[2, 4, 3, 2, 4]}></RadarChart>
          </div>
        </div>

        <Card label="Front-End" labels={["JavaScript", "TypeScript"]} star={[2, 2]} detail="WEBサイトを作成する際に習得しました。"></Card>
        <Card 
          label="Back-End" 
          labels={["Python", "C#"]} 
          star={[5, 3]} 
          detail="Pythonは私がこよなく愛する言語であり、WEBサイトやデスクトップアプリ、Webスクレイピングなどの開発を行いました。C#はWindowsアプリの開発で使用しました。"
        ></Card>
        <Card
          label="DB"
          labels={["SQL Server"]}
          star={[5]}
          detail="SQL Serverは主に開発用のDBとして使用しました。"
        ></Card>
        <Card
          label="Frame-Work"
          labels={["Django", "Node.js", "Next.js"]}
          star={[2, 2, 2]}
          detail="本サイトはNext.jsで作成し、Vercelにて公開されています。"
        ></Card>
        <Card
          label="OS"
          labels={["Windows", "Linux"]}
          star={[5, 3]}
          detail="普段の開発はWindowsで行っています。LinuxはUbuntuのインストールから環境構築、開発まで可能です。"
        ></Card>
        <Card
          label="Others"
          labels={["Google Apps Script(GAS)", "Tableau", "Vs Code", "GitHub"]}
          star={[5, 4, 4, 2]}
          detail="普段のコーディングはVS Codeで行っています。Google Apps Script(GAS)とTableauは仕事用に使用しています。GitHubは開発用のリポジトリを管理しています。"
        ></Card>
      </section>

      <section className="section" id="Works">
        <div className="inner">
          <h1>
            <img width={60} src="image/works.png"/>
            <span>WORKS</span>
          </h1>
          <p className="section-description">
            フリーランスとして、Web開発やシステム開発の案件に携わっています。<br />
            ココナラやランサーズでの実績を通じて、クライアントのニーズに応じた最適なソリューションを提供しています。
          </p>
          <div className="freelance-links">
            <a href={process.env.NEXT_PUBLIC_COCONALA_URL} target="_blank" rel="noopener noreferrer" className="freelance-link">
              <img src="image/coconala.png" alt="ココナラ" width={150} />
              <span>ココナラ</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_LANCERS_URL} target="_blank" rel="noopener noreferrer" className="freelance-link">
              <img src="image/lancers.png" alt="ランサーズ" width={150} />
              <span>ランサーズ</span>
            </a>
          </div>
          <div className="works-grid">
            <div className="work-card">
              <h3>VoCデータ収集の自動化</h3>
              <p>
              【プロジェクト概要】<br></br>
              VoC（Voice of Customer）データをコールセンター/お客様サポートフォームの2軸で分析するため、これらのデータを自動で収集するための仕組みを構築する<br></br><br></br>

              【担当フェーズ】<br></br>
              要件定義、基本設計、詳細設計、実装、単体テスト、結合テスト、本番移行<br></br><br></br>

              【担当業務】<br></br>
              要件定義、基本設計、詳細設計、実装、単体テスト、結合テスト、本番移行

              【ポイント】
              多くのチームが関わる案件でしたが、要件定義から実装、テスト、本番移行まで自身のチームが担当する部分については1人で対応しました。
              </p>
            </div>
            <div className="work-card">
              <h3>社内向けAIチャットボット開発</h3>
              <p>
              【プロジェクト概要】<br></br>
              社内スタッフが抱えていた非効率的な作業、すなわち膨大なマニュアルの中から該当する情報を手動で調べる作業を改善するため、社内マニュアルを学習させたAIチャットボットを開発しました。このチャットボットにより、必要な情報を迅速かつ簡単に検索できるようにし、業務効率化を図りました。<br></br><br></br>

              【担当フェーズ】<br></br>
              プロジェクト管理、基本設計、詳細設計、実装、本番移行<br></br><br></br>

              【担当業務】<br></br>
              プロジェクト管理、基本設計、詳細設計、実装、本番移行<br></br><br></br>

              【ポイント】
              サブリーダーとして、プロジェクト管理はもちろんのこと、AIを使ったサービスの構築を実施しました。
              </p>
            </div>
            <div className="work-card">
              <h3>ジム故障データ連携バッチ開発</h3>
              <p>
              【プロジェクト概要】<br></br>
              ジムに設置されたタブレット端末から故障内容をフォームに入力すると、Kintoneに入力されたデータをAPIを使用してBacklogへ連携するバッチ処理の開発を実施しました。<br></br><br></br>

              【担当フェーズ】<br></br>
              プロジェクト管理、要件定義、基本設計、詳細設計、実装、テスト、本番移行<br></br><br></br>

              【担当業務】<br></br>
              プロジェクト管理、要件定義、基本設計、詳細設計、実装、本番移行<br></br><br></br>

              【ポイント】
              自社サービスの運用をサポートするため、APIを活用したシステム間のデータ連携を実現しました。
              </p>
            </div>
            <div className="work-card">
              <h3>SAP ECCのEOSに伴うSAP S4/HANA移行</h3>
              <p>
              【プロジェクト概要】<br></br>
              SAP ERP(ECC6.0)の保守期限に伴い、SAP S4/HANAへ移行する。それに伴い、BIレポートとして活用しているTableauデータソースについて、SQLを通じて加工・変換したSAPデータを抽出しているが、ECCを前提としたデータの作りとなっているため、S4データを前提とするように、SQLのI/F構築とTableauデータソースの開発を図る。<br></br><br></br>

              【担当フェーズ】<br></br>
              プロジェクト管理、基本設計、結合テスト、本番移行<br></br><br></br>

              【担当業務】<br></br>
              プロジェクト管理、基本設計、結合テスト、本番移行<br></br><br></br>

              【ポイント】
              サブリーダーとして、プロジェクト管理はもちろんのこと、ユーザーとなるUS販社とJiraを通じて開発物の仕様を詰めるなど実施しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="Blog">
        <div className="inner">
          <h1>
            <img width={60} src="image/blog.png"/>
            <span>BLOG</span>
          </h1>
          <p className="section-description">
            技術的な知見や開発で得た経験をQiita、Zenn、noteで発信しています。<br />
            主にWeb開発、システム設計、プログラミングに関する記事を執筆しています。
          </p>
          <div className="blog-links">
            <a href={process.env.NEXT_PUBLIC_QIITA_URL} target="_blank" rel="noopener noreferrer" className="blog-link">
              <img src="image/qiita.png" alt="Qiita" width={150} />
              <span>Qiita</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_ZENN_URL} target="_blank" rel="noopener noreferrer" className="blog-link">
              <img src="image/zenn.png" alt="Zenn" width={150} />
              <span>Zenn</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_NOTE_URL} target="_blank" rel="noopener noreferrer" className="blog-link">
              <img src="image/note.png" alt="note" width={150} />
              <span>note</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="Contact">
        <div className="inner">
          <h1>
            <img width={60} src="image/contact.png"/>
            <span>CONTACT</span>
          </h1>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">メールアドレス<span className="required">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="example@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">会社名</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  placeholder="株式会社〇〇"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">氏名<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="山田 太郎"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">件名<span className="required">*</span></label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  placeholder="お問い合わせ件名"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容<span className="required">*</span></label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  placeholder="お問い合わせ内容をご記入ください"
                  rows={5}
                ></textarea>
              </div>

              <div className="form-group">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="form-status success">
                  メッセージが正常に送信されました。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-status error">
                  送信中にエラーが発生しました。時間をおいて再度お試しください。
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="copyRight">@Kouta Numata. All Rights Reserved.</div>
      </footer>
    </main>
  )
}