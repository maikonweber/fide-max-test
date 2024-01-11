import Image from 'next/image'
import Header from '@/app/component/header/index'
import FormComponent from './component/questionForm'
export default function Home() {
  return (
    <>
    <Header/>
    <FormComponent/>
    </>
  )
}
