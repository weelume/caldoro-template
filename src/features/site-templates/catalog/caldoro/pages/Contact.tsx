import type{SiteTemplatePageProps}from'../../../types'
import type{ReferencePage}from'../content/types'
import{Shell}from'../components/Shell'
import{ContactForm}from'../components/Form'
import{copy,text,title}from'../content/data'
export function Contact({page,locale='zh',basePath}:SiteTemplatePageProps&{page:ReferencePage}){const name=title(page),description=page.items.find(item=>item.tag==='p'&&item.text.length>80);return <Shell locale={locale} basePath={basePath}><section className="section contact-page"><div><p className="eyebrow">{copy(locale,'建立联系','LET’S CONNECT')}</p><h1>{text(name,locale)}</h1>{description&&<p className="lead">{text(description.text,locale)}</p>}<p>{copy(locale,'从一次对话开始，让想法走向下一步。','Start with a conversation. Let’s find the next step for your project.')}</p></div><ContactForm locale={locale}/></section></Shell>}
