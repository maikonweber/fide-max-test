import Image from 'next/image'
import Header from '@/app/component/header/index'
import FormComponent from './component/questionForm'
import BreadCrumbs from './component/breadCrubms'



export default function Home() {
  return (
    <>
    <Header/>
    <BreadCrumbs/>
    <FormComponent/>
    </>
  )
}
