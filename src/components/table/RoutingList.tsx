import { Row } from './Row'
import css from './table.module.css'
import { routesSelectors } from '../../redux/routes'
import { useAppSelector } from '../../redux/hooks'

export const RoutingList = () => {
    const routes = useAppSelector(routesSelectors.selectedRoutes)
    const activeRoute = useAppSelector(routesSelectors.selectedActiveRout)

    return (
        <table className={css.table}>
            <thead>
                <tr>
                    <th>Маршруты</th>
                    <th>точка 1</th>
                    <th>точка 2</th>
                    <th>точка 3</th>
                </tr>
            </thead>
            <tbody>
                {routes.map((route, i) => (
                    <Row key={i} route={route} isActive={route.name === activeRoute?.name} />
                ))}
            </tbody>
        </table>
    )
}