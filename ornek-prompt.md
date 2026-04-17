# 🌟 Ultra-Modern & Premium Web Sitesi Oluşturma Promptu

*Eğer bir yapay zeka aracına (Cursor, Claude, ChatGPT vb.) veya bir tasarımcıya lüks, dergi (editorial) tarzı, yüksek bütçeli hissiyatı veren bir web sitesi yaptırmak istiyorsanız aşağıdaki prompt kalıbını kullanabilirsiniz.*

---

## 🎯 Projenin Genel Amacı ve Hissi (Vibe)
Lütfen benim için **ultra-modern, lüks, premium ve "editorial" (dergi mizanpajı)** tarzında tek sayfalık (One-Pager) bir web sitesi kodla. Bu site sıradan, kutu kutu duran (boxy) bir şablon veya ucuz bir WordPress sitesi gibi GÖRÜNMESİN. Michelin yıldızlı bir restoranın veya lüks bir mimarlık ofisinin web sitesi gibi; ferah, bol boşluklu (whitespace) ve asil bir tasarıma sahip olmalı.

## 🎨 Tasarım Dili ve Kurallar

1. **Tipografi (Çok Önemli):** 
   - Başlıklar için devasa (oversized), ince (light/300 weight), yüksek kontrastlı bir serif font kullan (örneğin: **Cormorant Garamond** veya **Playfair Display**).
   - Alt metinler, açıklamalar ve küçük üst başlıklar için çok temiz, harf arası açık (letter-spacing: 0.2em vb.) ince bir sans-serif font kullan (örneğin: **Montserrat** veya **Inter**).
2. **Renk Paleti:**
   - Arka plan için çok derin, zengin ve koyu bir ton seç (örneğin: Koyu Orman Yeşili `#0A1C14` veya Lüks Siyah `#0a0a0a`).
   - Metinler için saf beyaz yerine göz yormayan, premium bir kremsi beyaz/bej kullan (`#FAF6F0`).
   - Vurgu (Accent) rengi olarak zarif ve mat bir altın/bronz tonu kullan (`#C5A059`). Kesinlikle neon veya parlak renkler KULLANMA.
3. **Boşluk Kullanımı (Spacing):**
   - Bölümler (Section'lar) arasında devasa boşluklar (örneğin `py-32` veya `py-48`) bırak. İçerikler birbirine yapışmasın. Ekranda her zaman içeriklerin rahatça nefes aldığı bir boşluk olsun.
4. **Hizalama ve Düzen:**
   - İçerikleri klasik olarak hep sola dayamak yerine, bazı bölümleri tam merkeze ortala (center-aligned).
   - Metinlerin arasına çok ince, yatay veya dikey altın rengi ayırıcı çizgiler ekleyerek dergi kapağı tarzı bir asimetri/simetri oluştur.

## ✨ Animasyonlar ve Etkileşim (Micro-Interactions)
- **Sayfa Yüklenişi (Preloader):** Sitenin başında 2-3 saniye süren, devasa fontla logonun belirdiği ve yukarı kayarak açılan lüks bir giriş animasyonu olsun.
- **Scroll (Kaydırma) Efektleri:** Elementler ekrana geldikçe (Intersection Observer / Framer Motion kullanarak) çok yumuşak ve yavaşça (örneğin 1 - 1.5 saniye süren) aşağıdan yukarıya doğru belirmeli (Fade up & reveal).
- **Paralaks ve Hover:** 
  - Arka plan resimleri kaydırırken metinden daha yavaş hareket etsin (Parallax).
  - Resimlerin üzerine gelindiğinde (hover) resim çok yavaşça (örneğin `duration-1000`) yakınlaşsın (scale), ancak dış kutusu sabit kalsın (overflow-hidden).
  - Butonların üzerine gelindiğinde, arkasından zarif bir şekilde dolan bir altın rengi animasyon eklensin.
- **Özel İmleç (Custom Cursor):** Standart fare imlecini gizle. Yerine, ekranda fareyi takip eden ince altın rengi bir halka ve nokta yap. Etkileşimli alanlara (linkler, resimler) gelince bu imleç büyüsün veya şekil değiştirsin.

## 🧩 Sayfa Bölümleri (Sections)

1. **Hero (Giriş) Alanı:** 
   - Tam ekran, kararartılmış lüks bir tam boy arka plan resmi/videosu. 
   - Üzerinde çok büyük, ince bir başlık (bazı kelimeleri *italik* olsun).
   - Ortada aşağıyı gösteren zarif ve hareketli ince bir çizgi.
2. **Hakkımızda:**
   - Çok büyük bir başlık, yanında geniş satır aralıklı zarif bir metin. 
   - İki farklı resmin birbirinin üstüne bindiği asimetrik ve lüks görünümlü bir resim düzeni (veya hizalı, geniş boşluklu kutular).
3. **Menü / Hizmetler:**
   - Fiyat listesini klasik sıkıcı kutularda değil; başlık, ince noktalı bir ayırıcı çizgi ve sağda fiyat şeklinde zarif bir restoran menüsü stiliyle yap.
4. **Galeri:**
   - Bütün resimlerin boyutlarının aynı olduğu (Uniform Grid) ve tam hizalandığı bir ızgara yap. 
   - Resimlerin üzerine fare ile gelince (hover), üzerlerine hafif siyah/koyu bir filtre insin ve lüks bir fontla resmin ismi belirtsin.
5. **İletişim ve Footer:**
   - İletişim bilgilerini geniş geniş yaz. Haritayı çok büyük yapmak yerine zarif, kenarları çerçeveli ve sepya/koyu tonlarda filtreli bir harita (grayscale) olarak embed et.
   - Footer'da devasa boyutlarda logonun adını yaz. Sosyal medya ikonlarında sadece zarif logo çizgileri (SVG) olsun. İkonun üzerine gelindiğinde altından yavaşça ismi (örn: INSTAGRAM) yukarı kaysın.

## 🛠️ Teknik Gereksinimler
- Framework: Next.js (App Router)
- Stil: Tailwind CSS
- Animasyonlar: Framer Motion
- Dil: TypeScript

**Lütfen kodlarken "basit ve hızlı" bir yaklaşım sergileme. Her detayı estetik bir gözle, lüks markaların standartlarına (örneğin: Apple, Rolex, üst düzey oteller) uyacak şekilde düşün ve mükemmel, pürüzsüz çalışan bir UI üret.**