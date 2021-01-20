import React, {useMemo, useState} from 'react'
import {Col, Row} from 'antd'
import {Flex} from 'reflexbox'
import catalog from '../../../../data/books.json'
import {BookCard, Filters} from '../../components'
import styles from './Catalog.module.css'

export const Catalog: React.FC = () => {
  const fullFilters = [...new Set(catalog.flatMap(e => [...e.categories]).filter(e => !!e))].sort()
  const [filters, setFilters] = useState([])
  const books = useMemo(
    () =>
      catalog
        .filter(e =>
          filters.length
            ? (e.categories as any[]).map(a => filters.filter(b => a === b)).flat().length
            : true,
        )
        .slice(0, 20)
        .map(e => (
          <Col key={e.title} span={5}>
            <BookCard book={e} />
          </Col>
        )),
    [filters],
  )

  return (
    <Flex justifyContent="center" marginTop="4vh">
      <Filters fullFilters={fullFilters} setFilters={setFilters} />
      <Row gutter={[24, 24]} className={styles.row}>
        {books}
      </Row>
    </Flex>
  )
}
