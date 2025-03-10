'use client';

import React, { FormEvent, useState } from "react";
import RadarChart from "./src/features/components/RadarChart";
import emailjs from '@emailjs/browser';
import { works } from './data/works';
import { skills } from './data/skills';
import { profile } from './data/profile';
import { blogs } from './data/blogs';
import { socialLinks } from './data/social';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open-active', !isMenuOpen);
  };

  return (
    <>
      {/* PC用 固定ヘッダー：ナビゲーションリンクのみ */}
      <nav className="hidden md:flex fixed-header justify-end items-center fixed top-0 left-0 w-full bg-black text-white z-50 p-4">
        <a href="#Profile" className="mx-4 hover:text-gray-300">PROFILE</a>
        <a href="#Skill" className="mx-4 hover:text-gray-300">SKILL</a>
        <a href="#Works" className="mx-4 hover:text-gray-300">WORKS</a>
        <a href="#Blog" className="mx-4 hover:text-gray-300">BLOG</a>
        <a href="#Contact" className="mx-4 hover:text-gray-300">CONTACT</a>
      </nav>

      {/* スマホ用 固定ヘッダー：ハンバーガーメニューのみ */}
      <header className="md:hidden fixed top-1/2 -translate-y-1/2 right-0 bg-transparent text-white z-50">
        <div className="flex justify-center items-center h-full px-2"> 
          <button onClick={toggleMenu} className="menu-button p-2" aria-label="メニュー">
          <span className="menu-icon"></span>
          </button>
        </div>
        {isMenuOpen && (
          <nav className={`menu-open ${isMenuOpen ? 'active' : ''} fixed top-1/2 -translate-y-1/2 right-0`}>  
            <a href="#Profile" className="block py-2 px-6 hover:text-gray-300 text-left w-full" onClick={toggleMenu}>PROFILE</a>
            <a href="#Skill" className="block py-2 px-6 hover:text-gray-300 text-left w-full" onClick={toggleMenu}>SKILL</a>
            <a href="#Works" className="block py-2 px-6 hover:text-gray-300 text-left w-full" onClick={toggleMenu}>WORKS</a>
            <a href="#Blog" className="block py-2 px-6 hover:text-gray-300 text-left w-full" onClick={toggleMenu}>BLOG</a>
            <a href="#Contact" className="block py-2 px-6 hover:text-gray-300 text-left w-full" onClick={toggleMenu}>CONTACT</a>
          </nav>
        )}
      </header>
    </>
  );
};

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
        to_email: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
        from_email: formData.get('email'),
        company: formData.get('company'),
        from_name: formData.get('name'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
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
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-20">
        <section className="section" id="Profile">
          <div className="inner">
            <h1>
              <span>PROFILE</span>
            </h1>
            <p>{profile.description}</p>
            <p>{profile.introduction}</p>
            <ul>
              {profile.services.map((service, index) => (
                <li key={index}>
                  <strong>{service.title}：</strong>
                  {service.description}
                </li>
              ))}
            </ul>
            <p>{profile.results}</p>
            <p>{profile.contact}</p>
          </div>
        </section>

        <section className="section" id="Skill">
          <div className="inner">
            <h1>
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
              <span>{blogs.title}</span>
            </h1>
            <p className="section-description">
              {blogs.description}
            </p>
            <div className="blog-links">
              {blogs.platforms.map((platform, index) => (
                <a 
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-link"
                >
                  <img src={platform.icon} alt={platform.name} width={150} />
                  <span>{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="Contact">
          <div className="inner">
            <h1>
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
          <div className="copyRight">@K. All Rights Reserved.</div>
        </footer>
      </main>
    </div>
  )
}