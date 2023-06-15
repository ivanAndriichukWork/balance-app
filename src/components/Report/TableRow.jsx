import styled, { css } from 'styled-components'
import { MAIN_ROWS } from '../../helpers/constants'
import { getReportStore, useReportStore } from '../../store/report'
import { DropCell } from './DropCell'
import { formatAmountInDollars } from '../../helpers/utils'

const Tr = styled.tr``

const MainTr = styled(Tr)`
  cursor: pointer;

  ${({ color, isMainRow }) => css`
    & {
      background: ${color};
    }
    &:hover {
      background-color: ${!isMainRow && '#e8e6db'};
    }
  `};
`

const Td = styled.td`
  border: 1px solid #e0e0e0;
  padding: 18px 28px 18px;
`

const NameTd = styled(Td)`
  padding-left: 24px;
`
const MainTd = styled(Td)`
  font-weight: bold;
`

export const TableRow = ({
  onClick,
  expanded,
  item,
  handleDrop,
  toggleModal,
}) => {
  const { columns, dataRows } = useReportStore(getReportStore)

  const row = Object.entries(item)

  const subRows = item.children && Object.values(item.children)

  const clickHandler = (event) => {
    const target = event.target
    // Prevent click on unneeded cells
    if (!Object.keys(target.dataset).length) return

    const parent = target.parentNode
    const isCategory = parent.dataset.category

    const dataset = Object.entries(target.dataset)
    const [category] = dataset[0]
    const currentCategory = dataRows.find((row) => row.name === category)

    if (currentCategory?.children && isCategory) {
      // show children
      return onClick(item.key)
    }

    // TODO set cell in different color
    // open Modal for selected
    toggleModal({
      category: dataset[0][1],
      month: dataset[1][1],
      value: target.textContent,
    })
  }

  const isMainRow = MAIN_ROWS.includes(item.name)
  const color = isMainRow ? '#f1f1f1' : 'white'

  return (
    <>
      <MainTr
        data-category={true}
        onClick={!isMainRow ? clickHandler : null}
        {...{ color, isMainRow }}
      >
        {row.map((cell, index) => {
          const [key, value] = cell
          if (key === 'key') return null

          if (typeof value !== 'object') {
            return (
              <MainTd key={index} {...{ [`data-${item.key}`]: key, color }}>
                {key === 'name' ? value : formatAmountInDollars(value)}
              </MainTd>
            )
          }
        })}
      </MainTr>

      {expanded &&
        subRows.length &&
        subRows.map((subRow) => (
          <Tr key={subRows.key} onClick={clickHandler}>
            {columns.map((column, index) => {
              if (!subRow[column]) {
                // Return empty cell
                return <Td key={index}></Td>
              }

              const details = {
                source: subRow.name,
                month: column,
                value: subRow[column],
              }

              return column === 'name' ? (
                <NameTd key={index}> - {details.value}</NameTd>
              ) : (
                <DropCell
                  key={index}
                  {...{
                    details,
                    onDrop: handleDrop,
                  }}
                />
              )
            })}
          </Tr>
        ))}
    </>
  )
}
