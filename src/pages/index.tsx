// import axios from "axios"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../../styles/Home.module.css"

// const getUser = async () => {
//    try {
//       const response = await axios.get("/api/messenger?message=hello ")
//       console.log(response)
//    } catch (error) {
//       console.error(error)
//    }
// }
const Home: NextPage = () => {
   return (
      <div className={styles.container}>
         <Head>
            <title>Automated Facebook Messaging 2022</title>
            <meta name="description" content="Automated Facebook Messaging 2022" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         {/* <button onClick={getUser}>ok</button> */}
         hi
      </div>
   )
}

export default Home
