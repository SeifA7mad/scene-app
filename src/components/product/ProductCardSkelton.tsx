export function ProductCardSkelton() {
  return (
    <div className='animate-pulse'>
      <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden bg-base-200 lg:aspect-none group-hover:opacity-75 lg:h-[30rem] 2xl:h-[40rem] rounded-lg' />
      <div className='flex flex-col gap-y-2 mt-4'>
        <div className='bg-base-200 h-4 rounded-md w-1/2' />
        <div className='bg-base-200 h-4 rounded-md w-1/4' />
      </div>
    </div>
  );
}
