import React from 'react' 

const routes= {'/': React.lazy(() => import('@/pages/index/index.js')),'/login': React.lazy(() => import('@/pages/login/index.js')),'/order-center/manage/order-list/:id': React.lazy(() => import('@/pages/order-center/manage/order-list/[id].js')),'/order-center/manage/order-list': React.lazy(() => import('@/pages/order-center/manage/order-list/index.js'))}
    
export default routes