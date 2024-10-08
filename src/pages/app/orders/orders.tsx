import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination.tsx'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table.tsx'
import { OrderTableFilters } from '@/pages/app/orders/order-table-filters.tsx'
import { OrderTableRow } from '@/pages/app/orders/order-table-row.tsx'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <OrderTableFilters />

        <div className="space-y-2.5">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {Array.from({ length: 10 }).map((_, index) => {
                  return <OrderTableRow key={index} />
                })}
              </TableBody>
            </Table>
          </div>

          <Pagination pageIndex={1} perPage={20} totalCount={105} />
        </div>
      </div>
    </>
  )
}
