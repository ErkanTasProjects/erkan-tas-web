import sys

def replace_skills():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    start_str = '<div class="row g-5">'
    end_str = '<div class="col-lg-4" data-aos="fade-left" data-aos-delay="200">'
    
    start_idx = content.find(start_str)
    end_idx = content.find(end_str)
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find start or end index.")
        return
        
    new_skills = """<div class="row g-5">
      <div class="col-lg-4">
        <h3 class="et-subheading" data-i18n="skills_tech_title">Teknik Yetenekler</h3>
        <div class="et-skill-tags">
          <div class="et-skill-tag" style="--level: 70%"><span>HTML</span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 65%"><span>CSS</span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 60%"><span>SQL <em data-i18n="level_intermediate">(Orta Seviye)</em></span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 35%"><span>React Native <em data-i18n="level_basic">(Temel)</em></span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 30%"><span>Python <em data-i18n="level_basic">(Temel)</em></span><div class="et-skill-tag-bg"></div></div>
        </div>
      </div>

      <div class="col-lg-4">
        <h3 class="et-subheading" data-i18n="skills_general_title">Genel Yetkinlikler</h3>
        <div class="et-skill-tags">
          <div class="et-skill-tag" style="--level: 100%"><span data-i18n="skill_teamwork">Takım Çalışması</span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 80%"><span data-i18n="skill_data">Veri Analizi</span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 80%"><span data-i18n="skill_social">Sosyal Medya Yönetimi</span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 70%"><span data-i18n="skill_ai">Yapay Zeka</span><div class="et-skill-tag-bg"></div></div>
        </div>
      </div>

      <div class="col-lg-4">
        <h3 class="et-subheading" data-i18n="skills_lang_title">Dil Bilgisi</h3>
        <div class="et-skill-tags">
          <div class="et-skill-tag" style="--level: 100%"><span data-i18n="lang_native">Türkçe <em data-i18n="level_native">(Anadil)</em></span><div class="et-skill-tag-bg"></div></div>
          <p class="et-lang-en-title mt-3 mb-2" data-i18n="lang_en_title">İngilizce</p>
          <div class="et-skill-tag" style="--level: 55%"><span><span data-i18n="lang_reading">Okuma</span> <em class="ms-1">(B1)</em></span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 55%"><span><span data-i18n="lang_listening">Dinleme</span> <em class="ms-1">(B1)</em></span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 30%"><span><span data-i18n="lang_writing">Yazma</span> <em class="ms-1">(A2)</em></span><div class="et-skill-tag-bg"></div></div>
          <div class="et-skill-tag" style="--level: 30%"><span><span data-i18n="lang_speaking">Konuşma</span> <em class="ms-1">(A2)</em></span><div class="et-skill-tag-bg"></div></div>
        </div>
      </div>

      """
        
    final_content = content[:start_idx] + new_skills + content[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(final_content)
    print("Done!")

if __name__ == '__main__':
    replace_skills()
