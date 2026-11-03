import Link from'next/link'
import type{SiteTemplatePageProps}from'../../../types'
import{Shell}from'../components/Shell'
import{ProductCard,type CoffeeProduct}from'../components/ProductCard'
import{copy,text,pageBySlug}from'../content/data'
import sourceProducts from'../content/products.json'
export function Menu({locale='zh',basePath}:SiteTemplatePageProps){const products:CoffeeProduct[]=sourceProducts,page=pageBySlug('menu'),description=page.items.find(item=>item.tag==='p'&&item.text.length>80);if(!description)throw new Error('Missing menu description');return <Shell locale={locale} basePath={basePath}><section className="section coffee-menu-top"><p className="dot-label">{copy(locale,'咖啡菜单','COFFEE MENU')}</p><h1>{copy(locale,'每一杯好咖啡　都在这里','Every Caldoro, all in one place.')}</h1><p>{text(description.text,locale)}</p><Link className="secondary" href={`${basePath}/contact`}>{copy(locale,'找到我们','Find Caldoro')}</Link></section><section className="section coffee-menu-list"><div className="coffee-product-grid">{products.map((product,i)=><ProductCard key={product.slug} product={product} locale={locale} basePath={basePath} index={i}/>)}</div></section></Shell>}
