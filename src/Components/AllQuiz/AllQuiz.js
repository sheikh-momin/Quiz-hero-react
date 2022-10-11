import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const AllQuiz = ({ data }) => {
  const { logo, name, total } = data
  console.log(data)
  return (
    <div className=''>

      <div className=' row grid-cols-3'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {total}
            </Card.Text>
            <Button variant="primary"><Link to='/quiz'>Start Quiz</Link></Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AllQuiz;