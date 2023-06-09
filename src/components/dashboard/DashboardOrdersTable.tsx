'use client'

import Image from 'next/image'
import Link from 'next/link'
import { groq } from 'next-sanity'
import { usePagination } from 'src/hooks/usePagination'
import { config } from 'src/lib/config'
import { Order } from 'src/lib/types'
import { client } from 'src/sanity/lib/client'
import useSWR from 'swr'

import Loader from '../shared/Loader'
import Pagination from '../shared/Pagination'

const query = groq`*[_type == 'order'] | order(_createdAt) [$offset...$limit] {
  _id,
  status,
  _createdAt,
  total,
  paymentMethod,  
  promoCodeApplied-> { code },
  address {
    ...,
    location->{name, city}
  },
  products[] { quantity, size, product->{ _id, name, images[]{asset->{url, metadata{blurHash}}} }},
  customer-> {_id, firstName, phone}
}`

export default function DashboardOrdersTable() {
  const pagination = usePagination()

  const { data, isLoading, error } = useSWR(
    { query, offset: pagination.offset, limit: pagination.limit },
    ({ query, offset, limit }) =>
      client.fetch<Order[]>(query, { offset, limit })
  )

  if (isLoading) return <Loader />

  if (error || !data) return <p> No </p>

  return (
    <div
      data-theme="light"
      className="overflow-x-auto h-full flex flex-col justify-between"
    >
      <table className="table table-lg">
        {/* head */}
        <thead>
          <tr className="text-secondary">
            <th>Status</th>
            <th>Order date</th>
            <th> Products </th>
            <th>Total cost</th>
            <th> Promo </th>
            <th> Payment method </th>
            <th> Customer </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((order) => (
            <tr key={order._id}>
              <td>
                <span className="badge badge-ghost badge-lg">
                  {order.status}
                </span>
              </td>
              <td>
                <p> {new Date(order._createdAt).toLocaleDateString()} </p>
              </td>
              <td>
                <div className="flex flex-col gap-y-4">
                  {order.products.map(({ product, quantity, size }) => (
                    <div
                      key={product._id}
                      className="flex gap-x-2 items-center flex-auto"
                    >
                      <div className="avatar">
                        <div className="mask mask-squircle">
                          <Image
                            src={product.images[0].asset.url}
                            alt="product"
                            width={60}
                            height={60}
                            blurDataURL={
                              product.images[0].asset.metadata.blurHash
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <span className="badge badge-primary badge-md">
                          {product.name}
                        </span>
                        <span className="badge badge-info badge-md">
                          quantity: {quantity}
                        </span>
                        <span className="badge badge-info badge-md">
                          size: {size}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </td>
              <td>
                <p> {order.total}£ </p>
              </td>
              <td>
                <p> {order.promoCodeApplied?.code || 'N/A'} </p>
              </td>
              <td>
                <p> {order.paymentMethod} </p>
              </td>
              <td>
                <Link
                  href={`${config.dashboard_base}/desk/customer;${order.customer._id}`}
                  className="link-hover"
                >
                  {' '}
                  {order.customer.firstName}{' '}
                </Link>
                <p className="text-sm opacity-50">
                  phone: {order.customer.phone}
                </p>
                <p className="text-sm opacity-50">
                  Address: {order.address.location.city}{' '}
                  {order.address.location.name} {order.address.line1}
                </p>
              </td>
              <th>
                <Link
                  href={`${config.dashboard_base}/desk/order;${order._id}`}
                  className="link-ghost link-hover"
                >
                  details
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        page={pagination.page}
        onNextPage={pagination.nextPage}
        onPreviousPage={pagination.prevPage}
        onChangePage={pagination.goToPage}
        disableNext={data?.length < pagination.limit}
        disablePrevious={pagination.page === 1}
        className="self-end m-4"
      />
    </div>
  )
}
