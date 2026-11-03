"use client"
import Link from 'next/link'
import{usePathname,useRouter}from'next/navigation'
import{useEffect,useRef,useState,type ReactNode,type MouseEvent}from'react'
import{AnimatePresence,motion,useReducedMotion}from'framer-motion'
import{useBrand,useHost}from'../host'
import{brand}from'../config/brand'
import{navigation}from'../config/navigation'
import type{SiteTemplatePageProps}from'../../../types'
import'../theme.css'
import'../coffee-theme.css'
import{CoffeeTicker,CoffeeCup,FooterMark}from'../motion/CoffeeMotion'
const site={id:'caldoro'}
export function Shell({children,locale='zh',basePath}:{children:ReactNode}&SiteTemplatePageProps){
 const host=useHost(),name=useBrand(),pathname=usePathname(),router=useRouter(),reduced=useReducedMotion(),[menu,setMenu]=useState(false),trigger=useRef<HTMLButtonElement>(null),dialog=useRef<HTMLDivElement>(null)
 const root=basePath.replace(/\/en$/,''),alternate=locale==='en'?root:root+'/en',switchPath=alternate+pathname.slice(basePath.length)
 const href=(slug='')=>`${basePath}/${slug}`
 useEffect(()=>{const element=document.documentElement,previous=element.dataset.activeTemplate,previousLanguage=element.lang;element.dataset.activeTemplate='caldoro';element.lang=locale==='en'?'en':'zh-CN';return()=>{if(previous)element.dataset.activeTemplate=previous;else delete element.dataset.activeTemplate;element.lang=previousLanguage}},[locale])
 useEffect(()=>{if(!menu)return;function key(event:KeyboardEvent){if(event.key==='Escape'){setMenu(false);trigger.current?.focus()}}document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[menu])
 function switchLocale(event:MouseEvent<HTMLAnchorElement>){event.preventDefault();router.push(switchPath+window.location.search+window.location.hash)}
 const logo=host.logo,lightLogo=host.lightLogo??logo
 return <div className="site-caldoro" data-locale={locale}>
 <CoffeeTicker items={locale==='zh'?['慢慢萃取 · 明亮出品','你的日常阳光','找到你的新宠']:['Slow brewed. Brightly made.','Your daily cup of sunshine','Find your new favorite']} speed={40} hoverModifier={.4} verticalPhone className="coffee-announcement"/>
 <header className="site-header"><div className="coffee-header-row"><Link className="site-brand" href={href()} aria-label={locale==='zh'?`${name[locale]}首页`:`${name[locale]} home`}>{logo?<img src={lightLogo} alt="" width={24} height={24}/>:<span className="brand-mark" aria-hidden="true"><CoffeeCup/></span>}<span>{name[locale]}</span></Link>
 <nav className="desktop-navigation" aria-label={locale==='zh'?'主导航':'Main navigation'}>{navigation.map(item=><Link key={item.slug} href={href(item.slug)}>{item[locale]}</Link>)}</nav>
 <div className="header-actions"><span className="cart-summary">{locale==='zh'?'0 件':'0 ITEMS'}</span><Link className="language-toggle" href={switchPath||'/'} onClick={switchLocale} hrefLang={locale==='zh'?'en':'zh-CN'} aria-label={locale==='zh'?'切换至英文':'Switch to Chinese'}>{locale==='zh'?'EN':'中'}</Link><Link className="primary header-contact" href={href(site.id==='waytech'?'#contact':'contact')}>{locale==='zh'?(site.id==='caldoro'?'找到我们':'聊聊项目'):(site.id==='caldoro'?`Find ${name[locale]}`:'Book a call')}</Link><button className="menu-toggle" type="button" ref={trigger} aria-expanded={menu} aria-controls="template-menu" aria-label={locale==='zh'?(menu?'关闭菜单':'打开菜单'):(menu?'Close menu':'Open menu')} onClick={()=>setMenu(value=>!value)}><span/><span/></button></div></div>
 <AnimatePresence>{menu&&<motion.div className="coffee-menu-drawer" initial={reduced?false:{height:0}} animate={{height:'auto'}} exit={{height:0}} transition={{type:'spring',duration:reduced?0:.45,bounce:0}} id="template-menu" ref={dialog}><nav aria-label={locale==='zh'?'手机导航':'Mobile navigation'}>{navigation.map(item=><Link key={item.slug} href={href(item.slug)} onClick={()=>setMenu(false)}>{item[locale]}</Link>)}</nav></motion.div>}</AnimatePresence></header>
 <main id="template-main">{children}</main>
 <footer className="site-footer"><div className="footer-top"><div><Link href={href()} className="site-brand">{logo&&<img src={lightLogo} alt="" width={24} height={24}/>}<span>{name[locale]}</span></Link><p>{brand.tagline[locale]}</p></div><nav aria-label={locale==='zh'?'页脚导航':'Footer navigation'}>{navigation.map(item=><Link key={item.slug} href={href(item.slug)}>{item[locale]}</Link>)}<Link href={href(site.id==='waytech'?'#contact':'contact')}>{locale==='zh'?'联系我们':'Contact'}</Link></nav><div><p>{locale==='zh'?'保持联系':'Say hello'}</p><a href={`mailto:${brand.email}`}>{brand.email}</a>{host.marketplaceHref&&<Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</div></div><div className="coffee-footer-links"><a href="https://instagram.com">Instagram</a><a href="https://tiktok.com">TikTok</a><a href="https://pinterest.com">Pinterest</a></div><FooterMark/><div className="footer-wordmark" aria-hidden="true">{name[locale]}</div><div className="footer-bottom"><span>© {brand.year} {name[locale]}</span><div>{site.id!=='waytech'&&<Link href={href(site.id==='caldoro'?'':'privacy')}>{locale==='zh'?'隐私政策':'Privacy Policy'}</Link>}{site.id==='caldoro'&&<Link href={href()}>{locale==='zh'?'使用条款':'Terms of Use'}</Link>}{site.id==='reachwise'&&<><Link href={href('terms')}>{locale==='zh'?'服务条款':'Terms'}</Link><Link href={href('cookies')}>{locale==='zh'?'Cookie 政策':'Cookies'}</Link></>}</div>{host.filing}</div></footer>
 {host.marketplaceHref&&<Link className="marketplace-badge" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}>{lightLogo&&<img src={lightLogo} width={24} height={24} alt=""/>}<span>{name[locale]}</span></Link>}
 </div>
}
