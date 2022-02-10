import {firestore} from './firebase-utils'

export const contactForm = (contact) => {

    firestore.collection("users").add({...contact, dateJoined : new Date()})
    
}