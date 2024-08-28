import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Pagination } from 'react-bootstrap';

export default function ManageContacts({ setIsActive, isActive }) {
const contacts = [
  // Sample data, replace with real data
  { name: 'John Doe', email: 'john@example.com', contactOption: 'Phone', query: 'Inquiry about cakes' },
  { name: 'Jane Smith', email: 'jane@example.com', contactOption: 'Email', query: 'Cake customization' },
  // Add more contacts here
]

const ManageContacts = () => {
  return (
    <div className="bg-gradient" style={{ background: 'linear-gradient(to right, #4fd1c5, #63b3ed, #a3a0f6)', minHeight: '100vh' }}>
       <main
        id="main"
        className={`main mainWrapper ${isActive === true && 'active'}`}
        style={{
          background: 'linear-gradient(135deg, #f06, #ffcc00)',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
      <div className="container py-5">
        <h1 className="text-center text-white mb-4">Manage Contacts</h1>
        <div className="row">
          {contacts.map((contact, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <Card className="shadow-sm rounded-lg border-light">
                <Card.Body>
                  <Card.Title className="text-primary">{contact.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{contact.email}</Card.Subtitle>
                  <Card.Text>
                    <strong>Contact Option:</strong> {contact.contactOption}
                  </Card.Text>
                  <Card.Text>
                    <strong>Query:</strong> {contact.query}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-4">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Next />
          </Pagination>
        </div>
      </div>
      </main>
    </div>
  )
}

}
