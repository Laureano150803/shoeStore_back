import 'dotenv/config.js'
import '../../config/database.js'
import { users } from './users.js'
import { companies } from './companies.js'
import { shoes } from './shoes.js'
import User from '../User.js'
import Company from '../Company.js'
import Shoe from '../Shoe.js'

let newUsers = async (users) => await User.insertMany(users)

let newRoles = async(rol1)=>{
    for (let company of rol1){
        let user = await User.findOne({email:company.user_id})
        company.user_id = user._id
        await Company.create(company)
    }
}
let newShoes = async(shoes)=>{
    for(let shoe of shoes){
        let company = await Company.findOne({name:shoe.company_id})
        company ? (shoe.company_id = company._id) : null
        await Shoe.create(shoe)
    }

}





let data = async () => {
    await newUsers(users)
    await newRoles(companies)
    await newShoes(shoes)
    console.log('Base de datos actualizada Wachin!')
}

data();
