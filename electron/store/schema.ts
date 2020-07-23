// WHEN ADD A NEW VALUE TO SCHEMA -> ADD THE VALUE IN ../KEYS/STOREKEYS

type schema = {
    maximized: boolean
}

const defaults: schema = {
    "maximized": false
}

export { defaults }
export default schema;