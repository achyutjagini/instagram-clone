
import {firebase,FieldValue} from '../lib/firebase'

export async function doesUsernameExist(username)
{
const result=await firebase.firestore().collection('users').where('username','==',username).get();

console.log(result)
//return result.docs.map((user)=>user.data.length>0)
return result.docs.length > 0;

}