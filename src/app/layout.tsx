import type{Metadata}from'next'
import'./globals.css'
export const metadata:Metadata={title:'Caldoro · 精品冷萃咖啡',description:'Responsive bilingual Caldoro website'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="zh-CN"><body>{children}</body></html>}
