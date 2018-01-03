import React, { Component } from 'react'

import { Container, Table } from 'reactbulma'
import { Button } from 'react-bulma-components'
import Http from 'axios'

class App extends Component {
  state = {
    datavalue: []
  }
  componentDidMount () {
    Http.get('http://localhost:3000/showR').then((res) => {
      this.setState({ datavalue: res.data })
    })
  }
  render () {
    return (
      <div>
        <Container>
          Header
        </Container>
        <div>
          <Container>
            <Table style={{width: '100%'}}>
              <Table.Head>
                <Table.Tr>
                  <Table.Th><abbr>#</abbr></Table.Th>
                  <Table.Th>Owner Company</Table.Th>
                  <Table.Th><abbr>License Plate</abbr></Table.Th>
                  <Table.Th><abbr>Type</abbr></Table.Th>
                  <Table.Th><abbr>Capacity (m3)</abbr></Table.Th>
                  <Table.Th><abbr>Weight (kg)</abbr></Table.Th>
                  <Table.Th><abbr>Action</abbr></Table.Th>
                </Table.Tr>
              </Table.Head>

              <Table.Body>
                {
                  this.state.datavalue.map((data, index) => (
                    <Table.Tr key={index}>
                      <Table.Th>{index + 1}</Table.Th>
                      <Table.Td>{data.company.nameCompany}</Table.Td>
                      <Table.Td>{data.car.licensePlate}</Table.Td>
                      <Table.Td>{data.car.typeCar.nameTypeCar}</Table.Td>
                      <Table.Td>{data.capacity}</Table.Td>
                      <Table.Td>{data.car.weight}</Table.Td>
                      <Table.Td><Button color='primary'>Primary</Button></Table.Td>
                    </Table.Tr>
                  ))
                }
              </Table.Body>
            </Table>
          </Container>
        </div>
      </div>
    )
  }
}

export default App
