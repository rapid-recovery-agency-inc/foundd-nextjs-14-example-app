import {headers} from 'next/headers'

const AT:string = 'eyJraWQiOiJHWFRkSzlBZHpSQk5PNzJWeWlSVXdLVmhtYmJ6UnREWm5IZFBZaUNFMW5JPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MWFiYTVjMC00MDMxLTcwMTQtOWFhOC00OGZlZWU1MWU5YTgiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl91Nzc5QklsYnEiLCJjbGllbnRfaWQiOiI1NzdiMjY0cWQ2MnBpMHRrc2UzYWE2NWMzaCIsIm9yaWdpbl9qdGkiOiJjNjJkMzA5OC1hOWEzLTRkYzktOTg2YS01YTY5YWRmMGExMmYiLCJldmVudF9pZCI6IjE5M2RjYjFjLWVjYjAtNDlkZC1iNjdlLTkzNDA1NjA5ODdhZiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MTg3MzUyMDUsImV4cCI6MTcxODczODgwNSwiaWF0IjoxNzE4NzM1MjA1LCJqdGkiOiIyMDk4ZTllNi05MThjLTQ0NTgtYjI5MS1mMmYwOGRiMzc0OTUiLCJ1c2VybmFtZSI6IjQxYWJhNWMwLTQwMzEtNzAxNC05YWE4LTQ4ZmVlZTUxZTlhOCJ9.V97zrs_IuhwJWo7asRmIltjUg7LjKQ--usUFpqYUUiuoLSYGnrBjL5mSMI-uxDxN4W_JLS1Uu7sI1U6qysm4wq4P93aHQ7ooUiFJN3PQRog4PSZvK86zfId5W84nWHu42UTGhJzKHJngGYV0orzCAf1Iqmm4nt610NENYpBKtVdTs87RXy6-pIsagRVKx1gyoK3Yci7CGDd7nS8O7hy_UBpjV0zK0gUQ5xkeYvG3YJOhtKQRf7Oycwp_Qd2oPr8peNl3wUj1dfkv2l5R8KedwSNYhfWW0ohGvBNZhMzfhM98fFE47Tx917UfU_COh4Ir3Q42FyQl2u-qMMtyIjfvDQ';
async function getData(_ignoredInput:any) {
    const res = await fetch('https://dev.api.foundd.io/graphql', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + AT,
        },
        body: JSON.stringify({
            query: `{
  company{
    id
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
