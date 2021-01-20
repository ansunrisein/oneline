import React, {useCallback} from 'react'
import {Checkbox} from 'antd'
import {Box, Flex} from 'reflexbox'
import styles from './Filters.module.css'

export type FiltersProps = {
  fullFilters: string[]
  setFilters: (prev: any) => void
}

export const Filters: React.FC<FiltersProps> = ({fullFilters, setFilters}) => {
  const onClick = useCallback(
    name => {
      setFilters((prev: string[]) =>
        (prev.includes(name) ? prev.filter(e => e !== name) : [...prev, name]).sort(),
      )
    },
    [setFilters],
  )

  return (
    <Flex
      width="20vw"
      height="50vh"
      marginRight="2rem"
      flexDirection="column"
      className={styles.border}
      overflow="hidden"
    >
      <p>Filters</p>
      <Box overflowY="auto" as="ul" marginRight="-60px">
        {fullFilters.map((e, i) => (
          <li key={i}>
            <Checkbox key={i} onClick={() => onClick(e)}>
              <span>{e}</span>
            </Checkbox>
          </li>
        ))}
      </Box>
    </Flex>
  )
}
