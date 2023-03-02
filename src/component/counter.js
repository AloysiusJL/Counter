import React from "react"
import { Button, Stack, Box, Text, Flex } from '@chakra-ui/react'
import { Card, CardBody } from '@chakra-ui/react'

class counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    plusOne = () => {
        this.setState({counter: this.state.counter + 1})
    }

    minusOne = () => {
        this.setState({counter: this.state.counter - 1})
    }

    render(){
        return(
            <Flex height="100vh" align="center" justify="center">
                <Card  bg="black" w="300px" h="300px">
                    <CardBody>
                    <div>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Text className="display" fontSize="100px" color="white">{this.state.counter.toString()}</Text>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center" mt="10px">
                            <Stack spacing={10} direction='row' align='center'>
                                <Button onClick={this.minusOne} colorScheme='red'>-</Button>
                                <Button onClick={this.plusOne} colorScheme='green'>+</Button>
                            </Stack>
                        </Box>
                    </div>
                    </CardBody>
                </Card>
            </Flex>
        )
    }
}

export default counter