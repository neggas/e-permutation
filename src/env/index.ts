import * as dotenv from 'dotenv'
dotenv.config()

// Environnements
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de'
const DOMAIN: string = process.env.DOMAIN || 'localhost'

// MONGO_LAB
const MONGO_USER:string = process.env.MONGO_USER || 'root'
const MONGO_PASS:string = process.env.MONGO_PASS || 'root'
const MONGO_HOST:string = process.env.MONGO_HOST || '@cluster0.trhjg.mongodb.net'
const MONGO_DB:string   = process.env.MONGO_DB   || 'e-permutations'

// BSCRYPT

const SALT:number = +process.env.SALT || 10

export {
    NODE_ENV,
    PRIMARY_COLOR,
    DOMAIN,
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_DB,
    SALT
}