import { FC } from 'react'
import { Route } from '../../redux/routes/reducer'
import css from './table.module.css'
import { expressionToArray } from '../../utils/expressionToArray'
import { routesActions } from '../../redux/routes'
import { useAppDispatch } from '../../redux/hooks'

type Props = {
    route: Route
    isActive?: boolean
}

export const Row: FC<Props> = ({ route, isActive }) => {
    const dispatch = useAppDispatch()
    const point_1 = expressionToArray(route.point_1)
    const point_2 = expressionToArray(route.point_2)
    const point_3 = expressionToArray(route.point_3)

    const activeRowHandler = () => {
        dispatch(routesActions.setActiveRoute(route))
        dispatch(routesActions.getTrack([route.point_1, route.point_2, route.point_3]))
    }

    return (
        <tr className={isActive ? css.activeRow : ''} onClick={activeRowHandler}>
            <td>
                <span>{route.name}</span>
            </td>
            <td>
                <span>{point_1[0]},</span><br />
                <span>{point_1[1]}</span>
            </td>
            <td>
                <span>{point_2[0]},</span><br />
                <span>{point_2[1]}</span>
            </td>
            <td>
                <span>{point_3[0]},</span><br />
                <span>{point_3[1]}</span>
            </td>

        </tr>
    )
}
