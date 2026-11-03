import type{SiteTemplatePageProps}from'../../../types'
import{Menu}from'./Menu'
import{Product}from'./Product'
import{CoffeeContact}from'./CoffeeContact'
import{notFound}from'next/navigation'
export function Entry(props:SiteTemplatePageProps&{slug:string}){if(props.slug==='menu')return <Menu {...props}/>;if(props.slug.startsWith('menu/'))return <Product {...props} slug={props.slug.slice(5)}/>;if(props.slug==='contact')return <CoffeeContact {...props}/>;notFound()}
