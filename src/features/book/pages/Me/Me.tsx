import React from 'react'
import {Button, Input} from 'antd'
import {Flex} from 'reflexbox'

export const Me: React.FC = () => (
  <Flex flexDirection="column" width="40vw">
    <span>Nickname</span>
    <Input />
    <Button>Save</Button>
    <Button>Log out</Button>
  </Flex>
)
