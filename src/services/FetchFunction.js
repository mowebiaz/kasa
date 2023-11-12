export async function fetchData() {
    const response = await fetch('./data/data.json', {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
    console.log(response)
    const result = await response.json()
    console.log(result)
    return result
}
