/**
 * うらおか内科・内視鏡クリニック 内視鏡検査LP
 * page.tsx — Next.js App Router + Tailwind CSS + Lucide React
 *
 * [注意] "use client" 指令により metadata export は使用不可。
 * OGP・メタタグは layout.tsx または別途 <head> に記述してください。
 * JSON-LD は本ファイル内の <script> タグで対応しています。
 */

"use client";

import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Heart,
  Clock,
  Home,
  Smartphone,
  CheckCircle,
  ChevronDown,
  Phone,
  Calendar,
  MessageCircle,
  Award,
  Activity,
  UserCheck,
} from "lucide-react";

// ======================================================
// ユーティリティ: スクロール連動フェードインフック
// ======================================================
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

// ======================================================
// コンポーネント: フェードインラッパー
// ======================================================
function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

// ======================================================
// コンポーネント: FAQアコーディオン
// ======================================================
function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 px-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-bold text-gray-800 pr-4 text-sm md:text-base">
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          size={20}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 leading-relaxed text-sm md:text-base px-1">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ======================================================
// コンポーネント: 中間CTA
// ======================================================
function MidCta({
  title,
  sub,
  dark = false,
}: {
  title: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "py-10 bg-blue-700" : "py-10 bg-blue-50"}>
      <div className="max-w-xl mx-auto px-4 text-center">
        <FadeSection>
          <p
            className={`font-bold text-lg mb-1 ${
              dark ? "text-white" : "text-gray-800"
            }`}
          >
            {title}
          </p>
          <p className={`text-sm mb-6 ${dark ? "text-blue-200" : "text-gray-500"}`}>
            {sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base px-8 py-4 rounded-full transition-colors shadow min-h-[48px]"
              aria-label="WEB予約はこちら"
            >
              <Calendar size={18} aria-hidden="true" />
              WEB予約はこちら
            </a>
            <a
              href="tel:0000000000"
              className={`inline-flex items-center justify-center gap-2 font-bold text-base px-8 py-4 rounded-full transition-colors shadow min-h-[48px] ${
                dark
                  ? "bg-white hover:bg-gray-100 text-blue-700"
                  : "bg-blue-700 hover:bg-blue-800 text-white"
              }`}
              aria-label="電話で予約する"
            >
              <Phone size={18} aria-hidden="true" />
              電話で予約する
            </a>
          </div>
        </FadeSection>
      </div>
    </section>
  );
}

// ======================================================
// メインページコンポーネント
// ======================================================
export default function EndoscopyLP() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // JSON-LD 構造化データ (MedicalClinic)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "うらおか内科・内視鏡クリニック",
    description:
      "消化器内視鏡専門医による、鎮静剤を使用した苦痛の少ない内視鏡検査（大腸カメラ・胃カメラ）を提供するクリニックです。",
    url: "https://example.com", // ← 実URLに差し替え
    telephone: "000-000-0000", // ← 実電話番号に差し替え
    address: {
      "@type": "PostalAddress",
      streetAddress: "○○町0-0-0", // ← 実住所に差し替え
      addressLocality: "○○市",
      addressRegion: "○○県",
      postalCode: "000-0000",
      addressCountry: "JP",
    },
    medicalSpecialty: "Gastroenterology",
  };

  return (
    <>
      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Google Fonts: Noto Sans JP */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap');
        html { font-family: 'Noto Sans JP', sans-serif; scroll-behavior: smooth; }
        body { margin: 0; }
      `}</style>

      {/* ============================================================
          固定ヘッダー（スクロール後に背景表示）
      ============================================================ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
        role="banner"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <p
            className={`font-bold text-sm md:text-base transition-colors ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            うらおか内科・内視鏡クリニック
          </p>
          <button
            onClick={() => scrollToSection("cta")}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-colors shadow min-h-[40px]"
          >
            WEB予約
          </button>
        </div>
      </header>

      <main>

        {/* ============================================================
            Section 1: ファーストビュー（Hero / FV）
        ============================================================ */}
        <section
          id="hero"
          className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden"
          aria-label="ファーストビュー"
        >
          {/* 背景グラデーション */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1a56db 100%)",
            }}
            aria-hidden="true"
          />

          {/* 背景画像プレースホルダー */}
          {/* ここに院内・検査室の画像を配置（next/image で差し替え） */}
          <div
            className="absolute inset-0 opacity-10 bg-gray-300"
            aria-hidden="true"
          />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-24 pb-16">
            {/* 信頼バッジ */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {["専門医在籍", "鎮静剤使用", "当日検査対応"].map((badge) => (
                <span
                  key={badge}
                  className="bg-white/20 backdrop-blur-sm border border-white/40 text-white text-xs font-bold px-4 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
              寝ている間に終わる、
              <br />
              <span className="text-blue-300">痛くない内視鏡検査</span>
            </h1>

            {/* サブコピー */}
            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-10">
              消化器内視鏡専門医が、鎮静剤を使用した
              <br className="hidden md:block" />
              苦痛の少ない検査を丁寧に行います
            </p>

            {/* CTAボタン */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg min-h-[52px]"
                aria-label="WEB予約はこちら"
              >
                <Calendar size={20} aria-hidden="true" />
                WEB予約はこちら
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base md:text-lg px-8 py-4 rounded-full transition-colors shadow-lg min-h-[52px]"
                aria-label="LINE予約"
              >
                <MessageCircle size={20} aria-hidden="true" />
                LINE予約
              </a>
            </div>

            <p className="mt-5 text-blue-200 text-sm">
              24時間いつでもオンライン予約可能
            </p>
          </div>

          {/* スクロール誘導 */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce"
            aria-hidden="true"
          >
            <ChevronDown className="text-white/50" size={32} />
          </div>
        </section>

        {/* ============================================================
            Section 2: 症状の不安共感（悩み提起）
        ============================================================ */}
        <section id="symptoms" className="py-16 md:py-20 bg-blue-50" aria-label="症状・お悩み">
          <div className="max-w-2xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                こんな症状やお悩み、
                <br className="md:hidden" />
                ありませんか？
              </h2>
              <p className="text-center text-gray-500 mb-10 text-sm">
                当てはまる項目がある方は、どうぞお気軽にご相談ください
              </p>

              <ul className="space-y-3" role="list">
                {[
                  "お腹の張り・痛みが続いている",
                  "便に血が混じることがある",
                  "健康診断で「要精密検査」と言われた",
                  "以前の内視鏡検査が痛くてトラウマになっている",
                  "内視鏡検査を受けたいが、怖くて踏み出せない",
                  "40歳を過ぎたが、一度も内視鏡検査を受けていない",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm"
                  >
                    <CheckCircle
                      className="text-blue-500 flex-shrink-0 mt-0.5"
                      size={20}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 共感メッセージ */}
              <div className="mt-10 bg-blue-600 rounded-2xl px-6 py-7 text-center text-white">
                <p className="text-xl font-bold">
                  そのお悩み、当院が解決します
                </p>
                <p className="mt-2 text-blue-100 text-sm">
                  苦痛の少ない検査で、安心して受診いただけます
                </p>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* 中間CTA① */}
        <MidCta
          title="まずはお気軽にご予約ください"
          sub="ご不安なことは予約前にお電話でも承ります"
        />

        {/* ============================================================
            Section 3: 選ばれる理由（メリット・強み）
        ============================================================ */}
        <section id="reasons" className="py-16 md:py-20 bg-white" aria-label="選ばれる理由">
          <div className="max-w-5xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                うらおか内科・内視鏡クリニックが
                <br className="md:hidden" />
                選ばれる理由
              </h2>
              <p className="text-center text-gray-500 mb-12 text-sm">
                患者さまの不安に寄り添い、安心・安全な検査をご提供します
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  {
                    icon: <Shield className="text-blue-600" size={32} aria-hidden="true" />,
                    title: "消化器内視鏡専門医による確かな検査",
                    desc: "豊富な経験を持つ専門医が、丁寧かつ精度の高い検査を実施します。",
                  },
                  {
                    icon: <Heart className="text-blue-600" size={32} aria-hidden="true" />,
                    title: "鎮静剤＋炭酸ガスで痛くない・苦しくない",
                    desc: "鎮静剤でウトウトしている間に検査が終了。炭酸ガス使用でお腹の張りも軽減します。",
                  },
                  {
                    icon: <Clock className="text-blue-600" size={32} aria-hidden="true" />,
                    title: "当日検査にも対応可能",
                    desc: "お急ぎの方や、すぐに検査を受けたい方にも柔軟に対応いたします。",
                  },
                  {
                    icon: <Home className="text-blue-600" size={32} aria-hidden="true" />,
                    title: "下剤服用の個室完備",
                    desc: "プライバシーに配慮した個室で、安心して検査準備ができます。",
                  },
                  {
                    icon: <Smartphone className="text-blue-600" size={32} aria-hidden="true" />,
                    title: "24時間WEB・LINE予約対応",
                    desc: "お忙しい方でも、いつでもスマホから簡単に予約が可能です。",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col items-start gap-3 hover:shadow-md transition-shadow"
                  >
                    <div className="bg-blue-50 rounded-xl p-3">{item.icon}</div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </section>

        {/* 中間CTA②（Section 3後） */}
        <MidCta
          title="専門医による安心の内視鏡検査"
          sub="検査に関するご不安・ご質問もお気軽にどうぞ"
          dark
        />

        {/* ============================================================
            Section 4: データ・客観的事実
        ============================================================ */}
        <section
          id="data"
          className="py-16 md:py-20"
          style={{ background: "#0f172a" }}
          aria-label="データ・早期発見の重要性"
        >
          <div className="max-w-4xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-2">
                早期発見が、あなたの命を守ります
              </h2>
              <p className="text-center text-blue-300 mb-12 text-xs">
                ※ 以下の統計データは公的機関の情報に基づきます。詳細はご確認ください
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                  {
                    value: "2位",
                    label: "大腸がんのがん死亡原因",
                    sub: "日本人男女ともに上位（国立がん研究センター統計より）",
                  },
                  {
                    value: "90%以上",
                    label: "早期発見時の5年生存率",
                    sub: "ステージIの大腸がんにおける参考値",
                  },
                  {
                    value: "40歳〜",
                    label: "定期検査の推奨年齢",
                    sub: "リスクが高まる40代以降は特に重要",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center"
                  >
                    <p className="text-4xl md:text-5xl font-bold text-blue-300 mb-2">
                      {item.value}
                    </p>
                    <p className="text-white font-bold mb-2 text-sm md:text-base">
                      {item.label}
                    </p>
                    <p className="text-blue-300 text-xs leading-relaxed">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-blue-900/50 rounded-2xl px-6 py-5 border border-blue-800">
                <p className="text-white text-sm leading-relaxed text-center">
                  大腸がんは早期発見・早期治療により、高い確率で完治が期待できるがんです。
                  <br className="hidden md:block" />
                  自覚症状がないうちから、定期的な内視鏡検査をお受けください。
                </p>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ============================================================
            Section 5: 検査の流れ（ステップ）
        ============================================================ */}
        <section id="flow" className="py-16 md:py-20 bg-white" aria-label="検査の流れ">
          <div className="max-w-2xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                検査の流れ
              </h2>
              <p className="text-center text-gray-500 mb-12 text-sm">
                はじめての方も安心。事前に流れをご確認ください
              </p>

              <ol
                className="relative border-l-2 border-blue-200 space-y-8 pl-10"
                aria-label="検査の流れ"
              >
                {[
                  {
                    step: "01",
                    title: "ご予約",
                    desc: "WEB・LINE・お電話で簡単にご予約いただけます。24時間受付中。当日検査のご相談もお気軽にどうぞ。",
                    icon: <Calendar size={18} className="text-blue-600" aria-hidden="true" />,
                  },
                  {
                    step: "02",
                    title: "事前診察",
                    desc: "問診票のご記入と、検査内容・注意事項について医師または看護師が丁寧にご説明します。",
                    icon: <UserCheck size={18} className="text-blue-600" aria-hidden="true" />,
                  },
                  {
                    step: "03",
                    title: "検査前日",
                    desc: "夕食まで消化の良い食事を摂っていただきます。指示に従った食事制限と下剤の準備をお願いします。",
                    icon: <Home size={18} className="text-blue-600" aria-hidden="true" />,
                  },
                  {
                    step: "04",
                    title: "検査当日",
                    desc: "ご来院 → 腸内洗浄（個室対応） → 鎮静剤投与 → 検査（約15〜30分） → リカバリー（休憩30分〜1時間）",
                    icon: <Activity size={18} className="text-blue-600" aria-hidden="true" />,
                  },
                  {
                    step: "05",
                    title: "結果説明",
                    desc: "検査終了後、当日または後日に医師が画像を見ながら丁寧に結果をご説明します。",
                    icon: <Award size={18} className="text-blue-600" aria-hidden="true" />,
                  },
                ].map((item) => (
                  <li key={item.step} className="relative">
                    {/* ステップ番号（タイムライン上） */}
                    <div
                      className="absolute -left-[49px] top-0 w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-md"
                      aria-hidden="true"
                    >
                      <span className="text-white text-xs font-bold">{item.step}</span>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                      <div className="flex items-center gap-2 mb-2">
                        {item.icon}
                        <h3 className="font-bold text-gray-800 text-sm md:text-base">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeSection>
          </div>
        </section>

        {/* 中間CTA③（Section 5後） */}
        <MidCta
          title="流れを確認したら、ぜひご予約を"
          sub="当日検査のご相談もお気軽にどうぞ"
        />

        {/* ============================================================
            Section 6: 医師紹介
        ============================================================ */}
        <section id="doctor" className="py-16 md:py-20 bg-amber-50" aria-label="院長ご挨拶">
          <div className="max-w-4xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
                院長ご挨拶
              </h2>

              <div className="flex flex-col md:flex-row gap-8 items-start bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-100">
                {/* 医師写真プレースホルダー */}
                {/* ここに院長写真（next/image）を差し替え */}
                <div
                  className="w-full md:w-52 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center"
                  style={{ minHeight: "260px" }}
                  role="img"
                  aria-label="院長写真（後から差し替え）"
                >
                  <span className="text-gray-400 text-sm text-center px-4 leading-relaxed">
                    ここに<br />院長写真
                  </span>
                </div>

                {/* 医師情報 */}
                <div className="flex-1">
                  <p className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-1">
                    DIRECTOR
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    ○○ ○○{" "}
                    <span className="text-sm font-normal text-gray-500">院長</span>
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    ※ 氏名・経歴はクライアント確認後に記載
                  </p>

                  {/* 資格バッジ */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {[
                      "消化器内視鏡専門医",
                      "消化器病専門医",
                      "日本内科学会認定医",
                    ].map((q) => (
                      <span
                        key={q}
                        className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full"
                      >
                        {q}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    「内視鏡検査が怖い」「以前つらい思いをした」というお声を多くの患者さまからいただいてきました。
                    そのご経験を少しでも和らげるために、当院では鎮静剤と炭酸ガスを活用した、
                    苦痛の少ない検査をご提供しています。
                    <br className="hidden md:block" />
                    <br className="hidden md:block" />
                    大切なのは、一人でも多くの方に定期的な検査を続けていただくこと。
                    安心して受診していただけるよう、これからも丁寧に対応してまいります。
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ============================================================
            Section 7: 料金案内
        ============================================================ */}
        <section id="price" className="py-16 md:py-20 bg-gray-50" aria-label="検査費用の目安">
          <div className="max-w-3xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                検査費用の目安
              </h2>
              <p className="text-center text-gray-500 mb-10 text-sm">
                保険診療のため、下記は目安です。詳細はお気軽にお問い合わせください
              </p>

              {/* 大腸カメラ */}
              <h3 className="text-base md:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Activity size={18} aria-hidden="true" />
                大腸カメラ（下部内視鏡検査）
              </h3>
              <div className="overflow-x-auto mb-8 rounded-xl shadow-sm border border-gray-100">
                <table className="w-full text-sm border-collapse" role="table">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th scope="col" className="px-4 py-3 text-left rounded-tl-xl">
                        検査内容
                      </th>
                      <th scope="col" className="px-4 py-3 text-center">
                        1割負担（目安）
                      </th>
                      <th scope="col" className="px-4 py-3 text-center rounded-tr-xl">
                        3割負担（目安）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 bg-white">
                      <td className="px-4 py-4 font-medium">観察のみ</td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約1,500〜2,000円
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約4,500〜6,000円
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium">ポリープ切除あり</td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約5,000〜8,000円
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約15,000〜25,000円
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 胃カメラ */}
              <h3 className="text-base md:text-lg font-bold text-blue-700 mb-3 flex items-center gap-2">
                <Shield size={18} aria-hidden="true" />
                胃カメラ（上部内視鏡検査）
              </h3>
              <div className="overflow-x-auto mb-8 rounded-xl shadow-sm border border-gray-100">
                <table className="w-full text-sm border-collapse" role="table">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th scope="col" className="px-4 py-3 text-left rounded-tl-xl">
                        検査内容
                      </th>
                      <th scope="col" className="px-4 py-3 text-center">
                        1割負担（目安）
                      </th>
                      <th scope="col" className="px-4 py-3 text-center rounded-tr-xl">
                        3割負担（目安）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 bg-white">
                      <td className="px-4 py-4 font-medium">観察のみ</td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約1,000〜1,500円
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約3,000〜5,000円
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-4 font-medium">病理組織検査あり</td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約3,000〜5,000円
                      </td>
                      <td className="px-4 py-4 text-center font-bold text-blue-700 text-base md:text-lg">
                        約9,000〜15,000円
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 注釈 */}
              <div className="bg-blue-50 rounded-xl px-5 py-4 border border-blue-100">
                <p className="text-xs text-gray-600 leading-relaxed">
                  ※ 上記金額は保険診療（1割・3割負担）の参考目安です。年齢・症状・検査内容によって異なります。
                  <br />
                  ※ 鎮静剤使用後は、当日の自動車・バイク・自転車の運転ができません。公共交通機関または送迎をお願いします。
                  <br />
                  ※ 詳細なご費用はお電話またはWEB予約時にご確認ください。
                </p>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ============================================================
            Section 8: よくある質問（FAQ）
        ============================================================ */}
        <section id="faq" className="py-16 md:py-20 bg-white" aria-label="よくあるご質問">
          <div className="max-w-2xl mx-auto px-4">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
                よくあるご質問
              </h2>
              <p className="text-center text-gray-500 mb-10 text-sm">
                ご不明な点があればお気軽にお問い合わせください
              </p>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-5 md:px-8 py-2">
                {[
                  {
                    question: "Q. 検査は痛いですか？",
                    answer:
                      "当院では鎮静剤を使用するため、ウトウトしている間に検査が終わる方がほとんどです。また、大腸カメラでは炭酸ガスを使用しているため、お腹の張りも最小限に抑えられます。目覚めた際に検査が終わっていた、という患者さまも多くいらっしゃいます。",
                  },
                  {
                    question: "Q. 食事制限はいつからですか？",
                    answer:
                      "大腸カメラの場合、前日の夕食（21時頃まで）を消化の良いものにしていただきます。当日は絶食が基本です。胃カメラの場合は、検査の6時間前から絶食をお願いしています。詳しい指示は予約時にご案内します。",
                  },
                  {
                    question: "Q. 検査時間はどのくらいですか？",
                    answer:
                      "観察のみの場合、大腸カメラは約15〜30分、胃カメラは約5〜10分が目安です。ポリープ切除など処置を行う場合はさらに時間がかかります。鎮静剤使用後のリカバリー時間（30分〜1時間程度）を含めると、来院から帰宅まで2〜3時間程度を目安にお考えください。",
                  },
                  {
                    question: "Q. 鎮静剤を使った場合、車で帰れますか？",
                    answer:
                      "鎮静剤を使用した場合、検査当日は自動車・バイク・自転車の運転はできません。公共交通機関のご利用、またはご家族・お知り合いによる送迎をお願いしています。",
                  },
                  {
                    question: "Q. ポリープが見つかった場合、その場で切除できますか？",
                    answer:
                      "小さなポリープは、検査と同時にその場で切除することが可能です（日帰り対応）。ただし、大きさや形状によっては入院設備のある医療機関へご紹介する場合もございます。事前にご相談ください。",
                  },
                  {
                    question: "Q. 院内で下剤を飲むことはできますか？",
                    answer:
                      "はい、当院では下剤服用用の個室をご用意しています。ご自宅での服用が難しい方や、プライバシーを重視される方も安心してご利用いただけます。",
                  },
                ].map((faq) => (
                  <AccordionItem
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </FadeSection>
          </div>
        </section>

        {/* ============================================================
            Section 9: 予約CTA（フッターCTA）+ アクセス
        ============================================================ */}
        <section
          id="cta"
          className="py-16 md:py-20"
          style={{
            background:
              "linear-gradient(135deg, #1e3a8a 0%, #1a56db 100%)",
          }}
          aria-label="ご予約・アクセス"
        >
          <div className="max-w-3xl mx-auto px-4 text-center">
            <FadeSection>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                まずはお気軽にご予約ください
              </h2>
              <p className="text-blue-200 mb-10 text-sm">
                WEB・LINE・お電話でいつでもご予約・ご相談を受け付けています
              </p>

              {/* CTAボタン3つ */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base md:text-lg px-8 py-5 rounded-full transition-colors shadow-lg min-h-[56px]"
                  aria-label="WEB予約はこちら（24時間対応）"
                >
                  <Calendar size={20} aria-hidden="true" />
                  WEB予約はこちら
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold text-base md:text-lg px-8 py-5 rounded-full transition-colors shadow-lg min-h-[56px]"
                  aria-label="LINE予約"
                >
                  <MessageCircle size={20} aria-hidden="true" />
                  LINE予約
                </a>
                <a
                  href="tel:0000000000"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-blue-700 font-bold text-base md:text-lg px-8 py-5 rounded-full transition-colors shadow-lg min-h-[56px]"
                  aria-label="電話で予約する（タップで発信）"
                >
                  <Phone size={20} aria-hidden="true" />
                  電話で予約
                </a>
              </div>

              {/* 診療時間・アクセス */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {/* 診療時間 */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/20">
                  <h3 className="text-white font-bold mb-3 text-xs uppercase tracking-widest">
                    診療時間
                  </h3>
                  <table className="text-blue-100 text-sm w-full">
                    <tbody>
                      <tr>
                        <td className="pr-4 py-1 font-medium">月・火・水・金</td>
                        <td>9:00〜18:00</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-1 font-medium">木・土</td>
                        <td>9:00〜13:00</td>
                      </tr>
                      <tr>
                        <td className="pr-4 py-1 text-red-300 font-medium">休診日</td>
                        <td className="text-red-300">日曜・祝日</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-blue-300 text-xs mt-3">
                    ※ 診療時間はクライアント確認後に更新
                  </p>
                </div>

                {/* アクセス */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/20">
                  <h3 className="text-white font-bold mb-3 text-xs uppercase tracking-widest">
                    アクセス
                  </h3>
                  <address className="not-italic text-blue-100 text-sm leading-relaxed">
                    〒000-0000
                    <br />
                    ○○県○○市○○町0-0-0
                    <br />
                    <span className="text-blue-300 text-xs">
                      ※ 住所はクライアント確認後に更新
                    </span>
                  </address>
                  <p className="text-blue-100 text-sm mt-2">
                    最寄駅：○○駅 徒歩○分
                  </p>
                  <a
                    href="tel:0000000000"
                    className="inline-flex items-center gap-1 mt-3 text-white font-bold text-base hover:underline"
                    aria-label="電話番号（タップで発信）"
                  >
                    <Phone size={16} aria-hidden="true" />
                    000-000-0000
                  </a>
                </div>
              </div>
            </FadeSection>
          </div>
        </section>

        {/* フッター */}
        <footer className="bg-gray-900 text-gray-400 py-6 text-center text-xs">
          <p className="mb-1">
            &copy; {new Date().getFullYear()} うらおか内科・内視鏡クリニック All Rights Reserved.
          </p>
          <p>
            当ページは医療広告ガイドラインに基づき作成されています。
          </p>
        </footer>

        {/* スマホ固定フッターの余白 */}
        <div className="h-[56px] md:hidden" aria-hidden="true" />
      </main>

      {/* ============================================================
          固定フッターCTA（スマートフォン専用 / PCでは非表示）
      ============================================================ */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-2xl"
        role="navigation"
        aria-label="クイック予約"
      >
        <div className="flex">
          <a
            href="#"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-orange-500 active:bg-orange-600 text-white py-3 text-xs font-bold min-h-[56px] transition-colors"
            aria-label="WEB予約"
          >
            <Calendar size={18} aria-hidden="true" />
            WEB予約
          </a>
          <a
            href="#"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-green-500 active:bg-green-600 text-white py-3 text-xs font-bold min-h-[56px] transition-colors"
            aria-label="LINE予約"
          >
            <MessageCircle size={18} aria-hidden="true" />
            LINE予約
          </a>
          <a
            href="tel:0000000000"
            className="flex-1 flex flex-col items-center justify-center gap-1 bg-blue-700 active:bg-blue-800 text-white py-3 text-xs font-bold min-h-[56px] transition-colors"
            aria-label="電話する"
          >
            <Phone size={18} aria-hidden="true" />
            電話する
          </a>
        </div>
      </div>
    </>
  );
}
