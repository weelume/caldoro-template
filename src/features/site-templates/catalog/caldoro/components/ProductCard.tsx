import Link from'next/link'
import{CoffeeReveal}from'../motion/CoffeeMotion'
import{copy,media,text}from'../content/data'
import type{Locale}from'../content/types'
export interface CoffeeProduct{slug:string;name:string;description:string;body:string[];notes:string;price:string;category:string;image:string;related:string[];cta:string}
export function ProductCard({product,locale,basePath,index=0}:{product:CoffeeProduct;locale:Locale;basePath:string;index?:number}){return <CoffeeReveal delay={index%3*.1} className="coffee-product"><div className="product-image"><img src={media(product.image)} alt={text(product.name,locale)} loading="lazy"/></div><div className="product-copy"><p className="eyebrow">{String(index+1).padStart(2,'0')}　{product.price}</p><h3>{text(product.name,locale)}</h3><p>{text(product.description,locale)}</p><div className="flavor-notes"><span>{copy(locale,'风味笔记','Flavor notes')}</span><p>{text(product.notes,locale)}</p></div><Link className="primary" href={`${basePath}/menu/${product.slug}`}>{text(product.cta,locale)}</Link></div></CoffeeReveal>}
