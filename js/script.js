/* ============================================================
   うらおか内科・内視鏡クリニック LP
   script.js
   ============================================================ */

/* ============================================================
   dc1: 大腸がん死亡原因ランキング バーアニメーション
   ============================================================
   .dc1-card が IntersectionObserver の viewport に入ったタイミングで
   各 .dc1-bar の [data-width] 属性値を width にセットし、
   CSS transition (0.8s ease) でバーが伸びるアニメーションを実現する。
   バーは 100ms ずつずらして起動し、ウォーターフォール効果を演出する。
   ============================================================ */
(function () {
  'use strict';

  function initDc1Bars() {
    /** 1本のバーを遅延付きで伸ばす */
    function animateBar(bar, delay) {
      var targetWidth = bar.getAttribute('data-width') || '0%';
      setTimeout(function () {
        bar.style.transition = 'width 0.8s ease';
        bar.style.width = targetWidth;
      }, delay);
    }

    /** カード内の全バーを順番に再生 */
    function playAllBars(card) {
      card.querySelectorAll('.dc1-bar').forEach(function (bar, i) {
        animateBar(bar, i * 100);
      });
    }

    var dc1Cards = document.querySelectorAll('.dc1-card');
    if (!dc1Cards.length) return;

    if ('IntersectionObserver' in window) {
      var dc1IO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            playAllBars(entry.target);
            dc1IO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

      dc1Cards.forEach(function (card) { dc1IO.observe(card); });
    } else {
      // フォールバック: IntersectionObserver 非対応環境は即時再生
      dc1Cards.forEach(playAllBars);
    }
  }

  // script.js は </body> 直前で読み込まれるが、念のため DOMContentLoaded も考慮
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDc1Bars);
  } else {
    initDc1Bars();
  }
}());

/* ============================================================
   dc2: 早期発見の5年生存率 アニメーション
   ============================================================
   .dc2-card が IntersectionObserver の viewport に入ったとき：
   1. SVGアーク (.dc2-arc) に .dc2-animated を付与
      → CSS transition で stroke-dashoffset が 427.26 → 42.73 (90%) へ
   2. ステージ別バー (.dc2-bar) の [data-dc2-width] を width にセット
      → CSS transition: width 1s ease でバーが伸びる
   ============================================================ */
(function () {
  'use strict';

  function initDc2() {
    var dc2Cards = document.querySelectorAll('.dc2-card');
    if (!dc2Cards.length) return;

    function playCard(card) {
      // 1. SVGドーナツアーク
      var arc = card.querySelector('.dc2-arc');
      if (arc) {
        // わずかなディレイを置くとトランジションが確実に発火する
        setTimeout(function () {
          arc.classList.add('dc2-animated');
        }, 80);
      }

      // 2. ステージ別バー（100ms ずつずらしてウォーターフォール効果）
      card.querySelectorAll('.dc2-bar').forEach(function (bar, i) {
        var w = (bar.getAttribute('data-dc2-width') || '0') + '%';
        setTimeout(function () {
          bar.style.width = w;
        }, 300 + i * 150);   // ドーナツが少し描き始めた後にバーを起動
      });
    }

    if ('IntersectionObserver' in window) {
      var dc2IO = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            playCard(entry.target);
            dc2IO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

      dc2Cards.forEach(function (card) { dc2IO.observe(card); });
    } else {
      // フォールバック: 即時再生
      dc2Cards.forEach(playCard);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDc2);
  } else {
    initDc2();
  }
}());

document.addEventListener('DOMContentLoaded', () => {

  /* ------ スクロールでヘッダーに影 ------ */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ------ Intersection Observer でフェードイン ------ */
  const fadeEls = document.querySelectorAll('.fade-in');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => io.observe(el));

  /* ------ FAQ アコーディオン ------ */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer   = item.querySelector('.faq-answer');
    question.addEventListener('click', () => {
      const isOpen = question.classList.contains('open');
      // 他を全部閉じる
      faqItems.forEach(other => {
        other.querySelector('.faq-question').classList.remove('open');
        other.querySelector('.faq-answer').classList.remove('open');
      });
      // トグル
      if (!isOpen) {
        question.classList.add('open');
        answer.classList.add('open');
      }
    });
  });

  /* ------ ヒーロー パーティクル生成 ------ */
  const particleContainer = document.querySelector('.hero-particles');
  if (particleContainer) {
    for (let i = 0; i < 18; i++) {
      const span = document.createElement('span');
      span.style.left = Math.random() * 100 + '%';
      span.style.width = span.style.height = (Math.random() * 6 + 3) + 'px';
      span.style.animationDuration = (Math.random() * 12 + 8) + 's';
      span.style.animationDelay = (Math.random() * 10) + 's';
      particleContainer.appendChild(span);
    }
  }

  /* ------ カウントアップアニメーション ------ */
  const countEls = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const isFloat = String(target).includes('.');
      const duration = 1800;
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  countEls.forEach(el => countIO.observe(el));

  /* ------ スムーズスクロール（全ての #アンカー） ------ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 72; // ヘッダー高さ分
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ------ ナビのアクティブ状態 ------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const activateNav = () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', activateNav, { passive: true });

  /* ------ カード3: 年代別リスクグラフ アニメーション ------ */
  const dc3Cards = document.querySelectorAll('.dc3-card');
  if (dc3Cards.length > 0) {
    /**
     * polyline の全頂点間の合計パス長を計算して
     * stroke-dasharray / stroke-dashoffset を正確な値にセットしてからアニメーションする
     */
    const initDc3Card = (card) => {
      const line = card.querySelector('.dc3-line');
      if (!line) return;

      // SVG polyline の全長を取得（SVGGeometryElement.getTotalLength）
      let totalLength = 600; // フォールバック値
      try {
        totalLength = line.getTotalLength();
      } catch (e) {
        // SVGGeometryElement 非対応ブラウザはフォールバックを使用
      }

      // 初期値セット（アニメーション前）
      line.style.strokeDasharray  = totalLength;
      line.style.strokeDashoffset = totalLength;

      // CSSアニメーションの keyframe を動的に上書き（正確な長さで）
      // すでに CSS の @keyframes dc3DrawLine で 600→0 を定義済みだが、
      // JS 計算値を使うためインラインスタイルのトランジションで代替
      line.style.transition = 'stroke-dashoffset 0.8s ease';

      // クラスを付与してアニメーション開始
      card.classList.add('dc3-animated');

      // transition で dashoffset を 0 にする
      // rAF で1フレーム待ってから変更することで確実にトランジションが発火
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = '0';
        });
      });
    };

    if ('IntersectionObserver' in window) {
      const dc3IO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initDc3Card(entry.target);
            dc3IO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

      dc3Cards.forEach((card) => dc3IO.observe(card));
    } else {
      // IntersectionObserver 非対応ブラウザは即時再生
      dc3Cards.forEach(initDc3Card);
    }
  }

});
