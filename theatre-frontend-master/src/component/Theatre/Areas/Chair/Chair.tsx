import './Chair.scss'
import { FC, useState } from 'react'

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Custom Hooks

// Utils
import cn from 'classnames'
import { useTypesSelector } from '../../../../hook/useTypesSelector'

// Interface
interface Props {
  isTaked: boolean
  chair: any
  handleOnClickSelect: any
}

// Component
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Chair: FC<Props> = (props) => {
  const [isSelect, setIsSelect] = useState(false)
  const isAuth = useTypesSelector((state) => state.user.isAuth)

  const handleOnClickChair = (e: any) => {
    if (props.isTaked) return
    setIsSelect(!isSelect)
    props.handleOnClickSelect(props.chair.id)
  }

  return (
    <button
      onClick={isAuth ? handleOnClickChair : () => {}}
      className={cn('chair', { isTaked: Boolean(props.isTaked), isSelect: isSelect })}
    >
      {props.chair.id}
    </button>
  )
}

export default Chair
