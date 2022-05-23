import Card from 'react-bootstrap/Card'
import {ListGroup, ListGroupItem} from "react-bootstrap";
import React, {useState} from "react";
import {collection, doc, getDocs, increment, query, Timestamp, updateDoc, where} from "@firebase/firestore";
import {db} from "../../services/firebase-config";
import Badge from "../badge/Badge";

const ClientCard = ({id, pren, nom, carte, tele, prix}) => {
    const [addedprix, setAddedPrix] = useState(0)
    const [customers, setCustomers] = useState([]);
    const [pri, setPri] = useState(prix)
    const handleChange = e => {
        setAddedPrix(e.target.value);
    };
    const Cust = doc(db, "customers", id);
const mony=doc(db,"Money","dsf0Y1L7mBXc7mfsTUMs")
    const CustomersCollection = collection(db, "customers");

    async function adding() {
        await updateDoc(Cust, {
            prix: increment(Number(addedprix)), lastprix: Timestamp.now(),
        })
        await updateDoc(mony,{
            money:increment(Number(addedprix)),
        })
        const q = await query(CustomersCollection, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        setCustomers(querySnapshot.docs.map((doc) => ({
            ...doc.data(),
        })));
        customers.map(async value1 =>  setPri(value1.prix))

    }

    return (<div>
        <Card style={{width: '18rem'}}>
            <Card.Header as="h5" className={"text-success"}>{id} Nom :{pren} {nom} </Card.Header>
            <Card.Body>
                <br/>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Carte Nationale :{carte}</ListGroupItem>
                    <br/>
                    <ListGroupItem>prix: {pri} Dhs</ListGroupItem>
                    <br/>
                    <ListGroupItem>telephone: {tele} </ListGroupItem>
                    <br/>
                    <ListGroupItem>status :
                        <Badge
                            type={pri > 1000 ? 'primary' : pri === 2700 ? 'success' : "danger"}
                            content={pri > 1000 ? '   S-Payee' : pri === 2700 ? '   payee' : " nonpayee"}
                        /></ListGroupItem>
                    <br/>
                    <ListGroupItem>
                        <div><input type="number" placeholder='Ajouter especes...' onChange={handleChange}/>
                            <button
                                className='bx bx-right-arrow-alt' onClick={adding}/>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    </div>)
}
export default ClientCard
