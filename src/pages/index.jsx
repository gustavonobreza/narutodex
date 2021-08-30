import Board from "../components/Board";

function Home({ data }) {
  return (
    <>
      <Board data={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://naruto-api.herokuapp.com/api/v1/characters?sort=true"
  );
  const json = await res.json();

  return { props: { data: json }, revalidate: 60 * 5 };
}

export default Home;
