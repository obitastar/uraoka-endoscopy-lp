import type { Metadata } from "next";

// ============================================================
// メタデータ（OGP・SEO）
// ============================================================
export const metadata: Metadata = {
  title: "痛くない内視鏡検査 | うらおか内科・内視鏡クリニック",
  description:
    "消化器内視鏡専門医による鎮静剤を使用した苦痛の少ない胃カメラ・大腸カメラ検査。当日検査対応・24時間WEB予約受付中。",
  openGraph: {
    title: "痛くない内視鏡検査 | うらおか内科・内視鏡クリニック",
    description:
      "消化器内視鏡専門医による鎮静剤を使用した苦痛の少ない胃カメラ・大腸カメラ検査。当日検査対応・24時間WEB予約受付中。",
    type: "website",
    locale: "ja_JP",
    // ここにOG画像URLを設定
    // images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ============================================================
// 構造化データ（JSON-LD）
// ============================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "うらおか内科・内視鏡クリニック",
  description:
    "消化器内視鏡専門医による鎮静剤を使用した苦痛の少ない内視鏡検査を提供するクリニック",
  medicalSpecialty: "Gastroenterology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "○○町○-○",
    addressLocality: "○○市",
    addressRegion: "○○県",
    postalCode: "000-0000",
    addressCountry: "JP",
  },
  telephone: "000-0000-0000",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
};

// ============================================================
// メインページコンポーネント
// ============================================================
export default function EndoscopyLandingPage() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* JSON-LD 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>

        {/* === Section 1: ファーストビュー（Hero） === */}
        <section className="relative flex items-center justify-center h-screen md:h-[80vh] overflow-hidden bg-blue-900">
          {/* ここに院内イメージ画像 */}
          {/* 例: <Image src="/hero-clinic.jpg" alt="院内イメージ" fill className="object-cover opacity-40" /> */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />

          <div className="relative z-10 w-full max-w-4xl mx-auto px-5 py-10 text-center text-white">
            {/* バッジ群 */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-sm font-semibold text-white">
                専門医在籍
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-sm font-semibold text-white">
                鎮静剤使用
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-1.5 text-sm font-semibold text-white">
                当日検査対応
              </span>
            </div>

            {/* メインコピー */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 drop-shadow-lg">
              寝ている間に終わる、<br className="md:hidden" />
              <span className="text-orange-400">痛くない内視鏡検査</span>
            </h1>

            {/* サブコピー */}
            <p className="text-base md:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
              消化器内視鏡専門医が、鎮静剤を使用した<br className="hidden md:inline" />
              苦痛の少ない検査を行います
            </p>

            {/* CTAボタン群 */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#reservation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-orange-500/40 transition-colors duration-200"
              >
                WEB予約はこちら
              </a>
              <a
                href="#reservation"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-green-500/40 transition-colors duration-200"
              >
                LINE予約
              </a>
            </div>
          </div>
        </section>

        {/* === Section 2: 症状の不安共感（悩み提起） === */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f0f7ff" }}>
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                こんな症状やお悩み、<br className="md:hidden" />ありませんか？
              </h2>
              <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-blue-500" />
            </div>

            <ul className="space-y-4 mb-10">
              {[
                "お腹の張り・痛みが続いている",
                "便に血が混じることがある",
                "健康診断で「要精密検査」と言われた",
                "以前の内視鏡検査が痛くてトラウマになっている",
                "内視鏡検査を受けたいが、怖くて踏み出せない",
                "40歳を過ぎたが、一度も内視鏡検査を受けていない",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-blue-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1a56db"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-800 font-medium text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center bg-blue-600 rounded-2xl px-6 py-6 shadow-md shadow-blue-200">
              <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                そのお悩み、当院が解決します
              </p>
            </div>
          </div>
        </section>

        {/* === Section 3: 選ばれる理由（強みカード） === */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
                Why Choose Us
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
                うらおか内科・内視鏡クリニックが<br className="md:hidden" />
                選ばれる理由
              </h2>
              <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-blue-500" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">消化器内視鏡専門医による確かな検査</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">豊富な経験を持つ専門医が、丁寧かつ精度の高い検査を実施します</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">鎮静剤＋炭酸ガスで痛くない・苦しくない</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">鎮静剤でウトウトしている間に検査が終了。炭酸ガス使用でお腹の張りも軽減します</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">当日検査にも対応可能</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">お急ぎの方や、すぐに検査を受けたい方にも柔軟に対応いたします</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">下剤服用の個室完備</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">プライバシーに配慮した個室で、安心して検査準備ができます</p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 sm:col-span-2 md:col-span-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a56db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-800 mb-1 leading-snug">24時間WEB・LINE予約対応</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">お忙しい方でも、いつでもスマホから簡単に予約が可能です</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === Section 3後 中間CTA === */}
        <section className="py-14 md:py-20" style={{ backgroundColor: "#1e3a8a" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <p className="text-blue-200 text-sm font-semibold tracking-widest uppercase mb-3">
              Online Reservation
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
              まずはお気軽にご相談ください
            </h2>
            <p className="text-blue-200 text-sm md:text-base mb-8 leading-relaxed">
              WEB・LINEから24時間いつでも予約可能です。<br className="hidden md:inline" />
              不安なことや気になることはお気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#reservation" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-orange-500/30 transition-colors duration-200">
                まずはWEB予約
              </a>
              <a href="#reservation" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-lg px-8 py-4 shadow-lg shadow-green-500/30 transition-colors duration-200">
                LINE予約
              </a>
            </div>
          </div>
        </section>

        {/* === Section 4: データ・客観的事実 === */}
        <section className="bg-[#0f172a] text-white py-16 px-4 md:py-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 leading-tight">
              早期発見が、あなたの命を守ります
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                <span className="text-5xl md:text-6xl font-extrabold text-[#f97316] leading-none mb-3">2位</span>
                <p className="text-base font-semibold text-white mb-2">大腸がん死亡原因順位</p>
                <p className="text-sm text-gray-400 leading-relaxed">大腸がんは日本人のがん死亡原因の第2位（男女計）。身近ながんのひとつです。</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                <span className="text-5xl md:text-6xl font-extrabold text-[#f97316] leading-none mb-3">90%以上</span>
                <p className="text-base font-semibold text-white mb-2">早期発見時の5年生存率の目安</p>
                <p className="text-sm text-gray-400 leading-relaxed">早期に発見・治療することで、高い生存率が期待できるとされています。</p>
              </div>
              <div className="flex flex-col items-center text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                <span className="text-5xl md:text-6xl font-extrabold text-[#f97316] leading-none mb-3">40歳〜</span>
                <p className="text-base font-semibold text-white mb-2">定期検査の推奨開始年齢</p>
                <p className="text-sm text-gray-400 leading-relaxed">40歳を超えると大腸がんのリスクが上がるとされ、定期的な内視鏡検査が推奨されます。</p>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500">※数値は公的統計・医学的知見に基づく目安です</p>
          </div>
        </section>

        {/* === Section 5: 検査の流れ（タイムライン） === */}
        <section className="bg-[#f9fafb] py-16 px-4 md:py-24">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1f2937] mb-12">
              検査の流れ
            </h2>
            <ol className="relative border-l-2 border-[#1a56db] ml-5">
              {[
                { title: "ご予約", desc: "WEB・LINE・お電話で簡単にご予約ください。" },
                { title: "事前診察", desc: "問診・検査内容のご説明・前処置の案内を行います。" },
                { title: "検査前日", desc: "夕食は軽めに、検査食をお召し上がりください。" },
                { title: "検査当日（午前）", desc: "ご来院・下剤服用（個室完備）・検査の準備を行います。" },
                { title: "検査（約15〜30分）", desc: "鎮静剤投与後、眠っている間に検査を実施します。" },
                { title: "リカバリー・結果説明", desc: "休憩後、医師より結果をわかりやすくご説明します。" },
              ].map((step, i) => (
                <li key={i} className="mb-10 ml-8">
                  <span className="absolute -left-5 flex items-center justify-center w-10 h-10 rounded-full bg-[#1a56db] text-white font-bold text-sm shadow-md">
                    {i + 1}
                  </span>
                  <div className="bg-white rounded-xl shadow-sm p-5 border border-[#dbeafe]">
                    <h3 className="text-base font-bold text-[#1a56db] mb-1">{step.title}</h3>
                    <p className="text-sm text-[#6b7280] leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section 5後 中間CTA */}
        <div className="bg-[#f9fafb] pb-16 px-4 flex justify-center">
          <a href="#reservation" className="inline-block bg-[#1a56db] hover:bg-[#1e3a8a] text-white font-bold text-base md:text-lg px-10 py-4 rounded-full shadow-lg transition-colors duration-200 text-center">
            WEB予約はこちら
          </a>
        </div>

        {/* === Section 6: 医師紹介 === */}
        <section className="bg-[#f0f4f8] py-16 px-4 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1f2937] mb-12">
              院長ご挨拶
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center">
                <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-300 rounded-2xl flex items-center justify-center shadow-md">
                  {/* ここに院長写真 */}
                  <span className="text-gray-500 text-sm text-center px-4">ここに院長写真</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-[#1f2937] mb-1">
                  （院長名）
                  <span className="text-sm font-normal text-[#6b7280] ml-2">※クライアント確認後に記載</span>
                </p>
                <p className="text-sm text-[#6b7280] mb-4">院長</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["消化器内視鏡専門医", "消化器病専門医", "日本内科学会認定内科医"].map((q) => (
                    <span key={q} className="inline-block bg-[#dbeafe] text-[#1a56db] text-xs font-semibold px-3 py-1 rounded-full border border-[#1a56db]/20">
                      {q}
                    </span>
                  ))}
                </div>
                <blockquote className="border-l-4 border-[#1a56db] pl-4 text-[#1f2937] text-sm md:text-base leading-relaxed bg-white rounded-r-xl py-4 pr-4 shadow-sm">
                  内視鏡検査に対して不安や恐怖を感じている方が多くいらっしゃいます。当院では、鎮静剤を使用した苦痛の少ない検査を提供することで、皆さまが安心して検査を受けられる環境づくりに努めております。気になる症状がある方は、どうぞお気軽にご相談ください。
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* === Section 7: 料金案内 === */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                保険診療対応
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">検査費用の目安</h2>
              <p className="mt-3 text-gray-500 text-base">健康保険が適用されます</p>
            </div>

            {/* Desktop: Table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#1a56db" }} className="text-white">
                    <th className="py-4 px-6 text-left font-semibold text-base">検査内容</th>
                    <th className="py-4 px-6 text-center font-semibold text-base">1割負担（目安）</th>
                    <th className="py-4 px-6 text-center font-semibold text-base">3割負担（目安）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { name: "胃カメラ（観察のみ）", low: "約1,500円〜", high: "約4,500円〜" },
                    { name: "胃カメラ（生検あり）", low: "約3,000円〜", high: "約9,000円〜" },
                    { name: "大腸カメラ（観察のみ）", low: "約2,000円〜", high: "約6,000円〜" },
                    { name: "大腸カメラ（ポリープ切除あり）", low: "約7,000円〜", high: "約20,000円〜" },
                  ].map((row, i) => (
                    <tr key={row.name} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50 transition-colors`}>
                      <td className="py-4 px-6 font-medium text-gray-800">{row.name}</td>
                      <td className="py-4 px-6 text-center text-gray-700">{row.low}</td>
                      <td className="py-4 px-6 text-center font-semibold" style={{ color: "#1a56db" }}>{row.high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile: Cards */}
            <div className="md:hidden space-y-4">
              {[
                { name: "胃カメラ（観察のみ）", low: "約1,500円〜", high: "約4,500円〜" },
                { name: "胃カメラ（生検あり）", low: "約3,000円〜", high: "約9,000円〜" },
                { name: "大腸カメラ（観察のみ）", low: "約2,000円〜", high: "約6,000円〜" },
                { name: "大腸カメラ（ポリープ切除あり）", low: "約7,000円〜", high: "約20,000円〜" },
              ].map((item) => (
                <div key={item.name} className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="px-4 py-3 font-semibold text-white text-sm" style={{ backgroundColor: "#1a56db" }}>
                    {item.name}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-100 bg-white">
                    <div className="px-4 py-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">1割負担（目安）</p>
                      <p className="text-base font-bold text-gray-800">{item.low}</p>
                    </div>
                    <div className="px-4 py-4 text-center">
                      <p className="text-xs text-gray-500 mb-1">3割負担（目安）</p>
                      <p className="text-base font-bold" style={{ color: "#1a56db" }}>{item.high}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-500 text-center leading-relaxed">
              ※保険診療のため、上記は目安です。年齢・症状・処置内容により異なります。詳細はお問い合わせください。
            </p>
          </div>
        </section>

        {/* === Section 8: よくある質問（FAQ） === */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f9fafb" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">よくあるご質問</h2>
              <p className="mt-3 text-gray-500">お気軽にご確認ください</p>
            </div>

            <style>{`
              details summary::-webkit-details-marker { display: none; }
              details summary { list-style: none; }
              details .faq-icon { transition: transform 0.3s ease; }
              details[open] .faq-icon { transform: rotate(180deg); }
              details[open] summary { color: #1a56db; }
            `}</style>

            <div className="space-y-3">
              {[
                {
                  q: "検査は痛いですか？",
                  a: "当院では鎮静剤（静脈麻酔）を使用するため、眠っている間に検査が終わります。目が覚めた時には検査が完了している方がほとんどです。",
                },
                {
                  q: "食事制限はいつからですか？",
                  a: "検査前日の夕食は21時までに済ませてください。当日は絶食でご来院いただきます（水・お茶はお飲みいただけます）。",
                },
                {
                  q: "検査時間はどのくらいですか？",
                  a: "観察のみの場合は15〜20分程度です。ポリープ切除を行う場合は30〜60分程度かかることがあります。",
                },
                {
                  q: "鎮静剤を使った場合、車で帰れますか？",
                  a: "鎮静剤使用後は、当日の自動車・バイク・自転車の運転はお控えいただく必要があります。公共交通機関または付き添いの方にお迎えをお願いしております。",
                },
                {
                  q: "ポリープが見つかった場合、その場で切除できますか？",
                  a: "小さなポリープであれば、検査と同時に切除が可能です（日帰り治療）。大きさや形状によっては後日の対応となる場合もございます。",
                },
                {
                  q: "院内で下剤を飲むことはできますか？",
                  a: "はい、プライバシーに配慮した個室をご用意しております。安心して検査準備を行っていただけます。",
                },
              ].map((item, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-gray-800 text-base select-none hover:bg-blue-50 transition-colors">
                    <span className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5" style={{ backgroundColor: "#1a56db" }}>
                        Q
                      </span>
                      <span>{item.q}</span>
                    </span>
                    <svg className="faq-icon shrink-0 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 pt-1">
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5" style={{ backgroundColor: "#f97316" }}>
                        A
                      </span>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.a}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === Section 9: 予約CTA === */}
        <section id="reservation" className="py-16 md:py-24 bg-gradient-to-br from-blue-800 to-blue-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 bg-white" style={{ transform: "translate(30%, -30%)" }}></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 bg-white" style={{ transform: "translate(-30%, 30%)" }}></div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              まずはお気軽にご予約ください
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-10">
              WEB・LINE・お電話、どの方法でもお受けしております
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all min-h-[56px]" style={{ backgroundColor: "#f97316" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                WEB予約
              </a>
              <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all min-h-[56px]" style={{ backgroundColor: "#22c55e" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.01 2 10.97c0 2.89 1.54 5.45 3.93 7.12L5 21l3.26-1.67C9.38 19.74 10.67 20 12 20c5.52 0 10-4.01 10-8.97S17.52 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>
                LINE予約
              </a>
              <a href="tel:000-0000-0000" className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:opacity-90 active:scale-95 transition-all min-h-[56px] bg-white" style={{ color: "#1a56db" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.33 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                お電話
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  診療時間
                </h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  <li className="flex justify-between gap-2">
                    <span>月・火・木・金</span>
                    <span className="text-white font-medium">9:00〜12:30 / 14:30〜18:00</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>水・土</span>
                    <span className="text-white font-medium">9:00〜13:00</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>休診</span>
                    <span className="text-white font-medium">日曜・祝日</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  アクセス
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  〒000-0000<br />
                  ○○県○○市○○町○-○<br />
                  <span className="text-white font-medium">○○駅から徒歩○分</span>
                </p>
                <a href="#" className="inline-flex items-center gap-1 mt-3 text-sm text-blue-200 hover:text-white underline underline-offset-2 transition-colors">
                  Googleマップで見る
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* === フッター === */}
        <footer className="pb-20 md:pb-0" style={{ backgroundColor: "#0f172a" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-base mb-1">うらおか内科・内視鏡クリニック</p>
                <p className="text-gray-400 text-xs">〒000-0000 ○○県○○市○○町○-○</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-500 text-xs mb-1">当サイトは医療広告ガイドラインに基づき作成しています</p>
                <p className="text-gray-600 text-xs">
                  &copy; {new Date().getFullYear()} うらおか内科・内視鏡クリニック All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>

      </main>

      {/* === 固定フッターCTA（スマホ専用） === */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <a href="#reservation" className="flex flex-col items-center justify-center gap-1 py-3 font-bold text-white text-xs active:opacity-80 transition-opacity" style={{ backgroundColor: "#f97316" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            WEB予約
          </a>
          <a href="#reservation" className="flex flex-col items-center justify-center gap-1 py-3 font-bold text-white text-xs active:opacity-80 transition-opacity" style={{ backgroundColor: "#22c55e" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.01 2 10.97c0 2.89 1.54 5.45 3.93 7.12L5 21l3.26-1.67C9.38 19.74 10.67 20 12 20c5.52 0 10-4.01 10-8.97S17.52 2 12 2zm1 13h-2v-2h2v2zm0-4h-2V7h2v4z"/></svg>
            LINE予約
          </a>
          <a href="tel:000-0000-0000" className="flex flex-col items-center justify-center gap-1 py-3 font-bold text-xs active:opacity-80 transition-opacity" style={{ color: "#1a56db" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.33 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            お電話
          </a>
        </div>
        <div style={{ paddingBottom: "env(safe-area-inset-bottom)" }}></div>
      </div>
    </>
  );
}
