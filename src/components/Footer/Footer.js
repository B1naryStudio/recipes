import React from 'react';
import { Container, Grid, Segment, Icon } from 'semantic-ui-react';

const Footer = () =>
  <Container fluid className="basic inverted segment void">
    <Container>
      <Grid stackable columns="equal" className="inverted">
        <Grid.Row>
          <Grid.Column width={1}>
            <Segment basic inverted className="void">
              <Icon name="announcement" />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic inverted className="void">
              &mdash; Hi! This is my homework, it's built with
              {' '}<strong>React + Redux</strong>. Source code is available at
              {' '}<Icon name="github" />
              <a href="https://github.com/volodymyr-kushnir/recipes">
                <strong>https://github.com/volodymyr-kushnir/recipes</strong>
              </a>.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>;

export default Footer;
