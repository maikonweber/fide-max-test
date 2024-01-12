import Image from 'next/image'
import Header from './components/Header'
import FormComponent from './components/QuestionForm'
import BreadCrumbs from './components/BreadCrubms'

async function getData() {
  const res = await fetch('https://fdlmx-backgrounds.sfo3.digitaloceanspaces.com/front-test/survey.json')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}


export default async function Home() {
  const data = await getData()
  
  return (
    <>
    <Header/>
    <BreadCrumbs/>
    <FormComponent data={data} />
    </>
  )
}
