import WisdomApp from "@/components/WisdomApp";
import {notFound} from "next/navigation";
export function generateStaticParams(){return [{locale:"en"},{locale:"si"}];}
export default async function Page({params}:{params:Promise<{locale:string}>}) {const {locale}=await params;if(locale!=="en"&&locale!=="si")notFound();return <WisdomApp locale={locale}/>;}