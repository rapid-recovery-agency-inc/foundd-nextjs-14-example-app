import {headers} from 'next/headers'


async function getData(_ignoredInput:any) {
    const res = await fetch('https://dev.api.foundd.io/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                          foo {
                            bar {
                              baz
                            }
                          }
                }`
        })
    });

    if (!res.ok) {
        console.log(res);
        console.log(res.statusText);
        return "Error";
    }
    return res.json()
}

export default async function TestComponent() {
    const headersList = headers()
    const referer = headersList.get('referer');
    console.log("getData:", await getData(headersList));
    return <div>Referer: {referer}</div>
}
