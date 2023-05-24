import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  let sum = parseInt(router.query.a)+parseInt(router.query.b);
  return  (
  <div>
    <h1>{router.query.name
      ? `hai, ${router.query.name}`
      : "i dont know your name"}
    </h1>
  <br/><p>{sum}</p>
  </div>
  )
  
}
