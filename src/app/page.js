import Image from 'next/image'
import Header from '@/app/components/header/index'
import FormComponent from './components/questionForm'
import BreadCrumbs from './components/breadCrubms'



export default function Home() {
  return (
    <>
    <Header/>
    <BreadCrumbs/>
    <FormComponent/>
    </>
  )
}
