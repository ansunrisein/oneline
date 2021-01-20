import React, {useCallback, useState} from 'react'
import {Card, message} from 'antd'
import {HeartFilled, InfoCircleOutlined} from '@ant-design/icons'
import {ModalBook} from '../ModalBook'

const {Meta} = Card

export type BookCardProps = {
  book: any
}

export const BookCard: React.FC<BookCardProps> = ({book}) => {
  const [liked, setLiked] = useState(false)
  const onLike = useCallback(() => {
    setLiked(prev => !prev)
    !liked
      ? message.success({
          content: 'Added to favourites',
          style: {textAlign: 'end'},
        })
      : message.error({
          content: 'Removed from favourites',
          style: {textAlign: 'end'},
        })
  }, [setLiked, liked])

  const [isOpen, setIsOpen] = useState(false)
  const onModal = useCallback(() => setIsOpen(true), [setIsOpen])

  const src =
    book.thumbnailUrl ||
    'https://sun9-3.userapi.com/Jih3Vq80fX_xEAuH0sb9x7EOtsGqmIAb7xy9HA/KZwZt2cizvY.jpg'

  return (
    <>
      <Card
        style={{width: 200}}
        cover={<img alt="" src={src} />}
        actions={[
          <InfoCircleOutlined key={0} onClick={onModal} />,
          <HeartFilled key={1} style={{color: `${liked ? '#eb2f96' : ''}`}} onClick={onLike} />,
        ]}
      >
        <Meta title={book.title} description={book.description} />
      </Card>
      <ModalBook visible={isOpen} setVisible={setIsOpen} book={{...book, thumbnailUrl: src}} />
    </>
  )
}
