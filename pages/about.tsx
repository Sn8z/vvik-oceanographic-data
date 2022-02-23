export default function About({ planets }) {
    return (
        <>
            <h1>Planets</h1>
            <p>{ JSON.stringify(planets) }</p>
            {planets.map((planet) => (
                <p>{ planet.name }</p>
            ))}
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://swapi.dev/api/planets');
    const data = await res.json();
    return {
        props: { planets: data.results }
    }
}
  