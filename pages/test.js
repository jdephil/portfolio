export default function Test ({queryParam}) {
  let name = queryParam

  return (
    <>
      <h1>oh hello {name} </h1>
      <style jsx>
        {`
        h1 {
          color: hotpink;
        }
        `}
      </style>
    </>  
    )
}

export function getServerSideProps({query}) {
  // get query param from url
  let queryParam = query.name

  return {
    props: {
      queryParam
    }
  }
}