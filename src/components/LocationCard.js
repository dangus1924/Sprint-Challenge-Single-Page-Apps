import React from "react";
import { Card, Button } from 'semantic-ui-react';

export default function LocationCard(props) {
  const { name, type, dimension, residents } = props;

  return (
    <Card>
      <Card.Content>
          <Card.Header>{name}</Card.Header>          
          <Card.Description> {type} {dimension} </Card.Description>
          <Button>
            {residents}
          </Button>
        </Card.Content>
    </Card>
  );
};
