'use client'
export default function Error({error}) {
    return (
        <main className="error">
            <h1>An Error occured</h1>
            <p>Sorry, we couldn't fetch the meals at this time. Please try again later.</p>
        </main>
    )
}