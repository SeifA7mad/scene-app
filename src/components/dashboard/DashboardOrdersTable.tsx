"use client";

import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";
import { useState } from "react";
import { usePagination } from "src/hooks/usePagination";
import { config } from "src/lib/config";
import { ORDER_STATUSES_LIST } from "src/lib/constants";
import { Order } from "src/lib/types";
import { client } from "src/sanity/lib/client";
import useSWR from "swr";

import DataTable, { DataColumns } from "../shared/DataTable";

const query = groq`*[_type == 'order' && ($status==null || status==$status)] | order(_createdAt desc) [$offset...$limit] {
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
}`;

export default function DashboardOrdersTable() {
  const pagination = usePagination();

  const [filters, setFilters] = useState({
    status: null,
  });

  const { data, isLoading, error } = useSWR(
    {
      query,
      offset: pagination.offset,
      limit: pagination.limit,
      status: filters.status,
    },
    ({ query, offset, limit, status }) =>
      client.fetch<Order[]>(query, { offset, limit, status }),
  );

  const columns: DataColumns<Order>[] = [
    {
      dataIndex: "status",
      key: "status",
      title: "Status",
      render: status => (
        <span className='badge badge-ghost badge-lg'>{status}</span>
      ),
      filterOptions: ORDER_STATUSES_LIST as any,
      onFilter: (value, key) => {
        setFilters(prev => ({ ...prev, [key]: value }));
        pagination.reset();
      },
    },

    {
      dataIndex: "_createdAt",
      key: "_createdAt",
      title: "Order date",
      render: date => new Date(date).toLocaleDateString(),
    },
    {
      dataIndex: "products",
      key: "products",
      title: "Products",
      render: products => (
        <div className='flex flex-col gap-y-4'>
          {products.map(({ product, quantity, size }) => (
            <div
              key={product._id}
              className='flex gap-x-2 items-center flex-auto'
            >
              <Image
                src={product.images[0].asset.url}
                alt='product'
                width={60}
                height={60}
                blurDataURL={product.images[0].asset.metadata.blurHash}
                placeholder="blur"
              />
              <div className='flex flex-col gap-y-2'>
                <span className='badge badge-primary badge-md whitespace-nowrap'>
                  {product.name}
                </span>
                <span className='badge badge-info badge-md'>
                  quantity: {quantity}
                </span>
                <span className='badge badge-info badge-md'>size: {size}</span>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      dataIndex: "total",
      key: "total",
      title: "Total cost",
      render: total => `${total}£`,
    },
    {
      dataIndex: "promoCodeApplied",
      key: "promoCodeApplied",
      title: "Promo",
      render: promo => (
        <span className='badge badge-ghost badge-md'>
          {promo?.code ?? "N/A"}
        </span>
      ),
    },
    {
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      title: "Payment method",
    },
    {
      dataIndex: "customer",
      key: "customer",
      title: "Customer",
      render: (customer, { address }) => (
        <>
          <Link
            href={`${config.dashboard_base}/desk/customer;${customer._id}`}
            className='link-hover'
          >
            {" "}
            {customer.firstName}{" "}
          </Link>
          <p className='text-sm opacity-50'>phone: {customer.phone}</p>
          <p className='text-sm opacity-50'>
            Address: {address.location.city} {address.location.name}{" "}
            {address.line1}
          </p>
        </>
      ),
    },
    {
      dataIndex: "_id",
      key: "_id",
      title: "Actions",
      render: _id => (
        <Link
          href={`${config.dashboard_base}/desk/order;${_id}`}
          className='link-ghost link-hover'
        >
          details
        </Link>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      isLoading={isLoading}
      pagination={{
        onNextPage: pagination.nextPage,
        onPreviousPage: pagination.prevPage,
        page: pagination.page,
        onChangeLimit: pagination.changeLimit,
        onChangePage: pagination.goToPage,
        disable: isLoading || (data?.length || 0) < pagination.limit,
      }}
    />
  );
}
