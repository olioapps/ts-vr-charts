export const makeSteps = (values: ReadonlyArray<number>): ReadonlyArray<string> => {
    const max = Math.max(...values)
    const steps = 10
    const bucket = []
    for (let i = 0; i < max+1; i++) {
        const dif = Math.floor(max/steps)
        if ( i % dif === 0) {
            bucket.push(`${i}`)
        }
    }

    return bucket
}