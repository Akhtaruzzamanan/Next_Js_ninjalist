import Head from 'next/head'
import styles from '../../styles/Ninjas.module.css';
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`) // ekhane request patano hoyese.
    
    const data = await res.json()// request theke prapto data k json e rupantorito kora hoyese.

    return { // async anonymous function ta return korbe ekta object.
        props: { // oii object er element e thakbe r ekta object.
            ninjas: data // er porer object e request er json file ta return korbe.
        }
    }
}

const Ninjas = ({ninjas}) => { // async function ti sorboses j element ti return koresilo ta ekhane children hisabe dite hobe. jemon ekhane ninjas.
    return (
        <>
            <Head>
                <title>Ninja List | Lists</title>
                <meta key= "keywords" content = "ninjas" />
            </Head>
            <div>
                <h1>
                    All Ninjas
                </h1>
                {ninjas.map(ninja => ( // amra j json file ta server theke nie asechi ta muloto array. array k travarse korar jonno array.map() babohar kora hoyese.ebong ekta function call kora hoyese jar maddhome data show korbe. 
                    <Link href = {`/ninjas/${ninja.id}`} key = {ninja.id}>
                        <a className = {styles.single}>
                            <h3> {ninja.name} </h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Ninjas;