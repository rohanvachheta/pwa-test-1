// import Head from 'next/head';



// const arr = [-81, -71, 98, 55, 76, -52, 68, 15, -77, 77, -42, -70 ,-53, 86, 29, -30, 14, 25 ,-94 ,73 ,-68, 81 ,44];

// let start = 0;
// let sum = 0;
// let max = arr[0];

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   sum = sum + element;

//   if(max < sum){
//     max= sum
//     if(!start){
//       start= index;
//     }
//   }else if(sum <= 0){
//     sum = 0;
//     start=null;
//   } 

// }






import Head from "next/head";
import dynamic from 'next/dynamic';

const App = dynamic(
  () => import('../components/App'),
  { ssr: false }
)

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App/>
      </main>
    </div>
  );
}