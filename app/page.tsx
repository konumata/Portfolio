'use client';

import React, { FormEvent, useState } from "react";
import RadarChart from "./src/features/components/RadarChart";
import Card from "./src/features/components/content";
import emailjs from '@emailjs/browser';
import { works } from './data/works';
import { skills } from './data/skills';

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
            <h1>Portfolio</h1>
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
            <img width={60} src="image/skill.png"/>
            <span>SKILL</span>
          </h1>
          <p className="section-description">
            主にオープン系の言語を中心にフロントエンドからバックエンドまで幅広い領域に触れながら、フルスタックエンジニアになれるよう日々研鑽を積んでいます。下のグラフは各スキルの理解度を表しています。
          </p>
          <div className="skill-legend" style={{ 
            marginTop: '1rem', 
            padding: '1rem', 
            background: '#1a1a1a', 
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h4 style={{ color: '#4a9eff', marginBottom: '0.5rem' }}>チャートの見方</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.3rem' }}><strong>1:</strong> 軽く使用した程度</li>
              <li style={{ marginBottom: '0.3rem' }}><strong>2:</strong> 実務で数ヶ月以上使用していてもう少し習熟が必要</li>
              <li style={{ marginBottom: '0.3rem' }}><strong>3:</strong> 実務レベルで自由に駆使できる</li>
              <li style={{ marginBottom: '0.3rem' }}><strong>4:</strong> 実務で1年以上使用しており、他者への指導が可能</li>
              <li style={{ marginBottom: '0.3rem' }}><strong>5:</strong> 実務で2年以上使用しており、システム設計から実装まで完全に理解している</li>
            </ul>
          </div>
          <div className="skill-grid">
            {skills.categories.map((category, index) => (
              <div key={index} className="skill-card" style={{ textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>{category.name}</h3>
                <RadarChart category={category} />
                <div className="skill-descriptions" style={{ textAlign: 'left', marginTop: '1rem' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-description" style={{ marginBottom: '0.5rem' }}>
                      <strong>{skill.label}:</strong> {skill.description}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
          <div className="works-container">
            <div className="works-grid">
              {works.items.map((work, index) => (
                <div key={index} className="work-card">
                  <h3>{work.title}</h3>
                  <p>{work.description}</p>
                  <p><strong>使用技術：</strong>{work.technologies.join(', ')}</p>
                  <p><strong>期間：</strong>{work.period}</p>
                </div>
              ))}
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