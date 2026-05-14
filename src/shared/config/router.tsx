import PeopleList from '@/views/PeopleList'
import PersonEdit from '@/views/PersonEdit'
import Settings from '@/views/Settings'
import { MainLayout } from '@/shared/ui/main-layout'
import { ROUTES } from '@/utils/constants'
import { createBrowserRouter } from 'react-router-dom'

export const routeConfig = [
  {
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.PEOPLE_LIST,
        element: <PeopleList />,
        name: 'people-list',
        label: 'Список людей',
      },
      {
        path: ROUTES.PERSON_EDIT,
        element: <PersonEdit />,
        name: 'person-edit',
        label: 'Редактирование',
      },
      {
        path: ROUTES.SETTINGS,
        element: <Settings />,
        name: 'settings',
        label: 'Настройки',
      },
    ],
  },
]

export const router = createBrowserRouter(routeConfig)
