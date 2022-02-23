export default function About({ planets }: any) {
    return (
        <>
            <h1>Planets</h1>
            <p>{ JSON.stringify(planets) }</p>
            {planets.map((planet: any) => (
                <p key={planet.name} >{ planet.name }</p>
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
  