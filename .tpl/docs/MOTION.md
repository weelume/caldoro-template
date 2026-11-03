# Caldoro 动效合同与验收清单

参考站：<https://caldoro.framer.website/>。主要源码证据：`DpGi3tssfzPecds0kHzF8C6pvJSy2N5gTQtNZbXGYvY.B7NBnW0P.mjs`（首页）、`toplevel-deps.BaAEq99t.mjs`（导航/页脚/按钮/公告）、`SPI1HkZSS.Bu3Yu0pz.mjs`（产品卡）、`NyMThnVmz.D3cMvNDD.mjs`（提交按钮）及产品详情共同模块。
## 证据与验收状态

本文件整理参考站公开 HTML 及其直接引用的 JavaScript/CSS 模块中的动效参数。研究只读取文本，没有执行下载的脚本。标注“源码”的内容是实现参考，不等同于参考站或本模板的浏览器运行结果；没有明确参数的项目保持“待确认”，不按经验补写为原站事实。

**本文件是参数合同，不把源码研究当作浏览器通过证据。** 实际执行的浏览器子项见 `.tpl/reports/browser.json`；未列入该记录的三端、双语、初始/运行/终态项目仍待验证，不据此宣称逐帧精确一致。减弱动态列区分“源码已确认”与“模板验收要求”；后者不能反推为原站行为。

### 通用执行方法

1. 按 `.tpl/project.json` 的运行合同启动本模板；所有安装、构建和构建验收在本地 Linux 文件系统完成，远端只接收已构建产物。
2. 在内置浏览器分别使用 PC 1440×900、iPad 1024×1366、H5 390×844，逐项执行本文件清单；再在断点前后各取 1px 复查。中文 `/` 与英文 `/en` 都执行，子页保持对应语言前缀。
3. 对每项保存初始态、运行中、终态，以及循环跨周期、离屏返回、hover/focus结束、路由返回的证据。截图不能证明循环速度；计时或录屏须覆盖指定时间。
4. 开启浏览器 `prefers-reduced-motion: reduce` 后重新载入，复查内容可见、按钮/键盘/触摸可用、背景无持续非必要运动。恢复正常设置再载入，确认没有残留锁、重复定时器或重复监听器。
5. 每次执行记录日期、源码提交、视口、语言、操作、结果和证据位置。只有实际执行后才把对应项从“待验证”改为通过或失败；构建、类型检查和源码存在都不能替代交互实测。

| 验收维度 | PC | iPad | H5 |
| --- | --- | --- | --- |
| 中文初始/运行/终态 | 待验证 | 待验证 | 待验证 |
| 英文初始/运行/终态 | 待验证 | 待验证 | 待验证 |
| 循环/离屏/返回 | 待验证 | 待验证 | 待验证 |
| 键盘/触控/菜单 | 待验证 | 待验证 | 待验证 |
| 减弱动态 | 待验证 | 待验证 | 待验证 |


## 首页与公共入场

主入场E=`cubic-bezier(.22,1,.36,1)`；公共轻缓动C=`cubic-bezier(.44,0,.56,1)`。

| 页面/区块 | 初态→终态与参数（源码） | 触发/断点 | 暂停恢复/减弱动态 | 状态 |
| --- | --- | --- | --- | --- |
| Hero | opacity.001/scale.98/Y40→1/1/0，1s E，delay.1s | 首屏 | 单次；模板要求减弱动态直接可见 | 待验证 |
| Hero Highlight | opacity0/scale.97/Y30→终态，.9s E，delay.25s | inView threshold.15/once | 不返回重播；减弱动态直接终态 | 待验证 |
| Flavor Profile | 同Highlight，delay.35s | threshold.15/once | 同上 | 待验证 |
| Coffee Menu / 品牌带 / Story / Beans | opacity0/scale.97/Y80→终态，.9s E | threshold.15/once | 单次；减弱动态取消缩放与位移 | 待验证 |
| Story Copy | opacity0/scale.97/Y40→终态，.9s E，delay.15s | threshold.15/once | 同上 | 待验证 |
| 三统计卡 | opacity0/scale.97/Y30→终态，.9s E，delay.2/.3/.4s | threshold.15/once | 同上 | 待验证 |
| 其他图片/正文 | 实例含Y40/Y50/Y30变体，不应全部统一Y80 | 按实际组件配置 | 同上；确切实例映射待逐项浏览器核对 | 待验证 |

## 循环、hover与按压

| 区块 | 参数（源码） | 暂停/恢复与响应 | 减弱动态/状态 |
| --- | --- | --- | --- |
| 环形字徽章 | 0→360deg，16s linear infinite，无repeatDelay；杯子中心不跟转；首页Hero/Story至少两处 | pauseOffscreen=true；回视口续转；部分小屏隐藏第二徽章，需实测对应实例 | 模板要求停在静态角度；待验证 |
| 双品牌Ticker | 互逆方向、60px/s、gap36、hoverModifier.3、不可拖 | 按单组实宽计算循环和复制数量；hover速度降至18px/s而非停；离屏策略原源码未明确，模板要求暂停/连续恢复 | 模板要求停止自动滚动且内容可读；待验证 |
| 顶公告Ticker | 40px/s、gap28、hoverModifier.4、不可拖 | hover降至16px/s；手机stackDirection=column纵向；确切Phone断点以导航页面810边界实测，不能未经证据写600为原站断点 | 模板要求静态内容；待验证 |
| Footer Big Mark | rotate0↔12°，2.4s tween C、mirror | pauseOffscreen=true；移动/平板变体可能隐藏该大标 | 模板要求不摇摆；待验证 |
| Footer Dot | scale1↔1.5，1s tween C、mirror | pauseOffscreen=true；与圆标独立周期 | 模板要求不脉冲；待验证 |
| 公共按钮 | spring.4/bounce0；Primary蓝→lime、Outline深底→白底黑字、Lime→白；pressed opacity.82；末端点8→14px、点容器34px | hover离开恢复；focus须可辨认；不是额外加装饰箭头 | 模板要求静态颜色反馈/减少点缩放；待验证 |
| 文字链接 | color .2s C，hover lime | 离开恢复，键盘焦点可见 | 可保留颜色反馈；待验证 |
| Product Card | 背景→rgb42,42,42、边框lime alpha.35；spring.45/bounce.15 | Default桌面hover图层高290；Stacked图正常280；源码没有旋转/倾斜/图片放大，不应自行补 | 模板要求不作高度运动但保留颜色/链接；待验证 |
| Feature / Stat Card | Feature spring.45/bounce.15；Stat spring.4/bounce.2 | 哪些首页实例真正有hover需逐项实测 | 模板要求减少位移；待验证 |
| Newsletter loading | 点scale1↔2，.6s C、mirror/offscreen暂停；按钮Default/Loading/Success/Error，spring.4/bounce0 | loading必须能结束，不能假装真实订阅；错误有明确反馈 | 模板要求不用持续缩放，保留文字状态；待验证 |

## 导航展开的精确布局

公开布局断点：Desktop>=1200；Tablet810–1199.98；Phone<=809.98。**Tablet与Phone均使用Phone导航变体**。导航位于文流中的sticky top0、z10，背景rgba(17,17,17,.92)、backdrop blur14px、底边白8%。

- Desktop布局左右padding32px；Header Row高76px，链接横排。
- Phone关闭变体固定height76px，左右padding20px；Phone Open取消固定height，按内容自然撑开；外层column、overflow:clip。这是导航自身高度展开，不是全屏opacity遮罩。
- Drawer宽100%、column、gap18px、padding16px 0 28px；三条链接30px、line-height1。无换行时展开总高约246px（76+16+90+36+28），应依内容测量，不硬编码该估算值。
- toggle44×44px、图标20px；同按钮切换menu/close；点Drawer链接同时关闭。变体过渡spring duration.45s/bounce0。
- 暂停不适用；中途快速反向点击应连续开合、无截断。减少动态要求直接在收起/展开布局间切换并保留Tab/Esc和明确焦点；原源码没有完整无障碍策略证据，模板必须单独验收。状态：待验证。

## Menu、六产品详情、Contact与Newsletter

产品详情公共源码没有quantity、规格选项、加入购物车或结账交互；导航“0 items”是静态文字，不应扩成真实购物业务。详情的Find Caldoro→Contact、Back to menu、两张推荐产品及公共导航才是已确认交互。

| 页面/产品 | 固定价格/行为 | 动效与验证状态 |
| --- | --- | --- |
| Classic Cold Brew | $4.75 | 公共入场、CTA/推荐链接；待验证 |
| Vanilla Cloud Latte | $5.50 | 同上；待验证 |
| Golden Oat Latte | $5.75 | 同上；待验证 |
| Mocha Daydream | $5.75 | 同上；待验证 |
| Salted Honey Brew | $5.50 | 同上；待验证 |
| Sunrise Tonic | $5.25 | 同上；待验证 |
| Contact / Newsletter | 本地字段校验；清楚说明未发送/保存，不保留源站外发endpoint | Default/错误/处理中/本地完成应真实可达且不混淆；待验证 |
| Privacy / Terms | 原站两链接均指首页，没有独立正文证据 | 核对真实目标，不声称抓取了独立政策页；待验证 |

## 可执行验收步骤

1. 打开首页计时Hero1s、Highlight .25s和Flavor .35s错峰；缓慢滚动Story/三统计卡，记录Y40/Y30/Y80与scale.97差异。返回已入场区块确认不隐藏重播。
2. 同屏观察环字至少18s，确认一圈16s、杯子不旋转；滚离10s再返回，确认续转而非从0重播或跳过10s。
3. 观察双Ticker30s，确认互逆、60px/s且接缝无空白；hover10s记录18px/s，离开恢复60。公告记录40→16px/s；H5确认纵向运动与复制组接缝。
4. 访问页脚，分别计时大标2.4s往返和点1s脉冲；滚离返回复查暂停续播。切平板/手机确认隐藏变体，无空白占位。
5. hover三类按钮并按下，检查颜色、点8→14px和opacity.82；键盘Tab同样可见焦点。hover产品Default/Stacked，确认正确高度与背景边框，且无额外旋转或scale。
6. 在1199/1200、809/810宽分别观察导航。Tablet/H5打开菜单记录76px→自然内容高的中间态，快速反向点击、点链接、Esc、Tab循环均测试；不能仅记录全屏遮罩渐显当作原展开。
7. Menu逐卡访问六详情，核价、返回菜单、Find Caldoro和两推荐；确认静态0 items不表现为失效购物按钮。联系/订阅先空提交、再合法值，检查错误、loading退出和明确本地完成。
8. 全流程启用减少动态重载：环字、Ticker、页脚、loading均无持续非必要运动，内容和所有手动交互仍可用；双语长文案无菜单/答案裁切。所有步骤仍待验证。
