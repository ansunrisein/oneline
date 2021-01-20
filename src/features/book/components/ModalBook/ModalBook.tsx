import React from 'react'
import {Image, Modal} from 'antd'
import Text from 'antd/es/typography/Text'

export type ModalBookProps = {
  visible: boolean
  setVisible: (prev: boolean) => void
  book: any
}

export const ModalBook: React.FC<ModalBookProps> = ({visible, setVisible, book}) => (
  <Modal
    title={book.title}
    visible={visible}
    centered
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
    okButtonProps={{style: {display: 'none'}}}
    cancelButtonProps={{style: {display: 'none'}}}
  >
    <Image src={book.thumbnailUrl} />
    <Text>{book.shortDescription}</Text>
  </Modal>
)
