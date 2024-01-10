import Image from 'next/image'
import Header from '@/app/component/header'
import FormComponent from './component/header/questionForm'
export default function Home() {
  return (
    <>
    <Header/>
    <FormComponent/>
    </>
  )
}
