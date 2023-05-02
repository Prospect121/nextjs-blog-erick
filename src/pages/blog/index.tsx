import Layout from "@/components/Layout";
import Link from 'next/link'

interface IData {
  id: number,
  title: string,
  body: string
}

interface IProps {
  data: IData[]
}


export default function index({ data }: IProps) {
  return (
    <>
      <Layout>
        <h1>Lista de Bogs</h1>
        {
          data.map(({ id, title, body }) => (
            <div key={id}>
              <h3>
                <Link href={`/blog/${id}`}>{id} - {title}</Link>
              </h3>
              <p>{body}</p>
            </div>
          ))
        }
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: {
        data
      }
    }
  } catch (error) {
    //  console.log(error)
  }
}