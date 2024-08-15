'use client';

import { useGetPostByNameQuery } from "./services/postApi";

useGetPostByNameQuery

export default function Home() {
  const { data, error, isLoading } = useGetPostByNameQuery('');
console.log(data);
  return (
    <main>
      <div>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
           {
            data.map(item=><p key={item.id}>{item.title}</p>)
           }
          
          </>
        ) : null}
      </div>
    </main>
  );
}
