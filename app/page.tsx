"use client";

import { type ChangeEvent, type FormEvent, type MouseEvent, useEffect, useState } from "react";

const pageHtml = "\n  <header class=\"site-header\">\n    <nav class=\"nav\" aria-label=\"主导航\">\n      <a class=\"brand\" href=\"#top\" aria-label=\"PawClean 首页\">\n        <span class=\"brand-mark\" aria-hidden=\"true\">\n          <svg width=\"21\" height=\"21\" viewBox=\"0 0 24 24\" fill=\"none\">\n            <path d=\"M8.5 10.2c1.1 0 2-1.2 2-2.7s-.9-2.7-2-2.7-2 1.2-2 2.7.9 2.7 2 2.7Zm7 0c1.1 0 2-1.2 2-2.7s-.9-2.7-2-2.7-2 1.2-2 2.7.9 2.7 2 2.7ZM5.4 15.7c1 0 1.8-1 1.8-2.2s-.8-2.2-1.8-2.2-1.8 1-1.8 2.2.8 2.2 1.8 2.2Zm13.2 0c1 0 1.8-1 1.8-2.2s-.8-2.2-1.8-2.2-1.8 1-1.8 2.2.8 2.2 1.8 2.2Zm-6.6.1c-2.7 0-5 2.1-5 4.1 0 1.1.9 1.7 2.1 1.7.8 0 1.8-.4 2.9-.4s2.1.4 2.9.4c1.2 0 2.1-.6 2.1-1.7 0-2-2.3-4.1-5-4.1Z\" fill=\"currentColor\"/>\n          </svg>\n        </span>\n        <span>PawClean 宠物洗护</span>\n      </a>\n      <div class=\"nav-links\">\n        <a href=\"#services\">服务</a>\n        <a href=\"#environment\">环境</a>\n        <a href=\"#process\">流程</a>\n        <a href=\"#pricing\">套餐</a>\n        <a href=\"#caregivers\">护工</a>\n        <a href=\"#location\">位置</a>\n        <a href=\"#booking\">预约</a>\n      </div>\n      <a class=\"nav-action\" href=\"#booking\">立即预约</a>\n    </nav>\n  </header>\n\n  <main id=\"top\">\n    <section class=\"hero\" aria-label=\"PawClean 宠物洗护首屏\">\n      <div class=\"hero-inner\">\n        <p class=\"eyebrow\">洁净洗护 · 皮毛护理 · 温柔安抚</p>\n        <h1>PawClean 宠物洗护</h1>\n        <p class=\"hero-copy\">为猫狗提供从基础清洁到造型养护的一站式体验。每一次洗澡都先观察皮肤和情绪，让毛孩子洗得干净，也洗得安心。</p>\n        <div class=\"hero-actions\">\n          <a class=\"button\" href=\"#booking\">\n            <svg width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n              <path d=\"M8 2v4M16 2v4M3.5 9.2h17M5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7a2.5 2.5 0 0 1 2.5-2.5Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n            </svg>\n            预约洗护\n          </a>\n          <a class=\"button secondary\" href=\"#pricing\">查看套餐</a>\n        </div>\n        <div class=\"hero-stats\" aria-label=\"服务亮点\">\n          <div class=\"hero-stat\">\n            <strong>45min</strong>\n            <span>小型犬基础洗护起</span>\n          </div>\n          <div class=\"hero-stat\">\n            <strong>1v1</strong>\n            <span>专属美容师陪护</span>\n          </div>\n          <div class=\"hero-stat\">\n            <strong>0香精</strong>\n            <span>敏感皮肤可选配方</span>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"services\" id=\"services\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>从洗净到养护，每一步都照顾到皮肤和情绪。</h2>\n          <p>不同品种、毛量和性格会影响洗护方式。我们会在服务前做快速评估，再匹配水温、浴液、吹干节奏和护理项目。</p>\n        </div>\n        <div class=\"service-grid\">\n          <article class=\"service-card\">\n            <div>\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n                  <path d=\"M8 15c-2.2 0-4-1.8-4-4s1.8-4 4-4h7.5a4.5 4.5 0 1 1 0 9H8Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                  <path d=\"M9 11h.01M13 11h.01M17 11h.01\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n                </svg>\n              </span>\n              <h3>基础洁净洗护</h3>\n              <p>温和清洁、耳眼护理、肛门腺、指甲修剪、脚底毛整理和全身吹干。</p>\n            </div>\n          </article>\n          <article class=\"service-card\">\n            <div>\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n                  <path d=\"M6 19c4.4-1.2 7.7-4.5 9-9l1.1-3.4a2.1 2.1 0 0 1 3.5-.8 2.1 2.1 0 0 1-.8 3.5L15.5 10M7 17l-2 3M9.5 18.5 8.3 22\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                </svg>\n              </span>\n              <h3>造型修剪</h3>\n              <p>按犬猫体型和生活习惯设计轮廓，兼顾可爱、清爽和日常打理效率。</p>\n            </div>\n          </article>\n          <article class=\"service-card\">\n            <div>\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n                  <path d=\"M12 3c3.5 3.2 5.2 6.1 5.2 8.8a5.2 5.2 0 1 1-10.4 0C6.8 9.1 8.5 6.2 12 3Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                  <path d=\"M9.8 13.3c.6 1.2 1.4 1.8 2.4 1.8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n                </svg>\n              </span>\n              <h3>皮毛深层养护</h3>\n              <p>针对干燥、打结、换毛期和异味问题，提供护毛素、 SPA 和去废毛方案。</p>\n            </div>\n          </article>\n          <article class=\"service-card\">\n            <div>\n              <span class=\"icon\" aria-hidden=\"true\">\n                <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\">\n                  <path d=\"M12 21s7-3.9 7-10.4V5.5L12 3 5 5.5v5.1C5 17.1 12 21 12 21Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                  <path d=\"m9 12 2 2 4-5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>\n              </span>\n              <h3>敏感宠友护理</h3>\n              <p>低刺激浴液、低风速吹干、分段安抚，让幼宠、老年宠和胆小宠更放松。</p>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"environment\" id=\"environment\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>店内环境按洗护动线分区，减少等待和交叉干扰。</h2>\n          <p>三张轮播图分别展示接待区、洗护间和等候休息区。图片为 AI 生成的门店视觉示意，可替换为真实门店照片。</p>\n        </div>\n        <div class=\"environment-layout\">\n          <div class=\"carousel\" aria-label=\"店内环境轮播\">\n            <div class=\"carousel-track\" data-carousel-track>\n              <article class=\"env-slide\">\n                <img src=\"/assets/shop-reception.png\" alt=\"宠物洗护店接待区和玻璃洗护间\" />\n                <div class=\"slide-caption\">\n                  <strong>接待区</strong>\n                  <span>入店评估、服务确认和护理记录在这里完成，减少宠物进入陌生环境后的不确定感。</span>\n                </div>\n              </article>\n              <article class=\"env-slide\">\n                <img src=\"/assets/shop-grooming-room.png\" alt=\"宠物洗护店独立洗护间\" />\n                <div class=\"slide-caption\">\n                  <strong>独立洗护间</strong>\n                  <span>洗浴、吹干、梳理和基础护理分区进行，便于控制水温、风速和消毒流程。</span>\n                </div>\n              </article>\n              <article class=\"env-slide\">\n                <img src=\"/assets/shop-lounge.png\" alt=\"宠物洗护店等候区和产品墙\" />\n                <div class=\"slide-caption\">\n                  <strong>等候休息区</strong>\n                  <span>主人可在等候区查看服务进度，也能选购日常梳毛、清洁和护毛用品。</span>\n                </div>\n              </article>\n            </div>\n            <div class=\"carousel-controls\">\n              <button class=\"icon-button\" type=\"button\" data-carousel-prev aria-label=\"上一张环境图\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n                  <path d=\"m15 18-6-6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>\n              </button>\n              <button class=\"icon-button\" type=\"button\" data-carousel-next aria-label=\"下一张环境图\">\n                <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n                  <path d=\"m9 18 6-6-6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n                </svg>\n              </button>\n            </div>\n          </div>\n          <aside class=\"environment-panel\">\n            <h3>环境配置</h3>\n            <p>页面里保留了可替换真实照片的结构。实际上线时，只需要替换 `assets/shop-*.png` 三张图片。</p>\n            <ul class=\"env-points\">\n              <li><span class=\"check\">✓</span><span>接待、洗护、等候区域清晰分离</span></li>\n              <li><span class=\"check\">✓</span><span>工具、毛巾和浴液按服务类型归位</span></li>\n              <li><span class=\"check\">✓</span><span>低刺激照明和可视化洗护空间</span></li>\n              <li><span class=\"check\">✓</span><span>适合展示门店卫生和专业可信度</span></li>\n            </ul>\n          </aside>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"process\" id=\"process\">\n      <div class=\"section-inner process-layout\">\n        <div class=\"process-note\">\n          <h2>洗护前先认识它，而不是直接开洗。</h2>\n          <p>门店采用预约制，减少等待和环境压力。每只宠物都有独立记录，便于持续跟踪皮肤状态、毛发变化和偏好的安抚方式。</p>\n        </div>\n        <div class=\"steps\">\n          <article class=\"step\">\n            <span class=\"step-number\">01</span>\n            <div>\n              <h3>到店评估</h3>\n              <p>检查皮肤、耳道、毛结和情绪状态，确认是否需要特殊护理。</p>\n            </div>\n          </article>\n          <article class=\"step\">\n            <span class=\"step-number\">02</span>\n            <div>\n              <h3>分区洗护</h3>\n              <p>按背部、腹部、四肢和头面部分区清洁，降低刺激感。</p>\n            </div>\n          </article>\n          <article class=\"step\">\n            <span class=\"step-number\">03</span>\n            <div>\n              <h3>低压吹干</h3>\n              <p>控制风速和温度，毛量大的宠物会配合梳理避免闷湿。</p>\n            </div>\n          </article>\n          <article class=\"step\">\n            <span class=\"step-number\">04</span>\n            <div>\n              <h3>护理反馈</h3>\n              <p>服务后说明皮肤、毛发、耳眼和指甲情况，给出居家护理建议。</p>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"pricing\" id=\"pricing\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>按体型和护理深度选择套餐。</h2>\n          <p>价格可作为展示模板，实际项目可根据城市、门店和品种微调。</p>\n        </div>\n        <div class=\"price-grid\">\n          <article class=\"price-card\">\n            <p>小型犬 / 短毛猫</p>\n            <h3>清爽基础洗</h3>\n            <div class=\"price-tag\"><strong>¥88</strong><span>起</span></div>\n            <ul class=\"price-list\">\n              <li><span class=\"check\">✓</span><span>温和沐浴和吹干</span></li>\n              <li><span class=\"check\">✓</span><span>耳眼清洁和指甲修剪</span></li>\n              <li><span class=\"check\">✓</span><span>基础脚底毛整理</span></li>\n            </ul>\n          </article>\n          <article class=\"price-card featured\">\n            <p>中小型犬 / 长毛猫</p>\n            <h3>标准养护洗</h3>\n            <div class=\"price-tag\"><strong>¥168</strong><span>起</span></div>\n            <ul class=\"price-list\">\n              <li><span class=\"check\">✓</span><span>基础洗护全项目</span></li>\n              <li><span class=\"check\">✓</span><span>护毛素和废毛梳理</span></li>\n              <li><span class=\"check\">✓</span><span>皮毛状态反馈</span></li>\n            </ul>\n          </article>\n          <article class=\"price-card\">\n            <p>造型 / 深层护理</p>\n            <h3>精致焕新洗</h3>\n            <div class=\"price-tag\"><strong>¥268</strong><span>起</span></div>\n            <ul class=\"price-list\">\n              <li><span class=\"check\">✓</span><span>标准养护全项目</span></li>\n              <li><span class=\"check\">✓</span><span>局部或全身造型修剪</span></li>\n              <li><span class=\"check\">✓</span><span>SPA 或敏感配方可选</span></li>\n            </ul>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"caregivers\" id=\"caregivers\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>按宠物性格和护理需求选择护工。</h2>\n          <p>每位护工的强项不同：有的擅长安抚胆小宠物，有的适合高毛量犬种，有的更适合猫咪和敏感皮肤护理。</p>\n        </div>\n        <div class=\"caregiver-grid\" data-caregiver-list>\n          <article class=\"caregiver-card active\" data-caregiver=\"林岚\">\n            <img src=\"/assets/caregiver-lin.png\" alt=\"护工林岚形象照\" />\n            <div class=\"caregiver-body\">\n              <h3>林岚 · 短毛犬护理型</h3>\n              <p>适合腊肠、柯基、法斗等短毛犬。擅长皮肤褶皱检查、低刺激清洁和指甲脚底护理。</p>\n              <div class=\"caregiver-tags\">\n                <span>短毛犬护理</span>\n                <span>皮肤观察</span>\n                <span>指甲脚底</span>\n              </div>\n              <button class=\"caregiver-action\" type=\"button\">已选择</button>\n            </div>\n          </article>\n          <article class=\"caregiver-card\" data-caregiver=\"周骁\">\n            <img src=\"/assets/caregiver-zhou.png\" alt=\"护工周骁形象照\" />\n            <div class=\"caregiver-body\">\n              <h3>周骁 · 造型修剪型</h3>\n              <p>适合比熊、贵宾、雪纳瑞等需要造型的犬种。优势是轮廓修剪稳定，能兼顾好看和易打理。</p>\n              <div class=\"caregiver-tags\">\n                <span>造型修剪</span>\n                <span>高毛量犬种</span>\n                <span>轮廓控制</span>\n              </div>\n              <button class=\"caregiver-action\" type=\"button\">选择TA</button>\n            </div>\n          </article>\n          <article class=\"caregiver-card\" data-caregiver=\"陈若\">\n            <img src=\"/assets/caregiver-chen.png\" alt=\"护工陈若形象照\" />\n            <div class=\"caregiver-body\">\n              <h3>陈若 · 猫咪安抚型</h3>\n              <p>适合橘猫、英短、布偶等猫咪洗护。擅长毛巾包裹安抚、局部清洁和低噪音吹干。</p>\n              <div class=\"caregiver-tags\">\n                <span>猫咪护理</span>\n                <span>毛巾安抚</span>\n                <span>低噪吹干</span>\n              </div>\n              <button class=\"caregiver-action\" type=\"button\">选择TA</button>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"quotes\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>宠物舒服，主人也更放心。</h2>\n          <p>洗护体验不仅看洗完多香，更看宠物下次还愿不愿意进门。</p>\n        </div>\n        <div class=\"quote-grid\">\n          <article class=\"quote-card\">\n            <p>“我家比熊之前特别怕吹风，这里会分段休息，洗完没有一直发抖，毛也蓬得很自然。”</p>\n            <div class=\"quote-meta\">\n              <span class=\"avatar\">林</span>\n              <div><strong>林女士</strong><span>比熊 · 糯米</span></div>\n            </div>\n          </article>\n          <article class=\"quote-card\">\n            <p>“猫咪打结很严重，美容师没有硬扯，先沟通再处理，最后还教我怎么在家梳毛。”</p>\n            <div class=\"quote-meta\">\n              <span class=\"avatar\">陈</span>\n              <div><strong>陈先生</strong><span>布偶猫 · 蓝蓝</span></div>\n            </div>\n          </article>\n          <article class=\"quote-card\">\n            <p>“预约制很舒服，不用和很多狗狗挤在一起等。洗完会发护理反馈，细节挺专业。”</p>\n            <div class=\"quote-meta\">\n              <span class=\"avatar\">周</span>\n              <div><strong>周女士</strong><span>柴犬 · 阿栗</span></div>\n            </div>\n          </article>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"location\" id=\"location\">\n      <div class=\"section-inner\">\n        <div class=\"section-head\">\n          <h2>门店位置展示。</h2>\n          <p>按照厦门同安银城智谷附近路网绘制卡通示意地图，用更明亮的颜色标出到店位置和周边地标。</p>\n        </div>\n        <div class=\"location-layout\">\n          <div class=\"location-card\">\n            <h3>三美肆号（银城智谷店）</h3>\n            <p>福建省厦门市同安区智谷东一路银城智谷 2 期 A13 栋 99-1-104 号，靠近智谷东一路与智谷东二路片区，到店前可先确认预约时段。</p>\n            <ul class=\"location-list\">\n              <li><span class=\"check\">✓</span> 位置：银城智谷 2 期 A13 栋 99-1-104 号</li>\n              <li><span class=\"check\">✓</span> 主路：滨海西大道、智谷东一路、西洲路</li>\n              <li><span class=\"check\">✓</span> 参考：同安湾、丙洲大桥、智谷片区路网</li>\n              <li><span class=\"check\">✓</span> 到店前 10 分钟可确认预约时间和护理师档期</li>\n            </ul>\n          </div>\n          <div class=\"map-canvas\" role=\"img\" aria-label=\"三美肆号银城智谷店位置卡通示意地图\">\n            <svg class=\"cartoon-map\" viewBox=\"0 0 720 420\" aria-hidden=\"true\">\n              <defs>\n                <pattern id=\"mapDots\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n                  <circle cx=\"3\" cy=\"3\" r=\"1.6\" fill=\"rgba(47, 184, 180, 0.18)\" />\n                </pattern>\n              </defs>\n              <rect width=\"720\" height=\"420\" fill=\"#fff8db\" />\n              <rect width=\"720\" height=\"420\" fill=\"url(#mapDots)\" />\n              <path class=\"map-river\" d=\"M600-54C565 39 588 104 641 166c60 70 74 139 30 234\" />\n              <path class=\"map-wave\" d=\"M610 54c25-12 51-12 76 0\" />\n              <path class=\"map-wave\" d=\"M595 126c24-11 50-11 74 0\" />\n              <path class=\"map-wave\" d=\"M618 224c22-10 45-10 68 0\" />\n              <path class=\"map-park\" d=\"M30 36h168c25 0 44 19 44 44v74c0 25-19 44-44 44H30Z\" />\n              <path class=\"map-park\" d=\"M452 35h94c20 0 36 16 36 36v92H452Z\" />\n              <path class=\"map-park\" d=\"M76 294h134c22 0 38 16 38 38v54H76Z\" />\n              <path class=\"map-road\" d=\"M-26 245C90 219 215 204 334 180c104-21 192-51 274-98\" />\n              <path class=\"map-road\" d=\"M57 370c91-82 178-125 286-138 103-13 196 6 314-35\" />\n              <path class=\"map-road thin\" d=\"M369-20c-8 95-4 173 12 251 11 55 14 110 8 203\" />\n              <path class=\"map-road thin\" d=\"M196-18c18 94 35 185 46 269 7 57 3 113-12 183\" />\n              <path class=\"map-road thin\" d=\"M484 70c-12 82-11 158 4 229\" />\n              <path class=\"map-route\" d=\"M214 366c88-64 170-93 272-126\" />\n              <rect class=\"map-building\" x=\"82\" y=\"84\" width=\"118\" height=\"76\" rx=\"14\" />\n              <rect class=\"map-building\" x=\"276\" y=\"92\" width=\"120\" height=\"72\" rx=\"14\" />\n              <rect class=\"map-building\" x=\"446\" y=\"274\" width=\"126\" height=\"68\" rx=\"14\" />\n              <rect class=\"map-building\" x=\"286\" y=\"286\" width=\"120\" height=\"66\" rx=\"14\" />\n              <g class=\"map-cloud\" transform=\"translate(96 42)\">\n                <circle cx=\"0\" cy=\"18\" r=\"16\" fill=\"#fff\" />\n                <circle cx=\"20\" cy=\"11\" r=\"20\" fill=\"#fff\" />\n                <circle cx=\"44\" cy=\"18\" r=\"15\" fill=\"#fff\" />\n                <rect x=\"0\" y=\"17\" width=\"45\" height=\"18\" rx=\"9\" fill=\"#fff\" />\n              </g>\n              <g class=\"map-car\" transform=\"translate(310 197) rotate(-12)\">\n                <rect x=\"0\" y=\"0\" width=\"46\" height=\"24\" rx=\"8\" fill=\"#ffd35d\" />\n                <rect x=\"9\" y=\"-8\" width=\"25\" height=\"14\" rx=\"5\" fill=\"#70d6d1\" />\n                <circle cx=\"11\" cy=\"25\" r=\"5\" fill=\"#17212b\" />\n                <circle cx=\"35\" cy=\"25\" r=\"5\" fill=\"#17212b\" />\n              </g>\n              <text class=\"map-road-name\" x=\"328\" y=\"160\" transform=\"rotate(80 328 160)\">滨海西大道</text>\n              <text class=\"map-road-name\" x=\"438\" y=\"218\" transform=\"rotate(-14 438 218)\">智谷东一路</text>\n              <text class=\"map-road-name\" x=\"116\" y=\"330\" transform=\"rotate(-34 116 330)\">西洲路</text>\n              <text class=\"map-road-name\" x=\"500\" y=\"308\">智谷东二路</text>\n              <text class=\"map-place-name\" x=\"498\" y=\"122\">同安湾</text>\n              <text class=\"map-place-name\" x=\"116\" y=\"124\">银城智谷 2 期</text>\n              <g class=\"map-paw\" transform=\"translate(288 288) rotate(-18)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" />\n                <circle cx=\"-11\" cy=\"-10\" r=\"4\" />\n                <circle cx=\"0\" cy=\"-14\" r=\"4\" />\n                <circle cx=\"11\" cy=\"-10\" r=\"4\" />\n              </g>\n              <g class=\"map-paw\" transform=\"translate(348 268) rotate(-18)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" />\n                <circle cx=\"-11\" cy=\"-10\" r=\"4\" />\n                <circle cx=\"0\" cy=\"-14\" r=\"4\" />\n                <circle cx=\"11\" cy=\"-10\" r=\"4\" />\n              </g>\n              <g class=\"map-paw\" transform=\"translate(410 246) rotate(-18)\">\n                <circle cx=\"0\" cy=\"0\" r=\"6\" />\n                <circle cx=\"-11\" cy=\"-10\" r=\"4\" />\n                <circle cx=\"0\" cy=\"-14\" r=\"4\" />\n                <circle cx=\"11\" cy=\"-10\" r=\"4\" />\n              </g>\n              <g class=\"shop-house\" transform=\"translate(386 132)\">\n                <path class=\"shop-roof\" d=\"M18 82 96 18l78 64v18H18Z\" />\n                <rect class=\"shop-wall\" x=\"34\" y=\"82\" width=\"124\" height=\"112\" rx=\"14\" />\n                <rect x=\"60\" y=\"122\" width=\"40\" height=\"72\" rx=\"9\" fill=\"#ccecea\" />\n                <rect x=\"112\" y=\"118\" width=\"28\" height=\"28\" rx=\"6\" fill=\"#e7f6f2\" />\n                <path class=\"shop-awning-a\" d=\"M44 88h24v24H44Z\" />\n                <path class=\"shop-awning-b\" d=\"M68 88h24v24H68Z\" />\n                <path class=\"shop-awning-a\" d=\"M92 88h24v24H92Z\" />\n                <path class=\"shop-awning-b\" d=\"M116 88h24v24h-24Z\" />\n                <circle cx=\"129\" cy=\"168\" r=\"5\" fill=\"#f36f5f\" />\n                <path d=\"M88 56c8-10 18-10 26 0 6 8 4 20-13 31-17-11-19-23-13-31Z\" fill=\"#fff2b8\" />\n              </g>\n              <g class=\"map-pin\">\n                <path class=\"map-pin-dot\" d=\"M466 108c27 0 49 21 49 48 0 40-49 78-49 78s-49-38-49-78c0-27 22-48 49-48Z\" />\n                <circle cx=\"466\" cy=\"157\" r=\"19\" fill=\"#fff\" />\n                <circle cx=\"466\" cy=\"157\" r=\"8\" fill=\"#f36f5f\" />\n              </g>\n              <rect class=\"map-label-box\" x=\"444\" y=\"248\" width=\"238\" height=\"96\" rx=\"14\" />\n              <text class=\"map-label-title\" x=\"468\" y=\"284\">三美肆号</text>\n              <text class=\"map-label-sub\" x=\"468\" y=\"313\">银城智谷 2 期 A13</text>\n              <text class=\"map-label-sub\" x=\"468\" y=\"335\">99-1-104 号</text>\n              <path d=\"M444 272 420 258l24-10Z\" fill=\"#fff\" />\n            </svg>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"booking\" id=\"booking\">\n      <div class=\"section-inner booking-layout\">\n        <div>\n          <h2>给毛孩子约一个清爽时段。</h2>\n          <p>留下基础信息后，门店会确认宠物体型、毛量和期望服务，再为你锁定合适美容师。</p>\n          <div class=\"contact-points\">\n            <div class=\"contact-point\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n                <path d=\"M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                <path d=\"M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n              </svg>\n              <span>福建省厦门市同安区智谷东一路银城智谷 2 期 A13 栋 99-1-104 号</span>\n            </div>\n            <div class=\"contact-point\">\n              <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\">\n                <path d=\"M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z\" stroke=\"currentColor\" stroke-width=\"2\"/>\n              </svg>\n              <span>+86 189 0020 2716 · 10:00-20:00</span>\n            </div>\n          </div>\n        </div>\n        <form class=\"booking-form\">\n          <div class=\"field\">\n            <label for=\"owner\">主人姓名</label>\n            <input id=\"owner\" name=\"owner\" type=\"text\" placeholder=\"例如：王女士\" />\n          </div>\n          <div class=\"field\">\n            <label for=\"phone\">联系电话</label>\n            <input id=\"phone\" name=\"phone\" type=\"tel\" placeholder=\"手机号码\" />\n          </div>\n          <div class=\"field\">\n            <label for=\"pet\">宠物类型</label>\n            <select id=\"pet\" name=\"pet\">\n              <option>小型犬</option>\n              <option>中大型犬</option>\n              <option>猫咪</option>\n              <option>其他宠物</option>\n            </select>\n          </div>\n          <div class=\"field\">\n            <label for=\"service\">服务项目</label>\n            <select id=\"service\" name=\"service\">\n              <option>基础洁净洗护</option>\n              <option>标准养护洗</option>\n              <option>造型修剪</option>\n              <option>敏感宠友护理</option>\n            </select>\n          </div>\n          <div class=\"field full\">\n            <label for=\"caregiver\">指定护工</label>\n            <select id=\"caregiver\" name=\"caregiver\">\n              <option>林岚</option>\n              <option>周骁</option>\n              <option>陈若</option>\n            </select>\n          </div>\n          <div class=\"field full\">\n            <label for=\"visitTime\">预约到店时间</label>\n            <input id=\"visitTime\" name=\"visitTime\" type=\"datetime-local\" />\n          </div>\n          <div class=\"field full\">\n            <label for=\"notes\">护理备注</label>\n            <textarea id=\"notes\" name=\"notes\" placeholder=\"可填写品种、体重、皮肤情况、是否怕吹风等\"></textarea>\n          </div>\n          <div class=\"estimate-card\" aria-live=\"polite\">\n            <div>\n              <span>当前预估</span>\n              <strong id=\"estimateTitle\">小型犬 · 基础洁净洗护</strong>\n              <span id=\"estimateMeta\">预计 45-60 分钟，到店后按毛量和皮肤状态微调。</span>\n            </div>\n            <div class=\"estimate-price\">\n              <span>大约</span>\n              <em id=\"estimatePrice\">¥88</em>\n            </div>\n            <p class=\"estimate-note\" id=\"estimateNote\">价格为页面预估展示，最终以门店确认项目为准。</p>\n          </div>\n          <div class=\"booking-status\" id=\"bookingStatus\" role=\"status\"></div>\n          <div class=\"field full\">\n            <button class=\"button\" type=\"button\" id=\"bookingSubmit\">提交预约信息</button>\n          </div>\n        </form>\n      </div>\n    </section>\n  </main>\n\n  <footer class=\"footer\">\n    <div class=\"footer-inner\">\n      <span>© 2026 PawClean Pet Grooming</span>\n      <span>洁净、安全、放松的宠物洗护体验</span>\n    </div>\n  </footer>\n  ";

type PetRule = { add: number; duration: string };
type ServiceRule = { base: number; note: string };

const petPrice: Record<string, PetRule> = {
  "小型犬": { add: 0, duration: "45-60 分钟" },
  "中大型犬": { add: 70, duration: "75-100 分钟" },
  "猫咪": { add: 30, duration: "60-80 分钟" },
  "其他宠物": { add: 50, duration: "到店评估后确认" },
};

const servicePrice: Record<string, ServiceRule> = {
  "基础洁净洗护": { base: 88, note: "含温和沐浴、吹干、耳眼清洁、指甲和脚底毛基础护理。" },
  "标准养护洗": { base: 168, note: "含基础洗护、护毛素、废毛梳理和皮毛状态反馈。" },
  "造型修剪": { base: 268, note: "含标准养护项目，并根据体型做局部或全身造型。" },
  "敏感宠友护理": { base: 198, note: "使用低刺激配方和分段低风速吹干，适合胆小、幼宠或老年宠。" },
};

const padNumber = (value: number) => String(value).padStart(2, "0");

const toDateTimeValue = (date: Date) => {
  const year = date.getFullYear();
  const month = padNumber(date.getMonth() + 1);
  const day = padNumber(date.getDate());
  const hour = padNumber(date.getHours());
  const minute = padNumber(date.getMinutes());
  return `${year}-${month}-${day}T${hour}:${minute}`;
};

const formatVisitTime = (value: string) => {
  if (!value) {
    return "未选择到店时间";
  }

  const date = new Date(value);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = padNumber(date.getHours());
  const minute = padNumber(date.getMinutes());
  return `${month}月${day}日 ${hour}:${minute}`;
};

const getDefaultVisitTime = () => {
  const now = new Date();
  const earliest = new Date(now);
  earliest.setHours(now.getHours() + 2, 0, 0, 0);

  if (earliest.getHours() < 10) {
    earliest.setHours(10, 0, 0, 0);
  }

  if (earliest.getHours() >= 20) {
    earliest.setDate(earliest.getDate() + 1);
    earliest.setHours(10, 0, 0, 0);
  }

  return toDateTimeValue(earliest);
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedCaregiver, setSelectedCaregiver] = useState("林岚");
  const [pet, setPet] = useState("小型犬");
  const [service, setService] = useState("基础洁净洗护");
  const [visitTime, setVisitTime] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");

  useEffect(() => {
    setVisitTime(getDefaultVisitTime());
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 3);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    const track = root.querySelector<HTMLElement>("[data-carousel-track]");
    if (track) {
      track.style.transform = `translateX(-${activeSlide * 100}%)`;
    }
  }, [activeSlide]);

  useEffect(() => {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    const petSelect = root.querySelector<HTMLSelectElement>("#pet");
    const serviceSelect = root.querySelector<HTMLSelectElement>("#service");
    const caregiverSelect = root.querySelector<HTMLSelectElement>("#caregiver");
    const visitTimeInput = root.querySelector<HTMLInputElement>("#visitTime");
    const estimateTitle = root.querySelector<HTMLElement>("#estimateTitle");
    const estimateMeta = root.querySelector<HTMLElement>("#estimateMeta");
    const estimatePrice = root.querySelector<HTMLElement>("#estimatePrice");
    const estimateNote = root.querySelector<HTMLElement>("#estimateNote");
    const status = root.querySelector<HTMLElement>("#bookingStatus");

    if (petSelect) petSelect.value = pet;
    if (serviceSelect) serviceSelect.value = service;
    if (caregiverSelect) caregiverSelect.value = selectedCaregiver;
    if (visitTimeInput) {
      if (visitTime) {
        visitTimeInput.min = visitTime;
        visitTimeInput.value = visitTime;
      }
    }

    root.querySelectorAll<HTMLElement>(".caregiver-card").forEach((card) => {
      const action = card.querySelector<HTMLElement>(".caregiver-action");
      const isActive = card.dataset.caregiver === selectedCaregiver;
      card.classList.toggle("active", isActive);
      if (action) action.textContent = isActive ? "已选择" : "选择TA";
    });

    const petRule = petPrice[pet] || petPrice["其他宠物"];
    const serviceRule = servicePrice[service] || servicePrice["基础洁净洗护"];
    const total = serviceRule.base + petRule.add;

    if (estimateTitle) estimateTitle.textContent = `${pet} · ${service}`;
    if (estimateMeta) estimateMeta.textContent = `预计 ${petRule.duration}，预约到店：${formatVisitTime(visitTime)}。`;
    if (estimatePrice) estimatePrice.textContent = `¥${total}`;
    if (estimateNote) estimateNote.textContent = serviceRule.note;
    if (status) {
      status.textContent = bookingStatus;
      status.classList.toggle("show", Boolean(bookingStatus));
    }
  }, [bookingStatus, pet, selectedCaregiver, service, visitTime]);

  const updateBookingStatus = () => {
    const petRule = petPrice[pet] || petPrice["其他宠物"];
    const serviceRule = servicePrice[service] || servicePrice["基础洁净洗护"];
    const total = serviceRule.base + petRule.add;
    setBookingStatus(`已记录预约意向：${pet} · ${service}，${formatVisitTime(visitTime)} 到店，预估 ¥${total}。门店会按毛量、体型和现场护理需求最终确认。`);
  };

  const handlePageClick = (event: MouseEvent<HTMLDivElement>) => {
    const targetNode = event.target as Node;
    const target = targetNode instanceof Element ? targetNode : targetNode.parentElement;
    if (!target) return;

    if (target.closest("[data-carousel-prev]")) {
      setActiveSlide((current) => (current + 2) % 3);
      return;
    }

    if (target.closest("[data-carousel-next]")) {
      setActiveSlide((current) => (current + 1) % 3);
      return;
    }

    const caregiverCard = target.closest<HTMLElement>(".caregiver-card");
    if (caregiverCard) {
      setSelectedCaregiver(caregiverCard.dataset.caregiver || "林岚");
      return;
    }

    if (target.closest("#bookingSubmit")) {
      updateBookingStatus();
    }
  };

  const handlePageChange = (event: ChangeEvent<HTMLDivElement> | FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLInputElement | HTMLSelectElement;

    if (target.id === "pet") {
      setPet(target.value || "小型犬");
      setBookingStatus("");
    }

    if (target.id === "service") {
      setService(target.value || "基础洁净洗护");
      setBookingStatus("");
    }

    if (target.id === "caregiver") {
      setSelectedCaregiver(target.value || "林岚");
    }

    if (target.id === "visitTime") {
      setVisitTime(target.value || "");
      setBookingStatus("");
    }
  };

  useEffect(() => {
    const root = document.querySelector("[data-page-root]");
    if (!root) return;

    const getElementTarget = (event: Event) => {
      const targetNode = event.target as Node;
      return targetNode instanceof Element ? targetNode : targetNode.parentElement;
    };

    const syncCaregiverVisual = (caregiver: string) => {
      const caregiverSelect = root.querySelector<HTMLSelectElement>("#caregiver");
      if (caregiverSelect) caregiverSelect.value = caregiver;

      root.querySelectorAll<HTMLElement>(".caregiver-card").forEach((card) => {
        const isActive = card.dataset.caregiver === caregiver;
        const action = card.querySelector<HTMLElement>(".caregiver-action");
        card.classList.toggle("active", isActive);
        if (action) action.textContent = isActive ? "已选择" : "选择TA";
      });
    };

    const handleNativeClick = (event: Event) => {
      const target = getElementTarget(event);
      if (!target) return;

      if (target.closest("[data-carousel-prev]")) {
        setActiveSlide((current) => (current + 2) % 3);
        return;
      }

      if (target.closest("[data-carousel-next]")) {
        setActiveSlide((current) => (current + 1) % 3);
        return;
      }

      const caregiverCard = target.closest<HTMLElement>(".caregiver-card");
      if (caregiverCard) {
        const caregiver = caregiverCard.dataset.caregiver || "林岚";
        setSelectedCaregiver(caregiver);
        syncCaregiverVisual(caregiver);
        return;
      }

      if (target.closest("#bookingSubmit")) {
        updateBookingStatus();
      }
    };

    const handleNativeChange = (event: Event) => {
      const target = getElementTarget(event) as HTMLInputElement | HTMLSelectElement | null;
      if (!target) return;

      if (target.id === "pet") {
        setPet(target.value || "小型犬");
        setBookingStatus("");
      }

      if (target.id === "service") {
        setService(target.value || "基础洁净洗护");
        setBookingStatus("");
      }

      if (target.id === "caregiver") {
        const caregiver = target.value || "林岚";
        setSelectedCaregiver(caregiver);
        syncCaregiverVisual(caregiver);
      }

      if (target.id === "visitTime") {
        setVisitTime(target.value || "");
        setBookingStatus("");
      }
    };

    root.addEventListener("click", handleNativeClick);
    root.addEventListener("change", handleNativeChange);
    root.addEventListener("input", handleNativeChange);

    return () => {
      root.removeEventListener("click", handleNativeClick);
      root.removeEventListener("change", handleNativeChange);
      root.removeEventListener("input", handleNativeChange);
    };
  }, [pet, service, visitTime]);

  return (
    <div
      data-page-root
      onChange={handlePageChange}
      onClick={handlePageClick}
      onInput={handlePageChange}
      dangerouslySetInnerHTML={{ __html: pageHtml }}
    />
  );
}
